# Shot Control App: Streamlining VFX Production Tracking

<p class="subtitle">Cloud-native shot management, Nuke Python panel integration, and serverless AWS backend.</p>

<img src="/assets/atom_app_edit.png" alt="Shot Control Application UI" class="blog-image">

In fast-paced visual effects pipelines, maintaining synchronized task statuses and launching correct script versions without context switching is essential. The **Shot Control App** is an artist-friendly desktop tool designed to connect Nuke compositors directly with cloud-backed production databases.

---

## 1. Key Features

- **Direct In-DCC Nuke Panel:** Artists update shot review statuses, trigger version bumps, and view notes without leaving Foundry Nuke.
- **Contextual Script Launcher:** Automatically resolves sequence tokens to open the correct project directory and `.nk` script version.
- **Serverless AWS Backend:** Built on AWS Lambda, Amazon DynamoDB, and Amazon API Gateway for high durability, zero server maintenance, and near-zero idle operating costs.
- **Real-Time Task Sync:** Instant status updates visible across all studio workstations and remote artist setups.

---

## 2. Technical Architecture

- **Frontend / Client:** Python & PySide / Qt
- **DCC Integration:** Native Nuke Python API (`nuke.Panel`, custom menu hooks)
- **Cloud Infrastructure:** AWS Serverless (Lambda, DynamoDB, API Gateway)

---

*Written by Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
