import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_INSTRUCTIONS } from "../../lib/constants";

/* ============================
   RATE LIMIT CONFIG & STORAGE
============================ */
const DAILY_LIMIT = 5;
const STORAGE_KEY = "ai_chat_daily_limit";
const LIMIT_NOTICE_KEY = "ai_chat_limit_notice_shown";
const CHAT_STORAGE_KEY = "ai_chat_history";

/* Cooldown protection */
const RATE_LIMIT_THRESHOLD = 3;
const COOLDOWN_MINUTES = 10;
const COOLDOWN_KEY = "ai_chat_cooldown_until";

const getToday = () => new Date().toISOString().split("T")[0];

const getUsage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { date: getToday(), count: 0 };

  const parsed = JSON.parse(stored);
  if (parsed.date !== getToday()) {
    localStorage.removeItem(LIMIT_NOTICE_KEY);
    return { date: getToday(), count: 0 };
  }
  return parsed;
};

const getTimeUntilReset = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);

  const diffMs = midnight - now;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);

  return `${hours}h ${minutes}m`;
};

const getCooldownTimeLeft = (until) => {
  const diffMs = until - Date.now();
  if (diffMs <= 0) return "0s";

  const minutes = Math.floor(diffMs / (1000 * 60));
  const seconds = Math.floor((diffMs / 1000) % 60);

  return minutes > 0
    ? `${minutes}m ${seconds}s`
    : `${seconds}s`;
};


/* ============================
   COMPONENT
============================ */
function ChatBot() {
  const [message, setMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([]);
  const [timeLeft, setTimeLeft] = useState(getTimeUntilReset());
  const [lockedPulse, setLockedPulse] = useState(false);

  const [usageCount, setUsageCount] = useState(getUsage().count);
  const [rateLimitHits, setRateLimitHits] = useState(0);
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState("");
  const [cooldownUntil, setCooldownUntil] = useState(
    Number(localStorage.getItem(COOLDOWN_KEY)) || 0
  );

  const chatEndRef = useRef(null);
  const isInitialLoad = useRef(true);

  const quickAccessButtons = [
    { label: "About", text: "I’d like to learn more about Jessica and her background." },
    { label: "Skills", text: "What are Jessica’s core skills?" },
    { label: "Work Experience", text: "What work experience does Jessica have?" },
    { label: "Volunteering", text: "What volunteering experience does Jessica have?" },
    { label: "Contact", text: "How can I contact Jessica?" },
  ];

  /* 🔑 SEPARATED STATES */
  const isDailyLimitReached = usageCount >= DAILY_LIMIT;
  const isCooldownActive = Date.now() < cooldownUntil;
  const isLocked = isDailyLimitReached || isCooldownActive;
  const remaining = Math.max(0, DAILY_LIMIT - usageCount);

  /* ============================
     TIMER UPDATE
============================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilReset());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (!isCooldownActive) return;
  
    const interval = setInterval(() => {
      setCooldownTimeLeft(getCooldownTimeLeft(cooldownUntil));
    }, 1000);
  
    return () => clearInterval(interval);
  }, [isCooldownActive, cooldownUntil]);
  
  /* ============================
     CHAT HISTORY RESTORE
============================ */
  useEffect(() => {
    const storedChat = localStorage.getItem(CHAT_STORAGE_KEY);
    if (storedChat) {
      try {
        setChatMessage(JSON.parse(storedChat));
      } catch {
        localStorage.removeItem(CHAT_STORAGE_KEY);
      }
    }
    setUsageCount(getUsage().count);
  }, []);

  /* ============================
     CHAT HISTORY PERSIST
============================ */
  useEffect(() => {
    if (chatMessage.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatMessage));
    }
  }, [chatMessage]);

  /* ============================
     AUTO SCROLL
============================ */
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessage]);

  /* ============================
     LOCK MESSAGE (ONE-TIME)
============================ */
  const rateLimitMessage = {
    role: "ai",
    text:
      "You’ve reached today’s chat limit. To learn more about Jessica, please explore the About Me, Skills, Projects, or Writeups sections using the site menu.",
  };

  /* ============================
     GEMINI API CALL
============================ */
  const callGeminiApi = async (userMessage) => {
    const aiPlaceholder = { role: "ai", text: "Thinking..." };
    setChatMessage((prev) => [...prev, aiPlaceholder]);

    try {
      const API_BASE =
        window.location.hostname.includes("vercel.app")
          ? ""
          : "https://jessica-sylvia-clement-github-io.vercel.app";
    
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "model", parts: [{ text: PORTFOLIO_INSTRUCTIONS }] },
            ...chatMessage.map((msg) => ({
              role: msg.role === "user" ? "user" : "model",
              parts: [{ text: msg.text }],
            })),
            { role: "user", parts: [{ text: userMessage }] },
          ],
        }),
      });
    
    

      if (response.status === 429) throw new Error("RATE_LIMIT");
      if (!response.ok) throw new Error("API_ERROR");

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!botReply) throw new Error("EMPTY_RESPONSE");

      /* SUCCESS → count question */
      const updated = { date: getToday(), count: usageCount + 1 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setUsageCount(updated.count);
      setRateLimitHits(0);

      setChatMessage((prev) => [
        ...prev.slice(0, -1),
        { role: "ai", text: botReply },
      ]);
    } catch (err) {
      if (err.message === "RATE_LIMIT") {
        setRateLimitHits((prev) => {
          const next = prev + 1;
          if (next >= RATE_LIMIT_THRESHOLD) {
            const until = Date.now() + COOLDOWN_MINUTES * 60 * 1000;
            localStorage.setItem(COOLDOWN_KEY, until.toString());
            setCooldownUntil(until);
          }
          return next;
        });
      }

      setChatMessage((prev) => [
        ...prev.slice(0, -1),
        {
          role: "ai",
          text:
            err.message === "RATE_LIMIT"
              ? "I’m getting a lot of requests right now. This question wasn’t counted. Please explore the site while things cool down."
              : "Something went wrong. Please try again shortly.",
        },
      ]);
    }
  };

  /* ============================
     SUBMIT HANDLER
============================ */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (isLocked) {
      setLockedPulse(true);

      if (!localStorage.getItem(LIMIT_NOTICE_KEY) && isDailyLimitReached) {
        setChatMessage((prev) => [...prev, rateLimitMessage]);
        localStorage.setItem(LIMIT_NOTICE_KEY, "true");
      }

      setTimeout(() => setLockedPulse(false), 600);
      return;
    }

    setChatMessage((prev) => [...prev, { role: "user", text: message }]);
    setMessage("");
    callGeminiApi(message);
  };

  /* ============================
     QUICK BUTTON HANDLER
============================ */
  const handleQuickAccessClick = (text) => {
    if (isLocked) return;
    setChatMessage((prev) => [...prev, { role: "user", text }]);
    callGeminiApi(text);
  };

  /* ============================
     RENDER
============================ */
  return (
    <div className="flex flex-col items-center bg-neutral-950 p-4 w-full">
      <div
        className={`bg-neutral-900 w-full md:w-[50vw] lg:w-[40vw]
        max-h-[78vh] mt-6 rounded-lg p-3 flex flex-col border
        ${isLocked ? "border-red-600" : "border-green-800"}
        ${lockedPulse ? "animate-pulse" : ""}`}
      >
        {/* Header */}
        <h3 className="text-center text-md font-semibold text-green-600">
          Ask Jess&apos;s AI
        </h3>

        {/* Status line */}
        <p className="text-xs text-neutral-400 text-center mb-2">
  {isDailyLimitReached && <>Limit reached • Resets in {timeLeft}</>}

  {!isDailyLimitReached && isCooldownActive && (
    <>Temporarily unavailable • Try again in {cooldownTimeLeft}</>
  )}

  {!isDailyLimitReached && !isCooldownActive && (
    <>Questions left today: {remaining}</>
  )}
</p>

        {/* Chat Window */}
        <div className="flex-1 min-h-[45vh] bg-neutral-950 mb-2 rounded-md p-2 overflow-y-auto chat-scroll">
          {chatMessage.map((msg, i) => (
            <div
              key={i}
              className={
                msg.role === "user"
                  ? "flex justify-end text-green-400 mb-1"
                  : "flex justify-start mb-1"
              }
            >
              <p className="max-w-[80%] border border-neutral-800 p-2 rounded-xl text-sm">
                {msg.text}
              </p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
       
        {/* Quick Buttons + Clear */}
        <div className="my-2 flex flex-wrap justify-center gap-2">
          {quickAccessButtons.map((b) => (
            <button
              key={b.label}
              disabled={isLocked}
              onClick={() => handleQuickAccessClick(b.text)}
              className={`px-2 py-1 rounded-md border text-sm ${
                isLocked
                  ? "opacity-40 cursor-not-allowed border-neutral-600"
                  : "border-green-600 text-green-400 hover:bg-neutral-600"
              }`}
            >
              {b.label}
            </button>
          ))}
         
        {/* Clear Chat */}
        <button
          type="button"
          onClick={() => {
            setChatMessage([]);
            localStorage.removeItem(CHAT_STORAGE_KEY);
          }}
          className="px-3 py-1 rounded-md border text-sm border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition"
        >
          Clear
        </button>
        </div>

        {/* Input Row */}

        <form onSubmit={handleSubmit} className="relative mt-2">
          <textarea
            disabled={isLocked}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            placeholder={
              isDailyLimitReached
                ? "Daily limit reached"
                : isCooldownActive
                ? "Temporarily unavailable"
                : "Type your message…"
            }
            className={`w-full resize-none rounded-xl bg-neutral-900 border px-4 py-3 pr-14 text-sm
            ${
              isLocked
                ? "opacity-40 cursor-not-allowed border-red-600"
                : "border-neutral-700 focus:outline-none focus:border-green-600"
            }`}
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={isLocked || !message.trim()}
          className={`absolute right-2 bottom-[0.8rem]
            h-8 w-8 rounded-full flex items-center justify-center transition
            ${
              isLocked || !message.trim()
                ? "bg-neutral-700 text-neutral-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500"
            }`}
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </form>

      {/* Lock helper text */}

        {isDailyLimitReached && (
          <p className="mt-2 text-[11px] text-neutral-400 text-center px-4 leading-relaxed">
            Explore the <span className="text-green-500">About</span>,{" "}
            <span className="text-green-500">Skills</span>,{" "}
            <span className="text-green-500">Projects</span> or{" "}
            <span className="text-green-500">Writeups</span> pages to learn more.
          </p>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
