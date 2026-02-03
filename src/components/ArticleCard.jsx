import React from "react";
import { Link } from "react-router-dom";


function ArticleCard({ title, image, summary, link, internal = false }) {
  const Wrapper = internal ? Link : "a";

  return (
    <Wrapper
      to={internal ? link : undefined}
      href={!internal ? link : undefined}
      target={!internal ? "_blank" : undefined}
      rel={!internal ? "noopener noreferrer" : undefined}
      className="border border-green-600/50 rounded-xl p-6 bg-black/40 hover:bg-green-900/10 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all duration-300 cursor-pointer"
    >
      {image && <img src={image} alt={title} className="h-50 w-full object-cover" />}

      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-xl font-semibold mb-3 text-green-500">{title}</h3>
        <div className="text-gray-300 text-sm space-y-2">{summary}</div>
      </div>
    </Wrapper>
  );
}

export default ArticleCard; 
