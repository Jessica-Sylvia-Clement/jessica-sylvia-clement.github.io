import shineImage from "../assets/shine.png";
import speakImage from "../assets/tedx.webp";
import leadImage from "../assets/lead.png";
import seleneImage from "../assets/selene.png";
import wistem from "../assets/wistem.png";
import tiss from "../assets/tiss.png";

export const achievements = [
  {
    id: "shine",
    title: "Shine",
    subtitle: "Women in Security Magazine",
    link: "https://issuu.com/source2create/docs/women_in_security_magazine_issue20",
    description:
      "Proudly featured in the Student Spotlight, sharing my journey in cybersecurity and shining a light on the next generation of women in tech.",
    image: shineImage,
    showOnAbout: true,
  },
  {
    id: "speak",
    title: "Speak",
    subtitle: "TEDxRMIT Melbourne City",
    description:
      "Took the stage at TEDx to share my voice on the hidden cyber war targeting the elderly—turning passion into purpose and nerves into power.",
    image: speakImage,
    showOnAbout: true,
  },
  {
    id: "lead",
    title: "Lead",
    subtitle: "RISC 2025 Executive Team",
    link: "https://www.linkedin.com/company/rmit-information-security-collective",
    description:
      "Stepping up as Secretary of RMIT’s InfoSec Collective, helping build community, spark collaboration, and lead with a hacker’s heart (ethically, of course).",
    image: leadImage,
    showOnAbout: true,
  },
  {
    id: "selene",
    title: "CDH Engineer",
    subtitle: "SELENE Lunar Exploration Team",
    description:
      "Challenged myself by stepping into the role of a CDH Engineer for the SELENE team under the Milo Mission Academy, despite having no prior engineering background. Learned mission design fundamentals through the academy while contributing to the team’s Preliminary Design Review (PDR) for a lunar subsurface exploration mission, collaborating with a multidisciplinary, international cohort.",
    image: seleneImage, 
    showOnAbout: false,
  },
  {
    id: "wistem",
    title: "Women in STEM Ambassador",
    subtitle: "RMIT University",
    description:
      "Served as a Women in STEM Ambassador at RMIT University, delivering STEM outreach programs and mentoring students. Actively promoted cybersecurity education and helped raise awareness of diverse career pathways in technology.",
    image: wistem, 
    showOnAbout: false,
  },
  {
  id: "tiss-accessibility",
  title: "Test Assistant for Visually Impaired Students",
  subtitle: "Tata Institute of Social Sciences (TISS)",
  description:
    "Supported visually impaired students at the Tata Institute of Social Sciences (TISS) by acting as a reader and writer during academic examinations, ensuring accessibility, fairness, and equal opportunity in assessment environments.",
  image: tiss,
  showOnAbout: false,
}, 
];
