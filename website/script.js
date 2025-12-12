
// State Management
const state = {
    config: null,
    mainLang: 'en',         // Default main language
    additionalLangs: new Set(),
    previewLang: 'en',      // Current visual language
    selectedTemplates: new Set(['readme']), // Default selection
    activePreview: 'readme'
};

const elements = {
    templateList: document.getElementById('templateList'),
    codeBlock: document.getElementById('cliCommand'),
    copyBtn: document.getElementById('copyBtn'),
    previewTitle: document.getElementById('previewTitle'),
    rawView: document.getElementById('rawView'),
    renderedView: document.getElementById('renderedView'),
    toggleBtns: document.querySelectorAll('.toggle-btn'),
    langList: document.querySelector('.language-list') // Start looking for this immediately
};

async function init() {
    try {
        const response = await fetch('./data.json');
        state.config = await response.json();
        
        setupEventListeners();
        renderLanguageList(); // Dynamic render
        renderTemplateList(); // Dynamic render
        
        // Initial Update
        updatePreview();
        updateCommand();
    } catch (e) {
        console.error('Failed to load data:', e);
        if (elements.rawView) elements.rawView.textContent = 'Error loading configuration data. Please check console.';
    }
}

function setupEventListeners() {
    // Top-right View Toggles (Raw / Preview)
    elements.toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.view === 'raw') {
                elements.rawView.style.display = 'block';
                elements.renderedView.style.display = 'none';
            } else {
                elements.rawView.style.display = 'none';
                elements.renderedView.style.display = 'block';
            }
        });
    });

    // Copy Command
    if (elements.copyBtn) {
        elements.copyBtn.addEventListener('click', () => {
             navigator.clipboard.writeText(elements.codeBlock.textContent);
             const original = elements.copyBtn.innerHTML;
             elements.copyBtn.textContent = 'Copied!';
             setTimeout(() => elements.copyBtn.innerHTML = original, 2000);
        });
    }
}

// ==========================================
// 1. DYNAMIC LANGUAGES
// ==========================================
function renderLanguageList() {
    if (!elements.langList || !state.config.languages) return;
    elements.langList.innerHTML = '';

    Object.entries(state.config.languages).forEach(([code, langObj]) => {
        const item = document.createElement('div');
        item.className = 'language-item';
        // Add styling classes based on state
        updateLanguageItemStyle(item, code);

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'template-checkbox';
        checkbox.checked = (state.mainLang === code) || state.additionalLangs.has(code);
        
        checkbox.onchange = (e) => handleLanguageChange(code, e.target.checked);
        item.appendChild(checkbox);

        // Spacer
        const sp = document.createElement('span');
        sp.style.width = '10px';
        item.appendChild(sp);

        // Flag & Name (Clicking these switches PREVIEW only? Or also selects? 
        // User wants "Automatic". So clicking the row should probably Select AND Preview.)
        
        const contentSpan = document.createElement('span');
        contentSpan.style.flex = '1';
        contentSpan.style.display = 'flex';
        contentSpan.style.alignItems = 'center';
        contentSpan.style.gap = '8px';
        contentSpan.innerHTML = `<span class="lang-flag">${getFlag(code)}</span> <span>${langObj.name}</span>`;
        
        // Interaction: Clicking the text
        contentSpan.onclick = () => {
            // If not selected, select it as main (or additional)?
            // User request: "mude automatico".
            // Let's make clicking the text set the Preview Language.
            setPreviewLanguage(code);
        };
        item.appendChild(contentSpan);

        elements.langList.appendChild(item);
    });
}

function updateLanguageItemStyle(item, code) {
    item.className = 'language-item'; // reset
    if (state.mainLang === code) item.classList.add('selected-main');
    else if (state.additionalLangs.has(code)) item.classList.add('selected-additional');
    
    if (state.previewLang === code) item.classList.add('preview-active');
}

function handleLanguageChange(code, isChecked) {
    if (isChecked) {
        if (!state.mainLang) {
            state.mainLang = code;
             // AUTOMATIC: If I pick a main lang, show it!
            setPreviewLanguage(code);
        } else {
            state.additionalLangs.add(code);
        }
    } else {
        if (state.mainLang === code) {
            state.mainLang = null;
            // Promote next additional
            if (state.additionalLangs.size > 0) {
                const [next] = state.additionalLangs;
                state.additionalLangs.delete(next);
                state.mainLang = next;
                setPreviewLanguage(next); // Auto-switch
            } else {
                // No lang selected? Fallback preview to EN
                setPreviewLanguage('en');
            }
        } else {
            state.additionalLangs.delete(code);
        }
    }
    
    // Re-render to update checkbox states and colors
    renderLanguageList(); // Full re-render is simplest for consistency
    updateCommand();
}

function setPreviewLanguage(code) {
    state.previewLang = code;
    // Update visuals
    const items = document.querySelectorAll('.language-item');
    items.forEach(el => {
        // We can't easily map back from DOM to code unless we store it.
        // renderLanguageList handles styles, let's just re-render or toggle classes?
        // Re-rendering is safe and fast enough.
    });
    renderLanguageList();
    updatePreview(); // Refresh content
}

function getFlag(code) {
    // Could come from config, fallback to map
    if (state.config.languages[code] && state.config.languages[code].badge) {
        // config has 'En', 'Pt--Br'. Map to emoji?
    }
    const map = { 'en': '🇺🇸', 'pt': '🇧🇷', 'es': '🇪🇸', 'fr': '🇫🇷', 'de': '🇩🇪', 'it': '🇮🇹' };
    return map[code] || '🌐';
}

// ==========================================
// 2. DYNAMIC TEMPLATES
// ==========================================
function renderTemplateList() {
    const list = elements.templateList;
    if (!list) return;
    list.innerHTML = '';

    // 1. README (Core)
    // User complained "cannot select README".
    // We will render it fundamentally like any other template, but checked by default.
    const readmeItem = createTemplateRow({
        id: 'readme',
        name: 'README.md',
        type: 'file'
    });
    list.appendChild(readmeItem);

    // 2. Dynamic Groups/Items from Config
    if (state.config.templates) {
        state.config.templates.forEach(t => {
            if (t.type === 'group') {
                const header = document.createElement('div');
                header.className = 'sidebar-group-header';
                header.textContent = t.name;
                list.appendChild(header);

                t.children.forEach(child => {
                    list.appendChild(createTemplateRow(child));
                });
            } else {
                list.appendChild(createTemplateRow(t));
            }
        });
    }
}

function createTemplateRow(item) {
    const div = document.createElement('div');
    div.className = 'template-item';
    if (state.activePreview === item.id) div.classList.add('active');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'template-checkbox';
    
    // Logic: Is it selected?
    checkbox.checked = state.selectedTemplates.has(item.id);
    
    checkbox.onchange = (e) => {
        if (e.target.checked) state.selectedTemplates.add(item.id);
        else state.selectedTemplates.delete(item.id);
        
        // Automatic: If I select it, I probably want to see it?
        if (e.target.checked) {
            setActivePreview(item.id);
        }
        updateCommand();
    };
    div.appendChild(checkbox);

    // Label
    const label = document.createElement('span');
    label.textContent = item.name;
    label.style.flex = '1';
    label.style.marginLeft = '8px';
    
    label.onclick = () => {
        setActivePreview(item.id);
    };
    div.appendChild(label);

    return div;
}

function setActivePreview(id) {
    state.activePreview = id;
    renderTemplateList(); // Re-render to show active highlight
    updatePreview();
}

// ==========================================
// 3. PREVIEW & CONTENT
// ==========================================
// This needs to be robust. Content comes from `data.json` which has `content: { en: "...", pt: "..." }`
function updatePreview() {
    let content = "";
    let title = "";

    // 1. Identify active item
    if (state.activePreview === 'readme') {
        title = "README.md";
        content = getReadmeContent();
    } else {
        const item = findTemplateById(state.activePreview);
        if (item) {
            title = item.name;
            // Content resolution
            if (item.content && typeof item.content === 'object') {
                // Try preview language -> fallback English -> fallback first key
                content = item.content[state.previewLang] || item.content['en'] || Object.values(item.content)[0] || "";
            } else if (typeof item.content === 'string') {
                content = item.content;
            } else {
                content = "(No content available for this template)";
            }
        }
    }

    // 2. Render
    if (elements.previewTitle) elements.previewTitle.textContent = title;
    
    if (elements.rawView) elements.rawView.textContent = content;
    
    if (elements.renderedView && window.marked) {
        elements.renderedView.innerHTML = marked.parse(content);
    }
}

function getReadmeContent() {
    // Check config for readme
    if (state.config.readme) {
        let text = state.config.readme[state.previewLang] || state.config.readme['en'] || "";
        return injectDynamicLinks(text);
    }
    return "# Awesome README\n\nLoading content...";
}

function injectDynamicLinks(text) {
    // Generate links for OTHER selected languages
    const activeLangs = [];
    if (state.mainLang) activeLangs.push(state.mainLang);
    state.additionalLangs.forEach(l => activeLangs.push(l));

    const links = activeLangs
        .filter(l => l !== state.previewLang)
        .map(l => {
            const flag = getFlag(l);
            const name = state.config.languages[l] ? state.config.languages[l].name : l.toUpperCase();
            return `<a href="./docs/${l}/README.md">${flag} ${name}</a>`;
        })
        .join(' &nbsp;|&nbsp; ');

    // Replacement Logic attempting to find where links usually go
    // Looking for the "Language" bar pattern.
    // Standard template has something like: <a href="...">🇧🇷 Português</a>
    // We'll replace the entire language navigation block if we can find a robust anchor.
    // Or we just look for ONE known link and replace that line?
    
    if (links.length > 5) { // If we have links to show
         // Simplistic replace for demonstration: replace the Portuguese link in EN template
         // or English link in PT template. 
         const regex = /<p align="center">\s*<a href=".*README.md".*?>.*?<\/a>.*<\/p>/s; 
         // This regex is risky. Let's just do specific replacement.
         
         text = text.replace(/<a href=".*other-languages.*README.md".*?<\/a>/, links);
         text = text.replace(/<a href="\.\.\/\.\.\/README.md".*?<\/a>/, links);
    }
    
    return text;
}

// ==========================================
// 4. UTILS & COMMAND
// ==========================================
function findTemplateById(id, list = state.config.templates) {
    if (!list) return null;
    for (const t of list) {
        if (t.id === id) return t;
        if (t.children) {
            const found = findTemplateById(id, t.children);
            if (found) return found;
        }
    }
    return null;
}

function updateCommand() {
    const parts = ['npx', 'awesome-readme'];

    if (state.mainLang && state.mainLang !== 'en') {
        parts.push(`--main-lang ${state.mainLang}`);
    }

    state.additionalLangs.forEach(l => parts.push(`--lang ${l}`));

    state.selectedTemplates.forEach(id => {
        if (id !== 'readme') parts.push(`--with-${id}`);
    });

    if (elements.codeBlock) elements.codeBlock.textContent = parts.join(' ');
}

// Boot
init();
