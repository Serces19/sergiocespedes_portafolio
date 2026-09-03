# Configuración de Entornos Linux para Pipelines de VFX

<p class="subtitle">Guía esencial para configurar estaciones de trabajo Linux, dependencias de estudio, containerización y workers en la nube.</p>

<img src="/assets/linux.jpg" alt="Entornos Linux para Pipelines de VFX" class="blog-image">

En la producción de efectos visuales de alta gama, Linux (específicamente distribuciones empresariales como Rocky Linux, AlmaLinux y RHEL) es el estándar indiscutible de la industria tanto para estaciones de artistas como para granjas de render en la nube.

---

## 1. Por Qué Linux Domina la Infraestructura de los Estudios

- **Rendimiento de Kernel y Manejo de Memoria:** Proporciona asignación de memoria multihilo superior y ejecución óptima de kernels de GPU para renders pesados, simulaciones en Houdini y entrenamiento en PyTorch.
- **Sistemas de Archivos POSIX y Almacenamiento:** Soporte nativo para montajes NFS, Ceph y gateways S3 de alta velocidad para cargar secuencias EXR multicapa sin latencia.
- **Cumplimiento con la VFX Reference Platform:** Facilita la creación de módulos de entorno aislados que respetan las versiones anuales de Python, Qt, PySide y GCC.

---

## 2. Configuración de una Estación de Producción

1. **Alineación de Drivers NVIDIA y CUDA:** Compatibilidad estricta entre drivers propietarios y runtimes de CUDA para aceleración en Nuke y PyTorch.
2. **Aislamiento con Docker / Rez:** Empaquetado de wrappers y plugins en imágenes reproducibles para despliegue en workers locales y en AWS.
3. **Automatización de Dotfiles:** Sincronización centralizada de variables de entorno para todo el equipo de artistas.

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
