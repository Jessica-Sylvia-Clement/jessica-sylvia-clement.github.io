import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import ProjectModal from "../ui/ProjectModal";
import MalwareImages from "../../assets/Malwareanalysispics";
import SOCImages from "../../assets/SOCprojectpics";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "SOC Detection , Automation & Active Response Lab ",
    description:
      "Designed and implemented an end-to-end SOC detection and response lab using Wazuh, Sysmon, Shuffle, VirusTotal, and TheHive. Built a Windows and Linux attack–defence pipeline covering host telemetry, custom detection rules, enrichment, human-in-the-loop approval, and automated active response. Documented the architecture and workflows as a structured SOC playbook for repeatable detection, investigation, and remediation.",
    tech: [
      "Windows 10",
      "Linux (Ubuntu)",,
      "Cloud",
      "Docker",
      "Sysmon",
      "Wazuh",
      "Shuffle SOAR",
      "TheHive",
      "Filebeat",
      "Custom Detection Rules",
      "Mimikatz Detection",
      "SSH Brute Force Detection",
      "VirusTotal Enrichment",
      "Regex (SHA-256 Extraction)",
      "API Authentication (JWT)",
      "Active Response",
      "IP Blocking",
      "SOC Automation",
      "Incident Response",
      "Threat Hunting",
    ],
    type: "blue",
    evidence: {
      images: [
        { src: SOCImages.img01, caption: "Sysmon service running on Windows endpoint" },
        { src: SOCImages.img02, caption: "Sysmon events ingested into Wazuh" },
        { src: SOCImages.img03, caption: "Custom Wazuh rule detecting Mimikatz" },
        { src: SOCImages.img04, caption: "Shuffle workflow: SHA-256 → VirusTotal → TheHive" },
        { src: SOCImages.img05, caption: "TheHive analyst users configured" },
        { src: SOCImages.img06, caption: "TheHive alert created from Wazuh detection" },
        { src: SOCImages.img07, caption: "Automated email alert for Mimikatz detection" },
        { src: SOCImages.img08, caption: "SSH brute-force activity timeline in Wazuh" },
        { src: SOCImages.img09, caption: "Human-in-the-loop approval workflow in Shuffle" },
        { src: SOCImages.img10, caption: "Analyst email approval for automated response" },
      ],
      bullets: [
        "Deployed Sysmon for high-fidelity Windows endpoint telemetry",
        "Integrated Windows and Linux agents with Wazuh SIEM",
        "Authored and tested custom rules to detect Mimikatz execution",
        "Built Shuffle playbooks for alert enrichment and response automation",
        "Extracted SHA-256 hashes and enriched alerts via VirusTotal",
        "Integrated TheHive for case management and analyst review",
        "Implemented human-in-the-loop approval before remediation",
        "Configured Wazuh Active Response to block malicious SSH IPs",
        "Validated full end-to-end automated SOC response pipeline",
      ],
    },
  },
  
  
  {
    title: "SIEM Log Analysis Lab",
    description:
      "Built an ELK-based detection lab that collects and correlates Linux host and network logs using Filebeat. Created detection rules and dashboards (failed logins, alert trends, top domains) to visualize events, triage alerts, and report true vs false positives like a SOC analyst. Documented the end-to-end workflow as a structured playbook for repeatable learning and analysis.",
    tech: ["ELK Stack", "Filebeat", "Docker", "Linux"],
    type: "blue",
    route: "/writeups/siem-intro", 
  },
  
  {
    title: "Malware Analysis (YARA)",
    description:
      "Performed safe Windows static malware analysis and YARA rule development: sandboxed a VirtualBox Windows VM, analysed samples from MalwareBazaar, extracted and ranked strings (Sysinternals Strings), wrote and tested YARA rules, applied ACLs for secure handling, and produced a threat-hunting report with findings.",
    tech: [
      "Windows",
      "YARA",
      "PowerShell",
      "Strings (Sysinternals)",
      "MalwareBazaar",
      "ACLs",
      "Threat Hunting",
      "Static Analysis",
    ],
    type: "blue",
    evidence: {
      images: [
        {
          src: MalwareImages.img01,
          caption: "Malware sample sourced, verified, and triaged via MalwareBazaar"
        },
        {
          src: MalwareImages.img02,
          caption: "Raw string extraction performed for initial static analysis and context discovery"
        },
        {
          src: MalwareImages.img03,
          caption: "Suspicious strings identified highlighting potential IOCs and malware functionality"
        },
        {
          src: MalwareImages.img04a,
          caption: "Extracted indicators categorised into domains, filenames, and network artefacts"
        },
        {
          src: MalwareImages.img04b,
          caption: "Mutex artefacts analysed to infer execution behaviour and persistence mechanisms"
        },
        {
          src: MalwareImages.img05,
          caption: "Custom YARA rule developed and validated with a successful detection hit"
        }
      ],
      bullets: [
        "Sample sourced and verified via MalwareBazaar",
        "Static string extraction using Sysinternals",
        "Indicator triage and categorisation",
        "Custom YARA rule developed and validated",
      ],
    },
  },
  {
    title: "Mr. Robot CTF Clone",
    description:
      "Replicated the classic TryHackMe ‘Mr. Robot’ challenge to learn CTF design and attacker techniques from the developer side. Includes a vulnerable WordPress-based box, PHP backdoor, foothold & privilege-escalation paths, and packaging for sharing. Documented the challenge design, exploitation paths, and escalation flow as a structured CTF playbook for repeatable learning and reuse.",
    tech: [
      "Python",
      "PHP",
      "Bash",
      "Linux",
      "WordPress",
      "Docker",
      "WP-CLI",
      "Nmap",
      "Gobuster",
      "Nikto",
      "Hydra",
      "John",
      "Netcat",
      "SSH",
      "reverse shells",
      "SUID binaries",
      "CTF Design",
    ],
    type: "red",
    route: "/writeups/robot-main",
  },
  {
    title: "Hash Cracker",
    description:
      "Built an egg-themed hash cracker (Python) that queries free online APIs first and falls back to Hashcat + wordlists. Supports MD5, SHA1, SHA256, SHA512; parallel threaded cracking; directory/file hash hunts; and colourful CLI reports.",
    tech: [
      "Python",
      "Hashcat",
      "REST APIs",
      "MD5",
      "SHA1",
      "SHA256",
      "SHA512",
      "multithreading",
      "regex",
    ],
    link: "https://github.com/Jessica-Sylvia-Clement/crackAhash",
    type: "red",
  },
  {
    title: "File-System Forensics (Autopsy & Sleuth Kit)",
    description:
      "Conducted detailed offline investigations using Autopsy and The Sleuth Kit: acquired and verified disk images, analyzed file systems, recovered deleted data, built event timelines, detected obfuscation and hidden artifacts, and authored reports.",
    tech: [
      "Autopsy",
      "The Sleuth Kit",
      "Disk Image Acquisition",
      "File System Forensics",
      "Deleted File Recovery",
      "Timeline Analysis",
      "Metadata Analysis",
      "Artifact Extraction",
      "Evidence Preservation",
      "Report Writing",
    ],
    type: "blue",
  },
  {
    title: "Blue Team Fundamentals (TryHackMe)",
    description:
      "Completed fundamental TryHackMe rooms covering SOC skills — log analysis and detection with Splunk/ELK, IDS tuning with Snort, network forensics with Wireshark, phishing analysis, and mapping incidents to MITRE ATT&CK and the Cyber Kill Chain.",
    tech: [
      "Splunk",
      "Snort",
      "Wireshark",
      "MITRE ATT&CK",
      "Cyber Kill Chain",
      "SIEM",
      "EDR",
      "Phishing Analysis",
      "Log Analysis",
      "Threat Detection",
      "Incident Response",
      "SOC Operations",
      "Network Forensics",
      "Intrusion Detection",
      "Threat Hunting",
    ],
    type: "blue",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

/* OPEN MODAL → push browser history */
const openProject = (project) => {
  setActiveProject(project);
  window.history.pushState({ modal: true }, "");
};

/* CLOSE MODAL → pop history */
const closeProject = () => {
  setActiveProject(null);
  if (window.history.state?.modal) {
    window.history.back();
  }
};

/* Handle browser / phone back button */
useEffect(() => {
  const handlePopState = () => {
    setActiveProject(null);
  };

  window.addEventListener("popstate", handlePopState);
  return () => window.removeEventListener("popstate", handlePopState);
}, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      {/* === Gradient Ratio Bar === */}
      <div className="relative w-full max-w-5xl mx-auto mb-12 text-center">
        <div className="flex justify-between text-xs sm:text-sm font-medium mb-2 px-2">
          <span className="text-blue-300">Blue Team Projects (60%)</span>
          <span className="text-red-300">Red Team Projects (40%)</span>
        </div>

        <div
          className="h-6 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)]"
          style={{
            background:
              "linear-gradient(to right, #0000FF 0%, #0000FF 60%, #8000FF 65%, #FF0000 100%)",
          }}
        />
      </div>

      {/* === Project Cards === */}
      <div className="flex flex-col gap-10 max-w-5xl w-full pb-20">
        {projects.map((p, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (p.route) {
                navigate(p.route);            // internal page
              } else if (p.evidence) {
                openProject(p);               // modal
              } else if (p.link) {
                window.open(p.link, "_blank"); // external
              }
            }}
            
            className="border border-green-600/50 rounded-xl p-6 bg-black/40 hover:bg-green-900/10 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all duration-300 cursor-pointer"
          >
            {/* Title + Tag */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-semibold text-green-300 flex-1">
                {p.title}
              </h2>
              <span
                className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    p.type === "blue"
                      ? "bg-blue-800 text-blue-200 border border-blue-400"
                      : "bg-red-800 text-red-200 border border-red-400"
                  }`}
              >
                {p.type === "blue" ? "DEFENSIVE" : "OFFENSIVE"}
              </span>
            </div>

            <p className="text-gray-300 mb-4 text-sm">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs border border-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex gap-4 mt-5">
              {p.link && p.link.includes("github") && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-green-400 hover:text-green-300"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* === Modal === */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
