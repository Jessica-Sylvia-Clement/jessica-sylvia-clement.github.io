// src/components/ui/Heading.jsx
export default function Heading({ level = 1, children }) {
    const sizes = {
      1: "2rem",
      2: "1.75rem",
      3: "1.5rem",
      4: "1.25rem",
    };
  
    const Tag = `h${level}`;
  
    return (
      <Tag style={{ fontSize: sizes[level], fontWeight: "bold", marginTop: "1rem" }}>
        {children}
      </Tag>
    );
  }
  