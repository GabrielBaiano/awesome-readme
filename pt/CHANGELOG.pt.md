# Changelog
[![English](https://img.shields.io/badge/Lang-En-red)](../CHANGELOG.md)
[![Spanish](https://img.shields.io/badge/Lang-Es-yellow)](../es/CHANGELOG.es.md)

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

## [1.5.0] - 2026-09-24

### Adicionado
- 🌍 **Suporte Completo ao Idioma Espanhol**: Suite completa de 25 templates em `templates/es-template/` com 100% de paridade em relação ao inglês e português.
- 💬 **Internacionalização da CLI (ES)**: Prompts e mensagens do terminal em espanhol com detecção automática da linguagem do sistema via `process.env.LANG`.
- 🌐 **Site de Documentação Trilíngue**: Botão de alternância de idioma (`ES`), páginas de guia traduzidas, cards explicativos de templates e busca localizada.
- ⚡ **Detecção Inteligente de Metadados**: Detecção automática de nome do diretório, usuário e email do Git, e ano ISO atual.
- 🧹 **Sanitizador de Markdown**: Remoção automática de badges órfãs (Buy Me A Coffee, Demo URLs, Twitter) e links vazios.

### Alterado
- 🎯 **Calibração de Templates**: Templates Standard, Minimal e Long refinados com exemplos reais de código, tabelas de configuração e sem conteúdo corporativo excessivo.
- 🧹 **Simplificação da Documentação**: Remoção de arquivos não-essenciais da raiz (`AUTHORS.md`, `GOVERNANCE.md`, `ROADMAP.md`, `SUPPORT.md`) focando no essencial técnico.

### Corrigido
- 🛠️ **CI Super-Linter**: Configuração de `.markdown-lint.yml` e reposicionamento de scripts no HTML garantindo pipelines 100% verdes.

## [1.0.0] - 2026-05-15

### Adicionado
- Lançamento inicial do projeto.
