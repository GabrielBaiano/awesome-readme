# Guía de Contribución para [PROJECT_NAME]

¡Gracias por tu interés en contribuir a **[PROJECT_NAME]**! Esta guía describe cómo proponer correcciones de errores, sugerir nuevas funcionalidades y enviar código de manera eficiente.

---

## 🐛 Reportar Errores (Bugs)

Antes de abrir un nuevo reporte de error, revisa las [Issues]([GITHUB_REPO_URL]/issues) existentes para comprobar que no haya sido reportado previamente.

Al abrir una issue, incluye:
- Un título claro y descriptivo.
- Pasos reproducibles para manifestar el problema.
- Comportamiento esperado frente al resultado obtenido.
- Detalles del entorno (Sistema Operativo, versión de Node/runtime, navegador si corresponde).
- Registros de error (logs) o capturas de pantalla si es pertinente.

---

## 💡 Sugerir Mejoras

Las propuestas de características son bienvenidas. Al abrir una sugerencia:
1. Explica el caso de uso y el problema que resuelve.
2. Describe el valor práctico que aporta a la comunidad.
3. Propón un ejemplo de diseño de API o flujo de trabajo si tienes una idea en mente.

---

## 🛠️ Flujo de Desarrollo

### 1. Bifurcar y Clonar (Fork & Clone)
```bash
git clone https://github.com/TU_USUARIO/[REPO_NAME].git
cd [REPO_NAME]
git remote add upstream [GITHUB_REPO_URL].git
```

### 2. Crear una Rama
```bash
git checkout -b feat/nombre-de-funcionalidad
# o para correcciones:
git checkout -b fix/descripcion-del-problema
```

### 3. Realizar los Cambios
- Mantén las modificaciones atómicas, enfocadas y concisas.
- Añade o actualiza pruebas que cubran los cambios realizados.
- Asegúrate de que las pruebas pasen localmente.

```bash
# Ejecutar pruebas
npm test
```

### 4. Convención de Commits
Este proyecto utiliza la convención [Conventional Commits](https://www.conventionalcommits.org/es/):

- `feat:` Una nueva funcionalidad
- `fix:` Corrección de un error
- `docs:` Cambios exclusivos en documentación
- `refactor:` Modificación de código que no altera la lógica externa
- `test:` Adición o actualización de pruebas
- `chore:` Tareas de mantenimiento, dependencias o configuración de CI

Ejemplo:
```bash
git commit -m "feat(core): agregar lógica de reintento automático con timeout"
```

### 5. Enviar un Pull Request
1. Envía tu rama a tu fork:
   ```bash
   git push origin feat/nombre-de-funcionalidad
   ```
2. Abre un Pull Request hacia la rama `main` del repositorio original.
3. Vincula cualquier issue relacionada (por ejemplo, `Fixes #42`).
4. Completa la lista de verificación del PR.

---

## 📄 Licencia
Al contribuir a [PROJECT_NAME], aceptas que tus contribuciones se licencien bajo los términos de la Licencia [LICENSE_TYPE].
