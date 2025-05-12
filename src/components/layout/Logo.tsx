import Link from "next/link";
import Image from "next/image";

import extraLargeLogo from "@/assets/logos/Logo-Extra-Large.svg";
import largeLogo from "@/assets/logos/Logo-Large.svg";
import mediumLogo from "@/assets/logos/Logo-Medium.svg";
import smallLogo from "@/assets/logos/Logo-Small.svg";

interface LogoProps {
  size?: "extraLarge" | "large" | "medium" | "small";
  className?: string;
  closeAll?: () => void;
}

export default function Logo({
  size = "medium",
  className = "",
  closeAll,
}: LogoProps) {
  const logos = {
    extraLarge: extraLargeLogo,
    large: largeLogo,
    medium: mediumLogo,
    small: smallLogo,
  };

  return (
    <Link href={"/"} onClick={closeAll}>
      <Image
        src={logos[size] || smallLogo}
        alt="Logo"
        className={`h-auto ${className}`}
      />
    </Link>
  );
}
