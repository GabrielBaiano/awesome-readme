# 🤖 Automação via CLI (One-Line Configuration)

Este documento explica detalhadamente como utilizar o modo de automação do **Awesome README Templates**, permitindo configurar e gerar toda a documentação do seu projeto em **uma única linha de comando**.

Isso é ideal para:
- Scripts de CI/CD.
- Configuração rápida de novos projetos.
- Usuários avançados que preferem evitar o assistente interativo.

## 🚀 O Comando Mágico

Você pode executar a ferramenta diretamente via `npx` passando as flags de configuração:

```bash
npx awesome-readme-templates [flags]
```

### Exemplo Completo

Para criar um projeto bilíngue (EN/PT), com licença MIT, e incluir Roadmap e Guia de Contribuição:

```bash
npx awesome-readme-templates --lang=both --license=mit --with-roadmap --with-contributing
```

---

## 🛠️ Como Funciona

Quando você executa o comando com argumentos (flags), a ferramenta detecta automaticamente que deve pular o "Wizard Interativo" e entrar no **Modo Automatizado**.

1.  **Parsing de Argumentos**: O script lê as flags passadas (ex: `--lang=pt`).
2.  **Validação**: Verifica se as opções são válidas (ex: se a licença existe).
3.  **Execução**: Gera os arquivos solicitados diretamente, sem fazer perguntas.

---

## 🚩 Flags Disponíveis

Aqui está a lista completa de opções que você pode configurar:

### 1. Idioma (`--lang`)
Define a estratégia de idioma para os arquivos gerados.

*   `--lang=en`: Apenas Inglês (Padrão).
*   `--lang=pt`: Apenas Português.
*   `--lang=both`: Bilíngue (Inglês na raiz, Português em `pt/`).

### 2. Licença (`--license`)
Escolhe a licença open-source do projeto. O nome pode ser parcial (ex: "mit" encontra "MIT License").

*   `--license=mit`
*   `--license=apache`
*   `--license=gpl`
*   `--license=bsd`
*   `--license=none` (Não cria arquivo LICENSE)

### 3. Seleção de Templates (`--with-*` ou `--all`)
Decide quais arquivos adicionais serão criados.

*   **Instalar Tudo**:
    *   `--all`: Instala TODOS os templates disponíveis.

*   **Instalar Específicos** (use quantos quiser):
    *   `--with-contributing`: Guia de Contribuição.
    *   `--with-changelog`: Histórico de mudanças.
    *   `--with-code_of_conduct`: Código de Conduta.
    *   `--with-security`: Política de Segurança.
    *   `--with-support`: Guia de Suporte.
    *   `--with-roadmap`: Roadmap do projeto.
    *   `--with-authors`: Lista de autores.
    *   `--with-governance`: Modelo de governança.
    *   `--with-adr`: Template de ADR (Architecture Decision Record).
    *   `--with-citation`: Arquivo CITATION.cff.
    *   `--with-github`: Templates de Issue e PR (.github/).

---

## 💡 Exemplos de Uso

### Configuração Básica (Apenas README e Licença)
```bash
npx awesome-readme-templates --license=mit
```

### Projeto Open Source Completo (Português)
```bash
npx awesome-readme-templates --lang=pt --license=gpl --all
```

### Apenas Arquivos de Governança
```bash
npx awesome-readme-templates --with-code_of_conduct --with-security --with-governance
```

### Adicionar Templates a um Projeto Existente
Se você já tem um README e quer apenas adicionar o CONTRIBUTING e o CHANGELOG sem sobrescrever o resto (o script avisa se já existir):
```bash
npx awesome-readme-templates --with-contributing --with-changelog
```
