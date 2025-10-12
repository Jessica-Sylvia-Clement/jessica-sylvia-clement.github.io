import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Contact Cards */}
      <div className="flex flex-col justify-center gap-8 max-w-4xl w-full">
        
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/jessica-sylvia-clement"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 bg-black 
          border border-blue-900/50 hover:border-blue-400/70 
          shadow-[0_0_10px_rgba(0,119,181,0.2)] 
          hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]
          transition-all duration-300"
        >
          <FaLinkedin className="text-4xl text-blue-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-blue-300">LinkedIn</h3>
          <p className="text-gray-300 text-center text-sm">
            linkedin.com/in/jessica-sylvia-clement
          </p>
        </a>

        {/* Email Card */}
        <a
          href="mailto:jessmotha@gmail.com"
          className="flex flex-col items-center rounded-lg p-6 bg-black 
          border border-yellow-700/50 hover:border-yellow-400/70
          shadow-[0_0_10px_rgba(255,215,0,0.15)] 
          hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]
          transition-all duration-300"
        >
          <FaEnvelope className="text-4xl text-yellow-300 mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-200">Email</h3>
          <p className="text-gray-300 text-center text-sm">
            jessmotha@gmail.com
          </p>
        </a>

        {/* Discord Card */}
        <a
          href="https://discord.com/users/763758521174851585"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 bg-black 
          border border-indigo-800/50 hover:border-indigo-400/70
          shadow-[0_0_10px_rgba(114,137,218,0.15)] 
          hover:shadow-[0_0_15px_rgba(114,137,218,0.4)]
          transition-all duration-300"
        >
          <FaDiscord className="text-4xl text-[#7289da] mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-[#a9b4fa]">Discord</h3>
          <p className="text-gray-300 text-center text-sm">
            @jessicasylviaclement
          </p>
        </a>

        {/* GitHub Card (optional) */}
        {/* 
        <a
          href="https://github.com/Jessica-Sylvia-Clement"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 bg-black 
          border border-gray-700/50 hover:border-gray-400/70
          shadow-[0_0_10px_rgba(255,255,255,0.1)] 
          hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
          transition-all duration-300"
        >
          <FaGithub className="text-4xl text-white mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-gray-200">GitHub</h3>
          <p className="text-gray-300 text-center text-sm">
            github.com/Jessica-Sylvia-Clement
          </p>
        </a>
        */}
      </div>
    </div>
  );
}

export default Contact;
