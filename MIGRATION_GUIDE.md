# Guía de Migración Técnica: Sitio Web Portafolio (HTML/CSS -> Vite + React + Tailwind v4)

Este documento sirve como especificación técnica y manual de procedimiento estándar para que un **Agente de IA (o desarrollador)** pueda migrar o reconstruir con precisión milimétrica el portafolio de Sergio Céspedes desde su versión original en HTML/CSS plano hacia una arquitectura SPA moderna basada en **Vite, React 19 y Tailwind CSS v4**.

---

## 1. Visión General del Proyecto Original

El sitio web original se compone de páginas HTML estáticas (`home.html`, `articles.html`), un archivo CSS principal (`style.css`), imágenes y recursos estáticos en `assets/`, y entradas de blog escritas en Markdown en el directorio `blogs/`.

### Estructura de Archivos del Proyecto Original
```
├── home.html                   # Página principal (Landing de portafolio)
├── articles.html               # Listado de artículos y notas técnicas
├── style.css                   # Estilos personalizados globales y componentes
├── assets/                     # Imágenes, badges, iconos y recursos multimedia
│   ├── cover_manifold_dino.png
│   ├── render.jpg
│   ├── vfx_pipeline_header.png
│   ├── cloud2.jpg
│   ├── cloud.jpg
│   └── logo_scope.png
└── blogs/                      # Entradas de blog en Markdown
    ├── dinov3_manifold.md
    ├── blog_deadline_cloud.md
    ├── blog_vfx_pipeline.md
    └── blog_ayon.md
```

---

## 2. Anatomía Exacta del Sitio Original (Sección por Sección)

Para garantizar cero pérdida de datos y estética, cada sección debe coincidir funcional y visualmente con la versión HTML original:

### 2.1. Navegación (`Navbar`)
- **Fijo superior (`fixed top-0 w-full z-50`)**: Fondo blanco con efecto de vidrio esmerilado (`backdrop-blur-md bg-white/80`).
- **Logotipo**: `logo_scope.png` + Texto "Sergio Céspedes" con subtexto "Cloud Architect & TD".
- **Enlaces de Navegación**: Case Studies (`#featured-projects`), Experience (`#experience`), About (`#about`), Certifications (`#certifications`), Contact (`#contact`), Articles (`/articles`).
- **Acciones**: Botón a GitHub, LinkedIn y botón de descarga/visión de Resume.

### 2.2. Hero Section (`Hero`)
- **Titular Principal**: "Cloud Architect | VFX Pipeline TD | Machine Learning Engineer".
- **Subtítulo**: Descripción enfocada en orquestación cloud (AWS Deadline), computación gráfica y arquitecturas de datos de alto rendimiento.
- **Badges de Tecnologías**: AWS, PyTorch, Deadline Cloud, AYON, Nuke API, Python.
- **Acciones CTA**: Botón principal a "Explorar Proyectos" y botón secundario "Contactar".
- **Redes Sociales**: Iconos interactivos de LinkedIn, GitHub, Email.

### 2.3. Casos de Estudio y I+D (`Projects`)
- **Grid de 2 columnas en Desktop (`grid-cols-1 md:grid-cols-2 gap-8`)**:
  1. **DINOv3 Latent Space Geometry & Manifold Audit**: Imagen `cover_manifold_dino.png`, tag `Computer Vision & ML`.
  2. **AWS Deadline Cloud & Distributed GPU Orchestration**: Imagen `render.jpg`, tag `Cloud & MLOps`.
  3. **High-Fidelity Few-Shot VFX Neural Compositing**: Imagen `vfx_pipeline_header.png`, tag `VFX & Neural Pipelines`.
  4. **Enterprise Pipeline Data & Asset Automation (AYON)**: Imagen `cloud2.jpg`, tag `Data Pipelines`.
- **Estilo de Tarjetas**: `neo-card` (Bordes redondeados, sombra suave, efecto hover sutil con elevación).

### 2.4. Experiencia Profesional (`Experience`)
- **Línea de tiempo vertical (Timeline)**:
  - **Pipeline TD** @ Atom Studios (Aug 2023 – Presente).
  - **VFX Compositor** @ Elemental (Jan 2023 – Jul 2023).
  - **Creative Tech Lead** @ Feedback Studio (Dec 2019 – Aug 2022).
- **Detalle de Contenido**: Breve descripción del rol + lista horizontal de chips tecnológicos asociados.

### 2.5. Sobre Mí (`About`)
- **Diseño Moderno Inspirado en Bento Box / Tarjeta de Perfil**:
  - Imagen de perfil/área técnica.
  - Insignia flotante sobresaliente: *"Available for Engineering Projects"*.
  - Puntos clave de expertise (Cloud Infrastructure, ML Pipelines, VFX Automation).

### 2.6. Certificaciones (`Certifications`)
- Grid responsivo de tarjetas de certificaciones (AWS Certified Solutions Architect, etc.) con bordes con acento de color.

### 2.7. Contacto (`Contact`)
- Formulario de contacto interactivo (Nombre, Email, Mensaje) + Botón con copiado rápido de dirección de email con notificación Toast.

### 2.8. Artículos / Blog (`Articles` & `ArticleDetail`)
- **Ruta `/articles`**: Grid con todas las entradas de blog.
- **Ruta `/blog/:slug`**: Carga dinámica del archivo Markdown correspondiente desde `/public/blogs/` renderizado con soporte tipográfico elegante (`@tailwindcss/typography`).

---

## 3. Protocolo de Migración Paso a Paso para un Agente de IA

### Paso 1: Configuración del Entorno Vite + React + Tailwind v4
1. Inicializar el proyecto con Vite y React:
   ```bash
   npm create vite@latest . -- --template react
   ```
2. Instalar dependencias requeridas:
   ```bash
   npm install react-router-dom lucide-react react-markdown rehype-raw
   npm install tailwindcss @tailwindcss/vite @tailwindcss/typography
   ```
3. Configurar `vite.config.js`:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [tailwindcss(), react()],
   });
   ```

4. Configurar `src/index.css`:
   ```css
   @import "tailwindcss";
   @plugin "@tailwindcss/typography";

   @theme {
     --color-accent: #ffcf32;
     --color-cloud-blue: #007acc;
     --font-sans: "IBM Plex Mono", monospace;
     --font-title: "Space Grotesk", sans-serif;
   }
   ```

### Paso 2: Modularización en Componentes React
Organizar la aplicación en la siguiente estructura modular:
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── About.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Articles.jsx
│   └── ArticleDetail.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Paso 3: Enrutamiento Dinámico en `App.jsx`
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
```

---

## 4. Cuidados y Precauciones Críticas (Reglas Antierrores para la IA)

> [!CAUTION]
> Un agente de IA debe seguir estas reglas al pie de la letra para evitar que la interfaz se rompa o arroje errores en runtime.

### 1. Conversión de Propiedades SVG en JSX (CamelCase Estricto)
**Causa del fallo**: React rompe o detiene el renderizado en consola si detecta atributos SVG en formato HTML snake-case/kebab-case (ej. `stroke-width`).

| Atributo HTML | Atributo JSX Requerido |
| :--- | :--- |
| `stroke-width="..."` | `strokeWidth="..."` |
| `stroke-linecap="..."` | `strokeLinecap="..."` |
| `stroke-linejoin="..."` | `strokeLinejoin="..."` |
| `fill-rule="..."` | `fillRule="..."` |
| `clip-rule="..."` | `clipRule="..."` |
| `clip-path="..."` | `clipPath="..."` |
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |

### 2. Manejo de Iconos de Redes Sociales en `lucide-react`
- `lucide-react` **ya no exporta iconos de marcas** (como `Linkedin`).
- **Regla**: Para LinkedIn u otras redes, **NO** importar de `lucide-react`. Usar SVGs en línea vectoriales directos (`<svg ...>`).

### 3. Evitar Trucos de Diseño Frágiles (Márgenes Negativos en Grids)
- **Problema encontrado en la migración original**: La sección `Experience` usaba `md:-ml-64` y `md:ml-60` combinados con `grid-cols-12` para colocar la línea del timeline. Esto causaba que en pantallas medianas o según la densidad de píxeles, la interfaz se "desformateara" y las columnas colisionaran.
- **Solución Obligatoria**: Implementar un diseño Flexbox limpio (`flex flex-col md:flex-row`) con un divisor central explícito (`flex flex-col items-center`), garantizando responsividad fluida sin parches de márgenes negativos.

### 4. Eliminación de Scripts Legacy de Tailwind CDN
- **Jamás** mantener `<script src="https://cdn.tailwindcss.com"></script>` ni bloques `<script> tailwind.config = ... </script>` en `index.html`. Producen errores tipo `Uncaught ReferenceError: tailwind is not defined`.
- Tailwind v4 debe procesarse exclusivamente mediante `@tailwindcss/vite` desde `src/index.css`.

### 5. Integridad de Datos y Contenido Estático
- Mover todas las entradas de Markdown de `blogs/` a `public/blogs/` para que puedan ser leídas por `fetch('/blogs/${slug}.md')`.
- No modificar el texto técnico ni las descripciones de proyectos originales.
- Conservar los archivos `.html` originales como copia de seguridad sin modificarlos.

---

## 5. Plan de Verificación

Al terminar la migración, el agente debe verificar:
1. **Ejecución del Build sin Errores**: `npm run build` debe completar limpiamente.
2. **Consola del Navegador Limpia**: Cero advertencias de DOM (`Invalid DOM property`) y cero errores de JS.
3. **Fidelidad Visual**: Comprobar que los colores (`#ffcf32`, `#007acc`), fuentes (Space Grotesk / IBM Plex Mono) y diseño en tarjetas (`neo-card`) coincidan exactamente con la versión original.
