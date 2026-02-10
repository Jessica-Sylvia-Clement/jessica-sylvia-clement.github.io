import React, { useState } from "react";

const levelColors = {
  Strong: "text-green-400",
  Moderate: "text-blue-400",
  Learning: "text-yellow-400",
};


function SkillCard({
  title,
  icon: Icon,
  items,
  shadowColor,
  badgeStyle = false,
}) {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skill) => {
    setActiveSkill(
      activeSkill?.name === skill?.name ? null : skill
    );
  };

  return (
    <div
      className="flex flex-col justify-center items-center
                 border border-green-700 rounded-lg p-6
                 shadow-md transition-transform duration-300"
    >
      {/* Icon */}
      {Icon && (
        <Icon
          className="text-5xl mb-4"
          style={{ color: shadowColor }}
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-green-500 mb-4 text-center">
        {title}
      </h3>

      {/* Items */}
      {badgeStyle ? (
        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item, index) => {
            const isObject = typeof item !== "string";
            const isActive = activeSkill?.name === item?.name;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => isObject && setActiveSkill(item)}
                onMouseLeave={() => isObject && setActiveSkill(null)}
                onClick={() => isObject && toggleSkill(item)}
              >
                {/* Badge */}
                <span
                  className="bg-gray-800 text-gray-200 text-xs sm:text-sm
                             px-3 py-1 rounded-full border border-gray-700
                             cursor-pointer select-none"
                >
                  {isObject ? item.name : item}
                </span>

                {/* Tooltip (only for skills with levels) */}
                {isObject && isActive && (
  <div
    className="absolute left-1/2 -translate-x-1/2 top-[135%]
               bg-black border border-green-500
               rounded-md px-3 py-1.5
               text-xs whitespace-nowrap
               shadow-md shadow-green-500/30
               z-50 animate-fadeIn"
  >
    {/* Arrow */}
    <div
      className="absolute -top-2 left-1/2 -translate-x-1/2
                 w-0 h-0
                 border-l-8 border-l-transparent
                 border-r-8 border-r-transparent
                 border-b-8 border-b-green-500"
    />
    <div
      className="absolute -top-[6px] left-1/2 -translate-x-1/2
                 w-0 h-0
                 border-l-6 border-l-transparent
                 border-r-6 border-r-transparent
                 border-b-6 border-b-black"
    />

    {/* Text */}
    <span className="text-gray-300">
      Level:{" "}
      <span
        className={`font-semibold ${
          levelColors[item.level]
        }`}
      >
        {item.level}
      </span>
    </span>
  </div>
)}
 


              </div>
            );
          })}
        </div>
      ) : (
        <ul className="text-gray-300 text-sm text-center space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              {typeof item === "string" ? item : item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkillCard;
