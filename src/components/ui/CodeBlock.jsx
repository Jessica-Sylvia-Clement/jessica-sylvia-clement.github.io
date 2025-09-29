// src/components/ui/CodeBlock.jsx
export default function CodeBlock({ code, copyable = false }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);

    const copiedBox = document.createElement("div");
    copiedBox.textContent = "✔ Copied";
    copiedBox.style.position = "fixed";
    copiedBox.style.bottom = "20px";
    copiedBox.style.right = "20px";
    copiedBox.style.background = "#2a2a2a";
    copiedBox.style.color = "#fff";
    copiedBox.style.padding = "8px 12px";
    copiedBox.style.borderRadius = "6px";
    copiedBox.style.fontSize = "0.9rem";
    copiedBox.style.boxShadow = "0px 2px 6px rgba(0,0,0,0.3)";
    copiedBox.style.zIndex = "9999";
    copiedBox.style.opacity = "0";
    copiedBox.style.transition = "opacity 0.3s ease";

    document.body.appendChild(copiedBox);
    requestAnimationFrame(() => (copiedBox.style.opacity = "1"));

    setTimeout(() => {
      copiedBox.style.opacity = "0";
      setTimeout(() => copiedBox.remove(), 300);
    }, 1500);
  };

  // ✅ Keyword highlighting
  const highlightedCode = code.replace(
    /\b(sudo|apt|python|docker|nmap|gobuster)\b/g,
    (match) => {
      let color = "#00ff9d";
      if (match === "sudo") color = "#ff5555";
      if (match === "apt") color = "#ffcc00";
      if (match === "python") color = "#4fc3f7";
      if (match === "docker") color = "#1da1f2";
      if (match === "nmap") color = "#ff79c6";
      if (match === "gobuster") color = "#ffa500";

      return `<span style="color: ${color}; font-weight: bold;">${match}</span>`;
    }
  );

  return (
    <div style={{ position: "relative", marginTop: "1rem" }}>
      {copyable && (
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "0.5rem",
            padding: "0.2rem 0.5rem",
            fontSize: "0.7rem",
            background: "#2a2a2a",
            color: "#fff",
            border: "1px solid #444",
            borderRadius: "4px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          Copy
        </button>
      )}

      {/* Code box */}
      <pre
        style={{
          background: "#1e1e1e",
          color: "#dcdcdc",
          padding: "1rem",
          paddingRight: "4rem", // ✅ reserve space for copy button
          borderRadius: "6px",
          fontSize: "0.9rem", // ✅ smaller font
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          whiteSpace: "pre-wrap",
          textAlign: "left", // ✅ force left-align
        }}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
