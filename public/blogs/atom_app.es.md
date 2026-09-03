# Shot Control App: Seguimiento y Control de Tareas para VFX

<p class="subtitle">Gestión de planos en la nube, panel integrado en Nuke y backend serverless en AWS.</p>

<img src="/assets/atom_app_edit.png" alt="Interfaz de Shot Control App" class="blog-image">

En pipelines ágiles de efectos visuales, mantener actualizados los estados de las tareas y abrir la versión correcta de cada script sin salir del software es vital. **Shot Control App** es una aplicación de escritorio diseñada para conectar a los artistas de Nuke directamente con la base de datos de producción.

---

## 1. Características Principales

- **Panel Integrado en Nuke:** Los artistas pueden actualizar estados de revisión y enviar nuevas versiones sin salir de Foundry Nuke.
- **Lanzador de Scripts Contextual:** Abre automáticamente la versión y directorio correcto del plano según la base de datos.
- **Backend Serverless en AWS:** Construido con AWS Lambda, DynamoDB y API Gateway para alta disponibilidad y costos operativos prácticamente nulos.
- **Sincronización en Tiempo Real:** Visibilidad inmediata de avances para coordinadores y supervisores.

---

## 2. Arquitectura Técnica

- **Cliente / UI:** Python y PySide / Qt
- **Integración DCC:** API Python de Nuke
- **Infraestructura Cloud:** AWS Serverless (Lambda, DynamoDB, API Gateway)

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
