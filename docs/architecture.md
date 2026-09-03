# Architecture & Frontend Stack

## Overview
The website is a modern Single Page Application (SPA) for **Sergio Céspedes** (Cloud Architect, VFX Pipeline TD & Machine Learning Engineer).

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 with `@vitejs/plugin-react`
- **Routing**: React Router DOM v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/typography`) with custom theme tokens
- **Icons**: Lucide React (`lucide-react`)
- **Linting**: Oxlint (`oxlint`)

## Routing Structure
- `/` (`Home.jsx`): Main portfolio overview, including Hero, Case Studies (`#featured-projects`), Core Competencies (`#expertise`), Experience timeline (`#experience`), About Me (`#about`), Verified Certifications (`#certifications`), and Interactive Contact accordion (`#contact`).
- `/vfx` (`VfxLanding.jsx`): High-conversion, ultra-premium B2B landing page for VFX studios, technical directors, and heads of technology looking for cloud render orchestration, pipeline automation, and AI integration.
- `/articles` (`Articles.jsx`): Technical essays, manifold audits, and deep-dive documentation.
- `/blog/:slug` (`ArticleDetail.jsx`): Dynamic markdown reader for technical blog posts loaded from `/blogs/*.md`.
- Legacy Redirects: `/home` -> `/`, `/home.html` -> `/`, `/vfx.html` -> `/vfx`, `/articles.html` -> `/articles`.

## Design System Tokens
- **Font Stack**:
  - `font-title`: Space Grotesk
  - `font-sans`: Inter
  - `font-mono`: IBM Plex Mono
- **Primary Color Palette**:
  - Dark Slate Foundation: `#070b14`, `#0B1120`, `slate-900`, `slate-950`
  - Accent Amber: `#ffcf32`, `amber-400`
  - Accent Cloud Blue: `#007acc`, `sky-400`
  - Node & Status Colors: `emerald-400`, `purple-400`, `red-400`
