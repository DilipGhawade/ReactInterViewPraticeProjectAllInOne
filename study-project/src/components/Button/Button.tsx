import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  btnText?: string; // Optional text prop if you want both children and btnText
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  disabled = false,
  type = "button", // Default to "button" instead of "submit"
  btnText,
  marginTop = "",
  marginBottom = "",
  marginLeft = "",
  marginRight = "",
  className = "",
  ...rest
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses}
    ${disabledClasses}
    ${marginTop}
    ${marginBottom}
    ${marginLeft}
    ${marginRight}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type as "button" | "submit" | "reset"} // Type assertion for HTML spec
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      data-testid="button"
      {...rest}
    >
      {btnText || children}
    </button>
  );
};

export default Button;
