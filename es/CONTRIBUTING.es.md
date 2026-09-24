# Contribuir a Awesome README Templates
[![English](https://img.shields.io/badge/Lang-En-red)](../CONTRIBUTING.md)
[![Portuguese](https://img.shields.io/badge/Lang-Pt--Br-green)](../pt/CONTRIBUTING.pt.md)

En primer lugar, ¡gracias por considerar contribuir a **Awesome README Templates**! Las personas que colaboran en proyectos de código abierto hacen posible que la comunidad crezca y mejore continuamente.

## 🤝 Código de Conducta

Este proyecto y todos sus participantes se rigen por nuestro [Código de Conducta](./CODE_OF_CONDUCT.es.md). Al colaborar, se espera que mantengas un trato respetuoso, profesional e inclusivo.

## 🚀 ¿Cómo puedo contribuir?

### Reportar Errores (Bugs)

- **Busca antes de crear una issue** para verificar si el problema ya ha sido registrado.
- **Reproduce el error** en la versión más reciente del paquete.
- **Abre una Issue** utilizando la plantilla de Bug Report con pasos claros de reproducción y detalles del entorno.

### Sugerir Mejoras

- **Describe con claridad** la funcionalidad propuesta y el problema concreto que resuelve.
- **Abre una Issue** utilizando la plantilla de Feature Request.

### Enviar un Pull Request

1. Haz un Fork del repositorio.
2. Clona tu fork localmente:
   ```bash
   git clone https://github.com/TU_USUARIO/awesome-readme.git
   cd awesome-readme
   ```
3. Crea una rama descriptiva para tu cambio:
   ```bash
   git checkout -b feat/nueva-funcionalidad
   ```
4. Realiza tus cambios asegurando compatibilidad y estilo.
5. Ejecuta las pruebas locales:
   ```bash
   npm test
   ```
6. Haz commit siguiendo [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat(templates): add new template"
   ```
7. Envía tus cambios a tu fork (`git push origin feat/nueva-funcionalidad`) y abre un Pull Request contra la rama `main`.

## 🎨 Guía de Estilo

- Los mensajes de commit deben ser concisos y seguir la convención Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).
- Mantén la paridad estricta entre las carpetas de idiomas (`en-template`, `pt-template`, `es-template`).

## 🛠️ Configuración de Desarrollo

1. Requiere Node.js 18 o superior.
2. Instala dependencias con `npm install`.
3. Ejecuta `npm test` para validar estructura, paridad de plantillas y funciones auxiliares.
