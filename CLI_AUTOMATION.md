# 🤖 CLI Automation & Multi-Language Support

This guide explains how to use the **Awesome Readme Templates** CLI in automated environments (CI/CD, scripts) and how to leverage its new **Multi-Language Support**.

## 🌍 Multi-Language Architecture

The CLI now supports an arbitrary number of languages. You define a **Main Language** (which resides in the project root) and **Additional Languages** (which reside in the `other-languages/` directory).

### Folder Structure

If you select **English** as main and **Portuguese** and **French** as additional:

```
my-project/
├── README.md           (English - Main)
├── CONTRIBUTING.md     (English - Main)
├── other-languages/
│   ├── pt/
│   │   ├── README.md       (Portuguese)
│   │   └── CONTRIBUTING.md (Portuguese)
│   └── fr/
│       ├── README.md       (French)
│       └── CONTRIBUTING.md (French)
```

### Language Navigation

The CLI automatically injects a **Language Navigation Bar** at the top of every generated Markdown file, allowing users to easily switch between versions.

Example (in `README.md`):
`[Pt-Br] [Fr] [Es]`

## 🚀 Automated Usage (Flags)

You can skip the interactive wizard by passing flags directly to the command.

### Basic Syntax

```bash
npx awesome-readme-templates [flags]
```

### Available Flags

| Flag | Description | Example |
|------|-------------|---------|
| `--main-lang` | Sets the main language code (root). Default: `en`. | `--main-lang=pt` |
| `--langs` | Comma-separated list of additional languages. | `--langs=en,es` |
| `--license` | Selects a license by name. | `--license=mit` |
| `--all` | Installs ALL available templates. | `--all` |
| `--with-<template>` | Installs a specific template. | `--with-roadmap` |

### Examples

**1. Standard Bilingual Setup (English Root + Portuguese)**
```bash
npx awesome-readme-templates --main-lang=en --langs=pt --license=mit --all
```

**2. Portuguese Root + English & Spanish**
```bash
npx awesome-readme-templates --main-lang=pt --langs=en,es --license=apache --with-contributing
```

**3. English Only (Default)**
```bash
npx awesome-readme-templates --license=mit --with-readme
```

## 🛠️ Adding New Languages

To add support for a new language to the CLI:

1.  Create a new folder in `templates/`: `templates/{lang_code}-template/` (e.g., `templates/fr-template/`).
2.  Add translated versions of the templates inside this folder.
3.  Open `bin/awesome-readme.js` and add the language to the `config` object:

```javascript
const config = {
  languages: {
    // ... existing languages
    fr: { name: 'French', badge: 'Fr', color: 'red', alt: 'French' }
  },
  // ...
};
```

The CLI will automatically pick up the new language in the Wizard and Flags!
