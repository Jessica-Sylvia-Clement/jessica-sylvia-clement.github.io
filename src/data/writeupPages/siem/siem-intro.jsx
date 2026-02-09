// src/data/writeupPages/siem/siem-intro.jsx
import React from "react";
import CodeBlock from "../../../components/ui/CodeBlock"
import Heading from "../../../components/ui/Heading";
import ToggleList from "../../../components/ui/ToggleList";
import MiniCode from "../../../components/ui/MiniCode";
import Quote from "../../../components/ui/Quote";
import Callout from "../../../components/ui/Callout";
import BulletList from "../../../components/ui/BulletList";
import VictoryBox from "../../../components/ui/VictoryBox";
import writeup1Images from "../../../assets/SIEMpics/index.js";
import { Link } from "react-router-dom";

export default function SiemIntroContent() {
    return (
      <div className="space-y-6">
{/* Section 1: What is SIEM */}
<ToggleList title="What is SIEM?" index={1}>
  <p style={{ fontSize: "1.0rem" }}>
    SIEM (Security Information and Event Management) is a centralized solution that helps detect,
    monitor, and analyze security incidents by collecting log data from multiple sources in real time.
  </p>

  <BulletList
    items={[
      "Collects logs from endpoints, servers, firewalls, etc.",
      "Normalizes and correlates them for analysis.",
      "Generates alerts for suspicious activity.",
      "Supports forensic investigations.",
    ]}
  />
</ToggleList>

{/* Section 2: Logs */}
 <ToggleList title="Logs? What Are They?" index={1}>  
  <p style={{ fontSize: "1.0rem" }}>
    Think of logs as your computer’s <strong>personal diary</strong> - except instead of juicy gossip, 
    it writes down <strong>everything that happens</strong> on your system.
  </p>

  <BulletList
    items={[
      "You logged in? ✍️ “User xxxx logged in at 10:04.”",
      "You mistyped your password? ✍️ “Login failed - wrong password.”",
      "You started a process or opened a file? ✍️ “Process X executed.”",
    ]}
  />
 <Callout type="funfact" style={{ marginTop: "0.75rem" }}> Your computer writes thousands of these tiny diary entries every 
    minute. If left unchecked, logs can take up gigabytes of disk space! That’s why there are tools 
    that rotate, compress, and even delete old logs automatically - or else your system would be buried 
    in its own notes. 
</Callout>
  
  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    But it’s not just your computer - <strong>every system in a network loves to talk</strong>: servers, 
    firewalls, endpoints, even IoT devices are constantly reporting what they’re doing.  
    For simplicity, we can group all these logs into two big buckets:
  </p>

  <h3 style={{fontSize: "1.25rem", marginTop: "1rem" }}><strong>Host-Centric Logs :</strong></h3>
  <p style={{ fontSize: "1.0rem",marginTop: "0.25rem" }}>
    Logs about what’s happening <strong>inside your machine</strong>:
  </p>

  <BulletList
    items={[
      "Login attempts (success/fail)",
      "Process executions",
      "Script runs (Bash/Python)",
    ]}
  />
  <h3 style={{ fontSize: "1.25rem",marginTop: "1rem" }}><strong>Network-Centric Logs :</strong> </h3>
  <p style={{ fontSize: "1.0rem",marginTop: "0.25rem" }}>
    Logs about <strong>who’s talking to whom</strong> on the network:
  </p>

  <BulletList
    items={[
      "SSH connections",
      "Web traffic (HTTP/S)",
      "VPN logins",
    ]}
  />
  <p style={{ fontSize: "1.0rem" }}>
    We’ll check <strong>SSH login attempts</strong> (auth logs) later in this lab.
  </p>
</ToggleList>

{/* Section 3: Common Linux Log Locations */}
<ToggleList title="Common Linux Log Locations" index={2}>
  <p style={{ fontSize: "1.0rem", marginBottom: "1rem" }}>
    Linux OS stores all related logs - such as events, errors, warnings, and authentication attempts -
    which are then ingested into a SIEM for continuous monitoring.
  </p>

  <p style={{ fontSize: "1.0rem", marginBottom: "0.5rem" }}>
    On <strong>Kali/Debian-based systems</strong>, logs are stored using <strong>systemd’s journal service </strong> 
     and can be accessed with:
  </p>

  <CodeBlock code={`journalctl`} copyable />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem", marginBottom: "1rem" }}>
    This means you may not find files like <MiniCode>auth.log</MiniCode> or <MiniCode>syslog</MiniCode> 
    under <MiniCode>/var/log/</MiniCode> by default. Instead, logs are structured within{" "}
    <MiniCode>/var/log/journal/</MiniCode>.
  </p>

  <p style={{ fontSize: "1.0rem", marginBottom: "0.5rem" }}>
    On <strong>Ubuntu (and other distros using rsyslog)</strong>, logs are typically written as plain 
    text files under <MiniCode>/var/log/</MiniCode>.
  </p>

  <p style={{ fontSize: "1.0rem", marginBottom: "0.5rem" }}>
    <strong>Some common log file locations are:</strong>
  </p>

  <BulletList
    items={[
      <span><MiniCode>/var/log/httpd</MiniCode> – Contains HTTP request/response and error logs.</span>,
      <span><MiniCode>/var/log/cron</MiniCode> – Stores events related to scheduled cron jobs.</span>,
      <span><MiniCode>/var/log/auth.log</MiniCode> and <MiniCode>/var/log/secure</MiniCode> – Stores authentication-related logs.</span>,
      <span><MiniCode>/var/log/kern.log</MiniCode> – Stores kernel-related events.</span>,
    ]}
  />

  <Callout>
    On Kali, I had to configure rsyslog to enable traditional log files like{" "}
    <MiniCode>auth.log</MiniCode> and <MiniCode>syslog</MiniCode>. I’ll explain how I did this later in the documentation.
  </Callout>
</ToggleList>

{/* Section 4: Log Ingestion */}
<ToggleList title="Log Ingestion" index={3}>
  <p style={{ fontSize: "1.0rem" }}>
    Logs help identify security issues and are sent to the SIEM for monitoring
    and analysis. Common ingestion methods include:
  </p><br/>

  <BulletList
    items={[
      <>
        <strong>Agent / Forwarder:</strong> Lightweight agents (e.g., Splunk
        Forwarder) installed on endpoints collect logs and send them to
        the SIEM.
      </>,
      <>
        <strong>Syslog:</strong> Sends real-time logs from systems and servers
        to a central destination.
      </>,
      <>
        <strong>Manual Upload:</strong> Some SIEMs (Splunk, ELK, etc.) 
        allow offline log files to be uploaded for analysis.
      </>,
      <>
        <strong>Port Forwarding:</strong> SIEM can listen on a port and receive
        logs forwarded directly from endpoints.
      </>,
    ]}
  />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    We’ll be using <strong>ELK</strong> for log ingestion and analysis in this lab.
  </p>
</ToggleList>

{/* Section 5: The Elastic (ELK) Stack */}
<ToggleList title="The Elastic (ELK) Stack" index={4}>
  <p style={{ fontSize: "1.0rem" }}>
    The <strong>Elastic Stack</strong> (or <strong>ELK Stack</strong>) is a set of open-source tools by Elastic used for 
    collecting, processing, and visualizing data. It consists of three core products:
  </p><br/>

  <BulletList
    items={[
      <><strong>Elasticsearch</strong> – Stores and searches data</>,
      <><strong>Logstash</strong> – Processes and sends data to Elasticsearch</>,
      <><strong>Kibana</strong> – Visualizes and analyzes data</>,
    ]}
  />

  <p style={{ fontSize: "1.0rem" }}>
    Together, ELK is widely used for log analysis, security monitoring, and real-time analytics.
  </p><br/>

 {/*Elastic img*/}
 <div style={{ marginTop: "1rem", marginLeft: "-10px" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <img
      src={writeup1Images.e}
      alt="Elastic logo"
      style={{
        maxWidth: "50px",
        borderRadius: "8px",
        display: "block",
        margin: 0,
        padding: 0,
      }}
    />
    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Elasticsearch</span>
  </div>
</div>

  {/* Subsection: Elasticsearch */}
  <p style={{ fontSize: "1.0rem" ,marginTop: "1rem"}}>
    Elasticsearch is the core of the ELK Stack. It is an open-source search and analytics engine used to 
    store and index large volumes of data. Its distributed design allows fast searching across structured, 
    unstructured, and semi-structured data. In a SOC environment, Elasticsearch is where all security logs 
    are stored and queried for analysis.
  </p><br/>
   
  {/*Logstash img*/}
 <div style={{ marginTop: "1rem", marginLeft: "-10px" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <img
      src={writeup1Images.l}
      alt="Logstash logo"
      style={{
        maxWidth: "50px",
        borderRadius: "8px",
        display: "block",
        margin: 0,
        padding: 0,
      }}
    />
    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Logstash</span>
  </div>
</div> 
  

  {/* Subsection: Logstash */}
  <p style={{ fontSize: "1.0rem" ,marginTop: "1rem"}}>
    Logstash is the ingestion and processing pipeline of the ELK Stack. It collects data from multiple 
    sources, parses and transforms it, and sends it to Elasticsearch. This makes it ideal for normalizing 
    logs from different tools, such as firewalls or EDR solutions, before storage and analysis.
  </p><br/>

   {/* Subsection: Kibana */}
   
    {/*Kibana img*/}
   <div style={{ marginTop: "1rem", marginLeft: "-10px" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <img
      src={writeup1Images.k}
      alt="Kibana logo"
      style={{
        maxWidth: "50px",
        borderRadius: "8px",
        display: "block",
        margin: 0,
        padding: 0,
      }}
    />
    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Kibana</span>
  </div>
</div>


  <p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
    Kibana is the visual front-end for the ELK Stack. It allows analysts to search, filter, and visualize 
    data stored in Elasticsearch. Kibana provides interactive dashboards, graphs, and charts, making it 
    easier to spot anomalies and investigate security events in real time.
  </p><br/>

 {/*Beats img*/}
 <div style={{ marginTop: "1rem", marginLeft: "-10px" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <img
      src={writeup1Images.b}
      alt="Beats logo"
      style={{
        maxWidth: "50px",
        borderRadius: "8px",
        display: "block",
        margin: 0,
        padding: 0,
      }}
    />
    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Beats</span>
  </div>
</div> 

  {/* Subsection: Beats */}
  <Heading level={4}></Heading>
  <p style={{ fontSize: "1.0rem" }}>
    Later, Elastic introduced Beats, which are lightweight agents that ship data, which is why the stack is 
    now commonly referred to as the “Elastic Stack” instead of just “ELK.” Using <strong>Beats </strong> 
    is not mandatory in the Elastic Stack, but they can be crucial in providing efficient and secure 
    <strong> data collection capabilities.</strong> 
  </p><br/>

  <BulletList
    items={[
      <><strong>Filebeat</strong> – Collects log files (e.g., auth logs, syslogs).</>,
      <><strong>Metricbeat</strong> – Gathers system metrics (CPU, memory, disk).</>,
      <><strong>Packetbeat</strong> – Captures network packets (like Wireshark).</>,
      <><strong>Winlogbeat</strong> – Ships Windows Event Logs.</>,
      <><strong>Auditbeat</strong> – Monitors Linux audit logs and file integrity.</>,
      <><strong>Heartbeat</strong> – Tracks uptime and service availability.</>,
    ]}
  />

  <p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
    In our lab, we will use <strong>Filebeat</strong> instead of Logstash for simplicity.<br/>So,
  </p>

  <BulletList
    items={[
      <><strong>Filebeat</strong> → Would collect SSH logs from Kali (<MiniCode>/var/log/auth.log</MiniCode>).</>,
      <><strong>Elasticsearch</strong> → Would store them.</>,
      <><strong>Kibana</strong> → Lets us search/visualize dashboards.</>,
    ]}
  />
</ToggleList>

{/* Section 6: Building Our Own Mini SIEM Lab (Using EFK) */}
<ToggleList title="Building Our Own Mini SIEM Lab (Using EFK)" index={5}>
<p style={{ fontSize: "1.0rem" }}>
  Alright, let’s get our hands dirty and build a little SIEM playground!
</p>

<p style={{ fontSize: "1.0rem",marginTop: "0.5rem" }}>
So I’m gonna be using Docker for the installs.<br/>
  If you’ve never used Docker before, don’t panic. It’s <b>basically just a tool that
  lets you run apps in neat, isolated containers.</b><br/>
  And if you’re totally new, check out this awesome video from one of my
  favorite YouTubers before we begin: <a href="https://www.youtube.com/watch?v=eGz9DS-aIeY" target="_blank" style={{ color: "red"}}><b>What is Docker?</b></a>
</p>

<p style={{ fontSize: "1.0rem" ,marginTop: "0.5rem"}}>Cool? Okay, let’s jump in.</p>


<p style={{ fontSize: "1.0rem" ,marginTop: "0.5rem"}}>
  So I’m sitting in my Kali VM right now, terminal open. First thing I like to do is
  make sure everything’s fresh and updated cause no one likes running into
  weird errors halfway through:
</p>

<CodeBlock
  code={`sudo apt update && sudo apt upgrade -y`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Sweet. Now let’s check if Docker is already chilling on our machine:
</p>

<CodeBlock
  code={`docker --version`}
  copyable
/>

<p style={{ fontSize: "1.0rem" ,marginTop: "1rem" }}>
  If it shows you a version number, nice! If not, no problem - we can install it in
  one go:
</p>

<CodeBlock
  code={`sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>Boom — Docker is ready to work.</p>

<p style={{ fontSize: "1.0rem" ,marginTop: "1rem"}}>
  Now let’s keep things tidy. I like to make a little folder so all our SIEM stuff lives
  in one neat place:
</p>

<CodeBlock
  code={`mkdir elk-lab
cd elk-lab`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Think of this as your mini security lab’s control room 💻.
</p>

<p style={{ fontSize: "1.0rem" ,marginTop: "1rem"}}>
  Now we’re going to tell Docker exactly what we want it to spin up.
  We do this by creating a <b>docker-compose.yml</b> file.
</p>

<CodeBlock
  code={`nano docker-compose.yml`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  And paste this inside:
</p>

<CodeBlock
  code={`version: "3.7"

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
    container_name: elasticsearch
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
    volumes:
      - esdata:/usr/share/elasticsearch/data

  kibana:
    image: docker.elastic.co/kibana/kibana:8.11.0
    container_name: kibana
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

volumes:
  esdata:`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Save it (<MiniCode>CTRL+O</MiniCode>, <MiniCode>Enter</MiniCode>,
  <MiniCode>CTRL+X</MiniCode>) and we’re ready to bring this baby to life.
</p>
<Callout>This file is basically like leaving a sticky note for Docker saying:<br/>
  “Hey buddy, I need Elasticsearch and Kibana, here’s where they should run, and here’s the ports I’ll be using.”<br/>
</Callout>
<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Time for the magic moment ✨ - let’s fire it up:
</p>

<CodeBlock
  code={`sudo docker compose up -d`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Docker will pull the images, spin up Elasticsearch and Kibana, and we’ll have
  our SIEM brain ready to go.
</p>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Now, if you’re curious and want to double-check that they’re alive and running,
  you can peek with:
</p>

<CodeBlock
  code={`sudo docker ps`}
  copyable
/>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  If you see Elasticsearch and Kibana running, high five 👋 - you just built your
  first mini SIEM environment! 🎉
</p>


{/* Section 7: Accessing Elasticsearch & Kibana */}
<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  But umm, Jess...I see some stuff in the terminal, and I can kinda tell Elasticsearch and Kibana are running in
  Docker... but how do I actually <b>see</b> dashboards and use this like a real SIEM?
</p>

<img
  src={writeup1Images.gif1}
  alt="gif1"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>


<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Ah, my dear friend, if you’re new to this world - I’ve got you covered.
</p>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Remember that little sticky note we left for Docker earlier, where we told it to run Elasticsearch
  on port <MiniCode>9200</MiniCode> and Kibana on port <MiniCode>5601</MiniCode>? Well, here’s where that comes in.
</p>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>Open your browser and type:</p>
<br/>
<BulletList
  items={[
    <>
      <MiniCode>http://127.0.0.1:9200</MiniCode> → you’ll see Elasticsearch is alive and listening.
    </>,
    <>
      <MiniCode>http://localhost:5601</MiniCode> → boom, Kibana should pop up.
    </>,
  ]}
/><br/>

<p style={{ fontSize: "1.0rem" }}>
  If Kibana greets you with an <b>“Add integrations”</b> button, just click it and you’re all set to explore
  like a real SIEM pro.
</p>

<p style={{ fontSize: "1.0rem" }}>
  So, Elasticsearch and Kibana are happily running - but right now, they’re just sitting there with
  empty stomachs 🍽️.
</p>

<p style={{ fontSize: "1.0rem",marginTop: "1rem" }}>
  Let’s feed them some <b>real logs</b>.
</p>
</ToggleList>
{/* Section 7: Time to install Filebeat */}
<ToggleList title="Time to install Filebeat" index={6}>
  <Callout type ="reminder">Filebeat is like your log delivery guy 🚚 who picks up the food (your logs from 
    <MiniCode>/var/log/auth.log</MiniCode>, <MiniCode>/var/log/syslog</MiniCode>, or Apache logs) 
    and sends them straight to Elasticsearch.</Callout>
<p style={{ fontSize: "1.0rem" }}>Let’s go ahead and install Filebeat now: </p>
  <CodeBlock
    code={`curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-8.11.0-amd64.deb
sudo dpkg -i filebeat-8.11.0-amd64.deb
filebeat version`}
    copyable
  />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>Quick breakdown:</p>
  <BulletList
    items={[
      <span><MiniCode>curl -L -O</MiniCode> → downloads the file (and keeps the same name).</span>,
      <span><MiniCode>dpkg -i</MiniCode> → installs the .deb package manually.</span>,
      <span><MiniCode>filebeat version</MiniCode> → just a quick check to confirm the install worked.</span>,
    ]}
  />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Now, there’s a <strong>tiny catch</strong> we need to deal with 👀
    </p>
    <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    So, Kali uses <MiniCode>systemd-journald</MiniCode> by default, which keeps logs in a binary journal 
    (not those nice, easy-to-read text files we love).
  </p>

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Yes, Filebeat <em>can</em> read those journals, but honestly… it’s a bit of a pain.
    </p><p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    So here’s what I’m going to do: install <MiniCode>rsyslog</MiniCode>, which writes logs into classic 
    text files like <MiniCode>/var/log/syslog</MiniCode> and <MiniCode>/var/log/auth.log</MiniCode>.
  </p>

  <img
  src={writeup1Images.gif2}
  alt="gif2"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>


<p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
  Before you go and install rsyslog, let’s check if you even need to.
</p>

<p style={{ fontSize: "1.0rem", marginTop: "0.5rem" }}>
  Open a terminal and take a quick peek:
</p>

<CodeBlock
  code={`cd /var/log
ls | grep syslog
ls | grep auth.log`}
  copyable
/>
<br />

  <p style={{ fontSize: "1.0rem"}}>
    If you already see <MiniCode>syslog</MiniCode> and <MiniCode>auth.log</MiniCode> sitting there - awesome! 🎉  
    You can skip the rsyslog installation entirely and go straight to <strong>Configuring Filebeat</strong>.
  </p>


  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    If you don’t see those files, no worries - follow along as we install rsyslog next.
  </p>

  <CodeBlock
    code={`sudo apt update
sudo apt install rsyslog -y
sudo systemctl enable rsyslog
sudo systemctl start rsyslog`}
    copyable
  />
 <br />
  <p style={{ fontSize: "1.0rem" }}>
    Boom 💥 now you should have proper log files being written.
  </p>

  <CodeBlock
    code={`ls -l /var/log/auth.log /var/log/syslog`}
    copyable
  />
 <br />
  <p style={{ fontSize: "1.0rem" }}>
    If you see both files, we’re good to go.
  </p>

  <img
  src={writeup1Images.img2}
  alt="img2"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

{/* Section 8: Configure Filebeat */}
<Heading level={3}>Drumroll… it’s time to Configure Filebeat!</Heading>

  <p style={{ fontSize: "1.0rem" , marginTop: "1rem"}}>
    But wait – what does <b>“Configuring Filebeat”</b> even mean?
  </p>

  <p style={{ fontSize: "1.0rem" }}>
    Well, in simple terms, it’s just about telling Filebeat exactly which logs we care about.
  </p>

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Your system spits out <b>tons</b> of logs every minute, but if you noticed earlier, I kept emphasizing only{" "}
    <MiniCode>syslog</MiniCode> and <MiniCode>auth.log</MiniCode>.
  </p>
  <br />

  <p style={{ fontSize: "1.0rem", fontStyle: "italic" }}>
    “Hey Jess, what’s so special about those two?”
  </p>
  <br />

  <p style={{ fontSize: "1.0rem" }}>
    Good question! You could ship any logs you want - web server logs, cron logs, kernel logs, but I chose these two to keep
    the lab simple.
  </p>
  <br />

  <p style={{ fontSize: "1.0rem" }}>
    Since my goal is to watch SSH login activity, <MiniCode>auth.log</MiniCode> (logins) +{" "}
    <MiniCode>syslog</MiniCode> (general events) are perfect and keep things nice, simple, and in scope without overwhelming
    the setup.
  </p>

  <Heading level={3}>Editing the System Module</Heading>

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Now we need to edit Filebeat’s <b>system module</b> — think of this as the “rules file” where we tell Filebeat what to watch.
  </p>

  <CodeBlock
    code={`sudo nano /etc/filebeat/modules.d/system.yml`}
    copyable
  />
  <br />

  <p style={{ fontSize: "1.0rem" }}>And make sure it looks like this:</p>

  <CodeBlock
    code={`- module: system
  syslog:
    enabled: true
    var.paths: ["/var/log/syslog"]

  auth:
    enabled: true
    var.paths: ["/var/log/auth.log"]`}
    copyable
  />
  <br />

  <img
  src={writeup1Images.img3}
  alt="img3"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>


  <p style={{ fontSize: "1.0rem" }}>Save & exit (<MiniCode>CTRL+O</MiniCode>, <MiniCode>Enter</MiniCode>, <MiniCode>CTRL+X</MiniCode>).</p>

  <Heading level={3}>Quick Concept Check</Heading>
<br/>
  <BulletList
    items={[
      "Module → A prebuilt Filebeat package for a specific type of data. It knows how to parse, structure, and label data so Kibana can understand it.",
      "System module → The one built for system logs (like syslog, auth.log)."
    ]}
  />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Keeping this in mind is super helpful - because later, when we jump into Kibana, we’ll be filtering events by{" "}
    <MiniCode>dataset</MiniCode> and <MiniCode>module</MiniCode> (like <MiniCode>event.dataset : "system.auth"</MiniCode>).
  </p>
  <br />

  <p style={{ fontSize: "1.0rem" }}>
    One last thing - we need to tell Filebeat <b>where to send these logs</b>, technically pointing Filebeat to ElasticSearch.
  </p>

  <CodeBlock
    code={`sudo nano /etc/filebeat/filebeat.yml`}
    copyable
  />
  <br />

  <p style={{ fontSize: "1.0rem" }}>Scroll down to the output section and make sure it says:</p>

  <CodeBlock
    code={`output.elasticsearch:
  hosts: ["localhost:9200"]`}
    copyable
  />
  <img
  src={writeup1Images.img4}
  alt="img4"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

  <br />
  <p style={{ fontSize: "1.0rem" }}>Save & exit, and now it’s time to fire up Filebeat!</p>

  <CodeBlock
    code={`sudo filebeat modules enable system
sudo systemctl start filebeat
sudo systemctl status filebeat`}
    copyable
  />
  <br />
  <p style={{ fontSize: "1.0rem" }}>
    If everything worked, <MiniCode>status</MiniCode> should show Filebeat running and connected.
  </p>
  <img
  src={writeup1Images.img5}
  alt="img5"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

</ToggleList>
{/* Section 8: Generate Test Logs */}
<ToggleList title="Generate Test Logs" index={7}>
  <p style={{ fontSize: "1.0rem" }}>
    We’ll start by generating a <strong>Test Log</strong>.
  </p>

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Pop open a <strong>new terminal</strong> and try this:
  </p>

  <CodeBlock
    code={`ssh invaliduser@localhost`}
    copyable
  />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    When it asks for a password, just type in something random a few times. <br />
    If instead of asking for a password, it throws something like <MiniCode>ssh: command not found</MiniCode>, that means you don’t have SSH installed on your machine.
  </p>

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Make sure you check if it’s installed first:
  </p>

  <CodeBlock code={`ssh -V`} copyable />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Once installed, try the <MiniCode>ssh invaliduser@localhost</MiniCode> command again - you should now get a password prompt and can generate some failed login attempts.
  </p>

  <Heading level={4}>What this does:</Heading><br/>
  <BulletList
    items={[
      "It tries to SSH into your own machine with a fake username (invaliduser).",
      "This will obviously fail - but that’s exactly what we want!",
      "Each failed attempt writes a line to /var/log/auth.log."
    ]}
  /><br/>

  <p style={{ fontSize: "1.0rem" }}>
    Want to see it in real time? Try this in another terminal:
  </p>

  <CodeBlock code={`sudo tail -f /var/log/auth.log`} copyable />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>You should see something like:</p>

  <CodeBlock
    code={`Failed password for invalid user from 127.0.0.1 port 51422 ssh2`}
  />

  <p style={{ fontSize: "1.0rem", marginTop: "1rem" }}>
    Perfect! We just created some juicy data for Filebeat to ship over to Elasticsearch.
  </p>
</ToggleList>
{/* Section 8: Viewing Logs in Kibana */}
<ToggleList title="Viewing Logs in Kibana" index={8}>
  <p style={{ fontSize: "1rem" }}>
    Alright, time to switch to the <strong>Kibana UI</strong>.
  </p>

  <p style={{ fontSize: "1rem", marginTop: "1rem" }}>Head to your browser and visit:</p>

  <CodeBlock code={`http://localhost:5601`} copyable />
  <br />
  <Callout style={{ marginTop: "0.75rem" }}> Heads up: these steps are based on version 8.11.0, so things might look a little different if you’re on another version.
</Callout>
  <p style={{ fontSize: "1rem",marginTop: "1rem" }}> 
    See that little hamburger icon (☰) on the left? Click it → then click <strong>Discover</strong>.
    <br /><br />
    On the left side, you should see a dropdown called <strong>Test Logs</strong> with an arrow next to it.
  </p>
  <br />
  <p style={{ fontSize: "1rem" }}>
    Click that arrow — you should see <MiniCode>filebeat-*</MiniCode> already created for you.
    <br /><br />
    Change your <strong>Data View</strong> to <MiniCode>filebeat-*</MiniCode>.
  </p>

<p style={{ fontSize: "1rem",marginTop: "1rem" }}> <strong>What you just did:</strong> You told Kibana - 
   <em> "Yo, only show me data that Filebeat has shipped."</em>
  </p>  
   
 <Callout type="funfact" style={{ marginTop: "0.75rem" }}>
 🤔 <strong>What’s with that weird <MiniCode>filebeat-*</MiniCode> name?</strong>
 <p style={{marginTop: "1rem" }}>
    When Filebeat sends data, it stores it in Elasticsearch under indices like 
    <MiniCode>filebeat-8.11.0-2025.09.15-000001</MiniCode>.
    <br />
    The <MiniCode>*</MiniCode> is a wildcard, meaning “show me all indices that start with filebeat- , no matter what version or date they have.”
 </p></Callout>
 <p style={{ fontSize: "1rem",marginTop: "1rem" }}>
    So basically, Kibana just grouped all your Filebeat logs into one nice view.
</p>
  <p style={{ fontSize: "1rem",marginTop: "1rem" }}>
    Now, see that tiny calendar icon in the top right?  
    It probably says “Last 15 minutes.”
  </p>
  <p style={{ fontSize: "1rem",marginTop: "1rem" }}>
    Click it → pick <strong>Last 30 hours</strong> → hit <strong>Apply</strong>.</p>
    <p style={{ fontSize: "1rem" ,marginTop: "1rem"}}>  
    Boom - you just unlocked a bigger window of time so we can catch the logs we generated.
  </p>
  <p style={{ fontSize: "1rem" ,marginTop: "1rem"}}>
    <strong>Time to now Filter some SSH Logs :</strong>
  </p>
  <p style={{ fontSize: "1rem" ,marginTop: "1rem"}}>
    Type this query into the search bar at the top that says “Filter your data…”
  </p>

  <CodeBlock code={`event.dataset : "system.auth"`} copyable />
  <br />

  <img
  src={writeup1Images.img6}
  alt="img6"
  style={{
    width: "100%",        // Take full width of parent container
    maxWidth: "100%",     // Prevent overflow beyond container
    height: "auto",       // Keep aspect ratio
    borderRadius: "8px",
    margin: "1rem 0",
  }}
/>

  <p style={{ fontSize: "1rem" }}>
    Hit <strong>Enter</strong> and you should now see the failed SSH attempts you generated earlier.
  </p><br/>


  <BulletList
    items={[
      "Filebeat picked up your /var/log/auth.log events",
      "Shipped them into Elasticsearch",
      "Kibana is successfully visualizing them"
    ]}
  /><br/>

  <p style={{ fontSize: "1rem" }}>
    Nice work - you’ve got a live, working SIEM pipeline!
  </p>
  <Callout type="important" style={{ marginTop: "0.75rem" }}>
  <div style={{ marginTop: "0.5rem" }}>
  Building labs is fun - spinning up VMs, deploying SIEMs, and triggering alerts
  feels rewarding. But none of that matters if you don’t know how to read and
  interpret logs.
  <br /><br />
  Whether logs are raw (JSON, syslog, Windows events) or visualised through a
  SIEM, the real skill is understanding what the data is actually telling you.
  Tools don’t find incidents - analysts do.
  <br /><br />
  
  <span style={{ color: "#ffffff" }}>
      I’ll be writing about this soon, focusing on how to read logs properly, not
      just how to collect them. 
    </span>
  </div>
</Callout>

</ToggleList>

<div>
<VictoryBox />
</div>


</div>
  );
}