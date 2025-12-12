import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { config, templates } from './config.js';
import { processFile, copyDir, colorize } from './utils.js';

export async function performInstallation(mainLang, additionalLangs, selectedLicense, selectedExtras, skipReadme = false) {
  console.log(colorize('\n🚀 Starting installation...', 'blue'));

  const allLangs = [mainLang, ...additionalLangs].filter(l => l !== 'ignore');

  // 1. Install README (if not skipped)
  if (!skipReadme) {
    await installReadme(mainLang, additionalLangs, selectedExtras);
  }

  // 2. Install License (Only in root)
  if (selectedLicense && selectedLicense.file) {
    const src = join(config.paths.templates, 'license-templates', selectedLicense.file);
    const dest = join(process.cwd(), 'LICENSE');
    processFile(src, dest);
  }

  // 3. Install Extras
  for (const extra of selectedExtras) {
    // Folder Extras (e.g., .github) - Install only for Main Language (Root) usually?
    if (extra.type === 'folder') {
        if (mainLang !== 'ignore') {
            const src = join(config.paths.templates, `${mainLang}-template`, extra.src);
            // Fallback to en if main lang template doesn't exist for this folder
            const fallbackSrc = join(config.paths.templates, 'en-template', extra.src);
            
            if (existsSync(src)) {
                copyDir(src, join(process.cwd(), extra.dest));
            } else if (existsSync(fallbackSrc)) {
                 copyDir(fallbackSrc, join(process.cwd(), extra.dest));
            }
        }
        continue;
    }

    // File Extras
    for (const lang of allLangs) {
      // Check if template exists for this language
      let src = join(config.paths.templates, `${lang}-template`, extra.file);
      if (!existsSync(src)) {
          // Fallback to English if specific lang template missing
          src = join(config.paths.templates, 'en-template', extra.file);
          if (!existsSync(src)) continue; 
      }
      
      let destDir = process.cwd();
      let destName = extra.dest;
      let isMain = (lang === mainLang);

      if (!isMain) {
          // Additional Language -> {lang}/
          destDir = join(process.cwd(), config.paths.otherLanguages, lang);
          if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
          // Keep original filename (e.g. CONTRIBUTING.md), no suffixes needed due to folder separation
      }

      const dest = join(destDir, destName);
      
      processFile(src, dest, (content) => {
          // Inject Language Badges if we have multiple languages
          if (allLangs.length > 1 && destName.endsWith('.md')) {
              return injectLanguageBadges(content, lang, allLangs, mainLang, destName);
          }
          return content;
      });
    }
  }

  console.log(colorize('\n✅ Done! Happy coding!', 'magenta'));
}

async function installReadme(mainLang, additionalLangs, selectedExtras) {
  const allLangs = [mainLang, ...additionalLangs].filter(l => l !== 'ignore');

  for (const lang of allLangs) {
    let src = join(config.paths.templates, `${lang}-template`, 'README-template.md');
    if (!existsSync(src)) {
         src = join(config.paths.templates, 'en-template', 'README-template.md');
         if (!existsSync(src)) continue;
    }

    let content = readFileSync(src, 'utf8');

    // Inject Language Badges
    if (allLangs.length > 1) {
        content = injectLanguageBadges(content, lang, allLangs, mainLang, 'README.md');
    }

    // Inject Documentation Links
    if (selectedExtras.length > 0) {
        const isEn = lang === 'en';
        // Simple heuristic for header. Ideally should be in config.
        const header = isEn ? '## 📂 Documentation' : '## 📂 Documentação'; 
        let links = `${header}\n\n`;
        
        selectedExtras.forEach(e => {
            if (e.type === 'folder') return;
            
            let name = e.name;
            // Very basic translation map for demo purposes. 
            // In a real N-lang system, this should be in the template files or config.
            if (lang === 'pt') {
                if (name === 'Contributing Guide') name = 'Guia de Contribuição';
                if (name === 'Code of Conduct') name = 'Código de Conduta';
                if (name === 'Security Policy') name = 'Política de Segurança';
                if (name === 'Support Guide') name = 'Suporte';
                if (name === 'Authors') name = 'Autores';
                if (name === 'Governance Model') name = 'Governança';
            }
            // Add other langs here...

            let linkPath = `./${e.dest}`;
            // Since files are now in the same folder (root or other-languages/lang/), 
            // the relative link is just the filename!
            
            links += `- [${name}](${linkPath})\n`;
        });
        
        content = content.replace('<!-- DOCUMENTATION_SECTION -->', links);
    } else {
        content = content.replace('<!-- DOCUMENTATION_SECTION -->', '');
    }

    // Determine Destination
    let destDir = process.cwd();
    let destName = 'README.md';

    if (lang !== mainLang) {
        destDir = join(process.cwd(), config.paths.otherLanguages, lang);
        if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
    }
    
    const destPath = join(destDir, destName);
    
    if (existsSync(destPath)) {
      console.log(colorize(`⚠️  ${destName} already exists in ${lang}. Skipping.`, 'yellow'));
      continue;
    }

    writeFileSync(destPath, content);
    console.log(colorize(`✅ Created ${lang === mainLang ? '' : (config.paths.otherLanguages ? config.paths.otherLanguages + '/' : '') + lang + '/'}${destName}`, 'green'));
  }
}

function injectLanguageBadges(content, currentLang, allLangs, mainLang, currentFileName) {
    // Generate a bar of badges for ALL languages.
    let badgeBar = '';
    
    allLangs.forEach(lang => {
        const langConfig = config.languages[lang] || { name: lang, badge: lang, color: 'grey', alt: lang };
        const badgeUrl = `https://img.shields.io/badge/Lang-${langConfig.badge}-${langConfig.color}?style=flat-square`;
        
        let linkPath = '';
        
        if (lang === currentLang) {
            // No link for current language
            linkPath = '#'; 
        } else {
            // Calculate relative path to the other language file
            if (currentLang === mainLang) {
                // From Root to Other: ./{otherLanguages}/{lang}/{filename}
                // If otherLanguages is empty, it becomes ./{lang}/{filename}
                const prefix = config.paths.otherLanguages ? `${config.paths.otherLanguages}/` : '';
                linkPath = `./${prefix}${lang}/${currentFileName}`;
            } else {
                // From Other to ...
                if (lang === mainLang) {
                    // From Other to Root: ../{filename} (if flat) or ../../{filename} (if nested)
                    // If flat (pt/README.md), root is ../README.md
                    // If nested (other/pt/README.md), root is ../../README.md
                    const depth = config.paths.otherLanguages ? 2 : 1;
                    linkPath = `${'../'.repeat(depth)}${currentFileName}`;
                } else {
                    // From Other to Other: ../{lang}/{filename}
                    // This remains the same for flat structure (pt/ -> es/)
                    linkPath = `../${lang}/${currentFileName}`;
                }
            }
        }
        
        badgeBar += `[![${langConfig.alt}](${badgeUrl})](${linkPath}) `;
    });

    return badgeBar + '\n\n' + content;
}

