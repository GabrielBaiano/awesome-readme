#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

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

const templateDir = path.join(__dirname, '..', 'templates');

// --- Configuration ---

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

  // Option 3: Automated Setup (Flags)
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

  // 1. Language
  console.log(colorize('\n🌐 Select Language Strategy:', 'yellow'));
  console.log('1. English Only');
  console.log('2. Portuguese Only');
  console.log('3. Bilingual (English + Portuguese)');
  const langChoice = await askQuestion(rl, 'Choice (1-3): ');
  const langStrategy = langChoice === '2' ? 'pt' : (langChoice === '3' ? 'both' : 'en');

  // 2. License
  console.log(colorize('\n📜 Select a License:', 'yellow'));
  licenses.forEach((l, i) => console.log(`${i + 1}. ${l.name}`));
  const licChoice = await askQuestion(rl, `Choice (1-${licenses.length}): `);
  const selectedLicense = licenses[parseInt(licChoice) - 1] || licenses[licenses.length - 1];

  // 3. Extras
  console.log(colorize('\n📦 Select Extras:', 'yellow'));
  const selectedExtras = [];
  
  // Ask for each extra individually? Or list selection? 
  // User asked for "sim ou não" style for some, but list is faster. 
  // Let's do list selection as it's cleaner for many items, but user mentioned "sim ou não".
  // Let's stick to the list selection for efficiency as there are many items.
  extras.forEach((e, i) => console.log(`${i + 1}. ${e.name}`));
  console.log('0. All of the above');
  console.log('Enter comma-separated numbers (e.g., 1,3,5) or press Enter to skip.');
  
  const extrasInput = await askQuestion(rl, 'Choices: ');
  if (extrasInput.trim() === '0') {
    selectedExtras.push(...extras);
  } else {
    const indices = extrasInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    indices.forEach(i => {
      if (extras[i - 1]) selectedExtras.push(extras[i - 1]);
    });
  }

  await performInstallation(langStrategy, selectedLicense, selectedExtras);
}

// --- Mode 2: Add Specific Templates ---

async function runAddSpecificMode(rl) {
  console.log(colorize('\n➕ Add Specific Templates', 'blue'));
  
  // In this mode, we assume the user might already have a project.
  // We should ask for language preference for these specific files.
  console.log(colorize('\n🌐 Which language version do you want to add?', 'yellow'));
  console.log('1. English');
  console.log('2. Portuguese');
  console.log('3. Both');
  const langChoice = await askQuestion(rl, 'Choice (1-3): ');
  const langStrategy = langChoice === '2' ? 'pt' : (langChoice === '3' ? 'both' : 'en');

  console.log(colorize('\n📦 Available Templates:', 'yellow'));
  extras.forEach((e, i) => console.log(`${i + 1}. ${e.name}`));
  
  const choice = await askQuestion(rl, 'Enter number to add: ');
  const selectedExtra = extras[parseInt(choice) - 1];

  if (selectedExtra) {
    await performInstallation(langStrategy, null, [selectedExtra], true); // true = skip README generation
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

  let langStrategy = flags.lang || 'en';
  
  // Handle comma-separated languages (e.g. "en,pt" or "pt,en") to fix bug!!!
  if (typeof langStrategy === 'string' && langStrategy.includes(',')) {
    const langs = langStrategy.split(',').map(l => l.trim().toLowerCase());
    if (langs.includes('en') && langs.includes('pt')) {
      langStrategy = 'both';
    } else if (langs.includes('pt')) {
      langStrategy = 'pt';
    } else {
      langStrategy = 'en';
    }
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

  await performInstallation(langStrategy, selectedLicense, selectedExtras);
}

function showFlagsHelp() {
  console.log(colorize('\n🤖 Automated Setup Flags:', 'cyan'));
  console.log('  --lang <en|pt|both>      Set language strategy (default: en)');
  console.log('  --license <name>         Select license (e.g., mit, apache)');
  console.log('  --all                    Install all templates');
  console.log('  --with-<template>        Install specific template (e.g., --with-roadmap)');
  console.log('\nAvailable templates: ' + extras.map(e => e.id).join(', '));
  console.log('\nExample:');
  console.log('  npx awesome-readme --lang=both --license=mit --with-roadmap --with-contributing');
}

// --- Core Installation Logic ---

async function performInstallation(langStrategy, selectedLicense, selectedExtras, skipReadme = false) {
  console.log(colorize('\n🚀 Starting installation...', 'blue'));

  // 1. Install README (if not skipped)
  if (!skipReadme) {
    await installReadme(langStrategy, selectedExtras);
  }

  // 2. Install License
  if (selectedLicense && selectedLicense.file) {
    const src = path.join(templateDir, 'license-templates', selectedLicense.file);
    const dest = path.join(process.cwd(), 'LICENSE');
    processFile(src, dest);
  }

  // 3. Install Extras
  const languages = langStrategy === 'both' ? ['en', 'pt'] : [langStrategy];

  for (const extra of selectedExtras) {
    if (extra.type === 'folder') {
      for (const lang of languages) {
        const currentLangDir = lang === 'en' ? 'en-template' : 'pt-template';
        const src = path.join(templateDir, currentLangDir, extra.src);
        
        if (fs.existsSync(src)) {
            copyDir(src, path.join(process.cwd(), extra.dest));
        }
      }
      continue;
    }

    // File Extras
    for (const lang of languages) {
      const currentLangDir = lang === 'en' ? 'en-template' : 'pt-template';
      const src = path.join(templateDir, currentLangDir, extra.file);
      
      let destDir = process.cwd();
      let destName = extra.dest;
      let otherPath = null;

      // Bilingual Mode Logic
      if (langStrategy === 'both') {
        if (lang === 'pt') {
            // Create pt/ directory
            destDir = path.join(process.cwd(), 'pt');
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

            // Ensure .pt suffix
            const ext = path.extname(destName);
            const base = path.basename(destName, ext);
            destName = `${base}.pt${ext}`;
            
            // Link to English (up one level)
            otherPath = `../${extra.dest}`;
        } else {
            // English version. Link to Portuguese (./pt/FILE.pt.md)
            const ext = path.extname(destName);
            const base = path.basename(destName, ext);
            otherPath = `./pt/${base}.pt${ext}`;
        }
      }

      const dest = path.join(destDir, destName);
      
      processFile(src, dest, (content) => {
          if (langStrategy === 'both' && otherPath && destName.endsWith('.md')) {
              return injectLanguageBadge(content, lang, otherPath);
          }
          return content;
      });
    }
  }

  console.log(colorize('\n✅ Done! Happy coding!', 'magenta'));
}

async function installReadme(langStrategy, selectedExtras) {
  const languages = langStrategy === 'both' ? ['en', 'pt'] : [langStrategy];

  for (const lang of languages) {
    const currentLangDir = lang === 'en' ? 'en-template' : 'pt-template';
    const src = path.join(templateDir, currentLangDir, 'README-template.md');
    if (!fs.existsSync(src)) continue;

    let content = fs.readFileSync(src, 'utf8');

    // Inject Language Badge if Bilingual
    if (langStrategy === 'both') {
        const otherPath = lang === 'en' ? './pt/README.md' : '../README.md';
        content = injectLanguageBadge(content, lang, otherPath);
    }

    // Inject Documentation
    if (selectedExtras.length > 0) {
        const isEn = lang === 'en';
        const header = isEn ? '## 📂 Documentation' : '## 📂 Documentação';
        let links = `${header}\n\n`;
        
        selectedExtras.forEach(e => {
            if (e.type === 'folder') return; // Skip folders
            
            let name = e.name;
            // Translate name if needed (simple heuristic or map)
            if (!isEn) {
                if (name === 'Contributing Guide') name = 'Guia de Contribuição';
                if (name === 'Changelog') name = 'Changelog'; // Same
                if (name === 'Code of Conduct') name = 'Código de Conduta';
                if (name === 'Security Policy') name = 'Política de Segurança';
                if (name === 'Support Guide') name = 'Suporte';
                if (name === 'Roadmap') name = 'Roadmap'; // Same
                if (name === 'Authors') name = 'Autores';
                if (name === 'Governance Model') name = 'Governança';
            }

            // Link path
            let linkPath = `./${e.dest}`;
            if (langStrategy === 'both' && !isEn) {
                 const ext = path.extname(e.dest);
                 const base = path.basename(e.dest, ext);
                 // Point to pt/ folder with .pt suffix
                 // But we are in pt/README.md, so we link to ./FILE.pt.md (sibling)
                 // Wait, if we are in pt/README.md, the extras are in pt/ too.
                 // So link is ./FILE.pt.md
                 linkPath = `./${base}.pt${ext}`;
            } else if (langStrategy === 'both' && isEn) {
                 // We are in root/README.md
                 // Link to root/FILE.md
                 linkPath = `./${e.dest}`;
            }

            links += `- [${name}](${linkPath})\n`;
        });
        
        content = content.replace('<!-- DOCUMENTATION_SECTION -->', links);
    } else {
        content = content.replace('<!-- DOCUMENTATION_SECTION -->', '');
    }

    // Dest filename
    let destDir = process.cwd();
    let destName = 'README.md';

    if (langStrategy === 'both' && lang === 'pt') {
        destDir = path.join(process.cwd(), 'pt');
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        destName = 'README.md';
    }
    
    const destPath = path.join(destDir, destName);
    
    if (fs.existsSync(destPath)) {
      console.log(colorize(`⚠️  ${destName} already exists. Skipping.`, 'yellow'));
      continue;
    }

    fs.writeFileSync(destPath, content);
    console.log(colorize(`✅ Created ${lang === 'pt' && langStrategy === 'both' ? 'pt/' : ''}${destName}`, 'green'));
  }
}

// --- Helpers ---

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
        // Check if next arg is a value (not starting with --)
        if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
          value = args[i + 1];
          i++; // Skip next arg
        } else {
          value = true;
        }
      }
      flags[key] = value;
    }
  }
  return flags;
}

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

function injectLanguageBadge(content, currentLang, otherPath) {
    const badgeText = currentLang === 'en' ? 'Pt--Br' : 'En';
    const badgeColor = currentLang === 'en' ? 'green' : 'blue';
    const badgeAlt = currentLang === 'en' ? 'Portuguese' : 'English';
    const badgeUrl = `https://img.shields.io/badge/Lang-${badgeText}-${badgeColor}?style=flat-square`;
    
    const badgeMarkdown = `[![${badgeAlt}](${badgeUrl})](${otherPath})`;
    return badgeMarkdown + '\n\n' + content;
}

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        
        // Strip -template suffix from filename if present
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
