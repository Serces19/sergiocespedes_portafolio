# Sergio Céspedes — Portfolio & Technical Practice

Personal portfolio and technical showcase for **Sergio Céspedes**: Cloud Architect, VFX Pipeline TD, and Machine Learning / Computer Vision Engineer.

---

## 🧭 Project Navigation & Documentation Map

Comprehensive documentation is modularized in the [`/docs/`](./docs/) directory:

- [**System Architecture & Frontend**](./docs/architecture.md): SPA architecture, routing, build configuration, styling tokens, and design conventions.
- [**VFX Infrastructure Landing Page (`/vfx`)**](./docs/vfx_infrastructure.md): Detailed specification, positioning, section map, and B2B engagement models.
- [**Global Tasks & Roadmap**](./global_tasks.md): Detailed progress tracker of implemented features, ongoing tasks, and future implementations.
- [**Creative Ideas Catalog**](./ideas_creativas.md): Repository of creative interactions, visual components, and future pipeline experiments.

---

## 🏗️ Tech Stack

- **Frontend**: React 19, React Router DOM v7
- **Styling**: Tailwind CSS v4, custom neo-brutalist / neo-card tokens
- **Build System**: Vite 8, Rolldown bundler
- **Icons**: Lucide React
- **Content**: Markdown parser for technical essays and case studies (`react-markdown`, `rehype-raw`)
- **Linter**: Oxlint

---

## ⚡ Available Commands

Run using `npm` or preferred package manager:

```bash
# Start development server with HMR
npm run dev

# Build production bundle
npm run build

# Run fast code linting via Oxlint
npm run lint

# Preview production build locally
npm run preview
```

---

## 🌐 Routes Overview

- `/` — Main technical portfolio (Hero, Featured Projects, Core Competencies, Experience, About, Certifications, Contact)
- `/vfx` — B2B Landing Page for VFX Studios (Cloud compute, Deadline Cloud, AI pipelines with ComfyUI & Griptape, and hybrid infrastructure)
- `/articles` — Technical essays, manifold audits, and deep-dive writeups
- `/blog/:slug` — Dynamic markdown article viewer
