import React from "react";
import JessProfile from "../../../assets/JessProfile.jpeg";
import MoreInfoCard from "../../MoreInfoCard";
import { achievements } from "../../../data/achievements";
import CareerTimeline from "../../CareerTimeline";


function About() {
  return (
    <div className="flex flex-col w-full">
    {/* Green Section */}
    <section className="
  relative
  flex flex-col items-center gap-6
  bg-gradient-to-b
  from-black
  via-green-900/80
  to-green-800
  pt-7 md:pt-32
  pb-10
">  
      {/* Heading */}
      <h2 className="text-2xl md:text-6xl font-bold text-neutral-100">
        Hi I'm Jessica! 🙋🏻‍♀️
      </h2>

      {/* Profile Image */}
      <img
        className="rounded-full h-40 w-40 md:h-60 md:w-60 object-cover"
        src={JessProfile}
        alt="Jessica"
      />

      {/* Bio Section */}
      <section className="rounded-lg p-4 max-w-3xl w-full text-center">
        <p className="mb-4 text-lg">
          I’m a Cybersecurity graduate 👩🏻‍🎓 with a Master of Cyber Security from
          RMIT University, with hands-on experience across Digital Forensics and Incident
          Response , governance, risk and compliance, foundational SOC
          operations, and cybersecurity research. 
        </p>

        <p className="mb-4 text-lg">
        With a background in Forensic Science, I bring strong analytical thinking and attention to detail to investigating and mitigating modern cyber threats.
        </p>

        <p className="mb-4 text-lg">
          My interests extend to the intriguing intersection of Cyber Security
          for Space, where I explore the unique challenges of securing the final
          frontier.
        </p>
      </section>
      {/* Achievements Highlights */}
      </section>

{/* Black Cut Section */}
<section className="bg-black py-24">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {achievements
      .filter((item) => item.showOnAbout)
      .map((item) => (
        <MoreInfoCard key={item.id} {...item} />
      ))}
  </div>
</section>
{/* Career Timeline */}
<CareerTimeline />

</div>

  );
}

export default About;
