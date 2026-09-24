import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { licenses } from '../lib/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '..', 'website', 'data.json');
const webPublicDir = path.dirname(outputPath);

if (!fs.existsSync(webPublicDir)) {
  fs.mkdirSync(webPublicDir, { recursive: true });
}

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  pt: { name: 'Português', flag: '🇧🇷' },
  es: { name: 'Español', flag: '🇪🇸' }
};

const webTemplateDefs = [
  { id: 'authors', name: 'AUTHORS', file: 'AUTHORS-template.md', dest: 'AUTHORS.md', category: 'General' },
  { id: 'changelog-short', name: 'CHANGELOG Short', file: 'CHANGELOG-short-template.md', dest: 'CHANGELOG-short.md', category: 'General' },
  { id: 'changelog', name: 'CHANGELOG', file: 'CHANGELOG-template.md', dest: 'CHANGELOG.md', category: 'General' },
  { id: 'codeowners', name: 'CODEOWNERS', file: 'CODEOWNERS-template', dest: '.github/CODEOWNERS', category: 'General' },
  { id: 'code_of_conduct', name: 'CODE_OF_CONDUCT', file: 'CODE_OF_CONDUCT-template.md', dest: 'CODE_OF_CONDUCT.md', category: 'General' },
  { id: 'contributing-short', name: 'CONTRIBUTING Short', file: 'CONTRIBUTING-short-template.md', dest: 'CONTRIBUTING-short.md', category: 'General' },
  { id: 'contributing', name: 'CONTRIBUTING', file: 'CONTRIBUTING-template.md', dest: 'CONTRIBUTING.md', category: 'General' },
  { id: 'readme-long', name: 'README Long', file: 'README-long-template.md', dest: 'README-long.md', category: 'README' },
  { id: 'readme-minimal', name: 'README Minimal', file: 'README-minimal-template.md', dest: 'README-minimal.md', category: 'README' },
  { id: 'readme', name: 'README', file: 'README-template.md', dest: 'README.md', category: 'README' },
  { id: 'roadmap', name: 'ROADMAP', file: 'ROADMAP-template.md', dest: 'ROADMAP.md', category: 'General' },
  { id: 'security', name: 'SECURITY', file: 'SECURITY-template.md', dest: 'SECURITY.md', category: 'General' },
  { id: 'support', name: 'SUPPORT', file: 'SUPPORT-template.md', dest: 'SUPPORT.md', category: 'General' },
  { id: 'docs-templates-adr', name: 'ADR Template', file: 'docs-templates/adr-template.md', dest: 'docs/adr/0001-template.md', category: 'Documentation' },
  { id: 'docs-templates-citation', name: 'CITATION', file: 'docs-templates/CITATION-template.cff', dest: 'CITATION.cff', category: 'Documentation' },
  { id: 'docs-templates-governance', name: 'GOVERNANCE', file: 'docs-templates/GOVERNANCE-template.md', dest: 'GOVERNANCE.md', category: 'Documentation' },
  { id: 'github-templates-funding', name: 'FUNDING', file: 'github-templates/FUNDING.yml', dest: '.github/FUNDING.yml', category: 'GitHub' },
  { id: 'github-templates-pull_request_template', name: 'PULL_REQUEST_TEMPLATE', file: 'github-templates/PULL_REQUEST_TEMPLATE.md', dest: '.github/PULL_REQUEST_TEMPLATE.md', category: 'GitHub' },
  { id: 'github-templates-issue_template-bug_report', name: 'Bug Report', file: 'github-templates/ISSUE_TEMPLATE/bug_report.md', dest: '.github/ISSUE_TEMPLATE/bug_report.md', category: 'GitHub' },
  { id: 'github-templates-issue_template-config', name: 'Issue Config', file: 'github-templates/ISSUE_TEMPLATE/config.yml', dest: '.github/ISSUE_TEMPLATE/config.yml', category: 'GitHub' },
  { id: 'github-templates-issue_template-feature_request', name: 'Feature Request', file: 'github-templates/ISSUE_TEMPLATE/feature_request.md', dest: '.github/ISSUE_TEMPLATE/feature_request.md', category: 'GitHub' },
  { id: 'github-templates-issue_template-question', name: 'Question', file: 'github-templates/ISSUE_TEMPLATE/question.md', dest: '.github/ISSUE_TEMPLATE/question.md', category: 'GitHub' },
  { id: 'github-templates-workflows-ci', name: 'CI Workflow', file: 'github-templates/workflows/ci-template.yml', dest: '.github/workflows/ci.yml', category: 'GitHub' },
  { id: 'github-templates-workflows-lint', name: 'Lint Workflow', file: 'github-templates/workflows/lint-template.yml', dest: '.github/workflows/lint.yml', category: 'GitHub' },
  { id: 'github-templates-workflows-release', name: 'Release Workflow', file: 'github-templates/workflows/release-template.yml', dest: '.github/workflows/release.yml', category: 'GitHub' }
];

const langKeys = Object.keys(languages);

const processedTemplates = webTemplateDefs.map(item => {
  const contentMap = {};
  langKeys.forEach(lang => {
    const src = path.join(__dirname, '..', 'templates', `${lang}-template`, item.file);
    if (fs.existsSync(src)) {
      contentMap[lang] = fs.readFileSync(src, 'utf8');
    } else {
      console.warn(`⚠️ Missing template file: ${src}`);
      contentMap[lang] = null;
    }
  });

  return {
    id: item.id,
    name: item.name,
    dest: item.dest,
    category: item.category,
    content: contentMap
  };
});

const readmeMap = {};
langKeys.forEach(lang => {
  const readmePath = path.join(__dirname, '..', 'templates', `${lang}-template`, 'README-template.md');
  if (fs.existsSync(readmePath)) {
    readmeMap[lang] = fs.readFileSync(readmePath, 'utf8');
  } else {
    readmeMap[lang] = null;
  }
});

const data = {
  languages,
  licenses,
  templates: processedTemplates,
  readme: readmeMap
};

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log(`✅ Web data successfully generated at ${outputPath}`);
console.log(`Total templates: ${processedTemplates.length}`);
