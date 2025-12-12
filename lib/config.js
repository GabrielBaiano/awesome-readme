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
      header: 'awesome-readme CLI',
      options: [
        { label: '🧩 Interactive Selection (Pick & choose templates)', value: '1', action: 'runInteractiveMode' },
        { label: '🤖 Automated Setup (Help with CLI flags)', value: '2', action: 'showFlagsHelp' }
      ]
    }
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
  { id: 'contributing', name: 'Contributing Guide', description: 'Guidelines for how others can contribute to your project.', file: 'CONTRIBUTING-template.md', dest: 'CONTRIBUTING.md' },
  { id: 'changelog', name: 'Changelog', description: 'A record of all changes made to the project.', file: 'CHANGELOG-template.md', dest: 'CHANGELOG.md' },
  { id: 'code_of_conduct', name: 'Code of Conduct', description: 'Standards for community behavior.', file: 'CODE_OF_CONDUCT-template.md', dest: 'CODE_OF_CONDUCT.md' },
  { id: 'security', name: 'Security Policy', description: 'Instructions for reporting security vulnerabilities.', file: 'SECURITY-template.md', dest: 'SECURITY.md' },
  { id: 'support', name: 'Support Guide', description: 'Information on how to get help.', file: 'SUPPORT-template.md', dest: 'SUPPORT.md' },
  { id: 'roadmap', name: 'Roadmap', description: 'Future plans and milestones for the project.', file: 'ROADMAP-template.md', dest: 'ROADMAP.md' },
  { id: 'authors', name: 'Authors', description: 'Credits to the creators and contributors.', file: 'AUTHORS-template.md', dest: 'AUTHORS.md' },
  { id: 'governance', name: 'Governance Model', description: 'How the project is governed and decisions are made.', file: 'docs-templates/GOVERNANCE-template.md', dest: 'GOVERNANCE.md' },
  { id: 'adr', name: 'ADR Template', description: 'Template for Architecture Decision Records.', file: 'docs-templates/adr-template.md', dest: 'ADR-template.md' },
  { id: 'citation', name: 'CITATION.cff', description: 'Citation metadata for research software.', file: 'docs-templates/CITATION-template.cff', dest: 'CITATION.cff' },
  { id: 'codeowners', name: 'CODEOWNERS', description: 'Define who owns what code in the repo.', file: 'CODEOWNERS-template', dest: '.github/CODEOWNERS' },
  { 
    id: 'github', 
    name: 'GitHub Templates', 
    description: 'Essential .github files for standardizing contributions.',
    type: 'group', 
    children: [
        { id: 'pr_template', name: 'Pull Request Template', description: 'Default content for new PRs.', file: 'github-templates/PULL_REQUEST_TEMPLATE.md', dest: '.github/PULL_REQUEST_TEMPLATE.md' },
        { id: 'funding', name: 'Funding Info', description: 'GitHub Sponsors and funding configuration.', file: 'github-templates/FUNDING.yml', dest: '.github/FUNDING.yml' },
        { id: 'issue_templates', name: 'Issue Templates', description: 'Standard templates for Bug Reports and Feature Requests.', type: 'folder', src: 'github-templates/ISSUE_TEMPLATE', dest: '.github/ISSUE_TEMPLATE' },
        { id: 'workflows', name: 'Actions Workflows', description: 'CI/CD workflows for GitHub Actions.', type: 'folder', src: 'github-templates/workflows', dest: '.github/workflows' }
    ]
  }
];

export { config, licenses, templates };
