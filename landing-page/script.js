const templates = [
    {
        id: 'readme',
        title: 'README.md',
        content: `# Project Name

> A short description of your project.

## 📦 Installation

\`\`\`bash
npm install my-project
\`\`\`

## 🚀 Usage

\`\`\`javascript
const myProject = require('my-project');
myProject.doSomething();
\`\`\`

## 📄 License

This project is licensed under the MIT License.`
    },
    {
        id: 'contributing',
        title: 'CONTRIBUTING.md',
        content: `# Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Pull Request Process

1. Fork the repo and create your branch from \`main\`.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Issue that pull request!`
    },
    {
        id: 'changelog',
        title: 'CHANGELOG.md',
        content: `# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-01-01

### Added
- Initial release
- Awesome features`
    },
    {
        id: 'code_of_conduct',
        title: 'CODE_OF_CONDUCT.md',
        content: `# Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone.`
    },
    {
        id: 'security',
        title: 'SECURITY.md',
        content: `# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const templateList = document.getElementById('templateList');
    const previewTitle = document.getElementById('previewTitle');
    const rawView = document.getElementById('rawView');
    const renderedView = document.getElementById('renderedView');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const copyBtn = document.getElementById('copyBtn');
    const cliCommand = document.getElementById('cliCommand');

    let activeTemplate = templates[0];
    let activeView = 'raw';

    // Initialize Template List
    templates.forEach(t => {
        const item = document.createElement('div');
        item.className = `template-item ${t.id === activeTemplate.id ? 'active' : ''}`;
        item.textContent = t.title;
        item.onclick = () => selectTemplate(t, item);
        templateList.appendChild(item);
    });

    function selectTemplate(template, itemEl) {
        activeTemplate = template;
        
        // Update UI
        document.querySelectorAll('.template-item').forEach(el => el.classList.remove('active'));
        itemEl.classList.add('active');
        
        previewTitle.textContent = template.title;
        updateContent();
    }

    function updateContent() {
        // Update Raw
        rawView.textContent = activeTemplate.content;
        
        // Update Rendered (using marked)
        if (window.marked) {
            renderedView.innerHTML = marked.parse(activeTemplate.content);
        } else {
            renderedView.innerHTML = '<p>Markdown parser not loaded.</p>';
        }
    }

    // View Toggle Logic
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            activeView = view;
            
            // Update Buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update Panes
            document.querySelectorAll('.view-pane').forEach(el => el.classList.remove('active'));
            document.getElementById(`${view}View`).classList.add('active');
        });
    });

    // Copy Command
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(cliCommand.textContent);
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = 'Copied! ✅';
        setTimeout(() => {
            copyBtn.innerHTML = originalHtml;
        }, 2000);
    });

    // Initial Render
    updateContent();
});
