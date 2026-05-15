import fs from 'fs';
import path from 'path';

const templatesDir = './templates';
const dataFile = './website/data.json';

const languages = {
  en: 'en-template',
  pt: 'pt-template'
};

function getFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries
    .filter(entry => !entry.isDirectory() && !entry.name.startsWith('.'))
    .map(entry => path.join(dir, entry.name));
  
  const dirs = entries.filter(entry => entry.isDirectory());
  for (const subDir of dirs) {
    files.push(...getFiles(path.join(dir, subDir.name), baseDir));
  }
  return files;
}

function processTemplates() {
  const result = {
    languages: {
      en: { name: 'English', flag: '🇺🇸' },
      pt: { name: 'Português', flag: '🇧🇷' }
    },
    templates: []
  };

  const enFiles = getFiles(path.join(templatesDir, languages.en));
  
  for (const enFilePath of enFiles) {
    const relativePath = path.relative(path.join(templatesDir, languages.en), enFilePath);
    const id = relativePath.toLowerCase()
      .replace(/\\/g, '-')
      .replace(/\//g, '-')
      .replace(/\.md$/, '')
      .replace(/\.cff$/, '')
      .replace(/\.yml$/, '')
      .replace(/-template$/, '');
    
    const enContent = fs.readFileSync(enFilePath, 'utf-8');
    
    // Find corresponding PT file
    const ptFilePath = path.join(templatesDir, languages.pt, relativePath);
    let ptContent = '';
    if (fs.existsSync(ptFilePath)) {
      ptContent = fs.readFileSync(ptFilePath, 'utf-8');
    }

    // Determine category based on path
    let category = 'General';
    if (relativePath.includes('github-templates')) category = 'GitHub';
    if (relativePath.includes('docs-templates')) category = 'Documentation';
    if (relativePath.startsWith('README')) category = 'README';

    result.templates.push({
      id,
      name: formatName(path.basename(relativePath)),
      dest: relativePath.replace('-template', ''),
      category,
      content: {
        en: enContent,
        pt: ptContent || enContent // Fallback to English if PT doesn't exist
      }
    });
  }

  fs.writeFileSync(dataFile, JSON.stringify(result, null, 2));
  console.log(`Successfully synced ${result.templates.length} templates to ${dataFile}`);
}

function formatName(filename) {
  return filename
    .replace('-template', '')
    .replace('.md', '')
    .replace('.cff', '')
    .replace('.yml', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

processTemplates();
