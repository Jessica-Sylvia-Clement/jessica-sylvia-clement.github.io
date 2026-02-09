// src/components/ui/ToggleList.jsx
import { useState } from "react";

export default function ToggleList({
  title,
  children,
  index = 0,
  defaultOpenIndex = 0,
  textOffset = "0px",
}) {
  const [isOpen, setIsOpen] = useState(index === defaultOpenIndex);

  return (
    <details
      open={isOpen}
      className="my-4 w-full max-w-3xl rounded-md border border-green-500 bg-black text-white shadow-md"
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      {/* Header */}
      <summary
        className="flex cursor-pointer justify-between px-4 py-2 hover:bg-green-900/20 transition rounded-t-md"
        style={{
          minHeight: "3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <div
          className="text-[1.25rem] font-semibold text-green-400 leading-snug text-left"
          style={{
            transform: `translateY(${textOffset})`,
            flex: "1",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {title}
        </div>

        {/* Caret Icon */}
        <span
          className={`
            ml-3 flex items-center flex-shrink-0
            transition-all duration-200
            text-lg
            ${isOpen ? "text-white-400" : "text-green-500"}
          `}
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <i className="fa-solid fa-caret-right" />
        </span>
      </summary>

      {/* Content */}
      <div className="px-4 py-3 text-gray-200 text-sm leading-relaxed bg-black/80 rounded-b-md text-left">
        {children}
      </div>
    </details>
  );
}
