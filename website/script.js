document.addEventListener('DOMContentLoaded', () => {
    const state = {
        currentPage: 'getting-started',
        currentTemplate: null,
        viewMode: 'preview', // 'preview' or 'code'
        lang: 'en',
        data: null
    };

    // DOM Elements
    const markdownContainer = document.getElementById('markdown-container');
    const pageTitle = document.getElementById('current-page-title');
    const breadcrumbRoot = document.getElementById('breadcrumb-root');
    const tocNav = document.getElementById('toc-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const langBtns = document.querySelectorAll('.lang-btn');
    const dynamicNav = document.getElementById('dynamic-nav');

    // Pages Content (Documentation)
    const pages = {
        'getting-started': {
            title: 'Getting Started',
            content: {
                en: `# Getting Started\n\n**Awesome README Templates** is a high-productivity CLI tool designed to help developers create professional documentation for their GitHub repositories in seconds.\n\n## ⚡ Instant Setup\n\nRun the tool using \`npx\` in your project root:\n\n\`\`\`bash\nnpx awesome-readme-templates\n\`\`\`\n\n## 🔄 Workflow\n\n1. **Choose Language**: EN, PT, or both.\n2. **Select Style**: Minimal, Standard, or Complete.\n3. **Fill Metadata**: Project name, social links, etc.`,
                pt: `# Começando\n\nO **Awesome README Templates** é uma ferramenta CLI de alta produtividade projetada para ajudar desenvolvedores a criar documentação profissional para seus repositórios no GitHub em segundos.\n\n## ⚡ Início Rápido\n\nBasta rodar a ferramenta usando \`npx\` na raiz do seu projeto:\n\n\`\`\`bash\nnpx awesome-readme-templates\n\`\`\``
            }
        },
        'installation': {
            title: 'Installation',
            content: {
                en: `# Installation\n\nInstall globally:\n\`\`\`bash\nnpm install -g awesome-readme-templates\n\`\`\`\n\nOr use as a dev dependency:\n\`\`\`bash\nnpm install -D awesome-readme-templates\n\`\`\``,
                pt: `# Instalação\n\nInstale globalmente:\n\`\`\`bash\nnpm install -g awesome-readme-templates\n\`\`\`\n\nOu use como dependência de desenvolvimento:\n\`\`\`bash\nnpm install -D awesome-readme-templates\n\`\`\``
            }
        },
        'whats-new': {
            title: "What's New",
            content: {
                en: `# What's New\n\nStay up to date with the latest features and improvements.\n\n## [1.4.3] - Latest\n- ✨ **Template Dashboard**: New interactive website to explore and copy templates.\n- 🎨 **Visual Refresh**: Complete UI overhaul with premium docs aesthetics.\n- 📂 **Dynamic Sidebar**: Templates are now grouped by type and platform.\n\n## [1.4.2]\n- 📝 **Updated README**: Added detailed explanation of multi-language features.\n- 🤝 **Call for Contributors**: Added a section inviting the community to translate.\n\n## [1.4.0]\n- 🌍 **Multi-Language Support**: CLI now supports N-langs.\n- 🚩 **New Flags**: Added \`--main-lang\` and \`--langs\` flags.`,
                pt: `# Novidades\n\nFique por dentro das últimas funcionalidades e melhorias.\n\n## [1.4.3] - Atual\n- ✨ **Dashboard de Templates**: Novo site interativo para explorar e copiar templates.\n- 🎨 **Visual Renovado**: Interface completamente nova com estética premium.\n- 📂 **Sidebar Dinâmica**: Templates agora são agrupados por tipo e plataforma.`
            }
        },
        'cli-flags': {
            title: 'CLI Flags',
            content: {
                en: `# CLI Flags\n\nUse these flags to automate the template installation process.\n\n| Flag | Description | Example |\n| :--- | :--- | :--- |\n| \`--main-lang\` | Set the project's root language | \`--main-lang pt\` |\n| \`--langs\` | List of additional languages (comma-separated) | \`--langs en,fr\` |\n| \`--license\` | Choose a license (mit, apache, gpl, etc.) | \`--license mit\` |\n| \`--all\` | Install EVERY available template | \`--all\` |\n| \`--with-<id>\` | Install a specific template or group | \`--with-roadmap\` |\n\n### Examples\n\n\`\`\`bash\nnpx awesome-readme --all --main-lang pt\nnpx awesome-readme --with-github --license mit\n\`\`\``,
                pt: `# Flags do CLI\n\nUse estas flags para automatizar o processo de instalação.\n\n| Flag | Descrição | Exemplo |\n| :--- | :--- | :--- |\n| \`--main-lang\` | Define o idioma principal na raiz | \`--main-lang pt\` |\n| \`--langs\` | Idiomas adicionais (separados por vírgula) | \`--langs en,fr\` |\n| \`--license\` | Escolhe uma licença | \`--license mit\` |\n| \`--all\` | Instala TODOS os templates | \`--all\` |\n| \`--with-<id>\` | Instala um template ou grupo específico | \`--with-github\` |`
            }
        },
        'custom-vars': {
            title: 'Placeholders',
            content: {
                en: `# Placeholders\n\nThese variables are automatically replaced with your project metadata during installation.\n\n### Project Identity\n- \`[PROJECT_NAME]\`: Title of your project.\n- \`[PROJECT_DESCRIPTION]\`: Brief overview.\n- \`[PROJECT_TAGLINE]\`: A catchy one-liner.\n- \`[YEAR]\`: Current year.\n\n### Author & Links\n- \`[AUTHOR_NAME]\`: Your full name.\n- \`[GITHUB_USERNAME]\`: Your GitHub handle.\n- \`[GITHUB_PROFILE_URL]\`: Link to your profile.\n- \`[CONTACT_EMAIL]\`: Your email address.\n\n### URLs\n- \`[PROJECT_URL]\`: Main website or repository link.\n- \`[DEMO_URL]\`: Link to a live demo.\n- \`[DOCS_URL]\`: Link to documentation.\n\n### Integration\n- \`[PACKAGE_NAME]\`: NPM/PyPI package name.\n- \`[TWITTER_HANDLE]\`: Your Twitter/X handle.\n- \`[BUYMEACOFFEE_USERNAME]\`: For support links.`,
                pt: `# Placeholders\n\nVariáveis que são substituídas automaticamente pelos dados do seu projeto.\n\n### Identidade\n- \`[PROJECT_NAME]\`: Nome do projeto.\n- \`[PROJECT_DESCRIPTION]\`: Descrição curta.\n- \`[PROJECT_TAGLINE]\`: Frase de impacto.\n\n### Autor\n- \`[AUTHOR_NAME]\`: Nome do autor.\n- \`[GITHUB_USERNAME]\`: Usuário do GitHub.\n- \`[CONTACT_EMAIL]\`: Email de contato.`
            }
        }
    };

    // Initialize
    async function init() {
        try {
            const response = await fetch('data.json');
            state.data = await response.json();
            
            renderSidebar();
            setupEventListeners();
            loadContent(state.currentPage);
            createToolbar();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    function renderSidebar() {
        const sections = {
            'Project Documentation': [],
            'GitHub Templates': []
        };

        // Categorize templates
        state.data.templates.forEach(t => {
            if (t.category === 'GitHub') {
                sections['GitHub Templates'].push(t);
            } else {
                sections['Project Documentation'].push(t);
            }
        });

        dynamicNav.innerHTML = '';
        
        Object.keys(sections).forEach(sectionTitle => {
            const templates = sections[sectionTitle];
            if (templates.length === 0) return;

            const groupDiv = document.createElement('div');
            groupDiv.className = 'nav-group';
            
            const title = document.createElement('h5');
            title.className = 'nav-group-title';
            title.textContent = sectionTitle;
            groupDiv.appendChild(title);

            const ul = document.createElement('ul');

            // Group by base filename within section
            const fileGroups = {};
            templates.forEach(t => {
                const baseName = t.dest.split('/').pop();
                if (!fileGroups[baseName]) fileGroups[baseName] = [];
                fileGroups[baseName].push(t);
            });

            Object.keys(fileGroups).sort().forEach(baseName => {
                const groupTemplates = fileGroups[baseName];
                
                if (groupTemplates.length > 1) {
                    const li = document.createElement('li');
                    li.className = 'nav-item-expandable';
                    
                    const span = document.createElement('span');
                    span.className = 'nav-link-header';
                    span.textContent = baseName;
                    li.appendChild(span);

                    const subUl = document.createElement('ul');
                    subUl.className = 'nav-sublist';
                    
                    groupTemplates.sort((a, b) => {
                        if (a.name === baseName.replace('.md', '')) return -1;
                        return a.name.localeCompare(b.name);
                    });

                    groupTemplates.forEach(t => {
                        const subLi = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = '#';
                        a.className = 'nav-link';
                        a.dataset.template = t.id;
                        a.textContent = t.name;
                        subLi.appendChild(a);
                        subUl.appendChild(subLi);
                    });
                    li.appendChild(subUl);
                    ul.appendChild(li);
                } else {
                    const t = groupTemplates[0];
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '#';
                    a.className = 'nav-link';
                    a.dataset.template = t.id;
                    a.textContent = t.name;
                    li.appendChild(a);
                    ul.appendChild(li);
                }
            });

            groupDiv.appendChild(ul);
            dynamicNav.appendChild(groupDiv);
        });
    }

    function createToolbar() {
        const breadcrumbRight = document.querySelector('.breadcrumb-right');
        
        const toolbar = document.createElement('div');
        toolbar.className = 'toolbar-actions';
        toolbar.innerHTML = `
            <div class="view-toggle">
                <button class="toggle-btn active" data-view="preview" title="Preview Mode"><i data-lucide="eye"></i></button>
                <button class="toggle-btn" data-view="code" title="Raw Code"><i data-lucide="code"></i></button>
            </div>
            <button class="copy-btn" title="Copy Content"><i data-lucide="copy"></i></button>
        `;
        
        breadcrumbRight.prepend(toolbar);
        lucide.createIcons();

        // Toolbar Events
        toolbar.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.viewMode = btn.dataset.view;
                toolbar.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                refreshView();
            });
        });

        toolbar.querySelector('.copy-btn').addEventListener('click', () => {
            const btn = toolbar.querySelector('.copy-btn');
            const content = getCurrentRawContent();
            
            navigator.clipboard.writeText(content).then(() => {
                const icon = btn.querySelector('i');
                const originalIcon = icon.getAttribute('data-lucide');
                
                // Success State
                btn.classList.add('copied');
                icon.setAttribute('data-lucide', 'check');
                lucide.createIcons();

                setTimeout(() => {
                    btn.classList.remove('copied');
                    icon.setAttribute('data-lucide', originalIcon);
                    lucide.createIcons();
                }, 2000);
            });
        });
    }

    function refreshView() {
        if (state.currentTemplate) {
            loadTemplate(state.currentTemplate);
        } else {
            loadContent(state.currentPage);
        }
    }

    function getCurrentRawContent() {
        if (state.currentTemplate) {
            const t = state.data.templates.find(temp => temp.id === state.currentTemplate);
            return applyMocks(t.content[state.lang] || t.content['en']);
        } else {
            const page = pages[state.currentPage];
            return page.content[state.lang] || page.content['en'];
        }
    }

    function setupEventListeners() {
        // Navigation Links (Use event delegation for dynamic links)
        document.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;
            
            e.preventDefault();
            
            const pageId = link.dataset.page;
            const templateId = link.dataset.template;

            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (pageId) {
                state.currentTemplate = null;
                loadContent(pageId);
            } else if (templateId) {
                state.currentTemplate = templateId;
                loadTemplate(templateId);
            }
        });

        // Language Buttons
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const newLang = btn.dataset.lang;
                state.lang = newLang;

                // Update UI
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Refresh Current View
                if (state.currentTemplate) {
                    loadTemplate(state.currentTemplate);
                } else {
                    loadContent(state.currentPage);
                }
            });
        });
    }

    function loadContent(id) {
        const page = pages[id];
        if (!page) return;

        state.currentPage = id;
        state.currentTemplate = null;
        pageTitle.textContent = page.title;
        breadcrumbRoot.textContent = id === 'getting-started' || id === 'installation' || id === 'whats-new' ? 'Guide' : 'Reference';
        
        const content = page.content[state.lang] || page.content['en'];
        
        if (state.viewMode === 'code') {
            renderCode(content);
        } else {
            renderMarkdown(content);
        }
    }

    function loadTemplate(id) {
        let content = '';
        const t = state.data.templates.find(temp => temp.id === id);
        
        if (!t) return;

        content = t.content[state.lang] || t.content['en'] || '# Content not available in this language';
        pageTitle.textContent = t.name;
        breadcrumbRoot.textContent = t.category === 'GitHub' ? 'GitHub Templates' : 'Project Documentation';
        
        content = applyMocks(content);
        
        if (state.viewMode === 'code') {
            renderCode(content);
        } else {
            renderMarkdown(content);
        }
    }

    function renderCode(code) {
        markdownContainer.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
        tocNav.innerHTML = '<p style="color: var(--text-muted); font-size: 0.8rem;">Table of contents hidden in code view.</p>';
        lucide.createIcons();
        window.scrollTo(0, 0);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
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
            DOCS_URL: 'https://docs.example.com',
            CONTACT_EMAIL: 'hello@example.com'
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
