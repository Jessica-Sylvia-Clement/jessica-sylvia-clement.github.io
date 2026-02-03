import React from "react";
import JessProfile from "../../../assets/JessProfile.jpeg";

function About() {
  return (
    <div
      className="
        flex flex-col items-center gap-6
        bg-gradient-to-t from-green-900 to-green-80
        min-h-screen
        pt-7 md:pt-28
        pb-16
      "
    >
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
          RMIT University, passionate about safeguarding modern digital
          landscapes.
        </p>

        <p className="mb-4 text-lg">
          I bring hands-on experience across Digital Forensics and Incident
          Response (DFIR), governance, risk and compliance, foundational SOC
          operations, and cybersecurity research. Through both academic and
          industry exposure, I have developed a structured, analytical approach
          to identifying, investigating, and mitigating contemporary cyber
          threats.
        </p>

        <p className="mb-4 text-lg">
          With a Bachelor's degree in Forensic Science, I bring a unique blend of
          analytical thinking and attention to detail to cybersecurity. What
          truly fascinates me is the evolving landscape of digital threats and
          the diverse techniques we can employ to counter them.
        </p>

        <p className="mb-4 text-lg">
          My interests extend to the intriguing intersection of Cyber Security
          for Space, where I explore the unique challenges of securing the final
          frontier.
        </p>
      </section>
    </div>
  );
}

export default About;
