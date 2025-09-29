// src/components/ui/Quote.jsx
export default function Quote({ children }) {
    return (
      <blockquote
        style={{
          borderLeft: "4px solid #888",
          paddingLeft: "1rem",
          margin: "1rem 0",
          color: "#bbb",
          fontSize: "1rem",
        }}
      >
        {children}
      </blockquote>
    );
  }
  