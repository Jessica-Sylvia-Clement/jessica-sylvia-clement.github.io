// src/components/ui/BulletList.jsx
export default function BulletList({ items }) {
    return (
      <ul style={{ fontSize: "1.0rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  