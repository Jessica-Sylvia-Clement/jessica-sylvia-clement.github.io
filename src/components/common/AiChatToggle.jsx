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
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto">
      <Link to="/ai_chat" aria-label="AI Chat">
        <button
          onClick={handleButtonClick}
          className="flex items-center gap-2 px-4 py-2
                     rounded-full bg-black border border-green-600
                     cursor-pointer transition-all duration-300
                     hover:scale-105 hover:border-green-500"
        >
          <i className="fa-solid fa-robot text-green-500 text-lg" />
          <span className="text-green-500 text-sm font-medium">
            Ask me anything about Jess
          </span>
        </button>
      </Link>

      {showNotification && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-2
                     text-green-500 bg-black/80
                     text-sm px-3 py-1 rounded-lg
                     border border-green-500 whitespace-nowrap"
        >
          Ask me anything about Jess
        </div>
      )}
    </div>
  );
}

export default AiChatToggle;
