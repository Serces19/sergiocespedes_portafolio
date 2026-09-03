# Global Tasks & Technical Roadmap — Sergio Céspedes Portfolio

This file tracks all completed tasks, in-progress activities, and future technical roadmap milestones across the portfolio and specialized landing pages.

---

## 🚀 Active Roadmap: VFX Landing Page (`/vfx`)

- [x] **ComfyUI-Style Floating Previews in Node Graph (`VfxNodeFlow.jsx`)**
  - [x] Integrated floating image preview cards around each primary node inspired by ComfyUI's node graph UI:
    - [x] **Node 1 (DCC Ingestion)**: Attached floating ComfyUI preview card with an interactive switcher for **Nuke Multi-Pass Comp** (`/assets/vfx/nuke_ui.png`) and **Blender 3D Viewport** (`/assets/vfx/blender_ui.jpg`).
    - [x] **Node 2 (Pipeline & Agents)**: Attached floating ComfyUI preview card for **AYON Asset Tree & Manifest** (`/assets/vfx/ayon.png`).
    - [x] **Node 3 (AWS Deadline & AI Farm)**: Attached floating ComfyUI preview card for **ComfyUI Headless Tensor Graph Execution** (`/assets/comfyui.jpg`).
  - [x] Designed with authentic ComfyUI node headers (status indicator LED, pass name, node tag) and high-resolution thumbnail containers.
  - [x] Responsive layout: full vector SVG layout on desktop (`lg:`) and stacked preview cards on mobile/tablet.

- [x] **Streamlining & Redundancy Removal**
  - [x] Removed redundant Capability 03 ("Pipeline Engineering: Nuke, AYON, Houdini & Blender") from `VfxCapabilities.jsx`, concentrating its visual assets directly into the dynamic node graph.
  - [x] Removed redundant Section 03 ("Architecture Models: Local, Cloud, Hybrid").
  - [x] Cleaned up section numbers sequentially.

- [x] **Elimination of Harsh Thin Light Borders & Nested Box Clutter**
  - [x] Removed wireframe borders across all sections, shifting to deep dark surfaces with subtle ambient glow and shadows.

- [x] **Modular Architecture Refactor (`src/components/vfx/`)**
  - [x] Subcomponents: `VfxHero`, `VfxProblemBento`, `VfxCapabilities`, `VfxAiPipelinePatterns`, `VfxNodeFlow`, `VfxVectorescopeCta`, `VfxDifferentiator`, `VfxEngagements`.

---

## 📝 Case Studies & Content Systems

- [x] **Blog Cover Images & Media Updates**
- [x] **Netflix's "El Otro Padre" — Nuke CopyCat De-Aging Case Study**
- [x] **Vectorescope Foundation Story (Few-Shot VFX Article)**
- [x] **Online Disconnected / Empty Article Fix**

---

## 🛠️ General Portfolio Maintenance & Optimization

- [x] React 19 + Vite 8 + Tailwind CSS v4 migration.
- [x] Clean zero-warning oxlint verification.
- [ ] Implement code-splitting on heavy routes (`React.lazy` for `Articles` and `VfxLanding`) to optimize bundle size below 500 kB.
