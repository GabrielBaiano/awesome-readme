# Guia de Contribuição para o [PROJECT_NAME]

Obrigado pelo seu interesse em contribuir com o **[PROJECT_NAME]**! Este documento orienta como reportar bugs, sugerir novas funcionalidades e enviar código de forma eficiente.

---

## 🐛 Reportando Bugs

Antes de abrir uma nova issue de bug, consulte as [Issues]([GITHUB_REPO_URL]/issues) abertas e fechadas para verificar se o problema já não foi relatado.

Ao abrir uma issue, certifique-se de incluir:
- Um título claro e descritivo.
- Passos reproduzíveis para disparar o problema.
- Comportamento esperado versus resultado obtido.
- Informações do ambiente (Sistema Operacional, versão do runtime/Node, navegador se aplicável).
- Logs de erro ou capturas de tela quando relevante.

---

## 💡 Sugerindo Melhorias

Ideias e solicitações de recursos são muito bem-vindas. Ao abrir uma sugestão:
1. Explique o caso de uso e a motivação real.
2. Descreva os benefícios práticos para a comunidade.
3. Se possível, exemplifique a API ou comando ideal que gostaria de utilizar.

---

## 🛠️ Fluxo de Trabalho (Development Workflow)

### 1. Fork e Clone
```bash
git clone https://github.com/SEU_USUARIO/[REPO_NAME].git
cd [REPO_NAME]
git remote add upstream [GITHUB_REPO_URL].git
```

### 2. Crie uma Branch Específica
```bash
git checkout -b feat/nome-da-funcionalidade
# ou para correções:
git checkout -b fix/descricao-do-problema
```

### 3. Implemente as Mudanças
- Mantenha alterações focadas, atômicas e coesas.
- Adicione ou atualize os testes relacionados à sua alteração.
- Garanta que todo o projeto passe nos testes locais.

```bash
# Rodar testes
npm test
```

### 4. Padrão de Mensagens de Commit
Este projeto utiliza a convenção [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações apenas em documentação
- `refactor:` Refatoração que não altera comportamento nem adiciona funcionalidade
- `test:` Adição ou correção de suítes de testes
- `chore:` Tarefas de manutenção, dependências e automações de CI

Exemplo:
```bash
git commit -m "feat(core): adiciona suporte a retentativas com timeout"
```

### 5. Abra um Pull Request
1. Envie sua branch para o seu fork:
   ```bash
   git push origin feat/nome-da-funcionalidade
   ```
2. Abra um Pull Request apontando para a branch `main` do repositório original.
3. Mencione as issues relacionadas (ex: `Fixes #42`).
4. Preencha o checklist do template de Pull Request.

---

## 📄 Licença
Ao contribuir com o [PROJECT_NAME], você concorda que suas contribuições serão submetidas sob a licença [LICENSE_TYPE] do projeto.
