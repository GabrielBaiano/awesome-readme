import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  // Supported languages and their badge configurations
  languages: {
    en: { name: 'English', badge: 'En', color: 'blue', alt: 'English' },
    pt: { name: 'Portuguese', badge: 'Pt--Br', color: 'green', alt: 'Portuguese' },
    // Add new languages here
  },
  paths: {
    templates: join(__dirname, '..', 'templates'),
    otherLanguages: ''
  },
  // Clean Code: Centralized Menu Definitions
  menus: {
    main: {
      header: 'Please select a mode:',
      options: [
        { label: '🧙 Interactive Wizard (Step-by-step setup)', value: '1', action: 'runWizardMode' },
        { label: '➕ Add Specific Templates (Pick & choose)', value: '2', action: 'runAddSpecificMode' },
        { label: '🤖 Automated Setup (Help with CLI flags)', value: '3', action: 'showFlagsHelp' }
      ]
    },
    // Wizard Steps Configuration
    wizard: [
      {
        id: 'mainLang',
        type: 'select-language',
        question: '🌐 Select Main Language (Root):',
        required: true
      },
      {
        id: 'additionalLangs',
        type: 'multiselect-language',
        question: '🌍 Select Additional Languages (Optional):',
        required: false
      },
      {
        id: 'license',
        type: 'select-license',
        question: '📜 Select a License:',
        source: 'licenses',
        required: true
      },
      {
        id: 'templates',
        type: 'multiselect-template',
        question: '📦 Select Extras:',
        source: 'templates',
        required: false
      }
    ]
  }
};

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

// Renamed from 'extras' to 'templates' for clarity
// Grouped templates allow for granular selection
const templates = [
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
  { 
    id: 'github', 
    name: 'GitHub Templates (.github)', 
    type: 'group', 
    children: [
        { id: 'pr_template', name: 'Pull Request Template', file: 'github-templates/PULL_REQUEST_TEMPLATE.md', dest: '.github/PULL_REQUEST_TEMPLATE.md' },
        { id: 'funding', name: 'Funding Info', file: 'github-templates/FUNDING.yml', dest: '.github/FUNDING.yml' },
        { id: 'issue_templates', name: 'Issue Templates (Folder)', type: 'folder', src: 'github-templates/ISSUE_TEMPLATE', dest: '.github/ISSUE_TEMPLATE' },
        { id: 'workflows', name: 'Actions Workflows (Folder)', type: 'folder', src: 'github-templates/workflows', dest: '.github/workflows' }
    ]
  }
];

export { config, licenses, templates };
