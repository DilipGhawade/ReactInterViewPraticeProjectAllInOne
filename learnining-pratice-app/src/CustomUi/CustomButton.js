const CustomButton = ({
  onClick,
  btnText = "",
  type = "button",
  disabled = false,
  loading = false,
  className = "block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
  marginTop = "", // Added margin props with empty defaults
  marginBottom = "",
  marginLeft = "",
  marginRight = "",
  children,
  ...rest
}) => {
  const combinedClasses = `
    ${className}
    ${marginTop}
    ${marginBottom}
    ${marginLeft}
    ${marginRight}
  `
    .trim()
    .replace(/\s+/g, " ");
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children || btnText
      )}
    </button>
  );
};

export default CustomButton;
