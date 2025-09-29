import React, { useEffect, useState } from "react";

let confettiId = 0;

const colors = ["#f9c74f", "#90be6d", "#f94144", "#577590", "#43aa8b"];

const generateConfettiPiece = () => ({
  id: confettiId++,
  left: Math.random() * 100 + "%",
  color: colors[Math.floor(Math.random() * colors.length)],
  width: Math.floor(Math.random() * 2) + 2,      // thin ribbons
  height: Math.floor(Math.random() * 20) + 20,   // long strips
  duration: Math.random() * 2 + 3,               // 3s–5s
  rotateDirection: Math.random() > 0.5 ? 1 : -1,
});

const VictoryBox = () => {
  const [confetti, setConfetti] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const interval = setInterval(() => {
      const newPiece = generateConfettiPiece();
      setConfetti((prev) => [...prev, newPiece]);

      setTimeout(() => {
        setConfetti((prev) => prev.filter((c) => c.id !== newPiece.id));
      }, newPiece.duration * 1000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
        color: "#00ff88",
        border: "2px solid rgba(0,255,100,0.6)",
        borderRadius: "8px",
        padding: "2rem 1.5rem 1.5rem",
        fontFamily: "sans-serif",
        marginTop: "2rem",
        boxShadow: "0 0 20px rgba(0,255,100,0.2)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Label tab */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "8px",
          transform: "translateY(-50%)",
          backgroundColor: "#000",
          padding: "0.3rem 0.5rem" ,
          fontSize: "0.75rem",
          fontWeight: "bold",
          color: "#00ff88",
          border: "1px solid rgba(0,255,100,0.6)",
          borderRadius: "6px",
          boxShadow: "0 0 10px rgba(0,255,100,0.4)",
          zIndex: 5, // stays above everything
        }}
      >
        🎉 HOORAY !
      </div>

      {/* Confetti container with overflow hidden */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          borderRadius: "8px",
          zIndex: 0,
        }}
      >
        {confetti.map((c) => (
          <span
            key={c.id}
            style={{
              position: "absolute",
              top: "-40px",
              left: c.left,
              width: c.width,
              height: c.height,
              animation: `fall ${c.duration}s linear forwards`,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: c.color,
                borderRadius: "4px",
                animation: `spin ${c.duration}s linear forwards`,
                transformOrigin: "center",
                transform: "skewX(10deg)",
                animationDirection: c.rotateDirection === 1 ? "normal" : "reverse",
              }}
            />
          </span>
        ))}
      </div>

      {/* Text content */}
      <div
  style={{
    zIndex: 2,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",    // ensures multiline stays centered
  }}
>
  <p
    style={{
      fontSize: "1.1rem",
      marginBottom: "0.75rem",
      maxWidth: "90%",       // keeps text inside box on smaller screens
      wordWrap: "break-word" // prevents overflow
    }}
  >
    Congratulations on making it this far!
  </p>
</div>


      {/* Keyframes */}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(250px);
              opacity: 0;
            }
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg) skewX(10deg);
            }
            100% {
              transform: rotate(360deg) skewX(10deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default VictoryBox;
