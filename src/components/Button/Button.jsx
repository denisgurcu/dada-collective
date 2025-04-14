import React, { useState } from "react";
import "./Button.css";

const brandColors = [
  "var(--color-blue)",
  "var(--color-green)",
  "var(--color-red)",
  "var(--color-yellow)",
  "var(--color-pink)",
];

const Button = ({ label, onClick, className = "" }) => {
  const [hoverColor, setHoverColor] = useState("transparent");

  const handleMouseEnter = () => {
    const random = brandColors[Math.floor(Math.random() * brandColors.length)];
    setHoverColor(random);
  };

  const handleMouseLeave = () => {
    setHoverColor("transparent");
  };

  return (
    <button
      className={`dada-button ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: hoverColor,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
