<p align="center">
  <img src="../Awesome.png" alt="Awesome README Templates Logo" width="200"/>
</p>

<h1 align="center">Awesome README Templates</h1>

<p align="center">
  <strong>Templates profissionais e reutilizáveis de README para projetos GitHub.</strong><br>
  <em>Crie documentação impressionante em minutos com nossos templates bilíngues (EN/PT).</em>
</p>

<p align="center">
  <a href="../README.md" target="_blank">🇺🇸 English</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/awesome-readme-templates" target="_blank">📚 Pacote NPM</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GabrielBaiano/awesome-readme/issues" target="_blank">🐛 Reportar Bug</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/GabrielBaiano" target="_blank">💼 Perfil GitHub</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/awesome-readme-templates" target="_blank">
    <img src="https://img.shields.io/npm/v/awesome-readme-templates?style=flat-square" alt="Versão NPM">
  </a>
  <a href="https://github.com/GabrielBaiano/awesome-readme/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/GabrielBaiano/awesome-readme?style=flat-square" alt="Licença">
  </a>
  <a href="https://github.com/GabrielBaiano/awesome-readme/stargazers">
    <img src="https://img.shields.io/github/stars/GabrielBaiano/awesome-readme?style=social" alt="GitHub stars">
  </a>
  <a href="https://buymeacoffee.com/gabrielngal" target="_blank">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=flat-square&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee">
  </a>
</p>

---

**Awesome README Templates** é uma coleção de templates de documentação bilíngues (Inglês/Português) de alta qualidade, projetados para ajudar desenvolvedores a criar documentação profissional de projetos sem esforço. Inclui uma poderosa ferramenta CLI para gerar e configurar seus arquivos automaticamente.

## 🚀 Funcionalidades

*   **🧙 CLI Interativa**: Uma interface estilo assistente para guiá-lo através da configuração.
*   **🇧🇷 Suporte Bilíngue**: Suporte total para Inglês e Português (Brasil).
*   **📂 Organização Inteligente**: No modo bilíngue, arquivos em português são colocados automaticamente em uma pasta `pt/`.
*   **🛡️ Segurança Primeiro**: A CLI verifica arquivos existentes para evitar sobrescritas acidentais.
*   **📦 Coleção Abrangente**: Inclui README, CONTRIBUTING, CHANGELOG, SECURITY e mais.
*   **📜 Gerenciador de Licenças**: Escolha entre uma ampla gama de licenças open-source (MIT, Apache, GPL, etc.).
*   **🤖 Configuração Automatizada**: Suporte a flags de CLI para CI/CD ou configurações rápidas.

## 📥 Instalação

Você pode usar a ferramenta diretamente via `npx` sem instalação:

```bash
npx awesome-readme-templates
```

Ou instale globalmente:

```bash
npm install -g awesome-readme-templates
```

## 📖 Uso

### Modo Interativo (Wizard)
Execute o comando e siga as instruções:

```bash
awesome-readme
```

Você será solicitado a:
1.  **Selecionar Idioma**: Inglês, Português ou Ambos.
2.  **Selecionar Licença**: Escolha de uma lista curada.
3.  **Selecionar Extras**: Adicione Guia de Contribuição, Changelog, Roadmap, etc.

### Adicionar Templates Específicos
Precisa de apenas um arquivo? Use o modo "Add Specific Templates" no menu para escolher exatamente o que você precisa.

### Modo Automatizado (Flags CLI)
Perfeito para scripts ou usuários avançados.

```bash
# Exemplo: Criar um projeto bilíngue com licença MIT e Roadmap
npx awesome-readme-templates --lang=both --license=mit --with-roadmap
```

**Flags Disponíveis:**
*   `--lang <en|pt|both>`: Define a estratégia de idioma.
*   `--license <name>`: Seleciona a licença (ex: mit, apache).
*   `--all`: Instala todos os templates disponíveis.
*   `--with-<template>`: Instala template específico (ex: `--with-contributing`, `--with-security`).

## 📂 Templates Incluídos

*   **README.md**: A cara do seu projeto.
*   **CONTRIBUTING.md**: Diretrizes para contribuidores.
*   **CHANGELOG.md**: Rastreie o histórico do projeto.
*   **CODE_OF_CONDUCT.md**: Padrões da comunidade.
*   **SECURITY.md**: Política de segurança.
*   **SUPPORT.md**: Canais de suporte.
*   **ROADMAP.md**: Planos futuros do projeto.
*   **AUTHORS.md**: Créditos do projeto.
*   **GOVERNANCE.md**: Modelo de governança.
*   **CITATION.cff**: Arquivo de citação.
*   **CODEOWNERS**: Define donos de código para revisões de PR.
*   **.github/**: Templates de Issue e PR.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, verifique nosso [Guia de Contribuição](./CONTRIBUTING.pt.md) para detalhes.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](../LICENSE).

---

<p align="center">
  Feito com ❤️ por <a href="https://github.com/GabrielBaiano" target="_blank">GabrielBaiano</a>
</p>