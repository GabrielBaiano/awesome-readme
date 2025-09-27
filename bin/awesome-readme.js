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
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Helper function to colorize text
function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

// Template paths
const templateDir = path.join(__dirname, '..', 'templates');
const templates = {
  'readme-english': 'README-template.md',
  'readme-portuguese': 'README-pt-template.md',
  'readme-both': ['README-template.md', 'README-pt-template.md'],
  'license-mit': 'license-templates/MIT-LICENSE.txt',
  'license-apache': 'license-templates/Apache-2.0-LICENSE.txt',
  'contributing': 'CONTRIBUTING-template.md',
  'changelog': 'CHANGELOG-template.md',
  'all': ['README-template.md', 'README-pt-template.md', 'CONTRIBUTING-template.md', 'CHANGELOG-template.md', 'license-templates/MIT-LICENSE.txt']
};

// Main CLI interface
async function main() {
  console.log(colorize('\n🎉 Welcome to Awesome README Templates!', 'cyan'));
  console.log(colorize('=====================================\n', 'cyan'));

  // Check command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  if (args.includes('--version') || args.includes('-v')) {
    const packageJson = require('../package.json');
    console.log(colorize(`Awesome README Templates v${packageJson.version}`, 'green'));
    return;
  }

  if (args.includes('--list') || args.includes('-l')) {
    listTemplates();
    return;
  }

  // Interactive template selection
  await selectTemplate();
}

// Show help information
function showHelp() {
  console.log(colorize('📚 Awesome README Templates CLI', 'bright'));
  console.log('\nUsage: awesome-readme [options]\n');
  console.log('Options:');
  console.log('  --help, -h     Show this help message');
  console.log('  --version, -v  Show version number');
  console.log('  --list, -l     List available templates');
  console.log('  --template, -t Specify template type (english|portuguese|both)');
  console.log('\nExamples:');
  console.log('  awesome-readme                    # Interactive mode');
  console.log('  awesome-readme --template english # Install English template');
  console.log('  awesome-readme --list             # List available templates');
  console.log('\n📖 Documentation: https://github.com/GabrielBaiano/awesome-readme');
}

// List available templates
function listTemplates() {
  console.log(colorize('📋 Available Templates:', 'yellow'));
  
  console.log('\n📄 README Templates:');
  console.log('1. English README Template');
  console.log('   - Professional README template in English');
  console.log('   - Includes all standard sections');
  console.log('   - Perfect for international projects');
  
  console.log('\n2. Portuguese README Template');
  console.log('   - Template profissional em português');
  console.log('   - Inclui todas as seções padrão');
  console.log('   - Perfeito para projetos brasileiros');
  
  console.log('\n3. Both README Templates');
  console.log('   - Install both English and Portuguese versions');
  console.log('   - Great for bilingual projects');
  console.log('   - Maximum flexibility');
  
  console.log('\n📋 Documentation Templates:');
  console.log('4. CONTRIBUTING Template');
  console.log('   - Complete contribution guidelines');
  console.log('   - Code standards and process');
  console.log('   - Professional contributor experience');
  
  console.log('\n5. CHANGELOG Template');
  console.log('   - Standardized changelog format');
  console.log('   - Semantic versioning support');
  console.log('   - Keep a Changelog compliant');
  
  console.log('\n📜 License Templates:');
  console.log('6. MIT License Template');
  console.log('   - Most permissive open source license');
  console.log('   - Great for maximum adoption');
  console.log('   - Simple and clear terms');
  
  console.log('\n7. Apache 2.0 License Template');
  console.log('   - Enterprise-friendly license');
  console.log('   - Patent protection included');
  console.log('   - Explicit contribution terms');
  
  console.log('\n🎯 Complete Package:');
  console.log('8. All Templates');
  console.log('   - Complete project documentation setup');
  console.log('   - Professional repository structure');
  console.log('   - Ready for open source publishing');
}

// Interactive template selection
async function selectTemplate() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    console.log(colorize('Please select a template:', 'yellow'));
    console.log('\n📄 README Templates:');
    console.log('1. English README Template');
    console.log('2. Portuguese README Template');
    console.log('3. Both README Templates');
    console.log('\n📋 Documentation Templates:');
    console.log('4. CONTRIBUTING Template');
    console.log('5. CHANGELOG Template');
    console.log('\n📜 License Templates:');
    console.log('6. MIT License Template');
    console.log('7. Apache 2.0 License Template');
    console.log('\n🎯 Complete Package:');
    console.log('8. All Templates (Complete Project Setup)');
    console.log('\n9. Exit\n');

    const choice = await askQuestion(rl, 'Enter your choice (1-9): ');
    
    switch (choice.trim()) {
      case '1':
        await installTemplate('readme-english');
        break;
      case '2':
        await installTemplate('readme-portuguese');
        break;
      case '3':
        await installTemplate('readme-both');
        break;
      case '4':
        await installTemplate('contributing');
        break;
      case '5':
        await installTemplate('changelog');
        break;
      case '6':
        await installTemplate('license-mit');
        break;
      case '7':
        await installTemplate('license-apache');
        break;
      case '8':
        await installTemplate('all');
        break;
      case '9':
        console.log(colorize('\n👋 Goodbye!', 'green'));
        break;
      default:
        console.log(colorize('\n❌ Invalid choice. Please try again.', 'red'));
        await selectTemplate();
    }
  } finally {
    rl.close();
  }
}

// Ask a question and return the answer
function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Install selected template
async function installTemplate(templateType) {
  try {
    console.log(colorize(`\n📥 Installing ${templateType} template...`, 'blue'));
    
    const templateFiles = Array.isArray(templates[templateType]) 
      ? templates[templateType] 
      : [templates[templateType]];

    let installed = 0;
    
    for (const templateFile of templateFiles) {
      const sourcePath = path.join(templateDir, templateFile);
      
      // Determine target filename
      let targetFileName = path.basename(templateFile);
      
      // Special handling for license files
      if (templateFile.includes('MIT-LICENSE.txt')) {
        targetFileName = 'LICENSE';
      } else if (templateFile.includes('Apache-2.0-LICENSE.txt')) {
        targetFileName = 'LICENSE';
      } else if (templateFile.includes('CONTRIBUTING-template.md')) {
        targetFileName = 'CONTRIBUTING.md';
      } else if (templateFile.includes('CHANGELOG-template.md')) {
        targetFileName = 'CHANGELOG.md';
      }
      
      const targetPath = path.join(process.cwd(), targetFileName);
      
      if (!fs.existsSync(sourcePath)) {
        console.log(colorize(`⚠️  Template ${templateFile} not found. Skipping...`, 'yellow'));
        continue;
      }
      
      if (fs.existsSync(targetPath)) {
        console.log(colorize(`⚠️  ${targetFileName} already exists. Skipping...`, 'yellow'));
        continue;
      }
      
      fs.copyFileSync(sourcePath, targetPath);
      console.log(colorize(`✅ ${targetFileName} installed successfully!`, 'green'));
      installed++;
    }
    
    if (installed > 0) {
      console.log(colorize(`\n🎉 Successfully installed ${installed} template(s)!`, 'green'));
      showNextSteps(templateType);
    } else {
      console.log(colorize('\n⚠️  No templates were installed.', 'yellow'));
    }
    
  } catch (error) {
    console.log(colorize(`\n❌ Error installing template: ${error.message}`, 'red'));
    process.exit(1);
  }
}

// Show next steps after installation
function showNextSteps(templateType) {
  console.log(colorize('\n📋 Next Steps:', 'cyan'));
  
  if (templateType.includes('readme')) {
    console.log('\n📄 For README Templates:');
    console.log('1. Open the installed README file(s)');
    console.log('2. Replace all [PLACEHOLDER] text with your project information');
    console.log('3. Customize the content for your specific project');
    console.log('4. Add your own images and screenshots');
    console.log('5. Test all links and badges');
  }
  
  if (templateType.includes('contributing')) {
    console.log('\n📋 For CONTRIBUTING Template:');
    console.log('1. Open CONTRIBUTING.md');
    console.log('2. Replace [PROJECT_NAME] and [USERNAME] placeholders');
    console.log('3. Customize the contribution process for your project');
    console.log('4. Update code standards and guidelines');
    console.log('5. Add project-specific information');
  }
  
  if (templateType.includes('changelog')) {
    console.log('\n📝 For CHANGELOG Template:');
    console.log('1. Open CHANGELOG.md');
    console.log('2. Replace [PROJECT_NAME] and [RELEASE_DATE] placeholders');
    console.log('3. Add your initial release information');
    console.log('4. Update the repository links');
    console.log('5. Start tracking changes for future releases');
  }
  
  if (templateType.includes('license')) {
    console.log('\n📜 For License Template:');
    console.log('1. Open LICENSE file');
    console.log('2. Replace [YEAR] and [AUTHOR_NAME] placeholders');
    console.log('3. Review the license terms');
    console.log('4. Ensure it matches your project goals');
    console.log('5. Update your README to reference the license');
  }
  
  if (templateType === 'all') {
    console.log('\n🎯 Complete Project Setup:');
    console.log('1. Review all installed files');
    console.log('2. Replace placeholders in each file');
    console.log('3. Customize content for your project');
    console.log('4. Add your project-specific information');
    console.log('5. Test all documentation');
  }
  
  console.log(colorize('\n💡 Pro Tips:', 'yellow'));
  console.log('- Check the LICENSE-GUIDE.md for license selection help');
  console.log('- Use the CONTRIBUTING.md as a reference for your project');
  console.log('- Visit our repository for more examples and updates');
  
  console.log(colorize('\n🔗 Useful Links:', 'blue'));
  console.log('- Repository: https://github.com/GabrielBaiano/awesome-readme');
  console.log('- Documentation: https://github.com/GabrielBaiano/awesome-readme#readme');
  console.log('- Report Issues: https://github.com/GabrielBaiano/awesome-readme/issues');
  
  console.log(colorize('\n⭐ If you find this useful, please star our repository!', 'magenta'));
}

// Handle command line arguments
if (process.argv.includes('--template') || process.argv.includes('-t')) {
  const templateIndex = process.argv.findIndex(arg => 
    arg === '--template' || arg === '-t'
  );
  const templateType = process.argv[templateIndex + 1];
  
  if (templates[templateType]) {
    installTemplate(templateType);
  } else {
    console.log(colorize('❌ Invalid template type. Use --list to see available options.', 'red'));
    process.exit(1);
  }
} else {
  main().catch(console.error);
}
