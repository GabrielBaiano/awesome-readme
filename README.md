<p align="center">
  <img src="./Awesome.png" alt="Awesome README Templates Logo" width="200"/>
</p>

<h1 align="center">Awesome README Templates</h1>

<p align="center">
  <strong>Professional and reusable README templates for GitHub projects.</strong><br>
  <em>Create stunning documentation in minutes with our bilingual templates (EN/PT).</em>
</p>

<p align="center">
  <a href="/README-pt.md" target="_blank">🇧🇷 Português</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/awesome-readme-templates" target="_blank">📚 NPM Package</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GabrielBaiano/awesome-readme/issues" target="_blank">🐛 Report Bug</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GabrielBaiano" target="_blank">💼 GitHub Profile</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/awesome-readme-templates" target="_blank">
    <img src="https://img.shields.io/npm/v/awesome-readme-templates?style=flat-square" alt="NPM Version">
  </a>
  <a href="https://github.com/GabrielBaiano/awesome-readme/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/GabrielBaiano/awesome-readme?style=flat-square" alt="License">
  </a>
  <a href="https://github.com/GabrielBaiano/awesome-readme/stargazers">
    <img src="https://img.shields.io/github/stars/GabrielBaiano/awesome-readme?style=social" alt="GitHub stars">
  </a>
</p>

---

**Awesome README Templates** is a collection of high-quality, bilingual (English/Portuguese) documentation templates designed to help developers create professional project documentation effortlessly. It includes a powerful CLI tool to generate and configure your files automatically.

## 🚀 Features

*   **🧙 Interactive CLI**: A wizard-style interface to guide you through the setup.
*   **🇧🇷 Bilingual Support**: Full support for English and Portuguese (Brazil).
*   **� Smart Organization**: In bilingual mode, Portuguese files are automatically placed in a `pt/` folder.
*   **🛡️ Safety First**: The CLI checks for existing files to prevent accidental overwrites.
*   **�📦 Comprehensive Collection**: Includes README, CONTRIBUTING, CHANGELOG, SECURITY, and more.
*   **📜 License Manager**: Choose from a wide range of open-source licenses (MIT, Apache, GPL, etc.).
*   **🤖 Automated Setup**: Support for CLI flags for CI/CD or quick setups.

## 📥 Installation

You can use the tool directly via `npx` without installation:

```bash
npx awesome-readme-templates
```

Or install it globally:

```bash
npm install -g awesome-readme-templates
```

## 📖 Usage

### Interactive Mode (Wizard)
Run the command and follow the prompts:

```bash
awesome-readme
```

You will be asked to:
1.  **Select Language**: English, Portuguese, or Both.
2.  **Select License**: Choose from a curated list.
3.  **Select Extras**: Add Contributing Guide, Changelog, Roadmap, etc.

### Add Specific Templates
Need just one file? Use the "Add Specific Templates" mode in the menu to pick exactly what you need.

### Automated Mode (CLI Flags)
Perfect for scripts or power users.

```bash
# Example: Create a bilingual project with MIT license and Roadmap
npx awesome-readme-templates --lang=both --license=mit --with-roadmap
```

**Available Flags:**
*   `--lang <en|pt|both>`: Set language strategy.
*   `--license <name>`: Select license (e.g., mit, apache).
*   `--all`: Install all available templates.
*   `--with-<template>`: Install specific template (e.g., `--with-contributing`, `--with-security`).

## 📂 Included Templates

*   **README.md**: The face of your project.
*   **CONTRIBUTING.md**: Guidelines for contributors.
*   **CHANGELOG.md**: Track project history.
*   **CODE_OF_CONDUCT.md**: Community standards.
*   **SECURITY.md**: Security policy.
*   **SUPPORT.md**: Support channels.
*   **ROADMAP.md**: Project future plans.
*   **AUTHORS.md**: Project credits.
*   **GOVERNANCE.md**: Governance model.
*   **CITATION.cff**: Citation file.
*   **.github/**: Issue and PR templates.

## 🤝 Contributing

Contributions are welcome! Please check our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/GabrielBaiano" target="_blank">GabrielBaiano</a>
</p>
