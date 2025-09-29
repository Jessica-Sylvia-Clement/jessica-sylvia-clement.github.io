// src/data/writeupPages/mrrobotclone/robot-main-wpinstall.jsx
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

export default function RobotWPinstall() {
  return (
    <div>
      {/* 1. Update & Install Required Packages */}
      <Heading level={3}>1. Update &amp; Install Required Packages</Heading>

      <p style={{ marginTop: "0.5rem" }}>
        Update the list of available packages to get the latest versions.
      </p>

      <CodeBlock
        code={`sudo apt update`}
        copyable
      />

      <p style={{ marginTop: "0.75rem" }}>
        Install Apache web server and PHP with required extensions for WordPress.
      </p>

      <CodeBlock
        code={`sudo apt install apache2 php libapache2-mod-php php-mysql php-gd php-cli php-curl php-xml`}
        copyable
      />

      <p style={{ marginTop: "0.75rem" }}>
        Install MySQL database server.
      </p>

      <CodeBlock
        code={`sudo apt install mysql-server`}
        copyable
      />

      <hr style={{ margin: "1.25rem 0" }} />

      {/* 2. Secure MySQL */}
      <Heading level={3}>2. Secure MySQL</Heading>

      <p style={{ marginTop: "0.5rem" }}>
        Run MySQL security script (set root password, remove test DB, etc.).
      </p>

      <CodeBlock
        code={`sudo mysql_secure_installation`}
        copyable
      />

      <Callout type="note">
        I set my pass strength to <b>Medium (1)</b> and just pressed <b>“y”</b> for the prompts.
      </Callout>

      <hr style={{ margin: "1.25rem 0" }} />

      {/* 3. Configure MySQL for WordPress */}
      <Heading level={3}>3. Configure MySQL for WordPress</Heading>

      <p style={{ marginTop: "0.5rem" }}>
        Log into the MySQL shell.
      </p>

      <CodeBlock
        code={`sudo mysql`}
        copyable
      />

      <p style={{ marginTop: "0.5rem" }}>
        Create a new database named <b>wordpress</b>.
        <br />
        <Callout type="note">
        You can change the database name , user and password for each CTF u make.
      </Callout>
      </p>

      <CodeBlock
        code={`CREATE DATABASE wp DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;`}
        copyable
      />

      <p style={{ marginTop: "0.5rem" }}>
        Create a new MySQL user <b>wordpressuser</b> with a password.
      </p>

      <CodeBlock
        code={`CREATE USER 'wp'@'localhost' IDENTIFIED BY 'passworD1$';`}
        copyable
      />

      <p style={{ marginTop: "0.5rem" }}>
        Give full permissions on the <b>wordpress</b> database to this user.
      </p>

      <CodeBlock
        code={`GRANT ALL ON wordpress.* TO 'wp'@'localhost';`}
        copyable
      />

      <p style={{ marginTop: "0.5rem" }}>
        Save privilege changes and exit the MySQL shell.
      </p>

      <CodeBlock
        code={`FLUSH PRIVILEGES;
EXIT;`}
        copyable
      />
      <hr style={{ margin: "1.25rem 0" }} />
    {/* 4. Download & Setup WordPress */}
    <Heading level={3}>4. Download &amp; Setup WordPress</Heading>

<p style={{ marginTop: "0.5rem" }}>
  Navigate to the web root directory.
</p>

<CodeBlock code={`cd /var/www/html`} copyable />

<p style={{ marginTop: "0.75rem" }}>
  Download the latest WordPress package.
</p>

<CodeBlock
  code={`sudo wget https://wordpress.org/latest.tar.gz`}
  copyable
/>

<p style={{ marginTop: "0.75rem" }}>
  Extract the WordPress archive.
</p>

<CodeBlock code={`sudo tar -xzf latest.tar.gz`} copyable />

{/* Note / aside */}
<Callout>
  <div style={{ lineHeight: 1.5 }}>
    <p style={{ margin: "0.5rem 0 0" }}>
      WordPress always creates a <MiniCode>wordpress</MiniCode> folder when unpacked (after unzipping). If you don’t move the contents out but instead leave them inside <MiniCode>/wordpress</MiniCode>, your site runs under <MiniCode>/wordpress</MiniCode> (so you get URLs like <MiniCode>http://x.x.x.x/wordpress/wp-admin</MiniCode>).
    </p>
    <p style={{ margin: "0.25rem 0 0" }}>
      So we need to move all files <strong>inside</strong> the <MiniCode>wordpress/</MiniCode> directory to <MiniCode>/var/www/html/</MiniCode>, instead of keeping them nested. After this, you can safely delete the empty <MiniCode>/wordpress</MiniCode> folder.
    </p>
  </div>
</Callout>

<p style={{ marginTop: "0.75rem" }}>
  Move all normal files/folders and ensure hidden config files don’t get left behind.
</p>

<CodeBlock
  code={`sudo mv wordpress/* /var/www/html/`}
  copyable
/>

<ul style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
  <li>
    <MiniCode>wordpress/*</MiniCode> → means <strong>all visible files and folders</strong> inside <MiniCode>/wordpress</MiniCode> (like <MiniCode>wp-admin</MiniCode>, <MiniCode>wp-content</MiniCode>, <MiniCode>index.php</MiniCode>, etc.).
  </li>
  <li>Moves them to <MiniCode>/var/www/html/</MiniCode>.</li>
  <li>
    Example: <MiniCode>/var/www/html/wordpress/wp-admin</MiniCode> → becomes <MiniCode>/var/www/html/wp-admin</MiniCode>
  </li>
</ul>

<CodeBlock
  code={`sudo mv wordpress/.* /var/www/html/ 2>/dev/null`}
  copyable
/>

<ul style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
  <li>
    <MiniCode>wordpress/.*</MiniCode> → means <strong>all hidden files/folders</strong> (dotfiles) inside <MiniCode>wordpress</MiniCode>, like:
    <ul style={{ marginTop: "0.25rem" }}>
      <li><MiniCode>.htaccess</MiniCode></li>
      <li><MiniCode>.maintenance</MiniCode></li>
      <li><MiniCode>.gitignore</MiniCode> (if present)</li>
    </ul>
  </li>
  <li>
    These are often important for Apache/WordPress, but they're hidden, so the first <MiniCode>mv</MiniCode> command misses them.
  </li>
  <li>
    <MiniCode>2&gt;/dev/null</MiniCode> just silences errors like <em>"mv: cannot move '.' or '..'"</em>.
  </li>
</ul>

<p style={{ marginTop: "0.75rem" }}>
  Delete the now-empty WordPress folder.
</p>

<CodeBlock code={`sudo rm -rf wordpress`} copyable />

<hr style={{ margin: "1.25rem 0" }} />

{/* 5. Set File & Directory Permissions */}
<Heading level={3}>5. Set File &amp; Directory Permissions</Heading>

<p style={{ marginTop: "0.5rem" }}>
  Set ownership of files to <MiniCode>root</MiniCode> (for security).
</p>

<CodeBlock
  code={`sudo chown -R root:root /var/www/html/`}
  copyable
/>

<p style={{ marginTop: "0.75rem" }}>
  Set directory permissions to <MiniCode>755</MiniCode> (read &amp; execute for all, write for owner).
</p>

<CodeBlock
  code={`sudo find /var/www/html/ -type d -exec chmod 755 {} \\;`}
  copyable
/>

<p style={{ marginTop: "0.75rem" }}>
  Set file permissions to <MiniCode>644</MiniCode> (read for all, write for owner).
</p>

<CodeBlock
  code={`sudo find /var/www/html/ -type f -exec chmod 644 {} \\;`}
  copyable
/>
<hr style={{ margin: "1.25rem 0" }} />
{/* 6. Configure Apache for WordPress */}
<Heading level={3}>6. Configure Apache for WordPress</Heading>

<p style={{ marginTop: "0.5rem" }}>
  Create a new Apache config file for WordPress.
</p>

<CodeBlock
  code={`sudo nano /etc/apache2/sites-available/wordpress.conf`}
  copyable
/>

<p style={{ marginTop: "0.75rem" }}>
  Inside it:
</p>

<Callout>
  <p style={{ margin: 0 }}>
    Set Apache to serve WordPress on port <MiniCode>80</MiniCode> and <MiniCode>443</MiniCode> with logging enabled as these services/ports are open in the original CTF. 
    Also create a self-signed TLS so <MiniCode>443</MiniCode> is open. I also added a fake domain name (<MiniCode>mrrobot.ctf</MiniCode>) for extra fun.
  </p>
</Callout>

<CodeBlock
  code={`&lt;VirtualHost *:80&gt;
    ServerAdmin webmaster@localhost
    ServerName mrrobot.ctf
    DocumentRoot /var/www/html

    &lt;Directory /var/www/html&gt;
        Options -Indexes
        AllowOverride All
        Require all granted
    &lt;/Directory&gt;

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
&lt;/VirtualHost&gt;

&lt;VirtualHost *:443&gt;
    ServerAdmin webmaster@localhost
    ServerName mrrobot.ctf
    DocumentRoot /var/www/html

    &lt;Directory /var/www/html&gt;
        Options -Indexes
        AllowOverride All
        Require all granted
    &lt;/Directory&gt;

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined

    SSLEngine on
    SSLCertificateFile /etc/apache2/ssl/apache.crt
    SSLCertificateKeyFile /etc/apache2/ssl/apache.key
&lt;/VirtualHost&gt;`}
  copyable
/>


<p style={{ marginTop: "0.75rem" }}>
  Enable site &amp; reload Apache
</p>

<CodeBlock
  code={`sudo a2ensite wordpress.conf
sudo systemctl start apache2
sudo systemctl reload apache2`}
  copyable
/>
<hr style={{ margin: "1.25rem 0" }} />

{/* 7. Enable Site Access */}
<Heading level={3}>7. Enable Site Access</Heading>

      <BulletList
        items={[
          <>
            Open browser → <MiniCode>http://&lt;server-ip&gt;</MiniCode> | here →{" "}
            <a href="http://192.168.56.20/" target="_blank" rel="noreferrer">
              http://192.168.56.20/
            </a>
          </>,
          <>
            <a
              href="http://192.168.56.20/wordpress"
              target="_blank"
              rel="noreferrer"
            >
              http://192.168.56.20/wordpress
            </a>
          </>,
          <>Complete WordPress installation wizard.</>,
        ]}
      />
       <img
  src={writeup2Images.img0}
  alt="img0"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

      <p style={{ marginTop: "0.5rem" }}>
        If it comes up with the <b>“Unable to write to wp-config.php file”</b>{" "}
        just copy the given Configuration rules and …
      </p>

      <img
  src={writeup2Images.img2}
  alt="img2"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

      <p>
        As we can see when we <MiniCode>cd wordpress</MiniCode> the{" "}
        <MiniCode>wp-config.php</MiniCode> file is not there.
      </p>

      <img
  src={writeup2Images.img3}
  alt="img3"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

      <p>So create the file and paste the copied rules.</p>

      <img
  src={writeup2Images.img4}
  alt="img4"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

      <p style={{ marginTop: "0.5rem" }}>
        Now try and run the installation, it should work.
      </p>

      <p style={{ marginTop: "0.75rem" }}>On the Welcome page :</p>

      <BulletList
        items={[
          <>
            <b>Site Title:</b> Evil Corp
          </>,
          <>
            <b>Username:</b> <MiniCode>elliot</MiniCode>
          </>,
          <>
            <b>Password:</b>{" "}
            <MiniCode>ER28-0652</MiniCode> <i>(as per the original ctf)</i>
          </>,
          <>
            <b>Email:</b> elliot@example.com
          </>,
          <>
            <b>Search engine visibility:</b> Can leave unchecked (doesn’t matter
            for local test)
          </>,
          <>
            You’ll be able to log into{" "}
            <MiniCode>http://mrrobot.ctf/wp-admin</MiniCode> as{" "}
            <MiniCode>elliot / ER28-0652</MiniCode>.
          </>,
        ]}
      />

<img
  src={writeup2Images.img5}
  alt="img5"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

      <p>
        Then click <b>Install WordPress</b>.
      </p>
</div>
 );
}