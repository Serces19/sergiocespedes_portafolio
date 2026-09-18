# Global Tasks & Technical Roadmap — Sergio Céspedes Portfolio

This file tracks all completed tasks, in-progress activities, and future technical roadmap milestones across the portfolio and specialized landing pages.

---

## 🚀 Active Roadmap: DINOv3 Article Embedded Iframe Bug Fix

- [x] **Resolved Recursive SPA Iframe Bug in DINOv3 Article**
  - [x] **Root Cause**: The markdown files (`dinov3_manifold.*.md`) contained an `<iframe>` pointing to `/assets/grafico_pca3d.html`. In a Single Page Application (SPA) environment with client-side routing, requests to HTML files or missing sub-paths are rewritten to `index.html`, causing the whole portfolio website to recursively load inside the iframe container.
  - [x] **Solution**: Replaced the broken `<iframe>` with the official high-resolution cover image (`/assets/cover_manifold_dino.png`) across all language versions (`src/blogs/`, `public/blogs/`, and `blogs/`).
  - [x] Synchronized thumbnail references in `Articles.jsx` and `Projects.jsx` to `/assets/cover_manifold_dino.png`.
  - [x] Validated with `oxlint` (0 errors) and `vite build` (success).

---

## 🚀 VFX Landing Page (`/vfx`)

- [x] **Production Realities Swiss Minimalist Layout (`VfxProblemBento.jsx`)**
  - [x] Replaced unbacked statistics with qualitative technical statements.
  - [x] Integrated real production visuals (`blender_ui.jpg`).
- [x] **Flexible Engagement Models & Cal.com Booking Engine**
  - [x] Full-width atmospheric background (`bg_sky.jpg`) with 80% dark overlay.
  - [x] Direct Cal.com booking modal (`sergio-cespedes-1zpejv/20min`).
- [x] **ComfyUI-Style Floating Previews in Node Graph (`VfxNodeFlow.jsx`)**

---

## 🚀 Contact System & Form Handling

- [x] **Formspree Error Fix & Async React Form Engine (`Contact.jsx`)**
  - [x] Asynchronous React handler (`handleSubmit`) with state management.
  - [x] One-click fallback directly to `mailto:sergio@vectorescope.com`.
  - [x] Restored `activePanel` state.

---

## 🛠️ General Portfolio Maintenance & Optimization

- [x] React 19 + Vite 8 + Tailwind CSS v4 migration.
- [x] Clean zero-warning oxlint verification.
- [ ] Implement code-splitting on heavy routes (`React.lazy` for `Articles` and `VfxLanding`) to optimize bundle size below 500 kB.
