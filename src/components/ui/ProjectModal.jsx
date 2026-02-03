import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  const images = project?.evidence?.images || [];
  const bullets = project?.evidence?.bullets || [];

  const [index, setIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isImageOpen) setIsImageOpen(false);
        else onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isImageOpen, onClose]);

  if (!project) return null;

  const currentImage = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">

      {/* ================= MODAL CARD ================= */}
      <div
        className="
          relative bg-black border border-green-500/40
          w-[95%] max-w-6xl
          h-[75svh] md:h-[65vh]
          shadow-[0_0_30px_rgba(0,255,120,0.4)]
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 shrink-0">
          <h2 className="text-sm font-semibold text-green-300 truncate">
            {project.title}
          </h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white">
            <FaTimes size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">

          {/* LEFT — IMAGE (FROZEN) */}
          <div className="w-full md:w-1/2 p-4 md:border-r md:border-gray-800 md:flex md:items-center md:justify-center">
            {images.length > 0 ? (
              <div className="w-full">
                <div
                  className="
                    relative flex items-center justify-center
                    bg-black/60 border border-gray-700
                    min-h-[260px] md:min-h-[320px]
                    max-h-[52vh]
                    overflow-hidden cursor-zoom-in
                  "
                  onClick={() => setIsImageOpen(true)}
                >
                  <img
                    src={currentImage?.src ?? currentImage}
                    alt={currentImage?.caption || "Project evidence"}
                    className="max-h-full max-w-full object-contain"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prev();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          next();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>

                {currentImage?.caption && (
                  <p className="mt-2 text-center text-xs text-gray-400 italic">
                    {currentImage.caption}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-500 italic text-sm text-center">
                No evidence screenshots available.
              </p>
            )}
          </div>

          {/* RIGHT — SCROLLABLE */}
          <div className="w-full md:w-1/2 p-4 flex flex-col">

            {/* Mobile title */}
            <h2 className="md:hidden text-lg font-semibold text-green-300 mb-2">
              {project.title}
            </h2>

            <div
              className="
                flex-1
                max-h-[45vh] md:max-h-[50vh]
                bg-neutral-950
                rounded-md
                p-3
                overflow-y-auto
                chat-scroll
              "
            >
              {/* Desktop title */}
              <h2 className="hidden md:block text-2xl font-semibold text-green-300 mb-4">
                {project.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {bullets.length > 0 && (
                <>
                  <h3 className="text-xs uppercase tracking-wide text-green-400 mb-2">
                    Evidence Summary
                  </h3>
                  <ul className="space-y-2 text-sm font-mono text-gray-300 mb-4">
                    {bullets.map((b, i) => (
                      <li key={i}>✔ {b}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-200 px-3 py-1 text-xs border border-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[0.7rem] text-gray-500 italic">
                Screenshots are sanitized and shown for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== FULLSCREEN IMAGE OVERLAY ========== */}
      {isImageOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setIsImageOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <FaTimes size={22} />
          </button>

          <img
            src={currentImage?.src ?? currentImage}
            alt={currentImage?.caption || "Expanded evidence"}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />

          {currentImage?.caption && (
            <p className="absolute bottom-4 text-xs text-gray-400 italic text-center px-4">
              {currentImage.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
