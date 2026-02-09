// src/components/ui/MiniCode.jsx
export default function MiniCode({ children }) {
  return (
    <code
      style={{
        background: "#1e1e1e",
        color: "#ff4d4f",
        padding: "0.2rem 0.4rem",
        borderRadius: "4px",
        fontSize: "0.85rem",
        margin: "0.2rem 0.3rem 0.2rem 0",
        display: "inline",              // allow natural text wrapping
        whiteSpace: "normal",            // allow wrapping
        overflowWrap: "anywhere",        // break long tokens on mobile
        wordBreak: "break-word",         // fallback for older browsers
        lineHeight: "1.3",
        maxWidth: "100%",                // never exceed container
      }}
    >
      {children}
    </code>
  );
}
