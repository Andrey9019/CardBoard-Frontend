import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header flex justify-between items-center bg-primary text-secondary px-9 py-6 rounded-b-xl">
      <Logo size="small" className="w-24" />
      <nav className="hidden lg:flex">
        <Link to="/">Складність гри</Link>
        <Link to="/">Тривалість гри</Link>
        <Link to="/">Типи гри</Link>
        <Link to="/">Жанр гри</Link>
        <Link to="/">Механіка гри</Link>
        <Link to="/">Аксесуари</Link>
        <Link to="/">Оренда і обмін</Link>
      </nav>
      <div className="flex">
        <ul className="flex text-3xl gap-2">
          <li className="">
            <IoIosSearch />
          </li>
          <li className="">
            <IoCartOutline />
          </li>
          <li className="hidden lg:flex">
            <FaRegUser />
          </li>
        </ul>

        <button
          className="lg:hidden ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <RxHamburgerMenu className="text-3xl" />
        </button>

        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  );
}
