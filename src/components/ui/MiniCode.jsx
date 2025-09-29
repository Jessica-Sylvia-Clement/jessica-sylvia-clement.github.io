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
        margin: "0.2rem 0.3rem 0.2rem 0", // top/bottom margin too
        display: "inline-block", // each pill treated as its own block
        whiteSpace: "nowrap",    // prevents breaking inside a pill
        lineHeight: "1.2",       // gives breathing space when wrapping
      }}
    >
      {children}
    </code>
  );
}
