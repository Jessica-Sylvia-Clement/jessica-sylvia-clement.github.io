// src/data/writeupPages/mrrobotclone/robot-main-osinstall.jsx
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

export default function RobotOSinstall() {
  return (
    <div>
      {/* Environment */}
      <Heading level={3}>Environment</Heading>

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        I’m using an <b>Ubuntu Server</b> as the lab box (Victim) and <b>Kali</b> as
        the attacker. I run both in VirtualBox so they share a private network and
        I can export the victim as an <MiniCode>.ova</MiniCode>. There are plenty
        of videos that show how to install Ubuntu Server (or Kali if you don’t
        have it), so follow one to set up your VMs. Make sure <b>SSH is enabled</b>.
      </p>

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        During the Ubuntu install, I named my server <b>mrrobot</b> and set a
        password. You can name yours the same (I’ll use <MiniCode>mrrobot</MiniCode>
        throughout the write-up), or pick a different name - just remember it.
      </p>
      <hr style={{ margin: "1.25rem 0" }} />
      {/* VirtualBox networking */}
      <Heading level={3}>VirtualBox networking (Important)</Heading>

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        We want both VMs (Kali and Ubuntu) on the same private network so they can
        communicate. Make sure to configure the network adapters for both
        accordingly.
      </p>

      <BulletList
        items={[
          <>
            <b>Adapter 1: NAT</b> — internet access for updates and package installs.
          </>,
          <>
            <b>Adapter 2: Host-Only Adapter</b> — private attacker↔victim network
            (addresses like <MiniCode>192.168.56.x</MiniCode>) so Kali and Ubuntu can
            communicate without exposing the box to other networks.
          </>,
        ]}
      />

      <Callout>
      While building the box it’s convenient to assign a
        static IP on the host-only adapter.<br/> Before exporting as an{" "}
        <MiniCode>.ova</MiniCode>, switch back to DHCP so others don’t get
        locked out.
      </Callout>

      <hr style={{ margin: "1rem 0" }} />

      {/* Check connectivity on the victim */}
      <Heading level={3}>Check connectivity on the victim</Heading>

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        After installing Ubuntu Server, log in and run:
      </p>

      <CodeBlock code={`ip a`} copyable />

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        You should see two interfaces, for example:
      </p>

      <ul style={{ marginLeft: "1.25rem", marginTop: "0.25rem" }}>
        <li><MiniCode>enp0s3</MiniCode> → NAT (10.x.x.x)</li>
        <li><MiniCode>enp0s8</MiniCode> → Host-Only (192.168.56.x)</li>
      </ul>

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        If <MiniCode>enp0s8</MiniCode> exists but has no IP, you can assign one.
        It’s usually smarter to set a static IP while building the box so you only
        have to remember one address.
      </p>

      <Heading level={4} style={{ marginTop: "1rem" }}>
        Example static netplan (force <MiniCode>192.168.56.20</MiniCode> on host-only)
      </Heading>

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        Create or edit <MiniCode>/etc/netplan/01-netcfg.yaml</MiniCode> on your Ubuntu:
      </p>

      {/* NOTE: the whole YAML is a single string inside code={`...`} */}
      <CodeBlock
        code={`# /etc/netplan/01-netcfg.yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: true        # NAT, internet access
    enp0s8:
      dhcp4: no
      addresses: [192.168.56.20/24]
      gateway4: 192.168.56.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]`}
        copyable
      />

      <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
        Apply and verify:
      </p>

      <CodeBlock
        code={`sudo netplan apply
ip a
`}
        copyable
      />

      <hr style={{ margin: "1rem 0" }} />

      {/* Switch to Kali */}
      <Heading level={3}>Switch to Kali (attacker)</Heading>

      <ol style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
        <li>Open a new terminal.</li>
        <li>
          Check connectivity to the lab VM:
          <ul style={{ marginLeft: "1rem" }}>
            <li><MiniCode>ping 192.168.56.20</MiniCode></li>
            <li>or</li>
            <li><MiniCode>nmap -sn 192.168.56.0/24</MiniCode></li>
          </ul>
        </li>
        <li>If the target responds, awesome — you can proceed.</li>
      </ol>

      <hr style={{ margin: "1rem 0" }} />

      {/* SSH */}
      <Heading level={3}>SSH into the Ubuntu lab box</Heading>

      <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
        <li>We’ll SSH from Kali into the Ubuntu VM.</li>
        <li>Connect with: <MiniCode>ssh mrrobot@192.168.56.20</MiniCode></li>
        <li>Once authenticated you should have a shell on the lab box.</li>
      </ul>
    </div>
  );
}