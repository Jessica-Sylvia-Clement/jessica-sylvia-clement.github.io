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
          items={[
            { name: "HTML", level: "Strong" },
            { name: "CSS", level: "Moderate" },
            { name: "MySQL", level: "Moderate" },
            { name: "Python", level: "Moderate" },
            { name: "R", level: "Learning" },
            { name: "PHP", level: "Learning" },
          ]}
          
          
        />

        {/* Concepts as normal list */}
        <SkillCard
          title="Concepts"
          icon={FaLightbulb}
          shadowColor="rgba(33,150,243,0.7)" // Blue glow
          badgeStyle={true}
          items={[
              { name: "Risk Analysis", level: "Strong" },
              { name: "SOC", level: "Strong" },
              { name: "Incident Response", level: "Moderate" },
              { name: "Digital Forensics", level: "Moderate" },
              { name: "Cloud Security", level: "Learning" },
              { name: "Networking", level: "Moderate" },
              { name: "Cryptography", level: "Learning" },
              { name: "VAPT", level: "Moderate" },
              { name: "Ethical Hacking", level: "Moderate" },
              { name: "AI (NLP, Chatbots)", level: "Learning" },
              { name: "GRC fundamentals", level: "Moderate" },          
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
            { name: "Linux", level: "Strong" },
            { name: "Docker", level: "Moderate" },
            { name: "Kubernetes", level: "Learning" },
          
            { name: "Nmap", level: "Strong" },
            { name: "Hydra", level: "Learning" },
            { name: "Wireshark", level: "Moderate" },
            { name: "Burp Suite", level: "Learning" },
            { name: "LinPEAS", level: "Learning" },
          
            { name: "Wazuh", level: "Moderate" },
            { name: "ELK Stack", level: "Moderate" },
            { name: "Splunk", level: "Learning" },
          
            { name: "Shuffle", level: "Learning" },
            { name: "TheHive", level: "Moderate" },
          
            { name: "FTK Imager", level: "Learning" },
            { name: "Autopsy", level: "Learning" },
          ]}
          
        />

        {/* Others as normal list */}
        <SkillCard
          title="Others"
          icon={FaLayerGroup}
          shadowColor="rgba(255,235,59,0.7)" // Yellow glow
          badgeStyle={true}
          items={[
            { name: "Microsoft 365 Suite", level: "Strong" },
            { name: "Adobe Photoshop", level: "Strong" },
            { name: "Adobe Illustrator", level: "Learning" },
            { name: "Blender 3D", level: "Moderate" },
          ]}
          
        />
      </div>
    </div>
  );
}

export default Skills;
