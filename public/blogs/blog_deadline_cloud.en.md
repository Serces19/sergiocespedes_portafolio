# AWS Deadline Cloud & Nuke CopyCat: De-Aging at Scale Under Tight Deadlines

<p class="subtitle">Production Case Study: Scaling Nuke CopyCat Facial De-Aging for Netflix's "El Otro Padre", Slashing Hardware Costs by ~50% on AWS</p>

<img src="/assets/deadline_pictures/worker_dashboard.jpg" alt="AWS Deadline Cloud Worker Fleet Dashboard" class="blog-image">

---

## 1. Context & The Production Challenge: Netflix's "El Otro Padre"

<img src="/assets/oep3.jpg" alt="Netflix Series - El Otro Padre" class="blog-image" style="max-height: 480px; width: auto; margin: 1.5rem auto;">

In high-end television visual effects, delivery schedules frequently compress to tight turnaround windows. During the post-production delivery for the Netflix series **"El Otro Padre"** (*studio name kept confidential under standard vendor NDA*), our VFX team faced a demanding technical challenge centered around high-fidelity digital de-aging:

- **The Scope:** Dozens of complex narrative sequences requiring photorealistic **facial de-aging** of the main character across varying lighting setups, close-up camera angles, and dynamic motion.
- **The Workflow Choice:** We utilized Foundry's **Nuke CopyCat** to train custom, shot-specific machine learning models directly from hand-painted keyframe ground truths, learning skin texture transitions, wrinkle reduction, and structural consistency without introducing the "plastic" look of traditional beauty filters.
- **The Hardware Crunch:** Training dozens of high-resolution Nuke CopyCat networks simultaneously, alongside heavy sequence compositing and multi-layer EXR renders, overwhelmed the studio's on-premise GPU workstations.
- **The Dilemma:** Purchasing dedicated physical multi-GPU servers was cost-prohibitive, while leasing on-premise hardware had a 2-week procurement delay with steep minimum contract fees and idle software license costs.

We needed on-demand, high-throughput GPU capacity that could be provisioned within hours, scaled to dozens of active workers during delivery crunches, and decommissioned the moment shots received final supervisor approval.

---

## 2. The Architectural Strategy: AWS Deadline Cloud

To meet the Netflix delivery deadline without incurring runaway capital expenditure, we deployed a hybrid cloud rendering and machine learning infrastructure powered by **AWS Deadline Cloud**.

<img src="/assets/deadline_pictures/main_monitor.jpg" alt="Centralized Deadline Cloud Monitor Managing Render & Nuke CopyCat Jobs" class="blog-image">

### Key Architectural Pillars:
1. **Hybrid Submissions from Local Nuke:** Compositors submitted render queues and Nuke CopyCat training batches directly from their local Nuke interface or headless Python automation into AWS Deadline Cloud queues.
2. **Automated S3 POSIX Sync:** Input plates, OCIO color profiles, ground-truth masks, and custom Nuke gizmos automatically synchronized to Amazon S3 with local POSIX caching on cloud workers, eliminating bandwidth bottlenecks.
3. **Dynamic Worker Isolation:** Compute workers spun up inside a secure AWS Virtual Private Cloud (VPC) with strict IAM permissions, ensuring complete intellectual property security for the production.

---

## 3. The 4-Tier Instance Fleet Strategy: Spot vs. On-Demand

Rather than deploying a generic single instance type, we engineered **4 targeted instance profiles** to balance cost efficiency, GPU memory throughput, and task priority:

| Instance Type | GPU Spec | Pricing Model | Assigned Workload | Production Benefit |
| :--- | :--- | :--- | :--- | :--- |
| **`g6.2xlarge` / `g6.4xlarge`** | NVIDIA L4 Tensor Core (24GB VRAM) | **Spot (up to ~70% off)** | Parallel Nuke CopyCat de-aging training sweeps | High VRAM memory bandwidth, ultra-fast loss convergence |
| **`g6.2xlarge`** | NVIDIA L4 Tensor Core (24GB VRAM) | **On-Demand** | Final critical CopyCat training & hero de-aging passes | Zero interruption risk during final client turnover hours |
| **`g4dn.xlarge` / `g4dn.2xlarge`** | NVIDIA T4 (16GB VRAM) | **Spot** | Fast CopyCat inference passes & slap-comp validation | Maximum cost efficiency for daily artist evaluations |
| **`g4dn.2xlarge`** | NVIDIA T4 (16GB VRAM) | **On-Demand** | Multi-channel 32-bit EXR sequence rendering | Steady, predictable baseline rendering for turnover batches |

<img src="/assets/deadline_pictures/worker_dashboard.jpg" alt="Active Cloud Worker Instances and Task Telemetry" class="blog-image">

### Why This Fleet Architecture Succeeded:
- **Massive Parallel CopyCat Iterations:** Rather than a compositor waiting 6–8 hours for a single local GPU to test one de-aging configuration, we dispatched **8 to 10 CopyCat training runs simultaneously** on `g6` Spot instances, testing varied learning rates, crop sizes, and epoch depths in parallel.
- **Fail-Safe Spot Resilience:** If AWS reclaimed a Spot instance during a non-critical training run, Deadline Cloud automatically re-queued the task on another worker without losing serialized model checkpoints.
- **On-Demand Guarantee:** Critical final delivery shots were locked to On-Demand workers to eliminate preemption risk during final review windows.

---

## 4. Financial Control & Granular Cost Optimization

With Deadline Cloud, we integrated real-time cost tracking and automated financial safeguards directly into the production pipeline.

<img src="/assets/deadline_pictures/cost_per_job.jpg" alt="Granular Per-Job Cost Tracking in Deadline Cloud" class="blog-image">

### Per-Shot Cost Attribution
Every submission was tagged with shot metadata (e.g. `EOP_101_SH_0240_DEAGING`), allowing production coordinators to track the exact cloud cost per frame and per CopyCat model training pass in real time.

<img src="/assets/deadline_pictures/torta_costos.jpg" alt="Cost Distribution Breakdown Across Cloud Compute Fleets" class="blog-image">

### Strict Budget Controls & Safeguards
We established threshold alarms in AWS Cost Explorer and Deadline Cloud Budget Management. If a sequence neared 80% of its allotted compute allowance, automated notifications alerted technical directors, preventing unexpected cloud overages.

<img src="/assets/deadline_pictures/budget.jpg" alt="Deadline Cloud Budget Alerts and Cost Thresholds" class="blog-image">

---

## 5. Measurable Business Outcomes & ROI

By replacing traditional on-premise server rentals with an on-demand AWS Deadline Cloud fleet for **"El Otro Padre"**, the studio achieved remarkable results:

1. **~50% Direct Cost Savings:** Total infrastructure expenditure was approximately half the quote for physical hardware rental, shipping, data center rack space, power, and setup.
2. **Zero Idle Licensing Overhead:** Nuke render licenses were engaged on-demand strictly during active worker execution, eliminating idle license waste on off-hours and weekends.
3. **10x Faster Iteration Cycles for Artists:** Compositors received CopyCat inference previews within minutes rather than waiting overnight, allowing rapid creative refinement of actor de-aging.
4. **100% On-Time Delivery:** All episodic de-aging sequences were delivered on schedule and met Netflix's stringent technical quality standards.

---

## Conclusion

Deploying AWS Deadline Cloud for **Nuke CopyCat** de-aging demonstrated that cloud elasticity is no longer just a fallback for emergencies — it is a strategic production tool that empowers VFX teams to deliver world-class digital visual effects on budget and on schedule.

---

*Written by Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
