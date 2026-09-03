# Telegram Notify — Real-Time Nuke Render Alerts

<p class="subtitle">Automated proxy generation and mobile Telegram messaging integration for Nuke Write nodes.</p>

<img src="/assets/telegram_notify.png" alt="Telegram Notify Nuke Plugin" class="blog-image">

The **Nuke Telegram Render Plugin** is an artist-friendly production tool that dispatches automated notifications and lightweight proxy video/image previews directly to a designated Telegram chat upon render completion.

---

## 1. Key Features

- **Instant Mobile Alerts:** Receive immediate notifications with execution duration and frame counts.
- **Embedded Proxy Previews:** Automatically generates a downscaled JPEG/PNG proxy preview of the finished render for mobile quality checks.
- **Custom Write Node Knobs:** Integrated directly into Nuke's native Write node UI via custom Python tabs.
- **Team & Channel Support:** Compatible with multi-user studio Telegram channels for team-wide status updates.

---

## 2. Installation & Configuration

1. **Bot Setup:** Initiate a conversation with `@Nuke_render_bot` to receive your unique `chat_id`.
2. **Plugin Placement:** Place the `telegram_notify` package into your `~/.nuke` directory.
3. **Environment Hook:** Add your `chat_id` into `init.py` to authenticate automated payloads.

---

*Written by Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
