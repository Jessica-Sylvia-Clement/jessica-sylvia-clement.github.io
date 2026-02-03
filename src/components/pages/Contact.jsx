import React from "react";
import { FaEnvelope, FaLinkedin, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="flex flex-col justify-center gap-8 max-w-4xl w-full">

        {/* LinkedIn Card (Preferred) */}
        <a
          href="https://www.linkedin.com/in/jessica-sylvia-clement"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 bg-black
          border border-green-600/50 rounded-xl p-6 bg-black/40 hover:bg-green-900/10 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all duration-300 cursor-pointer"
        >
          <FaLinkedin className="text-4xl text-[#0072B1] mb-3" />
          <h3 className="text-xl font-semibold mb-1 text-white">LinkedIn</h3>

          {/* Preferred contact hint */}
          <span className="text-xs text-green-400 mb-2">
            Preferred contact
          </span>

          <p className="text-gray-300 text-center text-sm">
            linkedin.com/in/jessica-sylvia-clement
          </p>
        </a>

        {/* Email Card */}
        <a
          href="mailto:jessicasylvia15@gmail.com"
          className="flex flex-col items-center rounded-lg p-6 bg-black
          border border-green-600/50 rounded-xl p-6 bg-black/40 hover:bg-green-900/10 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all duration-300 cursor-pointer"
        >
          <FaEnvelope className="text-4xl text-white mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
          <p className="text-gray-300 text-center text-sm">
            jessicasylvia15@gmail.com
          </p>
        </a>

        {/* Discord Card */}
        <a
          href="https://discord.com/users/763758521174851585"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 bg-black
          border border-green-600/50 rounded-xl p-6 bg-black/40 hover:bg-green-900/10 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all duration-300 cursor-pointer"
        >
          <FaDiscord className="text-5xl text-[#5865F2] mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-white">Discord</h3>
          <p className="text-gray-300 text-center text-sm">
            @jessicasylviaclement
          </p>
        </a>

      </div>
    </div>
  );
}

export default Contact;
