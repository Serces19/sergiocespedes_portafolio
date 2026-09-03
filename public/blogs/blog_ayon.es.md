# Ingeniería de Pipelines de Producción con AYON (OpenPype)

<p class="subtitle">Arquitectura de pipeline de código abierto, automatización de publicación de assets e integración multi-DCC.</p>

<img src="/assets/ayon.png" alt="Plataforma de Pipeline AYON" class="blog-image">

En el mundo de los efectos visuales (VFX) y la animación, el software de pipeline es la columna vertebral que conecta artistas, herramientas de creación digital (DCC) y terabytes de datos de producción. Entre las soluciones modernas, **AYON** (anteriormente OpenPype) destaca como una plataforma robusta y de código abierto para gestionar pipelines de estudio.

---

## 1. ¿Qué es AYON?

AYON es una plataforma de pipeline de código abierto diseñada específicamente para VFX, animación y videojuegos. Proporciona una arquitectura modular para estructurar datos de producción, gestionar la publicación versionada de assets y asegurar la consistencia entre aplicaciones como **Nuke, Maya, Houdini y Blender**.

---

## 2. Pilares de un Pipeline con AYON

- **Publicación Estandarizada:** Garantiza que placas, cachés de geometría (USD / Alembic), rigs y renders EXR sigan convenciones de nomenclatura y rutas estrictas sin errores manuales.
- **Interoperabilidad entre DCCs:** Permite transferencias limpias entre departamentos (ej. tracking 3D en Maya $\rightarrow$ FX en Houdini $\rightarrow$ Composición en Nuke).
- **Ingesta y Turnovers Automatizados:** Procesa automáticamente planillas editoriales (EDL/XML), convierte metraje crudo a espacios de color de trabajo (ACEScg / OCIO) y genera proxies livianos.
- **Sincronización con Bases de Datos:** Conecta estaciones de trabajo locales con servidores centralizados para seguimiento de estados en tiempo real.

---

## 3. Ventajas para Estudios

1. **Flexibilidad Total:** Código abierto en Python que permite crear herramientas personalizadas en PySide e integraciones cloud a medida.
2. **Cero Costos de Licencia por Asiento:** Permite desplegar capacidades de nivel enterprise sin costes prohibitivos.
3. **Preparado para Entornos Híbridos:** Se integra con granjas de renderizado locales y en la nube (como AWS Deadline Cloud).

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
