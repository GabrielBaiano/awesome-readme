<p align="center">
  <img src="Awesome.png" alt="Awesome Readme Templates Logo" width="200"/>
</p>

<h1 align="center">Awesome Readme Templates</h1>

<p align="center">
  <strong>Professional and reusable README templates for GitHub projects.</strong><br>
  <em>Create stunning documentation in minutes with our multilingual templates (EN/PT/ES).</em>
</p>

<p align="center">
  <a href="pt/README.md">🇧🇷 Português</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="es/README.md">🇪🇸 Español</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://awesome-readme-nu.vercel.app/" target="_blank">🌐 Live Dashboard</a>
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
  <a href="https://buymeacoffee.com/GabrielBaiano" target="_blank">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=flat-square&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee">
  </a>
</p>

---




**Awesome Readme Templates** helps you create professional documentation for your projects without the hassle of writing everything from scratch. Choose from a variety of templates and get started instantly.

**[Check the live site here!](https://awesome-readme-nu.vercel.app/)**


## 🎓 Main Features

* **Multilingual Support**: Ready-to-use templates in English, Portuguese (PT-BR), and Spanish (ES).
* **CLI Generator**: Interactive command-line tool `awesome-readme` to easily setup your docs.
* **Variable Replacement**: Automatic substitution of `[PROJECT_NAME]`, `[AUTHOR_NAME]`, etc.
* **Multiple Styles**: Choose between Professional, Minimalist, and more styles for your README.
* **Extensible**: Modular design allowing easy addition of new sections and templates.
* **Zero Dependencies**: Lightweight and fast, built with pure Node.js.

## 🛠️ Technologies Used

* **Framework**: Node.js
* **Language**: JavaScript (ESM)
* **Libraries**: Native Node.js modules (fs, path, readline).
* **Structure**: Modular architecture with centralized configuration.

## 📖 How to Use and Install

Installation is simple and straightforward via npm.

1. **Install with npx**:
   ```bash
   npx awesome-readme-templates
   ```
   This will immediately start the interactive CLI.

2. **Global Installation**:
   ```bash
   npm install -g awesome-readme-templates
   awesome-readme
   ```

3. **Check Installation**:
   Run `awesome-readme --help` to see available options.

## 🌐 Customization

**Awesome Readme Templates** allows you to choose exactly what you need:

### Method 1: Interactive Mode

1. Run `npx awesome-readme-templates`.
2. Select **Interactive Selection**.
3. Choose your preferred language (English, Portuguese, or Spanish).
4. Fill in your project details (Name, Description, Author) for automatic replacement.
5. Select the README style (Standard, Minimalist, or Complete).
6. Select the templates you want (Contributing, Changelog, etc.).
7. Confirm and write files to your project.

### Method 2: Automated Mode (Flags)

1. Use CLI flags to skip menus:
   ```bash
   awesome-readme --main-lang es --all
   ```
2. Or specify languages, templates, and license:
   ```bash
   awesome-readme --main-lang pt --langs en,es --with-github --license mit
   ```

### Supported Templates

- **README.md**: Complete project documentation.
- **CONTRIBUTING.md**: Guidelines for contributors.
- **CHANGELOG.md**: History of changes.
- **CODE_OF_CONDUCT.md**: Community standards.
- **SECURITY.md**: Security policies.
- **GitHub Files**: PR templates, Issue templates, Funding, etc.

## 💻 For Developers

If you want to clone the repository and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/GabrielBaiano/awesome-readme.git

# 2. Navigate to the project folder
cd awesome-readme

# 3. Install dependencies
npm install

# 4. Run in development mode
npm start

# 5. To create installers (if applicable) or test CLI locally
npm link
awesome-readme
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request. Check out our `CONTRIBUTING.md` for more details.

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/GabrielBaiano" target="_blank">GabrielBaiano!</a>
</p>

