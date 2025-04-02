import { Link } from "react-router-dom";
import extraLargeLogo from "../../assets/logos/Logo-Extra-Large.svg";
import largeLogo from "../../assets/logos/Logo-Large.svg";
import mediumLogo from "../../assets/logos/Logo-Medium.svg";
import smallLogo from "../../assets/logos/Logo-Small.svg";

const Logo = ({ size = "medium", className = "" }) => {
  const logos = {
    extraLarge: extraLargeLogo,
    large: largeLogo,
    medium: mediumLogo,
    small: smallLogo,
  };

  return (
    <Link to={"/"}>
      <img
        src={logos[size] || smallLogo}
        alt="Logo"
        className={`h-auto ${className}`}
      />
    </Link>
  );
};

export default Logo;
