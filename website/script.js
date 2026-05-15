document.addEventListener('DOMContentLoaded', () => {
    const state = {
        currentPage: 'getting-started',
        lang: 'en',
        data: null
    };

    // DOM Elements
    const markdownContainer = document.getElementById('markdown-container');
    const pageTitle = document.getElementById('current-page-title');
    const tocNav = document.getElementById('toc-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Pages Content
    const pages = {
        'getting-started': {
            title: 'Getting Started',
            content: {
                en: `# Getting Started

**Awesome README Templates** is a high-productivity CLI tool designed to help developers create professional, standardized, and beautiful documentation for their GitHub repositories in seconds.

## 🌟 Why Documentation Matters?

First impressions are everything in Open Source. A repository with a clean, structured README attracts more contributors, makes installation easier for users, and gives your project a professional look from day one.

## ⚡ Instant Setup (Recommended)

You don't need to install anything permanently. Just navigate to your project's root directory and run:

\`\`\`bash
npx awesome-readme-templates
\`\`\`

## 🔄 The 3-Step Workflow

Our tool follows a guided, interactive process to ensure you get exactly what you need.

### 1. Choose your Language
Select between **English**, **Portuguese (PT-BR)**, or generate both simultaneously. This is perfect for projects reaching a global audience while maintaining a local presence.

### 2. Pick your Style
Not every project needs a massive documentation file. Choose the style that fits your stage:
- **Minimalist**: Just the essentials (Description, Install, License).
- **Standard**: The professional default for most libraries and apps.
- **Complete**: A detailed structure including Architecture, API Reference, and Roadmap.

### 3. Metadata Collection
The CLI will ask for key project details:
- Project Name & Tagline.
- GitHub handles & Repository name.
- Links for Live Demos and Documentation.
- Contact info (Email, Socials).

## 📂 What gets generated?

Once completed, the tool will create a \`.github/\` folder (optional) and several Markdown files:
- \`README.md\`: Your project's landing page.
- \`CONTRIBUTING.md\`: How others can help.
- \`CHANGELOG.md\`: Version history.
- \`LICENSE\`: Legal boilerplate.

## 🚀 Next Steps

After generating your files, we recommend:
1. **Reviewing the content**: While our templates are robust, you might want to add specific technical details.
2. **Pushing to GitHub**: Watch as GitHub automatically renders your beautiful new documentation!
3. **Customize further**: You can always re-run the tool to try a different style.`,
                pt: `# Começando

O **Awesome README Templates** é uma ferramenta CLI de alta produtividade projetada para ajudar desenvolvedores a criar documentação profissional, padronizada e bonita para seus repositórios no GitHub em segundos.

## 🌟 Por que a documentação importa?

A primeira impressão é tudo no Open Source. Um repositório com um README limpo e estruturado atrai mais contribuidores, facilita a instalação para os usuários e dá ao seu projeto uma aparência profissional desde o primeiro dia.

## ⚡ Configuração Instantânea (Recomendado)

Você não precisa instalar nada permanentemente. Basta navegar até o diretório raiz do seu projeto e executar:

\`\`\`bash
npx awesome-readme-templates
\`\`\`

## 🔄 O Fluxo de Trabalho de 3 Passos

Nossa ferramenta segue um processo interativo e guiado.

### 1. Escolha seu Idioma
Selecione entre **Inglês**, **Português (PT-BR)**, ou gere ambos simultaneamente.

### 2. Escolha seu Estilo
- **Minimalista**: Apenas o essencial.
- **Padrão**: O padrão profissional para a maioria das bibliotecas.
- **Completo**: Estrutura detalhada incluindo Arquitetura, Referência de API e Roadmap.

### 3. Coleta de Metadados
O CLI solicitará detalhes como nome do projeto, links de demonstração, redes sociais e muito mais.`
            }
        },
        'installation': {
            title: 'Installation',
            content: {
                en: `# Installation

While \`npx\` is the recommended way to use the tool, you can install it globally or locally.

## Global Installation

Install via npm to have the \`awesome-readme\` command available globally:

\`\`\`bash
npm install -g awesome-readme-templates
\`\`\`

## Local Installation

Add it as a dev dependency to your project:

\`\`\`bash
npm install -D awesome-readme-templates
\`\`\`

## Usage

If installed globally:
\`\`\`bash
awesome-readme
\`\`\`

If installed locally:
\`\`\`bash
npx awesome-readme
\`\`\``,
                pt: `# Instalação`
            }
        },
        'whats-new': {
            title: "What's New",
            content: {
                en: `# What's New in v1.5.0

We've been working hard to make **Awesome README Templates** the most flexible documentation tool for developers. Here's what landed in the latest version:

### 🎭 Dynamic Template Styles
You are no longer limited to a single template. We introduced three distinct styles for READMEs:
- **Minimalist**: For quick projects or small utilities.
- **Standard**: Our recommended professional default.
- **Complete**: A comprehensive document with Roadmap, API Reference, and Architecture sections.

### 🔗 Expanded Project Metadata
The CLI now collects more data to ensure your templates are ready to push without manual edits:
- **Social Links**: Direct integration for Twitter/X and Contact Email.
- **Web Presence**: Dedicated fields for Live Demo and Documentation URLs.
- **Automated Tags**: Improved handling of license types and package names.

### 🌍 Bilingual Refinement
Our bilingual core (EN/PT) is now faster and more robust. You can generate a dual-language setup with better consistency across all extra templates like Contributing and Changelog.

### 💻 Brand New Documentation Portal
You're looking at it! We've launched this dedicated portal to help you explore templates and master the CLI flags.

### 🚀 Under the Hood
- **Regex Optimization**: Variable replacement is now significantly faster.
- **Directory Smart-Creation**: Better handling of nested \`.github/\` structures.
- **New Placeholders**: Added \`[YEAR]\`, \`[LOGO_URL]\`, and \`[TECH_STACK]\`.`,
                pt: `# O que há de novo na v1.5.0

Trabalhamos muito para tornar o **Awesome README Templates** a ferramenta de documentação mais flexível para desenvolvedores.

### 🎭 Estilos Dinâmicos de Template
Agora você não está limitado a apenas um modelo. Introduzimos três estilos distintos para READMEs:
- **Minimalista**: Para projetos rápidos ou utilitários pequenos.
- **Padrão**: Nosso padrão profissional recomendado.
- **Completo**: Um documento abrangente com seções de Roadmap, Referência de API e Arquitetura.

### 🔗 Metadados Expandidos
O CLI agora coleta mais dados para garantir que seus templates estejam prontos para uso sem edições manuais:
- **Links Sociais**: Integração direta para Twitter/X e E-mail de contato.
- **Presença Web**: Campos dedicados para URLs de Demo e Documentação.

### 🚀 Melhorias Internas
- **Otimização de Regex**: A substituição de variáveis agora é significativamente mais rápida.
- **Novos Placeholders**: Adicionados \`[YEAR]\`, \`[LOGO_URL]\` e \`[TECH_STACK]\`.`
            }
        },
        'cli-flags': {
            title: 'CLI Flags',
            content: {
                en: `# CLI Flags

For automation and CI/CD, you can use flags to skip interactive prompts.

| Flag | Description |
| :--- | :--- |
| \`--lang\` | Set the main language (\`en\` or \`pt\`) |
| \`--langs\` | Additional languages (comma separated) |
| \`--all\` | Install all available templates |
| \`--with-roadmap\` | Include the Roadmap template |
| \`--license\` | Specify the license type |

## Example

\`\`\`bash
awesome-readme --lang=pt --all --license=mit
\`\`\``,
                pt: `# Flags do CLI`
            }
        },
        'custom-vars': {
            title: 'Placeholders',
            content: {
                en: `# Placeholders

The tool uses a simple bracket system for variables. Here are the most common ones:

| Variable | Description |
| :--- | :--- |
| \`[PROJECT_NAME]\` | Your project title |
| \`[PROJECT_DESCRIPTION]\` | A short summary |
| \`[AUTHOR_NAME]\` | Your name |
| \`[GITHUB_USERNAME]\` | Your GitHub handle |
| \`[YEAR]\` | Current year (auto-detected) |
| \`[DEMO_URL]\` | Live preview link |
| \`[DOCS_URL]\` | Documentation link |`,
                pt: `# Placeholders`
            }
        }
    };

    // Initialize
    async function init() {
        try {
            const response = await fetch('data.json');
            state.data = await response.json();
            
            setupEventListeners();
            loadContent(state.currentPage);
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    function setupEventListeners() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const pageId = link.dataset.page;
                const templateId = link.dataset.template;

                // Update Active State
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                if (pageId) {
                    loadContent(pageId);
                } else if (templateId) {
                    loadTemplate(templateId);
                }
            });
        });
    }

    function loadContent(id) {
        const page = pages[id];
        if (!page) return;

        state.currentPage = id;
        pageTitle.textContent = page.title;
        renderMarkdown(page.content[state.lang] || page.content['en']);
    }

    function loadTemplate(id) {
        let content = '';
        const t = state.data.templates.find(temp => temp.id === id);
        
        if (id === 'readme') {
            content = state.data.readme[state.lang];
        } else if (t && t.content) {
            content = t.content[state.lang] || t.content['en'];
        }

        pageTitle.textContent = t ? t.name : id;
        
        // Mock replacements for preview
        content = applyMocks(content);
        renderMarkdown(content);
    }

    function applyMocks(content) {
        const mocks = {
            PROJECT_NAME: 'Awesome Project',
            PROJECT_DESCRIPTION: 'A professional and clean open source project.',
            PROJECT_TAGLINE: 'Built for developers who care about docs.',
            AUTHOR_NAME: 'Gabriel Baiano',
            GITHUB_USERNAME: 'GabrielBaiano',
            PACKAGE_NAME: 'awesome-readme',
            YEAR: new Date().getFullYear(),
            DEMO_URL: 'https://demo.example.com',
            DOCS_URL: 'https://docs.example.com'
        };
        Object.keys(mocks).forEach(k => {
            const regex = new RegExp(`\\[${k}\\]`, 'g');
            content = content.replace(regex, mocks[k]);
        });
        return content;
    }

    function renderMarkdown(md) {
        markdownContainer.innerHTML = marked.parse(md);
        updateTOC();
        lucide.createIcons();
        window.scrollTo(0, 0);
    }

    function updateTOC() {
        tocNav.innerHTML = '';
        const headings = markdownContainer.querySelectorAll('h2, h3');
        
        if (headings.length === 0) {
            tocNav.innerHTML = '<p style="color: var(--text-muted); font-size: 0.8rem;">No headings on this page.</p>';
            return;
        }

        headings.forEach(h => {
            const id = h.textContent.toLowerCase().replace(/[^\w]/g, '-');
            h.id = id;
            
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.className = 'toc-link';
            a.textContent = h.textContent;
            if (h.tagName === 'H3') a.style.paddingLeft = '1rem';
            
            tocNav.appendChild(a);
        });
    }

    init();
});
