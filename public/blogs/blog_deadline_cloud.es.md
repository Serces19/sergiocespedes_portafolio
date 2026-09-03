# AWS Deadline Cloud y Nuke CopyCat: Rejuvenecimiento Digital a Gran Escala

<p class="subtitle">Caso de Éxito en Producción: Escalando Nuke CopyCat para Rejuvenecimiento Facial en la Serie de Netflix "El Otro Padre", con ~50% de Ahorro en Hardware en AWS</p>

<img src="/assets/deadline_pictures/worker_dashboard.jpg" alt="Panel de Control de Workers en AWS Deadline Cloud" class="blog-image">

---

## 1. Contexto y Desafío de Producción: "El Otro Padre" (Netflix)

<img src="/assets/oep3.jpg" alt="Serie de Netflix - El Otro Padre" class="blog-image" style="max-height: 480px; width: auto; margin: 1.5rem auto;">

En la industria de efectos visuales (VFX) para series de televisión de primer nivel, los cronogramas de entrega frecuentemente se comprimen a límites críticos. Durante la postproducción y entrega de la serie de Netflix **"El Otro Padre"** (*nombre del estudio bajo confidencialidad por acuerdo estándar de NDA*), el equipo de VFX enfrentó un complejo desafío técnico centrado en **rejuvenecimiento digital (de-aging)** de alta fidelidad:

- **El Alcance:** Decenas de planos complejos que requerían el rejuvenecimiento facial fotorrealista del protagonista en diversas condiciones de iluminación, primeros planos y movimientos dinámicos de cámara.
- **La Elección del Workflow:** Utilizamos **Nuke CopyCat** de Foundry para entrenar modelos de machine learning específicos para cada plano a partir de fotogramas clave retocados a mano (ground truths), aprendiendo la microtextura de la piel y la reducción de arrugas sin generar el aspecto artificial o "plástico" de los filtros convencionales.
- **El Cuello de Botella de Hardware:** Entrenar docenas de redes de CopyCat a alta resolución en paralelo, sumado al renderizado de secuencias multicapa EXR, saturó por completo las estaciones de trabajo locales del estudio.
- **El Dilema:** Comprar servidores multi-GPU físicos dedicados era inviable por el alto gasto de capital (CAPEX), mientras que alquilar hardware físico conllevaba semanas de espera logística, contratos mínimos obligatorios y costos de licencias inactivas.

Se requería potencia de cálculo GPU elástica que pudiera desplegarse en horas, escalar a decenas de workers activos durante el pico de entrega y apagarse en el instante en que los planos fueran aprobados por supervisión.

---

## 2. La Estrategia Arquitectónica: AWS Deadline Cloud

Para cumplir con las fechas de entrega de Netflix sin inflar los costos operativos, desplegamos una infraestructura híbrida de renderizado y deep learning utilizando **AWS Deadline Cloud**.

<img src="/assets/deadline_pictures/main_monitor.jpg" alt="Monitor Centralizado de Deadline Cloud Gestionando Render y Tareas de CopyCat" class="blog-image">

### Pilares Clave de la Arquitectura:
1. **Envío Híbrido Directo desde Nuke:** Los compositores enviaban colas de render y entrenamientos de Nuke CopyCat directamente desde la interfaz de Nuke o scripts de Python a las colas de AWS Deadline Cloud.
2. **Sincronización S3 POSIX Automatizada:** Las placas de entrada, perfiles de color OCIO, máscaras de referencia y gizmos de Nuke se sincronizaban automáticamente con Amazon S3 con caché POSIX local en los workers para evitar cuellos de botella de ancho de banda.
3. **Aislamiento y Seguridad de Workers:** Los workers se ejecutaban dentro de subredes privadas (VPC) en AWS con roles IAM estrictos, garantizando la seguridad absoluta del material confidencial del cliente.

---

## 3. Estrategia de Flota en 4 Niveles: Spot vs. On-Demand

En lugar de utilizar un único tipo de instancia para todas las tareas, implementamos **4 perfiles de instancias diferenciados**, optimizados por costo, memoria de GPU y prioridad:

| Tipo de Instancia | Especificación GPU | Modelo de Precios | Carga Asignada | Beneficio en Producción |
| :--- | :--- | :--- | :--- | :--- |
| **`g6.2xlarge` / `g6.4xlarge`** | NVIDIA L4 Tensor Core (24GB VRAM) | **Spot (hasta ~70% ahorro)** | Barridos de entrenamiento CopyCat en paralelo para de-aging | Gran ancho de banda de memoria, convergencia ultrarrápida |
| **`g6.2xlarge`** | NVIDIA L4 Tensor Core (24GB VRAM) | **On-Demand** | Entrenamientos finales críticos de CopyCat y planos hero | Cero riesgo de interrupción en horas clave de entrega |
| **`g4dn.xlarge` / `g4dn.2xlarge`** | NVIDIA T4 (16GB VRAM) | **Spot** | Inferencia rápida de CopyCat y evaluación de slap-comps | Máxima eficiencia de costo para revisiones diarias de artistas |
| **`g4dn.2xlarge`** | NVIDIA T4 (16GB VRAM) | **On-Demand** | Renderizado final de secuencias compuestas EXR | Render continuo y confiable para entregas diarias a editorial |

<img src="/assets/deadline_pictures/worker_dashboard.jpg" alt="Workers Activos y Telemetría en la Nube" class="blog-image">

### Por Qué Funcionó esta Combinación:
- **Iteración Masiva en CopyCat:** En vez de que un compositor esperara 6–8 horas para probar una sola configuración de de-aging en su máquina local, lanzamos **de 8 a 10 entrenamientos de CopyCat en paralelo** en instancias `g6` Spot, evaluando simultáneamente diferentes learning rates, tamaños de crop y epochs.
- **Resiliencia ante Reclamaciones Spot:** Si AWS reclamaba una instancia Spot, Deadline Cloud reencolaba automáticamente la tarea en otro worker sin perder los checkpoints de entrenamiento del modelo.
- **Garantía On-Demand:** En las horas finales de entrega a editorial, los planos críticos se enrutaban a workers On-Demand para garantizar entrega continua sin interrupciones.

---

## 4. Control Financiero y Optimización de Costos

Con Deadline Cloud, integramos monitoreo granular de costos y límites de presupuesto directamente en el pipeline de producción.

<img src="/assets/deadline_pictures/cost_per_job.jpg" alt="Seguimiento Granular de Costos por Job en Deadline Cloud" class="blog-image">

### Atribución de Costos por Plano
Cada tarea enviada se etiquetaba con metadatos del plano (ej. `EOP_101_SH_0240_DEAGING`). Esto permitió a los coordinadores y directores técnicos conocer el costo exacto en dólares por fotograma y por modelo entrenado de CopyCat en tiempo real.

<img src="/assets/deadline_pictures/torta_costos.jpg" alt="Distribución Porcentual de Costos de Cómputo en AWS" class="blog-image">

### Controles de Presupuesto y Salvaguardas
Configuramos alarmas de umbral en AWS Cost Explorer y en la gestión de presupuestos de Deadline Cloud. Si una secuencia alcanzaba el 80% de su asignación de cómputo, se notificaba automáticamente a los directores técnicos, evitando sobrecostos accidentales.

<img src="/assets/deadline_pictures/budget.jpg" alt="Alertas de Presupuesto y Límites Financieros en Deadline Cloud" class="blog-image">

---

## 5. Resultados Medibles y Retorno de Inversión (ROI)

Al reemplazar el alquiler de hardware físico por una flota elástica en AWS Deadline Cloud para **"El Otro Padre"**, el estudio obtuvo resultados contundentes:

1. **Ahorro Directo de ~50% en Costos:** El gasto total de infraestructura fue aproximadamente la mitad del presupuesto requerido para alquilar servidores físicos durante dos meses con transporte, espacio en rack, energía y configuración.
2. **Cero Desperdicio en Licenciamiento:** Las licencias de render de Nuke se activaron bajo demanda estrictamente durante la ejecución activa de las instancias.
3. **Iteraciones 10x Más Rápidas:** Los compositores recibían pases de inferencia de CopyCat en minutos en lugar de esperar al día siguiente, permitiendo un refinamiento creativo ágil del rejuvenecimiento del actor.
4. **100% de Entregas a Tiempo:** Todos los planos episódicos con de-aging se entregaron dentro del cronograma cumpliendo los estrictos estándares de calidad técnica de Netflix.

---

## Conclusión

El despliegue de AWS Deadline Cloud para tareas de rejuvenecimiento con **Nuke CopyCat** demostró que la elasticidad en la nube no es solo una solución de emergencia, sino una ventaja competitiva decisiva que permite a los estudios de VFX entregar efectos visuales de clase mundial dentro del presupuesto y a tiempo.

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
