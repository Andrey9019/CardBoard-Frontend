interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  text,
  type = "primary",
  onClick,
  icon,
  disabled,
  className,
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 text-lg xl:text-2xl rounded-md font-semibold max-w-max transition duration-200 flex items-center justify-center gap-2";

  const primaryStyles = `bg-primary text-secondary  hover:bg-card active:bg-background disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed`;

  const secondaryStyles =
    "border border-primary text-primary hover:border-card hover:text-card active:text-background active:border-background disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed";

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
