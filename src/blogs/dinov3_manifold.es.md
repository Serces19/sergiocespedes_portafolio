# El Manifold y la Ideología de lo Real: Geometría Latente en DINOv3

<p class="subtitle">Explorando cómo los Vision Transformers autosupervisados (DINOv3) mapean la geometría de la edad y manifolds de características no lineales.</p>

<div class="iframe-container" style="width: 100%; height: 500px; margin: 2rem 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
    <iframe src="/assets/grafico_pca3d.html" style="width: 100%; height: 100%; border: none;"></iframe>
</div>

El concepto más "zizekiano" en Deep Learning es, sin duda, el **Manifold**.

Como argumentaría Slavoj Žižek, lo *Real* es un caos inabarcable, una sopa pura y traumática de datos sensoriales crudos. Sin embargo, sobre ese caos construimos ficciones estructurales que organizan nuestra realidad y le dan sentido semántico: a esto lo llamamos ideología. En el mundo del aprendizaje profundo, esa estructura subyacente es el Manifold. Aunque una imagen viva en un espacio matemático de millones de dimensiones de píxeles, su esencia conceptual a menudo puede comprimirse en unas pocas dimensiones continuas. La geometría latente del modelo nos permite navegar el caos de píxeles con coherencia semántica.

---

## 1. ¿Es la Edad un Vector Navegable en DINOv3?

Para explorar cómo se comporta el manifold en modelos fundacionales de visión modernos como **DINOv3** de Meta, elaboré un dataset especializado con retratos de alta resolución de un mismo sujeto a lo largo de las distintas etapas de su vida, desde los 18 hasta los 100 años. El objetivo era observar cómo las representaciones visuales autosupervisadas estructuran el concepto biológico de la edad sin entrenamiento supervisado explícito.

En el Deep Learning clásico, solía asumirse que los atributos semánticos forman vectores euclidianos lineales. Sin embargo, la realidad perceptual de alta dimensionalidad es curva y riemanniana. Para aislar la dirección principal de variación, extraje los embeddings del vision transformer y apliqué Análisis de Componentes Principales (PCA).

---

## 2. DINOv3 y el Eje Principal de Edad

Al extraer los embeddings del sujeto en el tiempo y proyectarlos en el subespacio de componentes principales, la geometría fue evidente.

<img src="/assets/1.png" alt="Gráfica PCA mostrando la trayectoria de edad" class="blog-image">

Como se observa en el **Gráfico 1**, una trayectoria continua captura la gran mayoría de la variación direccional. Esta componente principal aísla limpiamente la edad biológica, desacoplando la identidad del cambio temporal. DINOv3 no solo detecta píxeles; construye un manifold suave y navegable del envejecimiento humano.

---

## 3. Generalización Zero-Shot y Proyecciones Fuera de Distribución

Una vez aislada esta dirección de edad en el dataset curado, realicé un experimento de **proyección Zero-Shot**. Sujetos de prueba completamente nuevos —identidades que el modelo jamás había visto— fueron proyectados sobre este eje geométrico 1D.

<img src="/assets/2.png" alt="Alineación de nuevos sujetos en el eje de edad 1D" class="blog-image">

El resultado (**Gráfico 2**) demostró una monotonicidad temporal casi perfecta. Sin entrenar un solo clasificador ni ajustar los pesos del backbone, la simple proyección sobre el vector del manifold proporcionó una estimación robusta y continua de la edad facial en identidades no vistas.

---

## 4. Validación con Benchmark Masivo: UTKFace

Para validar rigurosamente que esto no fuera un artefacto del dataset, evalué la misma lógica de proyección en miles de rostros diversos del benchmark público **UTKFace**.

<img src="/assets/4.png" alt="Validación con UTKFace dataset" class="blog-image">

A pesar de la enorme diversidad de iluminación, óptica de cámara, pose, etnia y ruido de fondo, la trayectoria latente de la edad se mantuvo consistente. La estructura geométrica descubierta por el preentrenamiento autosupervisado demostró ser altamente generalizable.

---

## 5. Implicaciones para VFX y Composición Neuronal

Comprender la geometría del manifold es fundamental para los pipelines de efectos visuales de próxima generación:
- **Inpainting y Rejuvenecimiento Condicionado:** Al navegar a lo largo de vectores aislados del manifold, los artistas pueden guiar modelos de difusión generativa o inpainters U-Net para modificar atributos semánticos específicos sin alterar los rasgos identitarios del actor.
- **Guía Neuronal Few-Shot:** Elimina la necesidad de datasets masivos de fine-tuning por plano, permitiendo manipulación semántica zero-shot ultrarrápida.

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
