# Más Allá de CopyCat: Ingeniería de un Pipeline img2img Few-Shot para VFX

<p class="subtitle">El camino de investigación detrás del motor de U-Net que impulsa Vectorescope para entrenamiento e inferencia en VFX.</p>

<img src="/assets/logo_black.png" alt="Plataforma Vectorescope" class="blog-image" style="max-height: 280px; width: auto; margin: 1.5rem auto; background: white; padding: 1.5rem; border-radius: 16px;">

---

## 1. El Origen de la Investigación: Construyendo el Motor de Vectorescope

En la producción moderna de efectos visuales (VFX), automatizar la limpieza de placas (clean-plating), la rotoscopía y los retoques de belleza requiere modelos neuronales que entreguen precisión absoluta a nivel de píxel con conjuntos mínimos de datos de entrenamiento. Aunque Foundry CopyCat abrió la puerta al deep learning dentro del árbol de nodos de Nuke, ejecutar múltiples barridos de parámetros y entrenar arquitecturas complejas en estaciones locales impone severas limitaciones de escalabilidad y tiempo.

Este artículo detalla mi proceso de investigación fundamental: la ingeniería de una arquitectura neuronal Few-Shot optimizada específicamente para las altas exigencias de fidelidad de la industria audiovisual. Esta misma investigación se convirtió en el motor y la base técnica para crear <a href="https://vectorescope.com" target="_blank" rel="noopener noreferrer"><strong>Vectorescope</strong></a> — mi plataforma especializada para hacer que el entrenamiento de modelos de visión por computador y la inferencia a escala sean accesibles, repetibles y rentables para equipos y estudios de VFX.

---

## 2. Comparación de Arquitecturas: Lo Nuevo vs. Lo Probado

Para encontrar la arquitectura óptima para este pipeline, realicé una comparación rigurosa entre diversos modelos de última generación:

- **Candidatos Evaluados:** ConvNeXt, NAFNet, MambaIR (State Space Models), SwinIR y variantes de U-Net.
- **Hallazgo:** Aunque los Transformers y modelos Mamba sobresalen en grandes volúmenes de datos, introducen alucinaciones de alta frecuencia y artefactos de "ringing" cuando se entrenan con datos extremadamente escasos (<10 imágenes de referencia).
- **El Ganador:** Una **U-Net modificada con Attention Gates** y, crucialmente, **la eliminación total de Dropout**.

### ¿Por Qué Sin Dropout?
En inferencia para video, la consistencia píxel-determinística es fundamental para evitar el parpadeo (flickering). El Dropout introduce varianza estocástica entre fotogramas consecutivos. En su lugar, el uso de Batch Normalization garantiza coherencia temporal suave y bordes nítidos.

---

## 3. Función de Pérdida Híbrida Personalizada

Las funciones de pérdida L1 o MSE estándar tienden a generar resultados borrosos por regresión a la media. Para recuperar microdetalle y grano realista, formulé una función de pérdida híbrida multiescala:

$$\mathcal{L}_{total} = \lambda_{1}\mathcal{L}_{1} + \lambda_{2}\mathcal{L}_{LPIPS} + \lambda_{3}\mathcal{L}_{Lap} + \lambda_{4}\mathcal{L}_{SSIM}$$

### Desglose:
1. **$\mathcal{L}_{1}$ Loss:** Asegura precisión fotométrica y de color global.
2. **$\mathcal{L}_{SSIM}$:** Preserva la estructura local de contraste y luminancia.
3. **$\mathcal{L}_{LPIPS}$:** Pérdida perceptual basada en redes profundas para capturar microtexturas visibles al ojo humano.
4. **$\mathcal{L}_{Laplacian}$:** Penaliza la degradación de bordes en múltiples bandas de frecuencia, previniendo el aspecto lavado.

---

## 4. Ingeniería de Datos y Overfitting Intencional

En Machine Learning clásico, el sobreajuste es un error; en VFX Few-Shot, **el overfitting sobre el plano específico es el objetivo**.

Al anclar los pesos a la iluminación, grano de cámara y óptica del plano específico mientras se aplican aumentaciones geométricas controladas, el modelo retiene fidelidad absoluta en el sujeto mientras generaliza a lo largo del movimiento de cámara.

---

## 5. De la Investigación a la Plataforma: Vectorescope

<img src="/assets/monitor_vectorescope.jpg" alt="Telemetría de Vectorescope Mission Control" class="blog-image">

Lo que comenzó como una investigación de I+D en funciones de pérdida y ejecución containerizada en GPUs evolucionó hasta convertirse en <a href="https://vectorescope.com" target="_blank" rel="noopener noreferrer"><strong>Vectorescope</strong></a>:
- **Entrenamiento Nativo en la Nube:** Permite a los artistas lanzar entrenamientos multi-GPU elásticos en paralelo sin saturar sus estaciones de trabajo.
- **Inferencia Determinística y Rápida:** Genera EXRs multicapa con gestión de color (OCIO) listos para integrarse directamente en Nuke.
- **Accesible para Estudios:** Ofrece capacidades de entrenamiento de modelos de nivel empresarial sin requerir que los estudios construyan costosos departamentos internos de MLOps.

---

## Conoce Más

- Explora la plataforma en <a href="https://vectorescope.com" target="_blank" rel="noopener noreferrer"><strong>vectorescope.com</strong></a> (se abre en pestaña nueva)
- Para integraciones de pipeline a medida e infraestructura cloud, contáctame directamente en la página de [VFX Infrastructure](/vfx).

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
