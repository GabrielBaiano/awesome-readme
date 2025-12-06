#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// --- Configuration ---

const config = {
  // Supported languages and their badge configurations
  languages: {
    en: { name: 'English', badge: 'En', color: 'blue', alt: 'English' },
    pt: { name: 'Portuguese', badge: 'Pt--Br', color: 'green', alt: 'Portuguese' },
    // es: { name: 'Spanish', badge: 'Es', color: 'yellow', alt: 'Spanish' },
    // fr: { name: 'French', badge: 'Fr', color: 'red', alt: 'French' },
    // de: { name: 'German', badge: 'De', color: 'orange', alt: 'German' },
    // it: { name: 'Italian', badge: 'It', color: 'lightgrey', alt: 'Italian' },
    // ja: { name: 'Japanese', badge: 'Ja', color: 'pink', alt: 'Japanese' },
    // zh: { name: 'Chinese', badge: 'Zh', color: 'red', alt: 'Chinese' },
    // ru: { name: 'Russian', badge: 'Ru', color: 'blue', alt: 'Russian' }
  },
  paths: {
    templates: path.join(__dirname, '..', 'templates'),
    otherLanguages: 'other-languages'
  }
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

const licenses = [
  { name: 'MIT License', file: 'MIT-LICENSE.txt' },
  { name: 'Apache 2.0', file: 'Apache-2.0-LICENSE.txt' },
  { name: 'GPL 3.0', file: 'GPL-3.0-LICENSE.txt' },
  { name: 'AGPL 3.0', file: 'AGPL-3.0-LICENSE.txt' },
  { name: 'BSD 2-Clause', file: 'BSD-2-Clause-LICENSE.txt' },
  { name: 'BSD 3-Clause', file: 'BSD-3-Clause-LICENSE.txt' },
  { name: 'ISC License', file: 'ISC-LICENSE.txt' },
  { name: 'MPL 2.0', file: 'MPL-2.0-LICENSE.txt' },
  { name: 'The Unlicense', file: 'Unlicense-LICENSE.txt' },
  { name: 'None', file: null }
];

const extras = [
  { id: 'contributing', name: 'Contributing Guide', file: 'CONTRIBUTING-template.md', dest: 'CONTRIBUTING.md' },
  { id: 'changelog', name: 'Changelog', file: 'CHANGELOG-template.md', dest: 'CHANGELOG.md' },
  { id: 'code_of_conduct', name: 'Code of Conduct', file: 'CODE_OF_CONDUCT-template.md', dest: 'CODE_OF_CONDUCT.md' },
  { id: 'security', name: 'Security Policy', file: 'SECURITY-template.md', dest: 'SECURITY.md' },
  { id: 'support', name: 'Support Guide', file: 'SUPPORT-template.md', dest: 'SUPPORT.md' },
  { id: 'roadmap', name: 'Roadmap', file: 'ROADMAP-template.md', dest: 'ROADMAP.md' },
  { id: 'authors', name: 'Authors', file: 'AUTHORS-template.md', dest: 'AUTHORS.md' },
  { id: 'governance', name: 'Governance Model', file: 'docs-templates/GOVERNANCE-template.md', dest: 'GOVERNANCE.md' },
  { id: 'adr', name: 'ADR Template', file: 'docs-templates/adr-template.md', dest: 'ADR-template.md' },
  { id: 'citation', name: 'CITATION.cff', file: 'docs-templates/CITATION-template.cff', dest: 'CITATION.cff' },
  { id: 'codeowners', name: 'CODEOWNERS', file: 'CODEOWNERS-template', dest: '.github/CODEOWNERS' },
  { id: 'github', name: 'GitHub Templates (.github)', type: 'folder', src: 'github-templates', dest: '.github' }
];

// --- Main Execution ---

async function main() {
  const args = process.argv.slice(2);

  // Automated Setup (Flags)
  if (args.length > 0) {
    await runAutomatedMode(args);
    return;
  }

  // Interactive Modes
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    console.log(colorize('\n🎉 Welcome to Awesome README Templates!', 'cyan'));
    console.log(colorize('=====================================\n', 'cyan'));
    console.log('Please select a mode:');
    console.log('1. 🧙 Interactive Wizard (Step-by-step setup)');
    console.log('2. ➕ Add Specific Templates (Pick & choose)');
    console.log('3. 🤖 Automated Setup (Help with CLI flags)');
    
    const mode = await askQuestion(rl, '\nEnter choice (1-3): ');

    switch (mode.trim()) {
      case '1':
        await runWizardMode(rl);
        break;
      case '2':
        await runAddSpecificMode(rl);
        break;
      case '3':
        showFlagsHelp();
        break;
      default:
        console.log(colorize('❌ Invalid choice.', 'red'));
    }

  } catch (error) {
    console.error(colorize(`\n❌ Error: ${error.message}`, 'red'));
  } finally {
    rl.close();
  }
}

// --- Mode 1: Interactive Wizard ---

async function runWizardMode(rl) {
  console.log(colorize('\n🧙 Starting Interactive Wizard...', 'blue'));

  // 1. Main Language
  console.log(colorize('\n🌐 Select Main Language (Root):', 'yellow'));
  const availableLangs = Object.keys(config.languages);
  availableLangs.forEach((l, i) => console.log(`${i + 1}. ${config.languages[l].name} (${l})`));
  
  const mainLangChoice = await askQuestion(rl, `Choice (1-${availableLangs.length}): `);
  const mainLang = availableLangs[parseInt(mainLangChoice) - 1] || 'en';

  // 2. Additional Languages
  console.log(colorize('\n🌍 Select Additional Languages (Optional):', 'yellow'));
  const otherLangs = availableLangs.filter(l => l !== mainLang);
  otherLangs.forEach((l, i) => console.log(`${i + 1}. ${config.languages[l].name} (${l})`));
  console.log('0. None');
  console.log('Enter comma-separated numbers (e.g., 1,3) or press Enter to skip.');

  const additionalLangsInput = await askQuestion(rl, 'Choices: ');
  const additionalLangs = [];
  
  if (additionalLangsInput.trim() !== '0' && additionalLangsInput.trim() !== '') {
    const indices = additionalLangsInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    indices.forEach(i => {
      if (otherLangs[i - 1]) additionalLangs.push(otherLangs[i - 1]);
    });
  }

  // 3. License
  console.log(colorize('\n📜 Select a License:', 'yellow'));
  licenses.forEach((l, i) => console.log(`${i + 1}. ${l.name}`));
  const licChoice = await askQuestion(rl, `Choice (1-${licenses.length}): `);
  const selectedLicense = licenses[parseInt(licChoice) - 1] || licenses[licenses.length - 1];

  // 4. Extras
  console.log(colorize('\n📦 Select Extras:', 'yellow'));
  extras.forEach((e, i) => console.log(`${i + 1}. ${e.name}`));
  console.log('0. All of the above');
  console.log('Enter comma-separated numbers (e.g., 1,3,5) or press Enter to skip.');
  
  const extrasInput = await askQuestion(rl, 'Choices: ');
  const selectedExtras = [];
  if (extrasInput.trim() === '0') {
    selectedExtras.push(...extras);
  } else {
    const indices = extrasInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    indices.forEach(i => {
      if (extras[i - 1]) selectedExtras.push(extras[i - 1]);
    });
  }

  await performInstallation(mainLang, additionalLangs, selectedLicense, selectedExtras);
}

// --- Mode 2: Add Specific Templates ---

async function runAddSpecificMode(rl) {
  console.log(colorize('\n➕ Add Specific Templates', 'blue'));
  
  console.log(colorize('\n🌐 Select Language:', 'yellow'));
  const availableLangs = Object.keys(config.languages);
  availableLangs.forEach((l, i) => console.log(`${i + 1}. ${config.languages[l].name} (${l})`));
  const langChoice = await askQuestion(rl, `Choice (1-${availableLangs.length}): `);
  const selectedLang = availableLangs[parseInt(langChoice) - 1] || 'en';

  console.log(colorize('\n📦 Available Templates:', 'yellow'));
  extras.forEach((e, i) => console.log(`${i + 1}. ${e.name}`));
  
  const choice = await askQuestion(rl, 'Enter number to add: ');
  const selectedExtra = extras[parseInt(choice) - 1];

  if (selectedExtra) {
    // Treat as single installation: Main Lang = selected, No additional
    // But we need to know if it should go to root or other-languages.
    // For simplicity in this mode, let's ask "Is this the main language of the project?"
    const isMain = await askQuestion(rl, 'Is this the main language of the project? (y/n): ');
    
    if (isMain.toLowerCase().startsWith('y')) {
        await performInstallation(selectedLang, [], null, [selectedExtra], true);
    } else {
        // It's an additional language. We need to hack the performInstallation to treat it as such.
        // Or just run it as mainLang=dummy, additional=[selectedLang] and ignore main?
        // Better: performInstallation handles logic.
        // Let's just install it to current directory for simplicity or respect the structure?
        // Let's respect the structure.
        await performInstallation('ignore', [selectedLang], null, [selectedExtra], true);
    }
  } else {
    console.log(colorize('❌ Invalid selection.', 'red'));
  }
}

// --- Mode 3: Automated Setup (Flags) ---

async function runAutomatedMode(args) {
  const flags = parseArgs(args);
  
  if (flags.help) {
    showFlagsHelp();
    return;
  }

  // Backward compatibility for --lang=both
  if (flags.lang === 'both') {
    flags['main-lang'] = 'en';
    flags.langs = 'pt';
  } else if (flags.lang) {
    flags['main-lang'] = flags.lang;
  }

  const mainLang = flags['main-lang'] || 'en';
  let additionalLangs = [];
  
  if (flags.langs) {
    additionalLangs = flags.langs.split(',').map(l => l.trim().toLowerCase());
  }

  // License
  let selectedLicense = null;
  if (flags.license) {
    selectedLicense = licenses.find(l => l.name.toLowerCase().includes(flags.license.toLowerCase())) || licenses[0];
  }

  // Extras
  const selectedExtras = [];
  if (flags.all) {
    selectedExtras.push(...extras);
  } else {
    extras.forEach(e => {
      if (flags[e.id] || flags['with-' + e.id]) {
        selectedExtras.push(e);
      }
    });
  }

  await performInstallation(mainLang, additionalLangs, selectedLicense, selectedExtras);
}

function showFlagsHelp() {
  console.log(colorize('\n🤖 Automated Setup Flags:', 'cyan'));
  console.log('  --main-lang <code>       Set main language (root) (default: en)');
  console.log('  --langs <code,code>      Set additional languages (e.g., pt,fr)');
  console.log('  --license <name>         Select license (e.g., mit, apache)');
  console.log('  --all                    Install all templates');
  console.log('  --with-<template>        Install specific template (e.g., --with-roadmap)');
  console.log('\nSupported Languages: ' + Object.keys(config.languages).join(', '));
  console.log('\nExample:');
  console.log('  npx awesome-readme --main-lang=en --langs=pt,es --license=mit --all');
}

// --- Core Installation Logic ---

async function performInstallation(mainLang, additionalLangs, selectedLicense, selectedExtras, skipReadme = false) {
  console.log(colorize('\n🚀 Starting installation...', 'blue'));

  const allLangs = [mainLang, ...additionalLangs].filter(l => l !== 'ignore');

  // 1. Install README (if not skipped)
  if (!skipReadme) {
    await installReadme(mainLang, additionalLangs, selectedExtras);
  }

  // 2. Install License (Only in root)
  if (selectedLicense && selectedLicense.file) {
    const src = path.join(config.paths.templates, 'license-templates', selectedLicense.file);
    const dest = path.join(process.cwd(), 'LICENSE');
    processFile(src, dest);
  }

  // 3. Install Extras
  for (const extra of selectedExtras) {
    // Folder Extras (e.g., .github) - Install only for Main Language (Root) usually?
    // Or should we have localized .github templates?
    // For now, let's install folder extras only for main language to avoid conflicts/mess.
    if (extra.type === 'folder') {
        if (mainLang !== 'ignore') {
            const src = path.join(config.paths.templates, `${mainLang}-template`, extra.src);
            // Fallback to en if main lang template doesn't exist for this folder
            const fallbackSrc = path.join(config.paths.templates, 'en-template', extra.src);
            
            if (fs.existsSync(src)) {
                copyDir(src, path.join(process.cwd(), extra.dest));
            } else if (fs.existsSync(fallbackSrc)) {
                 copyDir(fallbackSrc, path.join(process.cwd(), extra.dest));
            }
        }
        continue;
    }

    // File Extras
    for (const lang of allLangs) {
      // Check if template exists for this language
      let src = path.join(config.paths.templates, `${lang}-template`, extra.file);
      if (!fs.existsSync(src)) {
          // Fallback to English if specific lang template missing
          src = path.join(config.paths.templates, 'en-template', extra.file);
          if (!fs.existsSync(src)) continue; 
      }
      
      let destDir = process.cwd();
      let destName = extra.dest;
      let isMain = (lang === mainLang);

      if (!isMain) {
          // Additional Language -> other-languages/{lang}/
          destDir = path.join(process.cwd(), config.paths.otherLanguages, lang);
          if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
          // Keep original filename (e.g. CONTRIBUTING.md), no suffixes needed due to folder separation
      }

      const dest = path.join(destDir, destName);
      
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
    let src = path.join(config.paths.templates, `${lang}-template`, 'README-template.md');
    if (!fs.existsSync(src)) {
         src = path.join(config.paths.templates, 'en-template', 'README-template.md');
         if (!fs.existsSync(src)) continue;
    }

    let content = fs.readFileSync(src, 'utf8');

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
            // Except for root which might have some in .github (CODEOWNERS)
            
            // However, extra.dest might be '.github/CODEOWNERS'.
            // If we are in other-languages/pt/, we probably didn't copy .github there.
            // So we should link back to root for shared files?
            // For now, we only copied file extras to the lang folder.
            
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
        destDir = path.join(process.cwd(), config.paths.otherLanguages, lang);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    }
    
    const destPath = path.join(destDir, destName);
    
    if (fs.existsSync(destPath)) {
      console.log(colorize(`⚠️  ${destName} already exists in ${lang}. Skipping.`, 'yellow'));
      continue;
    }

    fs.writeFileSync(destPath, content);
    console.log(colorize(`✅ Created ${lang === mainLang ? '' : config.paths.otherLanguages + '/' + lang + '/'}${destName}`, 'green'));
  }
}

// --- Helpers ---

function processFile(src, dest, modifier) {
  if (fs.existsSync(src)) {
    if (fs.existsSync(dest)) {
      console.log(colorize(`⚠️  ${path.basename(dest)} already exists. Skipping.`, 'yellow'));
    } else {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      let content = fs.readFileSync(src, 'utf8');
      if (modifier) {
        content = modifier(content);
      }
      
      fs.writeFileSync(dest, content);
      console.log(colorize(`✅ Created ${path.basename(dest)}`, 'green'));
    }
  } else {
    console.log(colorize(`⚠️  Source ${path.basename(src)} not found.`, 'red'));
  }
}

function injectLanguageBadges(content, currentLang, allLangs, mainLang, currentFileName) {
    // Generate a bar of badges for ALL languages.
    // Current language badge should link to nothing or be disabled? 
    // Usually it's better to just show all and link to others.
    
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
                // From Root to Other: ./other-languages/{lang}/{filename}
                linkPath = `./${config.paths.otherLanguages}/${lang}/${currentFileName}`;
            } else {
                // From Other to ...
                if (lang === mainLang) {
                    // From Other to Root: ../../{filename}
                    linkPath = `../../${currentFileName}`;
                } else {
                    // From Other to Other: ../{lang}/{filename}
                    linkPath = `../${lang}/${currentFileName}`;
                }
            }
        }
        
        badgeBar += `[![${langConfig.alt}](${badgeUrl})](${linkPath}) `;
    });

    return badgeBar + '\n\n' + content;
}

function askQuestion(rl, question) {
  return new Promise(resolve => rl.question(question, resolve));
}

function parseArgs(args) {
  const flags = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const parts = arg.substring(2).split('=');
      const key = parts[0];
      let value = parts[1];

      if (!value) {
        if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
          value = args[i + 1];
          i++; 
        } else {
          value = true;
        }
      }
      flags[key] = value;
    }
  }
  return flags;
}

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        
        let destName = entry.name.replace(/-template(\.[^.]+)$/, '$1');
        const destPath = path.join(dest, destName);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            if (!fs.existsSync(destPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log(colorize(`✅ Created ${path.basename(destPath)}`, 'green'));
            }
        }
    }
}

main();
