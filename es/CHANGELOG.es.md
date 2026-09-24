# Registro de Cambios (Changelog)
[![English](https://img.shields.io/badge/Lang-En-red)](../CHANGELOG.md)
[![Portuguese](https://img.shields.io/badge/Lang-Pt--Br-green)](../pt/CHANGELOG.pt.md)

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [1.5.0] - 2026-09-24

### Añadido
- 🌍 **Soporte Completo a Español**: Suite de 25 plantillas en `templates/es-template/` con 100% de paridad con las versiones en inglés y portugués.
- 💬 **Internacionalización de la CLI (ES)**: Prompts y mensajes de terminal en español con detección automática del idioma del sistema operativo vía `process.env.LANG`.
- 🌐 **Sitio Web de Documentación Multilingüe**: Botón selector de idioma (`ES`), páginas de guía traducidas, explicaciones de plantillas y búsqueda localizada.
- ⚡ **Detección Automática de Metadatos**: Detección inteligente del nombre de la carpeta del proyecto, usuario/email de Git y año ISO actual.
- 🧹 **Sanitizador de Markdown**: Eliminación automática de badges huérfanas (Buy Me A Coffee, enlaces de demo vacíos, Twitter) y enlaces rotos.

### Modificado
- 🎯 **Calibración de Plantillas**: Plantillas Standard, Minimal y Long calibradas con bloques de código prácticos, tablas de configuración y sin contenido de marketing innecesario.
- 🧹 **Optimización de Documentación**: Eliminación de archivos no esenciales de la raíz (`AUTHORS.md`, `GOVERNANCE.md`, `ROADMAP.md`, `SUPPORT.md`) para enfocarse en lo esencial.

### Corregido
- 🛠️ **CI Super-Linter**: Configuración de `.markdown-lint.yml` e integración limpia de scripts garantizando pipelines 100% verdes.

## [1.0.0] - 2026-05-15

### Añadido
- Lanzamiento inicial del proyecto con soporte básico de plantillas.
