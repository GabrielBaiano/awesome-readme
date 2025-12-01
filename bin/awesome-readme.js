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
  cyan: '\x1b[36m'
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

const templateDir = path.join(__dirname, '..', 'templates');

// Available extras
const extras = [
  { id: 'contributing', name: 'CONTRIBUTING.md', file: 'CONTRIBUTING-template.md' },
  { id: 'changelog', name: 'CHANGELOG.md', file: 'CHANGELOG-template.md' },
  { id: 'code_of_conduct', name: 'CODE_OF_CONDUCT.md', file: 'CODE_OF_CONDUCT-template.md' },
  { id: 'security', name: 'SECURITY.md', file: 'SECURITY-template.md' },
  { id: 'support', name: 'SUPPORT.md', file: 'SUPPORT-template.md' },
  { id: 'roadmap', name: 'ROADMAP.md', file: 'ROADMAP-template.md' },
  { id: 'authors', name: 'AUTHORS.md', file: 'AUTHORS-template.md' },
  { id: 'governance', name: 'GOVERNANCE.md', file: 'docs-templates/GOVERNANCE-template.md' },
  { id: 'adr', name: 'ADR Template', file: 'docs-templates/adr-template.md' },
  { id: 'citation', name: 'CITATION.cff', file: 'docs-templates/CITATION-template.cff' },
  { id: 'license', name: 'LICENSE', type: 'license' }, // Special handling
  { id: 'github', name: 'GitHub Templates (.github)', type: 'folder', src: 'github-templates' }
];

async function main() {
  console.log(colorize('\n🎉 Welcome to Awesome README Templates!', 'cyan'));
  console.log(colorize('=====================================\n', 'cyan'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // 1. Select Language
    console.log(colorize('🌐 Select Language Strategy:', 'yellow'));
    console.log('1. English Only (Single README.md)');
    console.log('2. Portuguese Only (Single README.md)');
    console.log('3. Bilingual (README.md + README.pt.md)');
    
    const langChoice = await askQuestion(rl, '\nEnter choice (1-3): ');
    let langStrategy = 'en';
    if (langChoice.trim() === '2') langStrategy = 'pt';
    if (langChoice.trim() === '3') langStrategy = 'both';

    // 2. Select Extras
    console.log(colorize('\n📦 Select Optional Files (comma separated, e.g., 1,3,5):', 'yellow'));
    extras.forEach((extra, index) => {
      console.log(`${index + 1}. ${extra.name}`);
    });
    console.log('0. All of the above');
    console.log('Enter nothing to skip extras.');

    const extrasInput = await askQuestion(rl, '\nEnter choices: ');
    const selectedIndices = extrasInput.split(',')
      .map(s => s.trim())
      .filter(s => s !== '')
      .map(s => parseInt(s));

    let selectedExtras = [];
    if (selectedIndices.includes(0)) {
        selectedExtras = extras;
    } else {
        selectedExtras = selectedIndices
        .map(i => extras[i - 1])
        .filter(e => e !== undefined);
    }

    // 3. Install
    await install(langStrategy, selectedExtras, rl);

  } catch (error) {
    console.error(colorize(`\n❌ Error: ${error.message}`, 'red'));
  } finally {
    rl.close();
  }
}

function askQuestion(rl, question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function install(langStrategy, selectedExtras, rl) {
  console.log(colorize('\n🚀 Starting installation...', 'blue'));

  const languages = langStrategy === 'both' ? ['en', 'pt'] : [langStrategy];

  for (const lang of languages) {
    const isEnglish = lang === 'en';
    const srcDir = path.join(templateDir, lang);
    
    // 1. Handle README
    const readmeSrc = path.join(srcDir, 'README-template.md');
    let readmeContent = fs.readFileSync(readmeSrc, 'utf8');
    
    // Remove language buttons if single language
    if (langStrategy !== 'both') {
      // Regex to remove the specific language link and separator
      // This is a simple heuristic.
      if (langStrategy === 'en') {
         // Remove Portuguese link
         readmeContent = readmeContent.replace(/<a href="\/README\.pt\.md".*?<\/a>\s*&nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;/g, '');
         readmeContent = readmeContent.replace(/<a href="\.\/README\.pt\.md".*?<\/a>\s*&nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;/g, '');
      } else if (langStrategy === 'pt') {
         // Remove English link
         readmeContent = readmeContent.replace(/<a href="\/README\.md".*?<\/a>\s*&nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;/g, '');
         readmeContent = readmeContent.replace(/<a href="\.\/README\.md".*?<\/a>\s*&nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;/g, '');
      }
    }

    // Inject Documentation Section
    if (selectedExtras.length > 0) {
      const docTitle = isEnglish ? '## 📂 Documentation' : '## 📂 Documentação';
      let docList = `${docTitle}\n\n`;
      
      selectedExtras.forEach(extra => {
        if (extra.id === 'license' || extra.id === 'github') return; // Skip these in doc list usually, or handle differently
        
        let linkName = extra.name;
        let linkPath = `./${extra.name}`;
        
        // Customize link names/paths if needed
        if (extra.id === 'roadmap') linkName = isEnglish ? 'Roadmap' : 'Roadmap';
        if (extra.id === 'authors') linkName = isEnglish ? 'Authors' : 'Autores';
        if (extra.id === 'contributing') linkName = isEnglish ? 'Contributing' : 'Contribuindo';
        if (extra.id === 'code_of_conduct') linkName = isEnglish ? 'Code of Conduct' : 'Código de Conduta';
        
        docList += `- [${linkName}](${linkPath})\n`;
      });

      // Replace placeholder
      readmeContent = readmeContent.replace('<!-- DOCUMENTATION_SECTION -->', docList);
    } else {
        readmeContent = readmeContent.replace('<!-- DOCUMENTATION_SECTION -->', '');
    }

    // Determine output filename
    let targetReadme = 'README.md';
    if (langStrategy === 'both' && !isEnglish) {
      targetReadme = 'README.pt.md';
    }
    
    fs.writeFileSync(path.join(process.cwd(), targetReadme), readmeContent);
    console.log(colorize(`✅ Created ${targetReadme}`, 'green'));

    // 2. Handle Extras
    for (const extra of selectedExtras) {
      if (extra.id === 'license') {
        // License handling (ask user which license)
        // For simplicity in this refactor, we might just copy MIT or ask.
        // Let's copy MIT by default or ask if we want to be fancy.
        // To keep it simple and robust:
        const licenseSrc = path.join(templateDir, 'license-templates', 'MIT-LICENSE.txt');
        if (fs.existsSync(licenseSrc)) {
             fs.copyFileSync(licenseSrc, path.join(process.cwd(), 'LICENSE'));
             console.log(colorize(`✅ Created LICENSE (MIT default)`, 'green'));
        }
        continue;
      }

      if (extra.id === 'github') {
        const githubSrc = path.join(srcDir, 'github-templates');
        const githubDest = path.join(process.cwd(), '.github');
        copyDir(githubSrc, githubDest);
        console.log(colorize(`✅ Created .github/ templates`, 'green'));
        continue;
      }

      if (extra.file) {
        const extraSrc = path.join(srcDir, extra.file);
        const extraDest = path.join(process.cwd(), extra.name);
        if (fs.existsSync(extraSrc)) {
            fs.copyFileSync(extraSrc, extraDest);
            console.log(colorize(`✅ Created ${extra.name}`, 'green'));
        }
      }
    }
  }
  
  console.log(colorize('\n🎉 Done! Happy coding!', 'magenta'));
}

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

main();
