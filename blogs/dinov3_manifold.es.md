<h1>El Manifold y la Ideología de lo Real</h1> 
<p class="subtitle">Explorando cómo DINOv3 mapea la geometría de la edad</p>

<div class="iframe-container" style="width: 100%; height: 500px; margin: 2rem 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
    <iframe src="/assets/grafico_pca3d.html" style="width: 100%; height: 100%; border: none;"></iframe>
</div>

<p>El concepto más "zizekiano" que he encontrado en el Deep Learning es, sin duda, el <strong>Manifold</strong>.</p>

<p>Como diría Slavoj Zizek, lo <i>Real</i> es un caos inabarcable, una sopa de datos pura y traumática. Sin embargo, sobre ese caos construimos una serie de ficciones que estructuran nuestra realidad y le dan sentido; a esto lo llamamos <strong>ideología</strong>. En el mundo del aprendizaje profundo, esa estructura subyacente es el Manifold. Aunque una imagen viva en un espacio de miles de dimensiones, su esencia conceptual a menudo puede simplificarse a unas pocas dimensiones clave. La ideología del modelo es lo que nos permite navegar el caos de los píxeles con coherencia semántica.</p>

<h2>¿Es la Edad un Vector en DINOv3?</h2>
<p>Para explorar el manifold en modelos de visión modernos como DINOv3, elaboré un dataset propio con imágenes de una misma persona en distintas etapas de su vida, desde los 18 hasta los 100 años. Mi objetivo era observar cómo el modelo representa el concepto de edad en un rostro.</p>

<p>En el Deep Learning clásico, solia asumir que los atributos semánticos son vectores lineales. Sin embargo, la realidad geométrica suele ser más compleja y curva, por eso decidi simplificar y usar PCA con una sola dimension.</p>

<h2>Auditoría en DINOv3: El Eje del Tiempo</h2>
<p>Al extraer los embeddings del sujeto y graficar sus representaciones usando PCA, el resultado fue revelador</p>

<img src="../assets/1.png" alt="Gráfica PCA mostrando la trayectoria de edad" class="blog-image">

<p>Como se observa en el <strong>Gráfico 1</strong>, existe una línea que atrapa la gran mayoría de la variación en las imágenes. Esta dirección representa puramente la edad, separando la identidad del cambio temporal. DINOv3 no solo ve píxeles, ve la estructura subyacente del envejecimiento humano como una dimensión navegable.</p>

<h2>Generalización Zero-Shot</h2>
<p>Una vez identificada esta dirección de la edad en el dataset curado, realicé un experimento de proyección <i>Zero-Shot</i>. Proyecté fotos de personas totalmente nuevas que el modelo nunca había visto sobre este eje conceptual.</p>

<img src="../assets/2.png" alt="Alineación de nuevos sujetos en el eje de edad 1D" class="blog-image">

<p>El resultado (<strong>Gráfico 2</strong>) fue una alineación casi perfecta. Sin entrenar un clasificador específico, simplemente usando operaciones geométricas simples sobre el Manifold, logramos una aproximación robusta de la edad de cualquier persona. El modelo ha universalizado el concepto.</p>

<h2>Validación con UTKFace</h2>
<p>Para ver como se comporta Divo3, sometí los embeddings del dataset UTKFace con miles de rostros diversos a la misma lógica en 1D. Al visualizar los resultados junto al PCA anterior, encontré una correlación asombrosa. A pesar de la enorme diversidad de iluminación, pose e identidad, la estructura latente de la edad se mantenía consistente. La "ficción" del Manifold es, en efecto, más fuerte que la variedad de lo Real.</p>

<img src="../assets/4.png" alt="Alineación de nuevos sujetos en el eje de edad 1D" class="blog-image">

<h2>Más allá de los datos</h2>
<p>Así como Žižek nos invita a mirar más allá de lo evidente para entender las estructuras que nos gobiernan, el Manifold nos recuerda que el Deep Learning funciona porque descubre y aprovecha estas jerarquías subyacentes. Entender la geometría de estos espacios no es solo teoría, es la clave para diseñar modelos más creativos, precisos y sobre todo profundos.</p>

<p class="subtitle">Actualmente trabajo en un proyecto para inyectar este tipo de vectores de dirección en un pipeline generativo, donde el control semántico sea tan fluido como la ideología misma.</p>

---
<p><em>Escrito por Sergio Cespedes.</em></p>
