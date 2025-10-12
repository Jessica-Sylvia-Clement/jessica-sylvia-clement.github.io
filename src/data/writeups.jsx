// src/data/writeups.jsx
import viasatImage from "../assets/VUR.png";
import article2Image from "../assets/Article2.png";
import writeup1Images from "../assets/SIEMpics/index.js";
import writeup2Images from "../assets/Robotpics/index.js";

export const writeups = [
   // MR ROBOT CLONE 
   {
    id: "robot-main",
    title: "Mr Robot Clone",
    image: writeup2Images.img1,
    summary: <p>Unpack the Mr. Robot TryHackMe box — not just the solution, but the design and how to recreate it.<br/>Follow along step-by-step to learn the tricks, tweak them, and build your own CTF challenges.</p>,
    external: false,
    children: [
      { id: "osinstall", title: "Installing the OS" },
      { id: "wpinstall", title: "Installing & Configuring WordPress on Ubuntu Server with Apache, MySQL, and PHP" },
      { id: "plugin", title: "Creating the Custom Plugin backdoor" },
    ],
  },
   // SIEM
   {
    id: "siem-intro",
    title: "Building a Mini SIEM Lab with EFK (Elasticsearch, Filebeat, Kibana)",
    image: writeup1Images.img1,
    summary: <p><strong>Curious how SIEM works?</strong><br/> Let’s build a mini SIEM lab together using the EFK stack. We’ll explore logs, ingestion, and visualization in Kibana - all on a small scale you can replicate at home.👨‍💻</p>,
    external: false,
    children: [
      { id: "moreinfo", title: "Extra Details on SIEM" },
      { id: "examples", title: "Real-World Examples" },
    ],
  },
  // viasat article
  {
    id: "viasat-battle",
    title: "Defending the Skies: Viasat's Battle Against Russian Hackers",
    image: viasatImage,
    summary: (
      <>
        <p className="text-lg font-bold mb-2">🚀 Hack on Satellites? 🤯</p>
        <p>
          Unravel the epic tale that shook the world during the Russia-Ukraine
          war — and discover what it means for the future of space security.
        </p>
      </>
    ),
    link:
      "https://www.linkedin.com/pulse/defending-skies-viasats-battle-against-russian-hackers-hex20-6qpnc/",
    external: true, 
  },
  // cybersecurity-decade article
  {
    id: "cybersecurity-decade",
    title: "A Decade of Cybersecurity Challenges and Solutions for Satellite Systems",
    image: article2Image,
    summary: (
      <>
        <p>The space industry is evolving faster than ever, bringing both breakthroughs and obstacles.<br/>
Let’s take a closer look at the challenges driving this new era.</p>

      </>
    ),
    link:
      "https://www.linkedin.com/pulse/decade-cybersecurity-challenges-solutions-satellite-systems-hex20/",
    external: true, // opens in a new tab
  },
 
];
