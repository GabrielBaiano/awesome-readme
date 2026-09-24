import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  // Supported languages and their badge configurations
  languages: {
    en: { name: 'English', badge: 'En', color: 'blue', alt: 'English' },
    pt: { name: 'Portuguese', badge: 'Pt--Br', color: 'green', alt: 'Portuguese' },
    es: { name: 'Spanish', badge: 'Es', color: 'yellow', alt: 'Spanish' }
  },
  docTitles: {
    en: {
      header: '## 📂 Documentation',
      'Contributing Guide': 'Contributing Guide',
      'Changelog': 'Changelog',
      'Code of Conduct': 'Code of Conduct',
      'Security Policy': 'Security Policy',
      'Support Guide': 'Support Guide',
      'Roadmap': 'Roadmap',
      'Authors': 'Authors',
      'Governance Model': 'Governance Model'
    },
    pt: {
      header: '## 📂 Documentação',
      'Contributing Guide': 'Guia de Contribuição',
      'Changelog': 'Registro de Mudanças',
      'Code of Conduct': 'Código de Conduta',
      'Security Policy': 'Política de Segurança',
      'Support Guide': 'Suporte',
      'Roadmap': 'Roteiro de Desenvolvimento',
      'Authors': 'Autores',
      'Governance Model': 'Governança'
    },
    es: {
      header: '## 📂 Documentación',
      'Contributing Guide': 'Guía de Contribución',
      'Changelog': 'Registro de Cambios',
      'Code of Conduct': 'Código de Conducta',
      'Security Policy': 'Política de Seguridad',
      'Support Guide': 'Soporte',
      'Roadmap': 'Hoja de Ruta',
      'Authors': 'Autores',
      'Governance Model': 'Gobernanza'
    }
  },
  uiMessages: {
    en: {
      welcome: '\n🎉 Welcome to Awesome README Templates!',
      interactiveSelection: '\n🧩 Interactive Template Selection',
      selectTargetLang: '\n🌐 Select Target Documentation Language:',
      isMainLang: 'Is {lang} the main language of the project? (y/n): ',
      availableTemplates: '\n📦 Available Templates:',
      doneSelection: 'Done selecting templates? (y/n): ',
      wantLicense: '\nDo you want to add a LICENSE file? (y/n): ',
      selectLicense: '\n📄 Select LICENSE Template:',
      projectInfo: '\n📝 Project Information (Press Enter to skip)',
      projectName: 'Project Name: ',
      projectDesc: 'Project Description: ',
      projectTagline: 'Project Tagline (short): ',
      authorName: 'Author Name: ',
      githubUser: 'GitHub Username: ',
      twitterUser: 'Twitter/X Username: ',
      contactEmail: 'Contact Email: ',
      packageName: 'Package Name: ',
      projectUrl: 'Project URL (e.g. Website): ',
      demoUrl: 'Demo URL: ',
      docsUrl: 'Documentation URL: '
    },
    pt: {
      welcome: '\n🎉 Bem-vindo ao Awesome README Templates!',
      interactiveSelection: '\n🧩 Seleção Interativa de Modelos',
      selectTargetLang: '\n🌐 Selecione o Idioma da Documentação:',
      isMainLang: 'O {lang} é o idioma principal do projeto? (s/n): ',
      availableTemplates: '\n📦 Modelos Disponíveis:',
      doneSelection: 'Concluir seleção de modelos? (s/n): ',
      wantLicense: '\nDeseja adicionar um arquivo de LICENÇA? (s/n): ',
      selectLicense: '\n📄 Selecione o Modelo de LICENÇA:',
      projectInfo: '\n📝 Informações do Projeto (Pressione Enter para pular)',
      projectName: 'Nome do Projeto: ',
      projectDesc: 'Descrição do Projeto: ',
      projectTagline: 'Slogan / Subtítulo (curto): ',
      authorName: 'Nome do Autor: ',
      githubUser: 'Usuário no GitHub: ',
      twitterUser: 'Usuário no Twitter/X: ',
      contactEmail: 'E-mail de Contato: ',
      packageName: 'Nome do Pacote: ',
      projectUrl: 'URL do Projeto (ex: Website): ',
      demoUrl: 'URL de Demonstração (Demo): ',
      docsUrl: 'URL da Documentação: '
    },
    es: {
      welcome: '\n🎉 ¡Bienvenido a Awesome README Templates!',
      interactiveSelection: '\n🧩 Selección Interactiva de Plantillas',
      selectTargetLang: '\n🌐 Selecciona el Idioma de la Documentación:',
      isMainLang: '¿Es {lang} el idioma principal del proyecto? (s/n): ',
      availableTemplates: '\n📦 Plantillas Disponibles:',
      doneSelection: '¿Finalizar selección de plantillas? (s/n): ',
      wantLicense: '\n¿Deseas agregar un archivo de LICENCIA? (s/n): ',
      selectLicense: '\n📄 Selecciona la Plantilla de LICENCIA:',
      projectInfo: '\n📝 Información del Proyecto (Presiona Enter para omitir)',
      projectName: 'Nombre del Proyecto: ',
      projectDesc: 'Descripción del Proyecto: ',
      projectTagline: 'Lema / Subtítulo (corto): ',
      authorName: 'Nombre del Autor: ',
      githubUser: 'Usuario en GitHub: ',
      twitterUser: 'Usuario en Twitter/X: ',
      contactEmail: 'Correo Electrónico de Contacto: ',
      packageName: 'Nombre del Paquete: ',
      projectUrl: 'URL del Proyecto (ej: Sitio Web): ',
      demoUrl: 'URL de Demostración: ',
      docsUrl: 'URL de la Documentación: '
    }
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

const readmeStyles = [
  { id: 'standard', name: 'Standard/Professional (Medium)', file: 'README-template.md', templateId: 'readme' },
  { id: 'minimal', name: 'Minimalist/Quick (Short)', file: 'README-minimal-template.md', templateId: 'readme' },
  { id: 'complete', name: 'Complete/Detailed (Long)', file: 'README-long-template.md', templateId: 'readme' }
];

const templateStyles = {
    readme: readmeStyles,
    contributing: [
        { id: 'standard', name: 'Standard', file: 'CONTRIBUTING-template.md', templateId: 'contributing' },
        { id: 'short', name: 'Short/Simple', file: 'CONTRIBUTING-short-template.md', templateId: 'contributing' }
    ],
    changelog: [
        { id: 'standard', name: 'Standard (Keep a Changelog)', file: 'CHANGELOG-template.md', templateId: 'changelog' },
        { id: 'short', name: 'Short (Simple List)', file: 'CHANGELOG-short-template.md', templateId: 'changelog' }
    ]
};

export { config, licenses, templates, readmeStyles, templateStyles };
