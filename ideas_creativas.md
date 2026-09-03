# Ideas Creativas y Conceptos de I+D — Sergio Céspedes

Repositorio estructurado de ideas creativas, experimentos visuales y propuestas técnicas para el portafolio y proyectos de producción VFX / AI.

---

## 🎨 1. Interacciones Visuales y Experiencia Web

### Terminal Interactiva de Pipeline ("Pipeline Inspector")
- **Concepto**: Un mini emulador de terminal interactivo embebido en la página `/vfx` donde los directores técnicos pueden teclear comandos como `nuke --ai-matte shot_010`, `deadline-cloud status --fleet gpu-spot`, o `griptape run agent.py`.
- **Efecto**: Demuestra dominio técnico real de la línea de comandos y pipelines headless sin recurrir a videos estáticos.

### Visualizador de Grafo de Nodos en Tiempo Real (SVG/Canvas)
- **Concepto**: Un widget interactivo que simula un árbol de nodos de Nuke o ComfyUI donde los nodos se conectan dinámicamente mediante cables bezier que pulsan cuando el usuario pasa el mouse sobre los pasos de la arquitectura (DCC -> Griptape -> Worker GPU).
- **Paleta**: Fondos oscuros carbón (`#070b14`), cables con glow ámbar (`#ffcf32`) y nodos en azul nube (`#007acc`).

### Comparador Antes / Después para Inferencias Neuronales (Slider)
- **Concepto**: Componente slider interactivo de pantalla dividida (split-screen) que muestre un fotograma crudo con ruido / pantalla verde vs. el mate de composición neural procesado con U-Net / DINOv3.

---

## ⚡ 2. Arquitecturas y Herramientas Técnicas

### Conector Ligero Nuke <-> ComfyUI / Griptape (Open Source Gizmo)
- **Concepto**: Publicar en GitHub un Nuke Gizmo en Python/C++ de código abierto que serialice buffers EXR float de Nuke, los envíe vía socket UNIX / gRPC local a un daemon de ComfyUI y devuelva el canal `alpha` o `rgba` directamente sin abandonar Nuke.
- **Impacto B2B**: Demuestra capacidad técnica directa a estudios que buscan integrar IA en flujos de composición tradicionales.

### Plantilla de Terraform para Render Farm Híbrida en AWS Deadline Cloud
- **Concepto**: Repositorio de código abierto con una arquitectura de referencia en Terraform que despliegue:
  - VPC con subnets privadas para workers.
  - Cola de AWS Deadline Cloud.
  - Flota EC2 Spot con auto-escalado basado en la profundidad de la cola.
  - Gateway de almacenamiento S3 con sincronización POSIX local.

### Vectorescope: Playground Interactivo
- **Concepto**: Integrar en el portafolio una demo interactiva o playground de Vectorescope donde el usuario pueda cargar una imagen y ver la extracción de características mediante DINOv3 en tiempo real.
