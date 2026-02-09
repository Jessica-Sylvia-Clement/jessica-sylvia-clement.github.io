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
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <Link to="/ai_chat" aria-label="AI Chat">
        <button
          onClick={handleButtonClick}
          className="w-12 h-12 flex items-center justify-center
                     rounded-full bg-black border border-green-600
                     cursor-pointer transition-all duration-300
                     hover:scale-110 hover:border-green-500"
        >
          <i className="fa-solid fa-robot text-green-500 text-xl"></i>
        </button>
      </Link>

      {showNotification && (
        <div
          className="absolute bottom-14 right-0
                     text-green-500 bg-black/80
                     text-sm px-3 py-1 rounded-lg
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
