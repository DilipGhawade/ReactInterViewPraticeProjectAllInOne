import React, { InputHTMLAttributes, FocusEventHandler } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "onBlur"> {
  id?: string;
  name?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  showError?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  onChange,
  value,
  defaultValue,
  autoComplete = "off",
  placeholder = "",
  required = false,
  disabled = false,
  error = "",
  showError = false,
  marginTop = "",
  marginBottom = "",
  marginLeft = "",
  marginRight = "",
  className = "",
  ...rest
}) => {
  // Base classes
  const baseClasses =
    "block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-2 focus:ring-0 transition-colors duration-200";

  // Error state classes
  const errorClasses = showError
    ? "border border-red-500 focus:outline-red-500 bg-red-500/10"
    : "focus:outline-indigo-500";

  // Disabled state classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combine all classes
  const inputClasses = `
    ${baseClasses}
    ${errorClasses}
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
    <div
      className={`${marginTop} ${marginBottom} ${marginLeft} ${marginRight}`}
    >
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={inputClasses}
        {...rest}
      />

      {/* Error message */}
      {showError && error && (
        <p className="mt-1 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
