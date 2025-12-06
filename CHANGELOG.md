# 📝 Changelog
[![Portuguese](https://img.shields.io/badge/Lang-Pt--Br-green)](./pt/CHANGELOG.pt.md)

All notable changes to the Awesome README Templates project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- NPM package configuration with package.json
- CLI tool (awesome-readme) for easy template installation
- Interactive template selection system with 8 different options
- Professional templates in templates/ directory
- CONTRIBUTING template with placeholders for any project
- CHANGELOG template with semantic versioning support
- MIT License template with customizable placeholders
- Apache 2.0 License template with customizable placeholders
- Complete package option (all templates at once)
- Comprehensive test suite for package validation
- NPM-README.md with package-specific documentation
- PUBLISH-GUIDE.md with publishing instructions
- CONTRIBUTING.md with comprehensive contribution guidelines (English)
- Complete template manual and guide in README files
- Installation instructions with NPM/Yarn commands
- Detailed explanations for each template section
- Pro tips and customization ideas
- Real-world example section featuring Shii! project
- Links to demonstrate template usage in practice
- License selection guide and best practices

### Changed
- Completely rewrote README.md as a template manual/draft
- Completely rewrote README-pt.md as a template manual/draft
- Repository now serves as both template and instruction manual
- Simplified repository structure - removed unnecessary files
- Enhanced README-pt.md with missing badges and navigation elements
- Removed "Privacy and Security" section from all README templates
- Renamed "Privacy and Security" to "Quality Assurance" in main READMEs
- Updated main README.md with NPM package information and structure
- Transformed README.md to use the template structure created for the project
- Simplified Technologies section to only NPM and JavaScript
- Removed Project Evolution section from README
- Removed GitHub releases badges and downloads link
- Enhanced License section with MIT License emphasis and NPM package index
- Updated README-pt.md with same template structure and NPM package information
- Synchronized Portuguese README with English version changes
- Removed LICENSE-GUIDE.md to simplify project structure
- Updated README-pt.md to remove references to LICENSE-GUIDE

### Deprecated
- Nothing yet

### Removed
- README-template.md (integrated into main README)
- README-pt-template.md (integrated into main README)
- COMO-USAR-TEMPLATE.md (replaced by CONTRIBUTING.md)
- exemplo-preenchido.md (simplified structure)
- .github/ folder (simplified structure)
- assets/ folder (simplified structure)

### Fixed
- Missing badges and navigation elements in Portuguese version

### Security
- Nothing yet

## [1.3.0] - 2025-12-01

### Changed
- 🌐 **Bilingual Organization**: Portuguese files are now placed in a `pt/` directory (e.g., `pt/CONTRIBUTING.pt.md`) when using bilingual mode, keeping the root clean.
- 🔄 **Naming Convention**: Preserved `.pt` suffix for Portuguese files inside the `pt/` directory.

## [1.2.0] - 2025-12-01

### Added
- 🧙 **Interactive Wizard**: New CLI mode with step-by-step setup for Language, License, and Extras.
- ➕ **Add Specific Templates**: New CLI mode to add individual templates to an existing project.
- 🤖 **Automated Setup**: Full support for CLI flags (e.g., `--lang=both --license=mit --with-roadmap`).
- 📜 **Extended Licenses**: Added support for all licenses in the repository (AGPL, BSD, ISC, MPL, Unlicense).

### Changed
- 🔄 **Refactored CLI**: Complete rewrite of `bin/awesome-readme.js` to support multiple modes.
- 📂 **Dynamic Links**: README links now correctly point to the generated files (renaming `-template` to standard names).

## [1.1.0] - 2025-12-01

### Added
- 🌐 **Bilingual Support**: Templates are now organized in `en` and `pt` directories.
- 🚀 **Dynamic README**: CLI automatically removes unused language buttons and adds a "Documentation" section linking to installed files.
- 📦 **Optional Files**: CLI now asks which additional files (Roadmap, Authors, etc.) to install.

### Changed
- 📂 **Directory Structure**: Moved templates into `templates/en` and `templates/pt`.

## [1.0.0] - 2024-09-27

### Added
- 🎉 Initial release of Awesome README Templates
- 📄 English template (`README-template.md`)
- 🇧🇷 Portuguese template (`README-pt-template.md`)
- 📚 Comprehensive usage instructions (`COMO-USAR-TEMPLATE.md`)
- 💡 Real-world example (`exemplo-preenchido.md`)
- 🎨 Professional README for the repository itself
- 🔧 GitHub issue and pull request templates
- 📁 Assets folder structure
- ⚖️ MIT License
- 🏷️ Repository configuration guidelines

### Features
- **Bilingual Support**: Complete templates in English and Portuguese
- **Professional Structure**: Clean, organized layout with strategic emoji usage
- **GitHub Integration**: Ready-to-use badges, links, and GitHub-specific formatting
- **Customizable Placeholders**: Easy-to-replace tags for quick personalization
- **Complete Sections**: Installation, usage, contributing, licensing, and more
- **Visual Appeal**: Strategic use of emojis and formatting for maximum impact
- **Quality Assurance**: Built with documentation best practices in mind

### Templates Include
- Project header with logo, badges, and navigation
- Feature showcase with detailed descriptions
- Technology stack documentation
- Installation and setup instructions
- Usage examples and customization options
- Developer setup for contributors
- Privacy and security considerations
- Target audience and use cases
- Contributing guidelines
- License information

### Supported Project Types
- Web applications (React, Vue, Angular, etc.)
- Desktop applications (Electron, native apps)
- Mobile applications (React Native, Flutter)
- APIs and backend services
- Libraries and frameworks

### Documentation
- Detailed placeholder replacement guide
- Step-by-step customization instructions
- Real-world usage examples
- Best practices and tips
- GitHub repository setup guidelines

---

## 📋 Version Format

We use [Semantic Versioning](https://semver.org/) for version numbers:

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes

## 🔗 Links

- [GitHub Repository](https://github.com/GabrielBaiano/awesome-readme)
- [Latest Release](https://github.com/GabrielBaiano/awesome-readme/releases/latest)
- [Issue Tracker](https://github.com/GabrielBaiano/awesome-readme/issues)

---

**Legend:**
- 🎉 Major release
- ✨ New features
- 🐛 Bug fixes
- 📚 Documentation
- 🔧 Configuration
- 🎨 Styling
- 🌐 Internationalization
- 💥 Breaking changes
