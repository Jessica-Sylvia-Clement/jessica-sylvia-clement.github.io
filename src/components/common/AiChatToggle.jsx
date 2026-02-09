import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function AiChatToggle() {
  const [showNotification, setShowNotification] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const showAndHideNotification = () => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    };

    const initialTimer = setTimeout(showAndHideNotification, 2000);
    intervalRef.current = setInterval(showAndHideNotification, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setShowNotification(false);
  };

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <Link to="/ai_chat" aria-label="AI Chat">
        <button
          onClick={handleButtonClick}
          className="cursor-pointer flex items-center justify-center
                     w-10 h-10 rounded-full
                     transition-all duration-300
                     hover:scale-110"
        >
          <i className="fa-solid fa-robot text-white-500 text-2xl"></i>
        </button>
      </Link>

      {showNotification && (
        <div
          className="absolute top-7 left-1/2 -translate-x-1/2 mt-2
                     text-green-500 bg-black/70
                     text-sm md:text-base
                     px-3 py-1 rounded-full
                     border border-green-500
                     whitespace-nowrap"
        >
          Ask me anything about Jess
        </div>
      )}
    </div>
  );
}

export default AiChatToggle;
