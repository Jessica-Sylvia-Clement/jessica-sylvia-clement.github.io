// src/components/ui/Callout.jsx
export default function Callout({ children, type = "note" }) {
  const colorStyles = {
    note: {
      border: "rgba(0,255,100,0.6)",
      glow: "0 0 8px rgba(0,255,100,0.4)",
      text: "text-green-300",
      label: "NOTE",
    },
    reminder: {
      border: "rgba(255,200,0,0.7)",
      glow: "0 0 8px rgba(255,200,0,0.4)",
      text: "text-yellow-400",
      label: "REMINDER",
    },
    important: {
      border: "rgba(255,80,80,0.7)",
      glow: "0 0 8px rgba(255,80,80,0.4)",
      text: "text-red-400",
      label: "IMPORTANT",
    },
    funfact: {
      border: "rgba(180,100,255,0.7)",
      glow: "0 0 8px rgba(180,100,255,0.4)",
      text: "text-purple-300",
      label: "FUN FACT",
    },
  };

  const { border, glow, text, label } = colorStyles[type] || colorStyles.note;

  return (
    <div className="relative my-6">
      {/* Floating Label */}
      <span
        className={`absolute -top-3 left-2 flex items-center justify-center px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md bg-black ${text}`}
        style={{
          border: `1px solid ${border}`,
          minWidth: "60px",
          textAlign: "center",
        }}
      >
        {label}
      </span>

      {/* Callout Box */}
      <div
        className={`p-4 rounded-md border ${text} bg-black leading-relaxed text-left`} // ✅ force left align
        style={{
          boxShadow: glow,
          borderColor: border,
          fontSize: "0.9rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}
