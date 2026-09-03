# Telegram Notify — Alertas de Render en Tiempo Real para Nuke

<p class="subtitle">Generación automática de proxies y notificaciones móviles vía Telegram para nodos Write de Nuke.</p>

<img src="/assets/telegram_notify.png" alt="Plugin Telegram Notify para Nuke" class="blog-image">

El plugin **Nuke Telegram Render** es una herramienta diseñada para compositores que envía notificaciones automáticas y previews en proxy directamente a un chat o canal de Telegram al finalizar un render.

---

## 1. Características Principales

- **Alertas Instantáneas:** Notificación inmediata con tiempos de renderizado y conteo de cuadros.
- **Vista Previa en Proxy:** Genera y adjunta automáticamente una imagen o video proxy liviano para revisión móvil.
- **Integración Nativa:** Pestaña personalizada en la interfaz del nodo Write de Nuke.
- **Soporte para Canales de Equipo:** Permite notificar a canales compartidos de supervisión.

---

## 2. Instalación y Uso

1. Inicia una conversación con el bot de Telegram para obtener tu `chat_id`.
2. Añade el módulo `telegram_notify` a tu carpeta `~/.nuke`.
3. Configura tu `chat_id` en tu `init.py` y activa la casilla de notificación en el nodo Write.

---

*Escrito por Sergio Céspedes — Cloud Architect, VFX Pipeline TD & Machine Learning Engineer.*
