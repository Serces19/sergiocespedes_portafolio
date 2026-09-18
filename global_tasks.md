# Global Tasks & Technical Roadmap — Sergio Céspedes Portfolio

This file tracks all completed tasks, in-progress activities, and future technical roadmap milestones across the portfolio and specialized landing pages.

---

## 🚀 Active Roadmap: Markdown Engine & Article Formatting Overhaul

- [x] **Markdown Tables Support (GFM)**
  - [x] Installed and configured `remark-gfm`.
  - [x] Implemented responsive table container (`overflow-x-auto`) with rounded borders and zebra striping for hardware comparison matrices.
- [x] **LaTeX Math Formatting (KaTeX)**
  - [x] Installed `remark-math`, `rehype-katex`, and bundled `katex/dist/katex.min.css`.
  - [x] Standardized mathematical notation across English and Spanish blog variants for multi-scale hybrid loss functions ($\mathcal{L}_{\text{total}}$, $\mathcal{L}_{\text{SSIM}}$, $\mathcal{L}_{\text{LPIPS}}$, $\mathcal{L}_{\text{Laplacian}}$).
  - [x] Replaced concatenated terms with clean bulleted lists to prevent formatting degradation.
- [x] **Resolved Recursive SPA Iframe Bug in DINOv3 Article**
  - [x] Replaced broken `<iframe>` with official high-resolution cover image (`/assets/cover_manifold_dino.png`).
  - [x] Synchronized thumbnail references in `Articles.jsx` and `Projects.jsx`.

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
