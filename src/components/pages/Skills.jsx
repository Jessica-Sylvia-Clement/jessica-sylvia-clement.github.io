import React from "react";
import { FaCode, FaLightbulb, FaTools, FaLayerGroup, FaProjectDiagram } from "react-icons/fa";
import SkillCard from "../SkillCard";

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 mt-10 pb-20">
      {/* 👆 Added pb-20 to create space below the last card */}

      {/* Skills Grid */}
      <div className="flex flex-col justify-center gap-4 max-w-2xl w-full">
        {/* Programming Languages with badges */}
        <SkillCard
          title="Programming Languages"
          icon={FaCode}
          shadowColor="rgba(255,165,0,0.7)" // Orange glow
          badgeStyle={true}
          items={["HTML", "CSS", "MySQL", "Python", "R", "PHP"]}
        />

        {/* Concepts as normal list */}
        <SkillCard
          title="Concepts"
          icon={FaLightbulb}
          shadowColor="rgba(33,150,243,0.7)" // Blue glow
          badgeStyle={true}
          items={[
            "Risk Analysis",
            "SOC",
            "Incident Response",
            "Digital Forensics",
            "Cloud Security",
            "Networking",
            "Cryptography",
            "VAPT",
            "Ethical Hacking",
            "AI (NLP, Chatbots)",
            "GRC fundamentals",
          ]}
        />

        {/* Frameworks */}
<SkillCard
  title="Frameworks"
  icon={FaProjectDiagram}
  shadowColor="rgba(168,85,247,0.7)" // Purple glow
  badgeStyle={true}
  items={[
    "ISO/IEC 27001",
    "NIST Cybersecurity Framework (CSF)",
    "APRA CPS 234",
    "COBIT 2019",
  ]}
/>


        {/* Tools with badges */}
        <SkillCard
          title="Tools"
          icon={FaTools}
          shadowColor="rgba(34,197,94,0.7)" // Green glow
          badgeStyle={true}
          items={[
            "Linux",
            "Docker",
            "Kubernetes",
            "Nmap",
            "Hydra",
            "Wireshark",
            "Burp Suite",
            "LinPEAS",
            "Wazuh",
            "ELK Stack",
            "Splunk",
            "Shuffle",
            "TheHive",
            "FTK Imager",
            "Autopsy",
          ]}
        />

        {/* Others as normal list */}
        <SkillCard
          title="Others"
          icon={FaLayerGroup}
          shadowColor="rgba(255,235,59,0.7)" // Yellow glow
          badgeStyle={true}
          items={[
            "Microsoft 365 Suite",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Blender 3D",
          ]}
        />
      </div>
    </div>
  );
}

export default Skills;
