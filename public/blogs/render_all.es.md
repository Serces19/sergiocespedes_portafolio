# Render All! — Gestor de Cola de Render para Artistas de Nuke

<p class="subtitle">Una aplicación de escritorio ligera y multiplataforma para renderizado por lotes de scripts de Foundry Nuke.</p>

<img src="/assets/render_all_edit.png" alt="Aplicación de Escritorio Render All" class="blog-image">

En entornos de producción rápida, los compositores necesitan enviar múltiples scripts de Nuke (`.nk`) en segundo plano sin bloquear su sesión interactiva. **Render All!** es una herramienta de escritorio diseñada para simplificar el renderizado local.

---

## 1. Características Principales

- **Cola Intuitiva Drag-and-Drop:** Arrastra archivos `.nk` directamente a la lista de ejecución.
- **Selección de Nodos Write:** Permite especificar qué nodos Write ejecutar (ej. `Write1`, `Write_Final`).
- **Automatizaciones Convenientes:** Apertura automática de carpetas al terminar y apagado programado del equipo.
- **Aislamiento de Procesos:** Ejecución headless en segundo plano mediante la CLI de Nuke.

---

## 2. Stack Técnico

- **Framework:** Python con PySide6 (Qt)
- **Motor:** Nuke CLI (`nuke -x -X`)
- **Compatibilidad:** Windows y Linux

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
