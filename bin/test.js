#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Test if all required files exist
const requiredFiles = [
  'package.json',
  'templates/en-template/README-template.md',
  'templates/pt-template/README-template.md',
  'templates/en-template/CONTRIBUTING-template.md',
  'templates/pt-template/CONTRIBUTING-template.md',
  'templates/en-template/CHANGELOG-template.md',
  'templates/pt-template/CHANGELOG-template.md',
  'templates/license-templates/MIT-LICENSE.txt',
  'templates/license-templates/Apache-2.0-LICENSE.txt',
  'bin/awesome-readme.js',
  'README.md',
  'LICENSE',
  'CHANGELOG.md',
  'CONTRIBUTING.md'
];

console.log('🧪 Testing Awesome README Templates package...\n');

let allTestsPassed = true;

// Test 1: Check if all required files exist
console.log('📁 Testing file structure...');
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allTestsPassed = false;
  }
});

// Test 2: Check package.json
console.log('\n📦 Testing package.json...');
try {
  const packageJson = require('../package.json');
  
  if (packageJson.name && packageJson.version && packageJson.description) {
    console.log('✅ package.json has required fields');
  } else {
    console.log('❌ package.json missing required fields');
    allTestsPassed = false;
  }
  
  if (packageJson.bin && packageJson.bin['awesome-readme']) {
    console.log('✅ package.json has bin configuration');
  } else {
    console.log('❌ package.json missing bin configuration');
    allTestsPassed = false;
  }
} catch (error) {
  console.log(`❌ Error reading package.json: ${error.message}`);
  allTestsPassed = false;
}

// Test 3: Check templates have placeholders
console.log('\n📝 Testing templates...');
const templateFiles = ['templates/en-template/README-template.md', 'templates/pt-template/README-template.md'];

templateFiles.forEach(template => {
  const templatePath = path.join(__dirname, '..', template);
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath, 'utf8');
    if (content.includes('[PROJECT_NAME]') && content.includes('[PROJECT_DESCRIPTION]')) {
      console.log(`✅ ${template} has required placeholders`);
    } else {
      console.log(`❌ ${template} missing required placeholders`);
      allTestsPassed = false;
    }
  }
});

// Test 4: Check CLI script
console.log('\n⚡ Testing CLI script...');
const cliPath = path.join(__dirname, 'awesome-readme.js');
if (fs.existsSync(cliPath)) {
  const cliContent = fs.readFileSync(cliPath, 'utf8');
  if (cliContent.includes('Interactive Wizard') && cliContent.includes('Automated Setup')) {
    console.log('✅ CLI script has required functions');
  } else {
    console.log('❌ CLI script missing required functions');
    allTestsPassed = false;
  }
} else {
  console.log('❌ CLI script not found');
  allTestsPassed = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allTestsPassed) {
  console.log('🎉 All tests passed! Package is ready for publishing.');
  process.exit(0);
} else {
  console.log('❌ Some tests failed. Please fix the issues before publishing.');
  process.exit(1);
}
