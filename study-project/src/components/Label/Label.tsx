import React from "react";

interface CustomLabelProps {
  label: string;
  color?: string;
  onClick?: () => void;
  htmlFor?: string;
  className?: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({
  label,
  color = "white",
  onClick = () => {},
  htmlFor = "first-name",
  className = "",
}) => {
  // Note: Using template literals for dynamic color classes in Tailwind
  // may not work with JIT compilation. Consider using predefined classes.

  return (
    <label
      onClick={onClick}
      htmlFor={htmlFor}
      className={`block text-sm/6 font-semibold ${className} ${
        // For dynamic colors, you might need to map to actual Tailwind classes
        color === "white"
          ? "text-white"
          : color === "black"
          ? "text-black"
          : color === "gray"
          ? "text-gray-600"
          : color === "red"
          ? "text-red-600"
          : color === "blue"
          ? "text-blue-600"
          : color === "green"
          ? "text-green-600"
          : `text-${color}` // Fallback (may not work with Tailwind JIT)
      }`}
    >
      {label}
    </label>
  );
};

export default CustomLabel;
