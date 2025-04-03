const Button = ({
  text,
  type = "primary",
  onClick,
  icon,
  disabled,
  className,
}) => {
  const baseStyles =
    "px-6 py-3 text-lg xl:text-2xl font-semibold max-w-max rounded-md transition duration-200 flex items-center justify-center gap-2";

  const primaryStyles = `bg-primary text-secondary  hover:bg-[#4A1F89] active:bg-[#2B1047] disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed`;

  const secondaryStyles =
    "border border-primary text-primary hover:border-[#4A1F89] hover:text-[#4A1F89] active:text-[#2B1047] active:border-[#2B1047] disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed";

  const buttonStyles = type === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button
      className={`${baseStyles} ${buttonStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
