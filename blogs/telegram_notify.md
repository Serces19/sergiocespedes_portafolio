<h1>Telegram Notify</h1>
<p class="subtitle">Easy way to get notifications of your renders</p>

<p>
    The <strong>Nuke Telegram Render Plugin</strong> is a simple yet highly effective tool for Nuke artists, designed to improve communication and workflow efficiency. 
    This plugin sends automatic notifications to a Telegram chat when a render is completed, including a proxy preview of the render. It’s a convenient way to stay updated on your progress, especially in collaborative environments.
</p>
<img src="../assets/telegram_notify.png" alt="Render all bot" class="blog-image">
<h2>What is the Nuke Telegram Render Plugin?</h2>
<p>
    This plugin integrates with Nuke to provide instant notifications via Telegram whenever a render finishes. It includes a scaled-down proxy preview of the render, allowing users to quickly review outputs without opening the files. The plugin is designed to be easy to set up and use, supporting multiple users in the same chat for team-based workflows.
</p>
<h2>Installation Guide</h2>
<ol>
    <li>
        <strong>Start with Telegram:</strong>
        <ul>
            <li>Search for <strong>Nuke_render_bot</strong> on Telegram and start a conversation with it.</li>
            <li>The bot will provide your unique <code>chat_id</code>, which is required for notifications.</li>
            <li>Note: The bot only provides a generic message and your chat ID if you initiate a conversation with it.</li>
        </ul>
    </li>
    <li>
        <strong>Download the Plugin:</strong>
        <ul>
            <li>Download the <code>telegram_notify</code> folder from the repository.</li>
            <li>Copy the folder to your Nuke plugins directory. The default locations are:
                <ul>
                    <li><code>~/.nuke</code> on Linux and macOS.</li>
                    <li><code>C:/Users/your_user/.nuke</code> on Windows.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <strong>Configure the Plugin:</strong>
        <ul>
            <li>Edit the <code>.init.py</code> file in the Nuke plugins directory by adding the following code:
                <pre>
# Telegram notify
import os
os.environ['chat_id'] = 'your chat id'
import telegram_notify
                </pre>
            </li>
            <li>Replace <code>'your chat id'</code> with the chat ID provided by the <strong>Nuke_render_bot</strong>.</li>
        </ul>
    </li>
</ol>
<h2>How to Use the Plugin</h2>
<ol>
    <li>Open Nuke and load your composition.</li>
    <li>Select a Write node and navigate to the <strong>Telegram</strong> tab.</li>
    <li>Configure the following knobs according to your requirements:
        <ul>
            <li><strong>Telegram Notify:</strong> A checkbox to enable or disable notifications. If enabled, the plugin performs a proxy render and sends a notification with the preview to Telegram.</li>
            <li><strong>Scaling Factor:</strong> Define the scale of the proxy render. Recommended values are <code>0.25</code>, <code>0.5</code>, and <code>0.75</code>. Using values outside this range may result in scaling artifacts.</li>
            <li><strong>Open in Folder:</strong> A button to open the directory where the renders are saved or will be saved. This is useful for quick access beyond notifications.</li>
        </ul>
    </li>
    <li>Start the render. Once finished, the plugin will automatically send the notification and proxy to the specified Telegram chat.</li>
</ol>
<h2>Notes on Possible Errors</h2>
<ul>
    <li>
        <strong>Resolution Issues:</strong> Errors may occur with very high or low-resolution renders. Adjust the scaling factor for better results.
    </li>
    <li>
        <strong>Color Space Conflicts:</strong> Custom color spaces might cause issues. Future updates may include a knob to manually set the color space.
    </li>
    <li>
        <strong>Operating System Compatibility:</strong> While primarily tested on Windows, there might be conflicts on Linux or macOS.
    </li>
</ul>
---
<p><em>Written by Sergio Cespedes.</em></p>