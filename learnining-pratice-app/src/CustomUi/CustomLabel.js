const CustomLabel = ({ label, color = "white", onClick = () => {} }) => {
  return (
    <label
      onClick={onClick}
      htmlFor="first-name"
      className={`block text-sm/6 font-semibold text-${color}`}
    >
      {label}
    </label>
  );
};

export default CustomLabel;
