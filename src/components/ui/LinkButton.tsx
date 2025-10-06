import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = {
	variant: "primary" | "secondary";
	text?: string;
	href: string;
	icon?: React.ReactNode;
	className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton({
	href,
	text,
	variant = "primary",
	icon,
	className = "",
	...rest
}: ButtonProps) {
	const baseStyles =
		"px-6 py-3 text-lg xl:text-2xl rounded-lg font-bold max-w-max transition duration-200 flex items-center justify-center gap-2 cursor-pointer transform transition-all duration-300";

	const primaryStyles = `bg-primary text-secondary  hover:bg-card active:bg-background disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed`;

	const secondaryStyles =
		"border border-primary text-primary hover:border-card hover:text-card active:text-background active:border-background disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed";

	const buttonStyles = variant === "primary" ? primaryStyles : secondaryStyles;

	return (
		<Link
			href={href}
			{...rest}
			className={`${baseStyles} ${buttonStyles} ${className}`}
		>
			{icon && <span>{icon}</span>}
			{text}
		</Link>
	);
}
