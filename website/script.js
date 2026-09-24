/* global lucide, marked */
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
                en: `# Getting Started\n\n**Awesome README Templates** is a high-productivity CLI tool designed to help developers create professional documentation for their GitHub repositories in seconds.\n\n## ⚡ Instant Setup\n\nRun the tool using \`npx\` in your project root:\n\n\`\`\`bash\nnpx awesome-readme-templates\n\`\`\`\n\n## 🔄 Workflow\n\n1. **Choose Language**: EN, PT, ES, or all.\n2. **Select Style**: Minimal, Standard, or Complete.\n3. **Fill Metadata**: Project name, social links, etc.`,
                pt: `# Começando\n\nO **Awesome README Templates** é uma ferramenta CLI de alta produtividade projetada para ajudar desenvolvedores a criar documentação profissional para seus repositórios no GitHub em segundos.\n\n## ⚡ Início Rápido\n\nBasta rodar a ferramenta usando \`npx\` na raiz do seu projeto:\n\n\`\`\`bash\nnpx awesome-readme-templates\n\`\`\`\n\n## 🔄 Fluxo de Trabalho\n\n1. **Escolha o Idioma**: EN, PT, ES ou múltiplos.\n2. **Selecione o Estilo**: Minimal, Standard ou Complete.\n3. **Preencha os Metadados**: Nome do projeto, links sociais, etc.`,
                es: `# Primeros Pasos\n\n**Awesome README Templates** es una herramienta CLI de alta productividad diseñada para ayudar a desarrolladores a crear documentación profesional para sus repositorios de GitHub en segundos.\n\n## ⚡ Inicio Rápido\n\nEjecuta la herramienta usando \`npx\` en la raíz de tu proyecto:\n\n\`\`\`bash\nnpx awesome-readme-templates\n\`\`\`\n\n## 🔄 Flujo de Trabajo\n\n1. **Elige el Idioma**: EN, PT, ES o varios.\n2. **Selecciona el Estilo**: Minimal, Standard o Long.\n3. **Completa los Metadatos**: Nombre del proyecto, enlaces sociales, etc.`
            }
        },
        'installation': {
            title: 'Installation',
            content: {
                en: `# Installation\n\nInstall globally:\n\`\`\`bash\nnpm install -g awesome-readme-templates\n\`\`\`\n\nOr use as a dev dependency:\n\`\`\`bash\nnpm install -D awesome-readme-templates\n\`\`\``,
                pt: `# Instalação\n\nInstale globalmente:\n\`\`\`bash\nnpm install -g awesome-readme-templates\n\`\`\`\n\nOu use como dependência de desenvolvimento:\n\`\`\`bash\nnpm install -D awesome-readme-templates\n\`\`\``,
                es: `# Instalación\n\nInstalar globalmente:\n\`\`\`bash\nnpm install -g awesome-readme-templates\n\`\`\`\n\nO usar como dependencia de desarrollo:\n\`\`\`bash\nnpm install -D awesome-readme-templates\n\`\`\``
            }
        },
        'whats-new': {
            title: "What's New",
            content: {
                en: `# What's New\n\nStay up to date with the latest features and improvements.\n\n## [1.5.0] - Latest\n- 🌍 **Full Spanish Support**: Complete suite of 25 templates, CLI prompts, and website in Spanish.\n- 🧹 **Zero False Scale**: Streamlined documentation focusing on essential, actionable guides.\n- ⚡ **Automated Metadata**: Intelligent git user detection, project naming, and ISO dates.\n\n## [1.4.3]\n- ✨ **Template Dashboard**: Interactive website to explore and copy templates.\n- 🎨 **Visual Refresh**: Complete UI overhaul with dark/light themes and live preview.\n- 📂 **Dynamic Sidebar**: Templates grouped by category and platform.`,
                pt: `# Novidades\n\nFique por dentro das últimas funcionalidades e melhorias.\n\n## [1.5.0] - Atual\n- 🌍 **Suporte Completo a Espanhol**: Suite de 25 templates, prompts do CLI e website em Espanhol.\n- 🧹 **Sem Burocracia Desnecessária**: Documentação enxuta e focada no essencial.\n- ⚡ **Metadados Automáticos**: Detecção inteligente de usuário git, nome do projeto e datas ISO.\n\n## [1.4.3]\n- ✨ **Dashboard de Templates**: Site interativo para explorar e copiar templates.\n- 🎨 **Visual Renovado**: Interface com temas claro/escuro e prévia ao vivo.\n- 📂 **Sidebar Dinâmica**: Templates agrupados por categoria e plataforma.`,
                es: `# Novedades\n\nMantente al día con las últimas funciones y mejoras.\n\n## [1.5.0] - Actual\n- 🌍 **Soporte Completo a Español**: Suite de 25 plantillas, prompts de CLI y sitio web en español.\n- 🧹 **Documentación Esencial**: Eliminación de contenido superfluo y enfoque técnico directo.\n- ⚡ **Metadatos Automáticos**: Detección inteligente de usuario git, nombre de proyecto y fechas ISO.\n\n## [1.4.3]\n- ✨ **Dashboard de Plantillas**: Sitio interactivo para explorar y copiar plantillas.\n- 🎨 **Diseño Renovado**: Interfaz con temas claro/oscuro y vista previa en vivo.\n- 📂 **Barra Lateral Dinámica**: Plantillas agrupadas por categoría y plataforma.`
            }
        },
        'cli-flags': {
            title: 'CLI Flags',
            content: {
                en: `# CLI Flags\n\nUse these flags to automate the template installation process.\n\n| Flag | Description | Example |\n| :--- | :--- | :--- |\n| \`--main-lang\` | Set the project's root language | \`--main-lang es\` |\n| \`--langs\` | List of additional languages (comma-separated) | \`--langs en,pt\` |\n| \`--license\` | Choose a license (mit, apache, gpl, etc.) | \`--license mit\` |\n| \`--all\` | Install EVERY available template | \`--all\` |\n| \`--with-<id>\` | Install a specific template or group | \`--with-github\` |\n\n### Examples\n\n\`\`\`bash\nnpx awesome-readme --all --main-lang es\nnpx awesome-readme --with-github --license mit\n\`\`\``,
                pt: `# Flags do CLI\n\nUse estas flags para automatizar o processo de instalação.\n\n| Flag | Descrição | Exemplo |\n| :--- | :--- | :--- |\n| \`--main-lang\` | Define o idioma principal na raiz | \`--main-lang es\` |\n| \`--langs\` | Idiomas adicionais (separados por vírgula) | \`--langs en,pt\` |\n| \`--license\` | Escolhe uma licença | \`--license mit\` |\n| \`--all\` | Instala TODOS os templates | \`--all\` |\n| \`--with-<id>\` | Instala um template ou grupo específico | \`--with-github\` |\n\n### Exemplos\n\n\`\`\`bash\nnpx awesome-readme --all --main-lang es\nnpx awesome-readme --with-github --license mit\n\`\`\``,
                es: `# Flags de la CLI\n\nUsa estas flags para automatizar el proceso de instalación de plantillas.\n\n| Flag | Descripción | Ejemplo |\n| :--- | :--- | :--- |\n| \`--main-lang\` | Define el idioma principal en la raíz | \`--main-lang es\` |\n| \`--langs\` | Idiomas adicionales (separados por coma) | \`--langs en,pt\` |\n| \`--license\` | Elige una licencia (mit, apache, gpl, etc.) | \`--license mit\` |\n| \`--all\` | Instala TODAS las plantillas disponibles | \`--all\` |\n| \`--with-<id>\` | Instala una plantilla o grupo específico | \`--with-github\` |\n\n### Ejemplos\n\n\`\`\`bash\nnpx awesome-readme --all --main-lang es\nnpx awesome-readme --with-github --license mit\n\`\`\``
            }
        },
        'custom-vars': {
            title: 'Placeholders',
            content: {
                en: `# Placeholders\n\nThese variables are automatically replaced with your project metadata during installation.\n\n### Project Identity\n- \`[PROJECT_NAME]\`: Title of your project.\n- \`[PROJECT_DESCRIPTION]\`: Brief overview.\n- \`[PROJECT_TAGLINE]\`: A catchy one-liner.\n- \`[YEAR]\`: Current year.\n\n### Author & Links\n- \`[AUTHOR_NAME]\`: Your full name.\n- \`[GITHUB_USERNAME]\`: Your GitHub handle.\n- \`[GITHUB_PROFILE_URL]\`: Link to your profile.\n- \`[CONTACT_EMAIL]\`: Your email address.\n\n### URLs\n- \`[PROJECT_URL]\`: Main website or repository link.\n- \`[DEMO_URL]\`: Link to a live demo.\n- \`[DOCS_URL]\`: Link to documentation.\n\n### Integration\n- \`[PACKAGE_NAME]\`: NPM/PyPI package name.\n- \`[TWITTER_HANDLE]\`: Your Twitter/X handle.\n- \`[BUYMEACOFFEE_USERNAME]\`: For support links.`,
                pt: `# Placeholders\n\nVariáveis que são substituídas automaticamente pelos dados do seu projeto.\n\n### Identidade\n- \`[PROJECT_NAME]\`: Nome do projeto.\n- \`[PROJECT_DESCRIPTION]\`: Descrição curta.\n- \`[PROJECT_TAGLINE]\`: Frase de impacto.\n- \`[YEAR]\`: Ano atual.\n\n### Autor\n- \`[AUTHOR_NAME]\`: Nome do autor.\n- \`[GITHUB_USERNAME]\`: Usuário do GitHub.\n- \`[GITHUB_PROFILE_URL]\`: Link do perfil.\n- \`[CONTACT_EMAIL]\`: Email de contato.\n\n### URLs\n- \`[PROJECT_URL]\`: Link do site ou repositório.\n- \`[DEMO_URL]\`: Link de demonstração ao vivo.\n- \`[DOCS_URL]\`: Link da documentação.\n\n### Integração\n- \`[PACKAGE_NAME]\`: Nome do pacote no NPM/PyPI.\n- \`[TWITTER_HANDLE]\`: Usuário do Twitter/X.\n- \`[BUYMEACOFFEE_USERNAME]\`: Usuário do Buy Me A Coffee.`,
                es: `# Placeholders\n\nVariables que se sustituyen automáticamente con los datos de tu proyecto durante la instalación.\n\n### Identidad del Proyecto\n- \`[PROJECT_NAME]\`: Título del proyecto.\n- \`[PROJECT_DESCRIPTION]\`: Breve descripción general.\n- \`[PROJECT_TAGLINE]\`: Frase de impacto.\n- \`[YEAR]\`: Año actual.\n\n### Autor y Enlaces\n- \`[AUTHOR_NAME]\`: Nombre del autor.\n- \`[GITHUB_USERNAME]\`: Usuario de GitHub.\n- \`[GITHUB_PROFILE_URL]\`: Enlace al perfil de GitHub.\n- \`[CONTACT_EMAIL]\`: Correo electrónico de contacto.\n\n### URLs\n- \`[PROJECT_URL]\`: Enlace al sitio o repositorio principal.\n- \`[DEMO_URL]\`: Enlace a la demo en vivo.\n- \`[DOCS_URL]\`: Enlace a la documentación.\n\n### Integración\n- \`[PACKAGE_NAME]\`: Nombre del paquete en NPM/PyPI.\n- \`[TWITTER_HANDLE]\`: Usuario de Twitter/X.\n- \`[BUYMEACOFFEE_USERNAME]\`: Enlace o usuario para donaciones.`
            }
        }
    };

    // Initialize
    async function init() {
        try {
            // Theme Initialization
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            const isLight = savedTheme === 'light' || (!savedTheme && systemPrefersLight);
            
            if (isLight) {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
            updateThemeUI(isLight);

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
        const titles = {
            en: { docs: 'Project Documentation', github: 'GitHub Templates' },
            pt: { docs: 'Documentação do Projeto', github: 'Templates do GitHub' },
            es: { docs: 'Documentación del Proyecto', github: 'Plantillas de GitHub' }
        }[state.lang] || { docs: 'Project Documentation', github: 'GitHub Templates' };

        const sections = {
            [titles.docs]: [],
            [titles.github]: []
        };

        // Categorize templates
        state.data.templates.forEach(t => {
            if (t.category === 'GitHub') {
                sections[titles.github].push(t);
            } else {
                sections[titles.docs].push(t);
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
        const searchInput = document.getElementById('sidebar-search-input');
        const searchDropdown = document.getElementById('search-results-dropdown');

        // Navbar Search input & dropdown
        if (searchInput && searchDropdown) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim().toLowerCase();
                if (!query) {
                    searchDropdown.classList.remove('active');
                    searchDropdown.innerHTML = '';
                    return;
                }

                // Filter templates matching query
                const matches = state.data.templates.filter(t => 
                    t.name.toLowerCase().includes(query) || 
                    t.dest.toLowerCase().includes(query) || 
                    (t.id && t.id.toLowerCase().includes(query))
                );

                searchDropdown.innerHTML = '';
                searchDropdown.classList.add('active');

                if (matches.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.className = 'search-no-results';
                    const noResultsMap = {
                        en: 'No templates found',
                        pt: 'Nenhum template encontrado',
                        es: 'No se encontraron plantillas'
                    };
                    const text = noResultsMap[state.lang] || 'No templates found';
                    noResults.innerHTML = `
                        <i data-lucide="search"></i>
                        <span>${text}</span>
                    `;
                    searchDropdown.appendChild(noResults);
                    lucide.createIcons();
                    return;
                }

                matches.forEach(t => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.dataset.template = t.id;
                    
                    const title = document.createElement('span');
                    title.className = 'search-result-title';
                    title.textContent = t.name;
                    item.appendChild(title);

                    const meta = document.createElement('div');
                    meta.className = 'search-result-meta';
                    
                    const category = document.createElement('span');
                    category.textContent = t.category === 'GitHub' ? 'GitHub' : 'Doc';
                    meta.appendChild(category);

                    const path = document.createElement('code');
                    path.textContent = t.dest;
                    meta.appendChild(path);

                    item.appendChild(meta);

                    // Click handler to load the template
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        state.currentTemplate = t.id;
                        loadTemplate(t.id);
                        
                        // Set active state in sidebar nav link
                        document.querySelectorAll('.nav-link').forEach(l => {
                            if (l.dataset.template === t.id) {
                                l.classList.add('active');
                            } else {
                                l.classList.remove('active');
                            }
                        });

                        // Clear and hide search
                        searchInput.value = '';
                        searchDropdown.classList.remove('active');
                        searchDropdown.innerHTML = '';
                    });

                    searchDropdown.appendChild(item);
                });
                lucide.createIcons();
            });

            // Close on click outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('#navbar-search-container')) {
                    searchDropdown.classList.remove('active');
                }
            });

            // Re-open on focus if query has content
            searchInput.addEventListener('focus', () => {
                if (searchInput.value.trim()) {
                    searchDropdown.classList.add('active');
                }
            });
        }

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

                // Update search placeholder
                if (searchInput) {
                    const placeholders = {
                        en: 'Search templates...',
                        pt: 'Buscar templates...',
                        es: 'Buscar plantillas...'
                    };
                    searchInput.placeholder = placeholders[newLang] || 'Search templates...';
                }

                // Refresh Current View
                if (state.currentTemplate) {
                    loadTemplate(state.currentTemplate);
                } else {
                    loadContent(state.currentPage);
                }

                // Refresh sidebar to apply translation
                renderSidebar();
            });
        });

        // Theme Toggle Click Handler (Phase 4)
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const isLight = document.body.classList.toggle('light-theme');
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
                updateThemeUI(isLight);
            });
        }
    }

    function updateThemeUI(isLight) {
        const markdownTheme = document.getElementById('markdown-theme');
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        const icon = themeToggle.querySelector('i');
        if (!icon) return;

        if (isLight) {
            if (markdownTheme) {
                markdownTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css';
            }
            icon.setAttribute('data-lucide', 'moon');
            themeToggle.title = 'Switch to Dark Mode';
        } else {
            if (markdownTheme) {
                markdownTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-dark.min.css';
            }
            icon.setAttribute('data-lucide', 'sun');
            themeToggle.title = 'Switch to Light Mode';
        }
        lucide.createIcons();
    }

    // Template Explanations Database
    const templateExplanations = {
        'authors': {
            visibility: 'auxiliary',
            dest: 'AUTHORS.md',
            en: {
                why: "Lists all core team members, maintainers, and community contributors. It provides clear recognition, which increases contributor engagement and trust.",
                how: "Saved at the root level of your repo. While not highlighted by default on the home page, it is usually linked from the README or AUTHORS section."
            },
            pt: {
                why: "Lista todos os membros do time principal, mantenedores e colaboradores. Proporciona reconhecimento claro, o que aumenta o engajamento e a confiança da comunidade.",
                how: "Salvo na raiz do repositório. Embora não seja destacado por padrão na página inicial, geralmente é referenciado a partir do README ou da seção de Autores."
            },
            es: {
                why: "Enumera a los miembros del equipo principal, mantenedores y colaboradores de la comunidad. Proporciona reconocimiento claro y fomenta la participación.",
                how: "Guardado en la raíz del repositorio. Aunque no se resalta por defecto en la portada, se suele enlazar desde el README o la sección de Autores."
            }
        },
        'changelog-short': {
            visibility: 'auxiliary',
            dest: 'CHANGELOG-short.md',
            en: {
                why: "Documents all notable changes and version releases in a simplified, concise format. Perfect for fast-moving, smaller projects.",
                how: "Saved at the root level. Provides an easy-to-read chronological summary of updates that helps users track software changes."
            },
            pt: {
                why: "Documenta todas as alterações relevantes e versões lançadas de forma simplificada e concisa. Ideal para projetos menores ou de rápido desenvolvimento.",
                how: "Salvo na raiz do repositório. Fornece um resumo cronológico fácil de ler que ajuda os usuários a acompanharem a evolução do software."
            },
            es: {
                why: "Documenta los cambios notables y versiones en un formato simplificado y conciso. Ideal para proyectos pequeños o de iteración rápida.",
                how: "Guardado en la raíz del repositorio. Ofrece un resumen cronológico claro para seguir la evolución del software."
            }
        },
        'changelog': {
            visibility: 'auxiliary',
            dest: 'CHANGELOG.md',
            en: {
                why: "Documents all notable changes and version releases following the professional 'Keep a Changelog' standard. Crucial for open-source project management.",
                how: "Saved at the root level. Adheres to Semantic Versioning (SemVer), providing clear sections for Added, Changed, Deprecated, Removed, Fixed, and Security."
            },
            pt: {
                why: "Documenta todas as alterações e lançamentos de versão seguindo o padrão profissional 'Keep a Changelog'. Crucial para a governança de projetos de código aberto.",
                how: "Salvo na raiz. Adere ao Versionamento Semântico (SemVer), oferecendo seções claras para Adicionado, Alterado, Depreciado, Removido, Corrigido e Segurança."
            },
            es: {
                why: "Documenta todos los cambios y versiones siguiendo el estándar profesional 'Keep a Changelog'. Crucial para la gobernanza de proyectos open source.",
                how: "Guardado en la raíz. Sigue Versionado Semántico (SemVer), con secciones para Añadido, Modificado, Obsoleto, Eliminado, Corregido y Seguridad."
            }
        },
        'codeowners': {
            visibility: 'discreet',
            dest: '.github/CODEOWNERS',
            en: {
                why: "Defines which individuals or teams own specific paths in the repository. Automatically requests reviews from the respective owners when a PR touches their files.",
                how: "Discreet file saved under the `.github/` folder. It works silently in the background of PRs, prompting review assignments automatically without cluttering the homepage."
            },
            pt: {
                why: "Define quais indivíduos ou equipes são responsáveis por pastas ou arquivos específicos no repositório. Solicita revisões automaticamente quando um PR altera esses arquivos.",
                how: "Arquivo silencioso salvo dentro da pasta `.github/`. Funciona de forma discreta em segundo plano nos PRs, automatizando a atribuição de revisões sem poluir a página inicial."
            },
            es: {
                why: "Define qué personas o equipos son responsables de archivos o rutas específicas. Solicita revisiones automáticamente cuando un PR modifica sus archivos.",
                how: "Archivo discreto en `.github/`. Funciona en segundo plano en los PRs, asignando revisores automáticamente sin saturar la portada."
            }
        },
        'code_of_conduct': {
            visibility: 'prominent',
            dest: 'CODE_OF_CONDUCT.md',
            en: {
                why: "Establishes community standards, acceptable behaviors, and enforcement rules to ensure a safe, welcoming, and inclusive environment for everyone.",
                how: "Highly prominent. GitHub automatically detects this file and highlights it under the 'Community standards' checklist, showing a direct badge/link to it when users interact."
            },
            pt: {
                why: "Estabelece padrões de conduta da comunidade, comportamentos aceitáveis e regras para garantir um ambiente seguro, acolhedor e inclusivo para todos.",
                how: "Altamente destacado. O GitHub detecta automaticamente este arquivo e o destaca na checklist de 'Padrões de comunidade', criando um link/selo direto para acesso dos usuários."
            },
            es: {
                why: "Establece normas de convivencia, conductas aceptables y reglas para garantizar un entorno seguro, acogedor e inclusivo para todos.",
                how: "Altamente destacado. GitHub detecta este archivo automáticamente y lo resalta en la lista de estándares comunitarios con un enlace directo."
            }
        },
        'contributing-short': {
            visibility: 'prominent',
            dest: 'CONTRIBUTING-short.md',
            en: {
                why: "Provides quick, straightforward instructions on how to set up, build, and submit contributions. Ideal for projects that want to encourage fast, low-friction collaboration.",
                how: "Highly prominent on GitHub. A direct link is displayed on the issue-creation page and the pull-request-creation page, inviting users to read it first."
            },
            pt: {
                why: "Fornece instruções rápidas e diretas sobre como configurar, desenvolver e enviar contribuições. Ideal para projetos que buscam incentivar a colaboração rápida e sem barreiras.",
                how: "Altamente destacado no GitHub. Um link direto para ele é exibido na página de criação de novas issues e novos pull requests, convidando o usuário a lê-lo antes."
            },
            es: {
                why: "Ofrece instrucciones rápidas y directas sobre cómo configurar el entorno y enviar contribuciones. Ideal para proyectos ágiles y colaborativos.",
                how: "Muy destacado en GitHub. Se muestra un enlace directo en las páginas de creación de issues y pull requests para invitar a su lectura."
            }
        },
        'contributing': {
            visibility: 'prominent',
            dest: 'CONTRIBUTING.md',
            en: {
                why: "Provides comprehensive, professional step-by-step instructions on how to contribute, including coding style, testing commands, and git branch rules.",
                how: "Highly prominent. GitHub automatically detects and links this file inside key interaction pages (Issue creation, PR creation, and Community Checklist) to guide new developers."
            },
            pt: {
                why: "Fornece instruções passo a passo detalhadas e profissionais sobre como colaborar, cobrindo guias de estilo, comandos de teste e regras de criação de branch.",
                how: "Altamente destacado. O GitHub detecta e linka este arquivo automaticamente em páginas-chave de interação (Criação de Issues, Pull Requests e Checklist Comunitário)."
            },
            es: {
                why: "Proporciona pautas detalladas sobre cómo colaborar, abarcando estilo de código, comandos de prueba y reglas para ramas de git.",
                how: "Altamente destacado. GitHub lo detecta y enlaza automáticamente en la creación de issues, PRs y checklist de comunidad."
            }
        },
        'readme-long': {
            visibility: 'prominent',
            dest: 'README-long.md',
            en: {
                why: "The comprehensive entry point of your project. Features structural sections for architecture overview, performance benchmarks, and detailed API references.",
                how: "The most prominent file on GitHub. It is automatically rendered and displayed directly on the repository's home tab for anyone who visits the repository."
            },
            pt: {
                why: "O ponto de entrada completo do seu projeto. Apresenta seções estruturais para arquitetura detalhada, benchmarks de desempenho e referências de API completas.",
                how: "O arquivo mais destacado do GitHub. É automaticamente renderizado e exibido no centro da página principal do repositório para qualquer visitante."
            },
            es: {
                why: "El punto de entrada completo para tu proyecto. Incluye secciones para arquitectura detallada, rendimiento y referencias completas de API.",
                how: "El archivo principal de GitHub. Se renderiza automáticamente en la portada del repositorio para cualquier visitante."
            }
        },
        'readme-minimal': {
            visibility: 'prominent',
            dest: 'README-minimal.md',
            en: {
                why: "A lightweight README template focusing strictly on getting started, quick installation, and code examples. Perfect for small libraries or utilities.",
                how: "The most prominent file on GitHub. It is automatically rendered and displayed directly on the repository's home tab, offering a clean, direct overview."
            },
            pt: {
                why: "Um template de README leve focado estritamente em introdução rápida, instalação direta e exemplos de código. Perfeito para pequenas bibliotecas ou utilitários.",
                how: "O arquivo mais destacado do GitHub. É automaticamente renderizado e exibido no centro da página principal do repositório, oferecendo uma visão limpa e direta."
            },
            es: {
                why: "Plantilla ligera enfocada en primeros pasos, instalación rápida y ejemplos de código. Perfecta para librerías o utilidades compactas.",
                how: "El archivo principal de GitHub. Se renderiza directamente en la pestaña inicial, ofreciendo una visión clara y sin distracciones."
            }
        },
        'readme': {
            visibility: 'prominent',
            dest: 'README.md',
            en: {
                why: "A balanced, standard README template with sections for core features, technologies, setup instructions, and use cases. Highly versatile.",
                how: "The most prominent file on GitHub. It is automatically rendered and displayed directly on the repository's home tab, functioning as the storefront of your project."
            },
            pt: {
                why: "Um template de README padrão e equilibrado com seções para funcionalidades principais, tecnologias, instruções de setup e casos de uso. Altamente versátil.",
                how: "O arquivo mais destacado do GitHub. É automaticamente renderizado e exibido no centro da página principal do repositório, funcionando como a vitrine do seu projeto."
            },
            es: {
                why: "Plantilla estándar y equilibrada con secciones para características, tecnologías, instalación y casos de uso. Muy versátil.",
                how: "El archivo más destacado de GitHub. Se renderiza en la portada del repositorio, sirviendo como carta de presentación del proyecto."
            }
        },
        'roadmap': {
            visibility: 'auxiliary',
            dest: 'ROADMAP.md',
            en: {
                why: "Outlines the vision, future goals, and scheduled milestones of the project. Helps contributors align their work with the project's long-term plan.",
                how: "Saved at the root level. Highly visible when linked from the README, letting users easily see planned features, status updates, and backlog items."
            },
            pt: {
                why: "Descreve a visão, objetivos futuros e marcos (milestones) planejados para o projeto. Ajuda colaboradores a alinharem seus esforços com o futuro do projeto.",
                how: "Salvo na raiz do repositório. Muito útil para dar transparência ao projeto quando referenciado a partir do README, mostrando itens planejados e progresso."
            },
            es: {
                why: "Describe la visión, objetivos futuros e hitos planificados del proyecto. Ayuda a alinear las contribuciones con el plan a largo plazo.",
                how: "Guardado en la raíz del repositorio. Da transparencia al proyecto cuando se enlaza desde el README, mostrando el progreso planeado."
            }
        },
        'security': {
            visibility: 'prominent',
            dest: 'SECURITY.md',
            en: {
                why: "Defines the security policy, supported versions, and instructions on how to report a vulnerability privately. Crucial for open-source safety.",
                how: "Prominent integration. GitHub displays a 'Security Policy' link under the repository Security tab and directly inside the new issue page warning users."
            },
            pt: {
                why: "Define a política de segurança, quais versões são suportadas e instruções sobre como reportar uma vulnerabilidade de forma privada e segura. Crucial para projetos públicos.",
                how: "Integração destacada. O GitHub exibe um link direto para a política de segurança na aba 'Security' e opcionalmente em avisos na página de criação de novas issues."
            },
            es: {
                why: "Define la política de seguridad, versiones con soporte e instrucciones para reportar vulnerabilidades de forma privada y responsable.",
                how: "Integración destacada. GitHub muestra un enlace a la política de seguridad en la pestaña Security y en avisos al abrir nuevas issues."
            }
        },
        'support': {
            visibility: 'prominent',
            dest: 'SUPPORT.md',
            en: {
                why: "Gives users clear channels for asking questions, getting help, and reporting issues, offloading redundant inquiries from main contribution tracks.",
                how: "GitHub detects it automatically, adding a direct support button/link when users open new issues, guiding them to appropriate community platforms."
            },
            pt: {
                why: "Direciona os usuários aos canais oficiais para tirar dúvidas, obter suporte ou suporte comercial, evitando o acúmulo de perguntas comuns nas issues principais.",
                how: "O GitHub detecta automaticamente, gerando um link e botão de suporte destacado na aba de issues, guiando os usuários para canais adequados."
            },
            es: {
                why: "Ofrece canales claros para resolver dudas, buscar ayuda o soporte comercial, evitando acumular preguntas frecuentes en el flujo principal de issues.",
                how: "GitHub lo detecta automáticamente y genera un botón de soporte destacado al abrir nuevas issues, guiando a la comunidad."
            }
        },
        'docs-templates-adr': {
            visibility: 'auxiliary',
            dest: 'docs/adr/0001-template.md',
            en: {
                why: "Captures important architectural decisions made along with their context, rationale, and consequences. Essential for long-term project maintainability.",
                how: "Kept inside the documentation directory (e.g. `docs/adr/`). It acts as a history log of decisions, accessible by contributors and senior developers."
            },
            pt: {
                why: "Registra decisões de arquitetura importantes, incluindo contexto, justificativa e consequências. Essencial para a manutenibilidade de longo prazo do projeto.",
                how: "Armazenado na pasta de documentação (ex: `docs/adr/`). Funciona como um histórico de decisões críticas, acessível para desenvolvedores e arquitetos."
            },
            es: {
                why: "Registra decisiones clave de arquitectura junto con su contexto, justificación y consecuencias. Vital para el mantenimiento a largo plazo.",
                how: "Guardado en el directorio de documentación (`docs/adr/`). Funciona como historial de decisiones para colaboradores y arquitectos."
            }
        },
        'docs-templates-citation': {
            visibility: 'prominent',
            dest: 'CITATION.cff',
            en: {
                why: "Standard format to define citation metadata for your software. Vital for academic projects, scientific packages, or research-driven open-source code.",
                how: "Highly integrated. When GitHub detects a `CITATION.cff` file in the root, it automatically adds a 'Cite this repository' button on the sidebar."
            },
            pt: {
                why: "Formato padrão para metadados de citação do software. Fundamental para projetos acadêmicos, pacotes científicos ou projetos originados em pesquisa.",
                how: "Altamente integrado. Quando o GitHub detecta o arquivo `CITATION.cff` na raiz, ele adiciona automaticamente o botão 'Cite este repositório' na barra lateral direita."
            },
            es: {
                why: "Formato estándar para metadatos de citación de software. Esencial para proyectos académicos, científicos o de investigación.",
                how: "Altamente integrado. Al detectar un archivo `CITATION.cff` en la raíz, GitHub añade el botón 'Cite this repository' en la barra lateral."
            }
        },
        'docs-templates-governance': {
            visibility: 'auxiliary',
            dest: 'GOVERNANCE.md',
            en: {
                why: "Clarifies who makes decisions, how they are made, roles (leads, maintainers, contributors), and the process for resolving disagreements.",
                how: "Saved at the root or within community folders. Promotes transparency and trust, showing that the project is managed fairly and professionally."
            },
            pt: {
                why: "Esclarece quem toma decisões, como são tomadas, os papéis (líderes, mantenedores, colaboradores) e o processo para resolver divergências de forma justa.",
                how: "Salvo na raiz do repositório ou pasta comunitária. Promove transparência e credibilidade profissional, mostrando governança clara."
            },
            es: {
                why: "Aclara quién toma las decisiones, los roles del equipo (líderes, mantenedores, colaboradores) y el proceso de resolución de discrepancias.",
                how: "Guardado en la raíz o carpetas de comunidad. Fomenta la transparencia y credibilidad al formalizar la gestión del proyecto."
            }
        },
        'github-templates-funding': {
            visibility: 'discreet',
            dest: '.github/FUNDING.yml',
            en: {
                why: "Enables sponsor links (GitHub Sponsors, Patreon, Open Collective, Ko-fi, etc.) for your repository to support monetization or crowdfunding.",
                how: "Discreet but highly effective. It displays a prominent pink 'Sponsor' heart button at the top of the repository home page and when users view issues/PRs."
            },
            pt: {
                why: "Habilita links de patrocínio (GitHub Sponsors, Patreon, Open Collective, Ko-fi, etc.) para incentivar doações e apoiar financeiramente o projeto.",
                how: "Discreto mas extremamente funcional. Gera o botão de coração rosa 'Sponsor' no topo do repositório e na barra lateral de issues/PRs."
            },
            es: {
                why: "Habilita enlaces de patrocinio (GitHub Sponsors, Open Collective, Patreon, Ko-fi, etc.) para incentivar donaciones al proyecto.",
                how: "Discreto pero muy visible. Genera el botón rosa 'Sponsor' en la portada del repositorio y en la barra lateral de issues y PRs."
            }
        },
        'github-templates-pull_request_template': {
            visibility: 'discreet',
            dest: '.github/PULL_REQUEST_TEMPLATE.md',
            en: {
                why: "Standardizes pull request descriptions, ensuring developers provide context, testing proof, checkboxes, and mention related issues.",
                how: "Completely automated. When a contributor creates a new Pull Request, this template is automatically loaded and pre-fills the description box."
            },
            pt: {
                why: "Padroniza as descrições de pull requests, garantindo que desenvolvedores forneçam contexto, comprovação de testes executados e linkem as issues.",
                how: "Completamente automatizado. Ao abrir um novo Pull Request, o GitHub preenche automaticamente a caixa de texto com este template."
            },
            es: {
                why: "Estandariza las descripciones de pull requests, asegurando contexto, pruebas realizadas, checklists y enlace a issues relacionadas.",
                how: "Completamente automatizado. Al abrir un nuevo Pull Request, GitHub precarga automáticamente este contenido en el formulario."
            }
        },
        'github-templates-issue_template-bug_report': {
            visibility: 'discreet',
            dest: '.github/ISSUE_TEMPLATE/bug_report.md',
            en: {
                why: "Structures bug reports with reproduction steps, expected behavior, screenshots, and environment details. Eliminates vague 'it does not work' issues.",
                how: "Discreet until needed. When clicking 'New Issue', users are presented with a selection menu showing this template alongside others."
            },
            pt: {
                why: "Estrutura relatos de bugs com passos de reprodução, comportamento esperado, capturas de tela e ambiente. Elimina relatos vagos do tipo 'não funciona'.",
                how: "Discreto até o uso. Ao clicar em 'New Issue', o GitHub mostra um menu de opções onde o usuário escolhe este template para preencher."
            },
            es: {
                why: "Estructura reportes de errores con pasos de reproducción, comportamiento esperado, capturas y entorno. Evita reportes ambiguos.",
                how: "Discreto hasta su uso. Al pulsar 'New Issue', GitHub presenta este formulario estructurado para ser completado por el usuario."
            }
        },
        'github-templates-issue_template-config': {
            visibility: 'discreet',
            dest: '.github/ISSUE_TEMPLATE/config.yml',
            en: {
                why: "Configures the issue picker behavior. Allows disabling blank issues to enforce templates, and directs users to custom external links (Discussions, Security Policy).",
                how: "Under-the-hood configuration. Runs in the background of the issue creation system, forcing template utilization and styling the options page."
            },
            pt: {
                why: "Configura a página de seleção de issues. Permite desativar issues em branco (forçando templates) e redireciona usuários para links específicos de suporte.",
                how: "Configuração de bastidores. Funciona nos bastidores do sistema de issues do GitHub, moldando o comportamento e botões da página de nova issue."
            },
            es: {
                why: "Configura el selector de issues. Permite deshabilitar issues vacías y redirigir a enlaces de soporte (Discussions, Security Policy).",
                how: "Configuración interna. Opera en el sistema de issues de GitHub personalizando opciones y forzando el uso de formularios."
            }
        },
        'github-templates-issue_template-feature_request': {
            visibility: 'discreet',
            dest: '.github/ISSUE_TEMPLATE/feature_request.md',
            en: {
                why: "Structures feature suggestions, requiring users to explain the motivation, context, mockups, and alternatives considered before proposing.",
                how: "Interactive template. Displayed in the 'New Issue' menu, letting contributors propose features in a well-defined format."
            },
            pt: {
                why: "Estrutura sugestões de funcionalidades, exigindo motivação, contexto, mockups e alternativas consideradas antes do envio.",
                how: "Template interativo. Aparece como opção na página de novas issues, permitindo sugestões organizadas e padronizadas."
            },
            es: {
                why: "Estructura propuestas de funciones, solicitando motivación, contexto, mockups y alternativas antes de proponer cambios.",
                how: "Plantilla interactiva. Aparece en el menú de nuevas issues de GitHub para recibir ideas ordenadas."
            }
        },
        'github-templates-issue_template-question': {
            visibility: 'discreet',
            dest: '.github/ISSUE_TEMPLATE/question.md',
            en: {
                why: "Gives users a structured format to ask questions, helping maintainers categorize and tag them properly under the 'question' label.",
                how: "Offered in the 'New Issue' menu, keeping help requests organized if your project doesn't have GitHub Discussions enabled."
            },
            pt: {
                why: "Fornece um formato estruturado para tirar dúvidas, ajudando mantenedores a categorizá-las e rotulá-las corretamente sob a etiqueta 'question'.",
                how: "Opção no menu de novas issues, mantendo dúvidas organizadas se seu projeto não tiver as Discussões do GitHub ativas."
            },
            es: {
                why: "Proporciona un formato estructurado para dudas, ayudando a clasificarlas bajo la etiqueta 'question'.",
                how: "Disponible en el menú de nuevas issues, manteniendo las consultas ordenadas si el repositorio no usa GitHub Discussions."
            }
        },
        'github-templates-workflows-ci': {
            visibility: 'discreet',
            dest: '.github/workflows/ci.yml',
            en: {
                why: "Automates testing and building on every commit/PR. Prevents broken code from merging, ensuring repository stability (Continuous Integration).",
                how: "Discreet execution. Works automatically via GitHub Actions, showing a green checkmark or red cross next to commits and PRs."
            },
            pt: {
                why: "Automatiza a execução de testes e build a cada commit/PR. Impede que códigos quebrados sejam mesclados, garantindo a integridade (Integração Contínua).",
                how: "Execução silenciosa. Roda via GitHub Actions, exibindo um selo verde de sucesso ou vermelho de falha nos commits e pull requests."
            },
            es: {
                why: "Automatiza la ejecución de pruebas y compilación en cada commit/PR. Previene errores de integración y garantiza estabilidad.",
                how: "Ejecución silenciosa en GitHub Actions, mostrando el estado de verificación en commits y pull requests."
            }
        },
        'github-templates-workflows-lint': {
            visibility: 'discreet',
            dest: '.github/workflows/lint.yml',
            en: {
                why: "Enforces consistent code styling, formatting, and syntax rules across all contributions automatically before code review.",
                how: "Silently runs as a GitHub Action on push/PR events. Blocks or warns on style issues and displays validation status in PR checks."
            },
            pt: {
                why: "Garante a consistência de estilo, formatação e sintaxe de código em todas as contribuições de forma automática antes da revisão humana.",
                how: "Roda silenciosamente como um workflow do GitHub Actions em pushes/PRs, avisando ou bloqueando desvios de estilo diretamente no PR."
            },
            es: {
                why: "Garantiza reglas uniformes de estilo, formato y sintaxis en todas las contribuições antes de la revisión de código.",
                how: "Se ejecuta en segundo plano en GitHub Actions, alertando o bloqueando problemas de estilo en los checks de PR."
            }
        },
        'github-templates-workflows-release': {
            visibility: 'discreet',
            dest: '.github/workflows/release.yml',
            en: {
                why: "Automates compiling draft changelogs and publishing releases on tag pushes. Eliminates repetitive manual steps in deployment cycles.",
                how: "Triggered automatically when pushing tags starting with 'v*'. Generates release drafts and attaches release builds silently."
            },
            pt: {
                why: "Automatiza a geração de notas de atualização e publicação de releases quando tags são enviadas. Elimina o trabalho manual no ciclo de lançamento.",
                how: "Disparado ao enviar tags começando com 'v*'. Cria rascunhos de release e anexa builds automaticamente no GitHub Actions."
            },
            es: {
                why: "Automatiza la compilación de notas de versión y publicación de releases al enviar tags. Elimina pasos manuales en el despliegue.",
                how: "Se dispara al enviar tags con formato 'v*'. Genera borradores de release y adjunta artefactos automáticamente."
            }
        }
    };

    function renderTemplateInfoBox(id) {
        const infoBox = document.getElementById('template-info-box');
        if (!infoBox) return;

        const info = templateExplanations[id];
        if (!info) {
            infoBox.style.display = 'none';
            return;
        }

        const lang = state.lang;
        const details = info[lang] || info['en'];
        
        const labels = {
            en: {
                why: "Why Use & Utility",
                how: "GitHub Mechanism & Visibility",
                prominent: "Prominent (High Visibility)",
                discreet: "Discreet (Internal/System)",
                auxiliary: "Auxiliary (General Doc)"
            },
            pt: {
                why: "Por que usar & Utilidade",
                how: "Mecanismo & Visibilidade no GitHub",
                prominent: "Destacado (Alta Visibilidade)",
                discreet: "Discreto (Interno/Sistema)",
                auxiliary: "Auxiliar (Doc Geral)"
            },
            es: {
                why: "Por qué usar y utilidad",
                how: "Mecanismo y visibilidad en GitHub",
                prominent: "Destacado (Alta Visibilidad)",
                discreet: "Discreto (Interno/Sistema)",
                auxiliary: "Auxiliar (Doc General)"
            }
        };

        const currentLabels = labels[lang] || labels['en'];

        let badgeClass = 'badge-auxiliary';
        let badgeIcon = 'help-circle';
        let badgeText = currentLabels.auxiliary;

        if (info.visibility === 'prominent') {
            badgeClass = 'badge-prominent';
            badgeIcon = 'sparkles';
            badgeText = currentLabels.prominent;
        } else if (info.visibility === 'discreet') {
            badgeClass = 'badge-discreet';
            badgeIcon = 'cpu';
            badgeText = currentLabels.discreet;
        }

        infoBox.innerHTML = `
            <div class="info-box-header">
                <div class="info-box-meta">
                    <span class="info-box-badge ${badgeClass}">
                        <i data-lucide="${badgeIcon}"></i>
                        <span>${badgeText}</span>
                    </span>
                    <span class="info-box-path">
                        <i data-lucide="folder"></i>
                        <code>${info.dest}</code>
                    </span>
                </div>
            </div>
            <div class="info-box-grid">
                <div class="info-box-col">
                    <h6 class="info-box-col-title why-title">
                        <i data-lucide="help-circle"></i>
                        <span>${currentLabels.why}</span>
                    </h6>
                    <p>${details.why}</p>
                </div>
                <div class="info-box-col">
                    <h6 class="info-box-col-title how-title">
                        <i data-lucide="eye"></i>
                        <span>${currentLabels.how}</span>
                    </h6>
                    <p>${details.how}</p>
                </div>
            </div>
        `;
        
        infoBox.style.display = 'block';
        lucide.createIcons();
    }

    function loadContent(id) {
        const page = pages[id];
        if (!page) return;

        state.currentPage = id;
        state.currentTemplate = null;
        pageTitle.textContent = page.title;
        const rootCategory = id === 'getting-started' || id === 'installation' || id === 'whats-new' ? 'guide' : 'reference';
        const rootLabels = {
            guide: { en: 'Guide', pt: 'Guia', es: 'Guía' },
            reference: { en: 'Reference', pt: 'Referência', es: 'Referencia' }
        };
        breadcrumbRoot.textContent = (rootLabels[rootCategory] && rootLabels[rootCategory][state.lang]) || rootLabels[rootCategory]['en'];
        
        const content = page.content[state.lang] || page.content['en'];
        
        const infoBox = document.getElementById('template-info-box');
        if (infoBox) {
            infoBox.style.display = 'none';
        }

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
        const templateCategories = {
            GitHub: { en: 'GitHub Templates', pt: 'Templates do GitHub', es: 'Plantillas de GitHub' },
            Doc: { en: 'Project Documentation', pt: 'Documentação do Projeto', es: 'Documentación del Proyecto' }
        };
        const catKey = t.category === 'GitHub' ? 'GitHub' : 'Doc';
        breadcrumbRoot.textContent = (templateCategories[catKey] && templateCategories[catKey][state.lang]) || templateCategories[catKey]['en'];
        
        content = applyMocks(content);
        
        // Render the dynamic template explanation box
        renderTemplateInfoBox(id);

        if (state.viewMode === 'code') {
            renderCode(content);
        } else {
            renderMarkdown(content);
        }
    }

    function renderCode(code) {
        markdownContainer.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
        const tocMsg = {
            en: 'Table of contents hidden in code view.',
            pt: 'Sumário oculto na visualização de código.',
            es: 'Tabla de contenido oculta en la vista de código.'
        }[state.lang] || 'Table of contents hidden in code view.';
        tocNav.innerHTML = `<p style="color: var(--text-muted); font-size: 0.8rem;">${tocMsg}</p>`;
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
            const emptyMsg = {
                en: 'No headings on this page.',
                pt: 'Nenhum título nesta página.',
                es: 'Sin encabezados en esta página.'
            }[state.lang] || 'No headings on this page.';
            tocNav.innerHTML = `<p style="color: var(--text-muted); font-size: 0.8rem;">${emptyMsg}</p>`;
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
