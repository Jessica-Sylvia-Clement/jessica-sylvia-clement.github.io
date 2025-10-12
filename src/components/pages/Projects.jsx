import React from "react";
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

const projects = [
  {
    title: "SIEM Log Analysis Lab",
    description:
      "Built an ELK-based detection lab that collects and correlates Linux host and network logs using Filebeat. Created detection rules and dashboards (failed logins, alert trends, top domains) to visualize events, triage alerts, and report true vs false positives like a SOC analyst.",
    tech: ["ELK Stack", "Filebeat", "Docker", "Linux"],
    //link: "/writeups/siem-intro",
    type: "blue",
  },
  {
    title: "Malware Analysis (YARA)",
    description:
      "Performed safe Windows static malware analysis and YARA rule development: sandboxed a VirtualBox Windows VM, analysed samples from MalwareBazaar, extracted and ranked strings (Sysinternals Strings), wrote and tested YARA rules, applied ACLs for secure handling, and produced a threat-hunting report with findings.",
    tech: ["Windows", "YARA", "PowerShell", "Strings (Sysinternals)", "MalwareBazaar", "ACLs", "Threat Hunting", "Static Analysis"],
    type: "blue",
  },
  {
    title: "Mr. Robot CTF Clone",
    description:
      "Replicated the classic TryHackMe ‘Mr. Robot’ challenge to learn CTF design and attacker techniques from the developer side. Includes a vulnerable WordPress-based box, PHP backdoor, foothold & privilege-escalation paths, and packaging for sharing.",
    tech: [
      "Python", "PHP", "Bash", "Linux", "WordPress", "Docker", "WP-CLI",
      "Nmap", "Gobuster", "Nikto", "Hydra", "John", "Netcat", "SSH",
      "reverse shells", "SUID binaries", "CTF Design"
    ],
    //link: "writeups/robot-main",
    type: "red",
  },
  {
    title: "Hash Cracker",
    description:
      "Built an egg-themed hash cracker (Python) that queries free online APIs first and falls back to Hashcat + wordlists. Supports MD5, SHA1, SHA256, SHA512; parallel threaded cracking; directory/file hash hunts; and colourful CLI reports.",
    tech: ["Python", "Hashcat", "REST APIs", "MD5", "SHA1", "SHA256", "SHA512", "multithreading", "regex"],
    link: "https://github.com/Jessica-Sylvia-Clement/crackAhash",
    type: "red",
  },
  {
    title: "File-System Forensics (Autopsy & Sleuth Kit)",
    description:
      "Conducted detailed offline investigations using Autopsy and The Sleuth Kit: acquired and verified disk images, analyzed file systems, recovered deleted data, built event timelines, detected obfuscation and hidden artifacts, and authored reports.",
    tech: ["Autopsy", "The Sleuth Kit", "Disk Image Acquisition", "File System Forensics", "Deleted File Recovery", "Timeline Analysis", "Metadata Analysis", "Artifact Extraction", "Evidence Preservation", "Report Writing"],
    type: "blue",
  },
  {
    title: "Blue Team Fundamentals (TryHackMe)",
    description:
      "Completed fundamental TryHackMe rooms covering SOC skills — log analysis and detection with Splunk/ELK, IDS tuning with Snort, network forensics with Wireshark, phishing analysis, and mapping incidents to MITRE ATT&CK and the Cyber Kill Chain.",
    tech: ["Splunk", "Snort", "Wireshark", "MITRE ATT&CK", "Cyber Kill Chain", "SIEM", "EDR", "Phishing Analysis", "Log Analysis", "Threat Detection", "Incident Response", "SOC Operations", "Network Forensics", "Intrusion Detection", "Threat Hunting"],
    type: "blue",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      {/* === Gradient Ratio Bar === */}
      <div className="relative w-full max-w-5xl mx-auto mb-12 text-center">
        {/* Labels ABOVE bar */}
        <div className="flex justify-between text-xs sm:text-sm font-medium mb-2 px-2">
          <span className="text-blue-300">Blue Team Projects (60%)</span>
          <span className="text-red-300">Red Team Projects (40%)</span>
        </div>

        {/* Bar */}
        <div
          className="h-6 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)]"
          style={{
            background:
              "linear-gradient(to right, #0000FF 0%, #0000FF 60%, #8000FF 65%, #FF0000 100%)",
          }}
        ></div>
      </div>

      {/* === Project Cards === */}
      <div className="flex flex-col gap-10 max-w-5xl w-full pb-20">
        {projects.map((p, idx) => (
          <div
            key={idx}
            onClick={() => p.link && (window.location.href = p.link)}
            className="border border-green-600/50 rounded-xl p-6 bg-black/40 hover:bg-green-900/10 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all duration-300 cursor-pointer"
          >
            {/* Title + Tag Row */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-semibold text-green-300 leading-snug flex-1">
                {p.title}
              </h2>
              <span
                className={`ml-3 px-3 py-1 rounded-full text-[0.7rem] sm:text-xs font-semibold tracking-wide whitespace-nowrap self-start sm:self-center
                  ${
                    p.type === "blue"
                      ? "bg-blue-800 text-blue-200 border border-blue-400 shadow-[0_0_8px_rgba(0,0,255,0.6)]"
                      : "bg-red-800 text-red-200 border border-red-400 shadow-[0_0_8px_rgba(255,0,0,0.6)]"
                  }`}
              >
                {p.type === "blue" ? "DEFENSIVE" : "OFFENSIVE"}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              {p.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs border border-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-5">
              {p.link && p.link.includes("github") && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaGithub />
                </a>
              )}
              {p.link && p.link.endsWith(".pdf") && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaFilePdf /> Report
                </a>
              )}
              {p.link &&
                p.link.startsWith("http") &&
                !p.link.includes("github") && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}