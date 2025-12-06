const templatesData = {
    en: [
        {
            id: 'readme',
            title: 'README.md',
            content: `<p align="center">
  <img src="[LOGO_PATH]" alt="[PROJECT_NAME] Logo" width="200"/>
</p>

<h1 align="center">[PROJECT_NAME]</h1>

<p align="center">
  <strong>[PROJECT_DESCRIPTION]</strong><br>
  <em>[PROJECT_TAGLINE]</em>
</p>

<p align="center">
  <a href="/README.pt.md" target="_blank">🇧🇷 Português</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[RELEASES_URL]" target="_blank">📦 Downloads</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[ORIGINAL_VERSION_URL]" target="_blank">📚 Original Version</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[ISSUE_TEMPLATE_URL]" target="_blank">🐛 Report Bug</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[LINKEDIN_URL]" target="_blank">💼 LinkedIn</a>
</p>

<p align="center">
  <a href="[GITHUB_REPO_URL]/stargazers">
    <img src="https://img.shields.io/github/stars/[USERNAME]/[REPO_NAME]?style=social" alt="GitHub stars">
  </a>
  <a href="[GITHUB_REPO_URL]/issues">
    <img src="https://img.shields.io/github/issues/[USERNAME]/[REPO_NAME]" alt="GitHub issues">
  </a>
  <a href="[GITHUB_REPO_URL]/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/[USERNAME]/[REPO_NAME]" alt="License">
  </a>
  <a href="[GITHUB_REPO_URL]/releases">
    <img src="https://img.shields.io/github/v/release/[USERNAME]/[REPO_NAME]" alt="Latest Release">
  </a>
</p>

---

<p align="center">
  <img src="[SHOWCASE_IMAGE_URL]" alt="[PROJECT_NAME] Showcase"/>
</p>

**[PROJECT_NAME]** [DETAILED_DESCRIPTION]

> 📚 **Project Evolution**: [PROJECT_EVOLUTION_DESCRIPTION]

<!-- DOCUMENTATION_SECTION -->


## 🎓 Main Features

* **[FEATURE_1]**: [FEATURE_1_DESCRIPTION]
* **[FEATURE_2]**: [FEATURE_2_DESCRIPTION]
* **[FEATURE_3]**: [FEATURE_3_DESCRIPTION]
* **[FEATURE_4]**: [FEATURE_4_DESCRIPTION]

## 🛠️ Technologies Used

* **Framework**: [FRAMEWORK]
* **Language**: [LANGUAGE]
* **[ADDITIONAL_TECH_1]**: [ADDITIONAL_TECH_1_DESCRIPTION]
* **[ADDITIONAL_TECH_2]**: [ADDITIONAL_TECH_2_DESCRIPTION]
* **[ADDITIONAL_TECH_3]**: [ADDITIONAL_TECH_3_DESCRIPTION]
* **Libraries**: [LIBRARIES_LIST]

## 🚀 Quick Start

### 📥 Installation

1. **Download**: Go to the **[Releases page]([RELEASES_URL])** and download the latest version for your OS
2. **Install**: [INSTALLATION_INSTRUCTIONS]
3. **[SETUP_STEP_1]**: [SETUP_STEP_1_DESCRIPTION]
4. **[SETUP_STEP_2]**: [SETUP_STEP_2_DESCRIPTION]

### ⚡ First Steps

- **[FIRST_STEP_1]**: [FIRST_STEP_1_DESCRIPTION]
- **[FIRST_STEP_2]**: [FIRST_STEP_2_DESCRIPTION]
- **[FIRST_STEP_3]**: [FIRST_STEP_3_DESCRIPTION]
- **[FIRST_STEP_4]**: [FIRST_STEP_4_DESCRIPTION]

## 🌐 [CUSTOMIZATION_SECTION_TITLE]

[PROJECT_NAME] allows you to [CUSTOMIZATION_DESCRIPTION]:

### Method 1: [METHOD_1_TITLE]

1. [METHOD_1_STEP_1]
2. [METHOD_1_STEP_2]
3. [METHOD_1_STEP_3]
4. [METHOD_1_STEP_4]
5. [METHOD_1_STEP_5]
6. [METHOD_1_STEP_6]

### Method 2: [METHOD_2_TITLE]

1. [METHOD_2_STEP_1]
2. [METHOD_2_STEP_2]
3. [METHOD_2_STEP_3]
4. [METHOD_2_STEP_4]

### Supported [CUSTOMIZATION_TYPE]:
- [SUPPORTED_TYPE_1]
- [SUPPORTED_TYPE_2]
- [SUPPORTED_TYPE_3]
- [SUPPORTED_TYPE_4]
- [SUPPORTED_TYPE_5]

## 💻 For Developers

If you want to clone the repository and run the project locally:

\`\`\`bash
# 1. Clone the repository
git clone [GITHUB_REPO_URL].git

# 2. Navigate to the project folder
cd [REPO_NAME]

# 3. Install dependencies
npm install

# 4. Run in development mode
npm start

# 5. To create installers
npm run package
\`\`\`

## 📚 Perfect for [TARGET_AUDIENCE]

- **[USE_CASE_1]**: [USE_CASE_1_DESCRIPTION]
- **[USE_CASE_2]**: [USE_CASE_2_DESCRIPTION]
- **[USE_CASE_3]**: [USE_CASE_3_DESCRIPTION]
- **[USE_CASE_4]**: [USE_CASE_4_DESCRIPTION]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [LICENSE_TYPE] License.

---

<p align="center">
  Made with ❤️ by <a href="[GITHUB_PROFILE_URL]" target="_blank">[AUTHOR_NAME]</a>
</p>`
        },
        {
            id: 'contributing',
            title: 'CONTRIBUTING.md',
            content: `# 🤝 Contributing to [PROJECT_NAME]

Thank you for considering contributing to this project! This guide will help you understand how to contribute effectively and make the most impact.

## 🎯 How to Contribute

### 🐛 Reporting Bugs

If you found a bug in [PROJECT_NAME]:

1. **Check if an issue already exists** about the problem
2. **Create a new issue** with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

### ✨ Suggesting Improvements

To suggest new features or improvements:

1. **Clearly describe** the desired functionality
2. **Explain the problem** it solves
3. **Provide examples** of how it should work
4. **Consider implementing** it yourself if possible

### 📝 Improving Documentation

Documentation is always welcome! You can help with:

- Fixing typos and grammar errors
- Improving explanations and clarity
- Adding examples and use cases
- Translating to other languages

## 🛠️ Contribution Process

### 1. Fork the Repository

\`\`\`bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/[REPO_NAME].git
cd [REPO_NAME]

# Add the original repository as upstream
git remote add upstream https://github.com/[USERNAME]/[REPO_NAME].git
\`\`\`

### 2. Create a Branch

\`\`\`bash
# Create a branch for your contribution
git checkout -b feature/your-contribution-name
\`\`\`

### 3. Make Your Changes

- **Keep consistency** with existing style
- **Test your changes** before submitting
- **Document** new features
- **Update CHANGELOG.md** if necessary

### 4. Commit and Push

\`\`\`bash
# Add your changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature for [PROJECT_NAME]"

# Push to your branch
git push origin feature/your-contribution-name
\`\`\`

### 5. Open Pull Request

1. **Go to your fork** on GitHub
2. **Click "New Pull Request"**
3. **Fill out the template** provided
4. **Wait for review**

## 📋 Code Standards

### [PROJECT_TYPE] Standards

- **Follow [CODING_STYLE]** guidelines
- **Write clear comments** for complex code
- **Use meaningful variable names**
- **Keep functions small and focused**

### Commit Messages

Use the [Conventional Commits](https://conventionalcommits.org/) standard:

\`\`\`
feat: add new [FEATURE_TYPE] functionality
fix: resolve [ISSUE_TYPE] in [COMPONENT]
docs: update [DOCUMENTATION_SECTION]
style: improve [STYLING_ELEMENT] formatting
\`\`\`

### Naming Conventions

- **Files**: Use descriptive names (e.g., \`user-authentication.js\`)
- **Branches**: \`feature/description\`, \`fix/description\`, \`docs/description\`
- **Variables**: Use camelCase or snake_case consistently

## 🧪 Testing Your Changes

Before submitting, test your changes:

1. **Run existing tests**: \`[TEST_COMMAND]\`
2. **Test your new features** thoroughly
3. **Check for regressions** in existing functionality
4. **Verify documentation** is accurate
5. **Test on different [PLATFORMS/ENVIRONMENTS]**

## 📝 Types of Contributions

### 🆕 New Features

- [FEATURE_CATEGORY_1] improvements
- [FEATURE_CATEGORY_2] additions
- [FEATURE_CATEGORY_3] enhancements
- Performance optimizations

### 🔧 Bug Fixes

- Fix [BUG_TYPE_1] issues
- Resolve [BUG_TYPE_2] problems
- Address [BUG_TYPE_3] concerns
- Security improvements

### 📚 Documentation

- Usage guides
- API documentation
- Code comments
- Translation improvements

### 🎨 Design

- UI/UX improvements
- Accessibility enhancements
- Visual consistency
- Responsive design

## 🎯 Roadmap

### Upcoming Features

- [ ] [UPCOMING_FEATURE_1]
- [ ] [UPCOMING_FEATURE_2]
- [ ] [UPCOMING_FEATURE_3]
- [ ] [UPCOMING_FEATURE_4]

### Priority Contributions

1. **[PRIORITY_1]**
2. **[PRIORITY_2]**
3. **[PRIORITY_3]**
4. **[PRIORITY_4]**

## ❓ Questions?

If you have questions about contributing:

1. **Open an issue** with the \`question\` tag
2. **Check existing issues** for similar questions
3. **Contact maintainers** via [CONTACT_METHOD]

## 🏆 Recognition

Contributors will be recognized:

- In the contributors section of README
- In the CHANGELOG.md file
- In project releases
- On the project website (if applicable)

## 📄 License

By contributing, you agree that your contributions will be licensed under the [LICENSE_TYPE] License.

---

**Thank you for contributing to [PROJECT_NAME]! 🎉**

Every contribution, no matter how small, makes a difference for the community.

## 💡 Pro Tips for Contributors

### 🎨 Development Tips

1. **Read the codebase** - Understand the project structure first
2. **Start small** - Begin with documentation or small bug fixes
3. **Ask questions** - Don't hesitate to ask for clarification
4. **Test thoroughly** - Make sure your changes work as expected
5. **Follow conventions** - Maintain consistency with existing code

### 🔧 Technical Tips

1. **Use the development environment** - Set up local development properly
2. **Write tests** - Add tests for new functionality
3. **Check dependencies** - Ensure all dependencies are properly managed
4. **Review existing code** - Learn from existing implementations
5. **Document changes** - Explain complex changes clearly

### 📚 Documentation Tips

1. **Write clear descriptions** - Make your contributions easy to understand
2. **Include examples** - Show how to use new features
3. **Update related docs** - Keep all documentation in sync
4. **Use consistent formatting** - Follow the project's documentation style
5. **Be comprehensive** - Cover all aspects of your changes

---

**Ready to contribute?** Start by forking the repository and creating your first branch! 🚀`
        },
        {
            id: 'changelog',
            title: 'CHANGELOG.md',
            content: `# 📝 Changelog

All notable changes to [PROJECT_NAME] will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Nothing yet

### Changed
- Nothing yet

### Deprecated
- Nothing yet

### Removed
- Nothing yet

### Fixed
- Nothing yet

### Security
- Nothing yet

## [1.0.0] - [RELEASE_DATE]

### Added
- 🎉 Initial release of [PROJECT_NAME]
- [FEATURE_1] - [FEATURE_1_DESCRIPTION]
- [FEATURE_2] - [FEATURE_2_DESCRIPTION]
- [FEATURE_3] - [FEATURE_3_DESCRIPTION]
- [FEATURE_4] - [FEATURE_4_DESCRIPTION]

### Features
- **[MAIN_FEATURE_1]**: [MAIN_FEATURE_1_DESCRIPTION]
- **[MAIN_FEATURE_2]**: [MAIN_FEATURE_2_DESCRIPTION]
- **[MAIN_FEATURE_3]**: [MAIN_FEATURE_3_DESCRIPTION]
- **[MAIN_FEATURE_4]**: [MAIN_FEATURE_4_DESCRIPTION]

### Technologies
- [TECH_1]: [TECH_1_DESCRIPTION]
- [TECH_2]: [TECH_2_DESCRIPTION]
- [TECH_3]: [TECH_3_DESCRIPTION]
- [TECH_4]: [TECH_4_DESCRIPTION]

### Documentation
- Complete setup and installation guide
- Usage examples and best practices
- API documentation (if applicable)
- Contributing guidelines

---

## 📋 Version Format

We use [Semantic Versioning](https://semver.org/) for version numbers:

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes

## 🔗 Links

- [GitHub Repository]([GITHUB_REPO_URL])
- [Latest Release]([GITHUB_REPO_URL]/releases/latest)
- [Issue Tracker]([GITHUB_REPO_URL]/issues)

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
- 🔒 Security updates
- ⚡ Performance improvements`
        },
        {
            id: 'code_of_conduct',
            title: 'CODE_OF_CONDUCT.md',
            content: `# Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at **[CONTACT_EMAIL]**.
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction
**Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.
**Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.

### 2. Warning
**Community Impact**: A violation through a single incident or series of actions.
**Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.

### 3. Temporary Ban
**Community Impact**: A serious violation of community standards, including sustained inappropriate behavior.
**Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.

### 4. Permanent Ban
**Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.
**Consequence**: A permanent ban from any sort of public interaction within the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.1, available at [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

[homepage]: https://www.contributor-covenant.org
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html`
        },
        {
            id: 'security',
            title: 'SECURITY.md',
            content: `# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :x:                |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of **[PROJECT_NAME]** seriously. If you have found a security vulnerability, please help us fix it.

### How to Report

1. **Do not open a public issue.** Publicly reporting a vulnerability can put the community at risk.
2. Please email us at **[CONTACT_EMAIL]** with the subject line "Security Vulnerability in [PROJECT_NAME]".
3. Include as much detail as possible:
   - Type of vulnerability (e.g., XSS, SQL Injection, RCE)
   - Steps to reproduce
   - Affected versions
   - Potential impact
4. We will acknowledge your email within **48 hours**.
5. We will keep you updated on the progress of the fix.

### Disclosure Policy

- We ask that you give us a reasonable amount of time to fix the issue before disclosing it to the public.
- We will credit you in the release notes and/or our "Security Hall of Fame" (if applicable) once the issue is resolved.

Thank you for helping keep **[PROJECT_NAME]** safe!`
        }
    ],
    pt: [
        {
            id: 'readme',
            title: 'README.md',
            content: `<p align="center">
  <img src="[LOGO_PATH]" alt="Logo do [PROJECT_NAME]" width="200"/>
</p>

<h1 align="center">[PROJECT_NAME]</h1>

<p align="center">
  <strong>[PROJECT_DESCRIPTION]</strong><br>
  <em>[PROJECT_TAGLINE]</em>
</p>

<p align="center">
  <a href="/README.md" target="_blank">🇺🇸 English</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[RELEASES_URL]" target="_blank">📦 Downloads</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[ORIGINAL_VERSION_URL]" target="_blank">📚 Versão Original</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[ISSUE_TEMPLATE_URL]" target="_blank">🐛 Reportar Bug</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="[LINKEDIN_URL]" target="_blank">💼 LinkedIn</a>
</p>

<p align="center">
  <a href="[GITHUB_REPO_URL]/stargazers">
    <img src="https://img.shields.io/github/stars/[USERNAME]/[REPO_NAME]?style=social" alt="GitHub stars">
  </a>
  <a href="[GITHUB_REPO_URL]/issues">
    <img src="https://img.shields.io/github/issues/[USERNAME]/[REPO_NAME]" alt="GitHub issues">
  </a>
  <a href="[GITHUB_REPO_URL]/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/[USERNAME]/[REPO_NAME]" alt="License">
  </a>
  <a href="[GITHUB_REPO_URL]/releases">
    <img src="https://img.shields.io/github/v/release/[USERNAME]/[REPO_NAME]" alt="Latest Release">
  </a>
</p>

---

<p align="center">
  <img src="[SHOWCASE_IMAGE_URL]" alt="Demonstração do [PROJECT_NAME]"/>
</p>

**[PROJECT_NAME]** [DETAILED_DESCRIPTION_PT]

> 📚 **Evolução do Projeto**: [PROJECT_EVOLUTION_DESCRIPTION_PT]

<!-- DOCUMENTATION_SECTION -->


## 🎓 Funcionalidades Principais

* **[FEATURE_1]**: [FEATURE_1_DESCRIPTION_PT]
* **[FEATURE_2]**: [FEATURE_2_DESCRIPTION_PT]
* **[FEATURE_3]**: [FEATURE_3_DESCRIPTION_PT]
* **[FEATURE_4]**: [FEATURE_4_DESCRIPTION_PT]

## 🛠️ Tecnologias Utilizadas

* **Framework**: [FRAMEWORK]
* **Linguagem**: [LANGUAGE]
* **[ADDITIONAL_TECH_1]**: [ADDITIONAL_TECH_1_DESCRIPTION_PT]
* **[ADDITIONAL_TECH_2]**: [ADDITIONAL_TECH_2_DESCRIPTION_PT]
* **[ADDITIONAL_TECH_3]**: [ADDITIONAL_TECH_3_DESCRIPTION_PT]
* **Bibliotecas**: [LIBRARIES_LIST_PT]

## 📖 Como Usar e Instalar

A instalação é simples e direta.

1. Acesse a **[Página de Releases aqui]([RELEASES_URL])**.
2. Baixe o instalador mais recente para o seu sistema operacional (ex: \`[PROJECT_NAME]-Setup-X.X.X.exe\` para Windows).
3. Execute o instalador.
   * **Observação para Windows:** O SmartScreen pode exibir um aviso de "Editor Desconhecido". Isso é normal. Clique em "Mais informações" e depois em "Executar assim mesmo".
4. [SETUP_STEP_1_PT]: [SETUP_STEP_1_DESCRIPTION_PT]

## 🌐 [CUSTOMIZATION_SECTION_TITLE_PT]

O [PROJECT_NAME] permite que você [CUSTOMIZATION_DESCRIPTION_PT]:

### Método 1: [METHOD_1_TITLE_PT]

1. [METHOD_1_STEP_1_PT]
2. [METHOD_1_STEP_2_PT]
3. [METHOD_1_STEP_3_PT]
4. [METHOD_1_STEP_4_PT]
5. [METHOD_1_STEP_5_PT]
6. [METHOD_1_STEP_6_PT]

### Método 2: [METHOD_2_TITLE_PT]

1. [METHOD_2_STEP_1_PT]
2. [METHOD_2_STEP_2_PT]
3. [METHOD_2_STEP_3_PT]
4. [METHOD_2_STEP_4_PT]

### Tipos de [CUSTOMIZATION_TYPE_PT] Suportados:
- [SUPPORTED_TYPE_1_PT]
- [SUPPORTED_TYPE_2_PT]
- [SUPPORTED_TYPE_3_PT]
- [SUPPORTED_TYPE_4_PT]
- [SUPPORTED_TYPE_5_PT]

## 💻 Para Desenvolvedores

Se você deseja clonar o repositório e rodar o projeto localmente:

\`\`\`bash
# 1. Clone o repositório
git clone [GITHUB_REPO_URL].git

# 2. Navegue até a pasta do projeto
cd [REPO_NAME]

# 3. Instale as dependências
npm install

# 4. Rode em modo de desenvolvimento
npm start

# 5. Para criar os instaladores
npm run package
\`\`\`

## 📚 Perfeito para [TARGET_AUDIENCE_PT]

- **[USE_CASE_1_PT]**: [USE_CASE_1_DESCRIPTION_PT]
- **[USE_CASE_2_PT]**: [USE_CASE_2_DESCRIPTION_PT]
- **[USE_CASE_3_PT]**: [USE_CASE_3_DESCRIPTION_PT]
- **[USE_CASE_4_PT]**: [USE_CASE_4_DESCRIPTION_PT]

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a Licença [LICENSE_TYPE].

---

<p align="center">
  Feito com ❤️ por <a href="[GITHUB_PROFILE_URL]" target="_blank">[AUTHOR_NAME]</a>
</p>`
        },
        {
            id: 'contributing',
            title: 'CONTRIBUTING.md',
            content: `# Contribuindo para [PROJECT_NAME]

Primeiro, obrigado por considerar contribuir para o [PROJECT_NAME]! São pessoas como você que fazem do mundo open source um lugar incrível para aprender, inspirar e criar.

## 🤝 Código de Conduta

Este projeto e todos os participantes estão sob o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, espera-se que você mantenha este código. Por favor, reporte comportamentos inaceitáveis para [CONTACT_EMAIL].

## 🚀 Como Posso Contribuir?

### Reportando Bugs

Esta seção guia você através do envio de um relatório de bug para o [PROJECT_NAME]. Seguir estas diretrizes ajuda os mantenedores e a comunidade a entender seu relatório, reproduzir o comportamento e encontrar relatórios relacionados.

- **Use uma pesquisa clara e descritiva** para ver se o problema já foi reportado.
- **Verifique se o problema já foi corrigido** tentando reproduzi-lo na versão mais recente.
- **Abra uma Issue** usando o template de Bug Report fornecido.

### Sugerindo Melhorias

Esta seção guia você através do envio de uma sugestão de melhoria para o [PROJECT_NAME], incluindo recursos completamente novos e pequenas melhorias na funcionalidade existente.

- **Use uma pesquisa clara e descritiva** para ver se a melhoria já foi sugerida.
- **Abra uma Issue** usando o template de Feature Request fornecido.

### Seu Primeiro Pull Request

1. Faça um Fork do repositório.
2. Clone o projeto para sua máquina.
3. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`).
4. Faça o commit de suas alterações (\`git commit -m 'Add some AmazingFeature'\`).
5. Faça o push para a branch (\`git push origin feature/AmazingFeature\`).
6. Abra um Pull Request.

## 🎨 Guia de Estilo

- [STYLE_GUIDE_LINK] - Se houver um guia de estilo específico, linke-o aqui.
- Commits devem seguir a convenção [Conventional Commits](https://www.conventionalcommits.org/).

## 🛠️ Configuração de Desenvolvimento

[INSTRUCTIONS_TO_SETUP_DEV_ENVIRONMENT]`
        },
        {
            id: 'changelog',
            title: 'CHANGELOG.md',
            content: `# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Adicionado
- 

### Alterado
- 

### Depreciado
- 

### Removido
- 

### Corrigido
- 

### Segurança
- 

## [1.0.0] - AAAA-MM-DD

### Adicionado
- Lançamento inicial do projeto.`
        },
        {
            id: 'code_of_conduct',
            title: 'CODE_OF_CONDUCT.md',
            content: `# Código de Conduta

## Nosso Compromisso

Nós, como membros, contribuidores e líderes, comprometemo-nos a fazer da participação em nossa comunidade uma experiência livre de assédio para todos, independentemente da idade, tamanho corporal, deficiência visível ou invisível, etnia, características sexuais, identidade e expressão de gênero, nível de experiência, educação, status socioeconômico, nacionalidade, aparência pessoal, raça, casta, religião ou identidade e orientação sexual.

Comprometemo-nos a agir e interagir de maneiras que contribuam para uma comunidade aberta, acolhedora, diversa, inclusiva e saudável.

## Nossos Padrões

Exemplos de comportamento que contribuem para um ambiente positivo para nossa comunidade incluem:

* Demonstrar empatia e gentileza com outras pessoas
* Ser respeitoso com opiniões, pontos de vista e experiências diferentes
* Dar e aceitar graciosamente feedback construtivo
* Aceitar responsabilidade e pedir desculpas aos afetados por nossos erros, e aprender com a experiência
* Focar no que é melhor não apenas para nós como indivíduos, mas para a comunidade em geral

Exemplos de comportamento inaceitável incluem:

* O uso de linguagem ou imagens sexualizadas, e atenção ou avanços sexuais de qualquer tipo
* Trolling, insultos ou comentários depreciativos, e ataques pessoais ou políticos
* Assédio público ou privado
* Publicar informações privadas de outros, como um endereço físico ou de e-mail, sem sua permissão explícita
* Outra conduta que poderia razoavelmente ser considerada inadequada em um ambiente profissional

## Responsabilidades de Aplicação

Os líderes da comunidade são responsáveis por esclarecer e fazer cumprir nossos padrões de comportamento aceitável e tomarão medidas corretivas apropriadas e justas em resposta a qualquer comportamento que considerem inadequado, ameaçador, ofensivo ou prejudicial.

Os líderes da comunidade têm o direito e a responsabilidade de remover, editar ou rejeitar comentários, commits, código, edições de wiki, issues e outras contribuições que não estejam alinhadas a este Código de Conduta, e comunicarão as razões para as decisões de moderação quando apropriado.

## Escopo

Este Código de Conduta aplica-se a todos os espaços da comunidade e também se aplica quando um indivíduo está representando oficialmente a comunidade em espaços públicos. Exemplos de representação de nossa comunidade incluem o uso de um endereço de e-mail oficial, postagem por meio de uma conta oficial de mídia social ou atuação como representante nomeado em um evento online ou offline.

## Aplicação

Instâncias de comportamento abusivo, assediador ou de outra forma inaceitável podem ser relatadas aos líderes da comunidade responsáveis pela aplicação em **[CONTACT_EMAIL]**.
Todas as reclamações serão revisadas e investigadas prontamente e de forma justa.

Todos os líderes da comunidade são obrigados a respeitar a privacidade e a segurança do repórter de qualquer incidente.

## Atribuição

Este Código de Conduta é adaptado do [Contributor Covenant][homepage], versão 2.1, disponível em [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

[homepage]: https://www.contributor-covenant.org
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html`
        },
        {
            id: 'security',
            title: 'SECURITY.md',
            content: `# Política de Segurança

## Versões Suportadas

Use esta seção para informar as pessoas sobre quais versões do seu projeto estão sendo suportadas atualmente com atualizações de segurança.

| Versão | Suportado          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :x:                |
| < 1.0   | :x:                |

## Reportando uma Vulnerabilidade

Levamos a segurança do **[PROJECT_NAME]** a sério. Se você encontrou uma vulnerabilidade de segurança, por favor, ajude-nos a corrigi-la.

### Como Reportar

1. **Não abra uma issue pública.** Reportar publicamente uma vulnerabilidade pode colocar a comunidade em risco.
2. Por favor, envie um e-mail para **[CONTACT_EMAIL]** com o assunto "Vulnerabilidade de Segurança em [PROJECT_NAME]".
3. Inclua o máximo de detalhes possível:
   - Tipo de vulnerabilidade (ex: XSS, SQL Injection, RCE)
   - Passos para reproduzir
   - Versões afetadas
   - Impacto potencial
4. Confirmaremos o recebimento do seu e-mail dentro de **48 horas**.
5. Manteremos você atualizado sobre o progresso da correção.

### Política de Divulgação

- Pedimos que nos dê um tempo razoável para corrigir o problema antes de divulgá-lo ao público.
- Daremos crédito a você nas notas de lançamento e/ou em nosso "Hall da Fama de Segurança" (se aplicável) assim que o problema for resolvido.

Obrigado por ajudar a manter o **[PROJECT_NAME]** seguro!`
        }
    ]
};

const languages = [
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'pt', name: 'Português', flag: '🇧🇷' }
];

document.addEventListener('DOMContentLoaded', () => {
    const templateList = document.getElementById('templateList');
    const languageList = document.querySelector('.language-list');
    const previewTitle = document.getElementById('previewTitle');
    const rawView = document.getElementById('rawView');
    const renderedView = document.getElementById('renderedView');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const copyBtn = document.getElementById('copyBtn');
    const cliCommand = document.getElementById('cliCommand');

    let currentLang = 'en';
    let activeTemplate = templatesData[currentLang][0];
    let activeView = 'raw';
    let selectedTemplates = new Set();
    let selectedLanguages = new Set(['en']); // Default to English selected

    function renderLanguageList() {
        languageList.innerHTML = '';
        languages.forEach(lang => {
            const item = document.createElement('div');
            item.className = `language-item ${lang.id === currentLang ? 'active' : ''}`;
            item.dataset.lang = lang.id;

            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = lang.id;
            checkbox.className = 'template-checkbox'; // Reuse style
            if (selectedLanguages.has(lang.id)) {
                checkbox.checked = true;
            }
            checkbox.onclick = (e) => {
                e.stopPropagation();
                toggleLanguageSelection(lang.id, checkbox.checked);
            };

            const flagSpan = document.createElement('span');
            flagSpan.className = 'lang-flag';
            flagSpan.textContent = lang.flag;

            const nameSpan = document.createElement('span');
            nameSpan.textContent = lang.name;

            item.appendChild(checkbox);
            item.appendChild(flagSpan);
            item.appendChild(nameSpan);

            item.onclick = () => {
                switchLanguage(lang.id);
            };

            languageList.appendChild(item);
        });
    }

    function switchLanguage(langId) {
        if (langId === currentLang) return;
        currentLang = langId;
        renderLanguageList(); // Re-render to update active class
        renderTemplateList();
    }

    function toggleLanguageSelection(id, isChecked) {
        if (isChecked) {
            selectedLanguages.add(id);
        } else {
            selectedLanguages.delete(id);
        }
        updateCommand();
    }

    function renderTemplateList() {
        templateList.innerHTML = '';
        const templates = templatesData[currentLang];
        
        // Update active template to match current lang if possible
        const matchingTemplate = templates.find(t => t.id === activeTemplate.id);
        if (matchingTemplate) {
            activeTemplate = matchingTemplate;
        } else {
            activeTemplate = templates[0];
        }

        templates.forEach(t => {
            const item = document.createElement('div');
            item.className = `template-item ${t.id === activeTemplate.id ? 'active' : ''}`;
            
            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = t.id;
            checkbox.className = 'template-checkbox';
            if (selectedTemplates.has(t.id)) {
                checkbox.checked = true;
            }
            checkbox.onclick = (e) => {
                e.stopPropagation();
                toggleTemplateSelection(t.id, checkbox.checked);
            };

            // Label
            const span = document.createElement('span');
            span.textContent = t.title;
            
            item.appendChild(checkbox);
            item.appendChild(span);
            
            item.onclick = () => selectTemplateForPreview(t, item);
            
            templateList.appendChild(item);
        });
        
        updateContent();
    }

    function selectTemplateForPreview(template, itemEl) {
        activeTemplate = template;
        
        document.querySelectorAll('.template-item').forEach(el => el.classList.remove('active'));
        itemEl.classList.add('active');
        
        previewTitle.textContent = template.title;
        updateContent();
    }

    function toggleTemplateSelection(id, isChecked) {
        if (isChecked) {
            selectedTemplates.add(id);
        } else {
            selectedTemplates.delete(id);
        }
        updateCommand();
    }

    function updateCommand() {
        let cmd = 'npx awesome-readme-templates';
        
        // Add flags for templates
        if (selectedTemplates.size > 0) {
            selectedTemplates.forEach(id => {
                if (id !== 'readme') {
                    cmd += ` --with-${id}`;
                }
            });
        }

        // Add flags for languages (Hypothetical implementation based on UI request)
        // If multiple languages are selected, maybe pass them?
        // Or if specific language is selected?
        // For now, let's assume standard behavior: if pt is selected, maybe --lang pt?
        // If both? --lang en,pt?
        // I will just append --lang [lang] if it's not 'en' (default) or if multiple.
        
        const langs = Array.from(selectedLanguages);
        if (langs.length > 0) {
             // If only en is selected, no flag needed (default).
             // If pt is selected, --lang pt.
             // If both, --lang en,pt.
             
             const nonDefaultLangs = langs.filter(l => l !== 'en');
             if (nonDefaultLangs.length > 0 || (langs.includes('en') && langs.length > 1)) {
                 // Actually, let's just list them if it's not just 'en'
                 if (!(langs.length === 1 && langs[0] === 'en')) {
                     cmd += ` --lang ${langs.join(',')}`;
                 }
             }
        }

        cliCommand.textContent = cmd;
    }

    function updateContent() {
        rawView.textContent = activeTemplate.content;
        if (window.marked) {
            renderedView.innerHTML = marked.parse(activeTemplate.content);
        } else {
            renderedView.innerHTML = '<p>Markdown parser not loaded.</p>';
        }
    }

    // View Toggle
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            activeView = view;
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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
    renderLanguageList();
    renderTemplateList();
});
