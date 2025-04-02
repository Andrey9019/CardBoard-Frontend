import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
// import SearchBtn from "./SearchBtn";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header  bg-primary text-secondary px-9 py-6 rounded-b-3xl">
      <div className="flex justify-between items-center">
        <Logo size="small" className="w-24" />
        {/* <nav className="hidden lg:flex">
        <Link to="/">Складність гри</Link>
        <Link to="/">Тривалість гри</Link>
        <Link to="/">Типи гри</Link>
        <Link to="/">Жанр гри</Link>
        <Link to="/">Механіка гри</Link>
        <Link to="/">Аксесуари</Link>
        <Link to="/">Оренда і обмін</Link>
      </nav> */}
        <div className="flex">
          <ul className="flex gap-4">
            <li
              className={`p-2 transition-all duration-300 ${
                isSearchOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              <button onClick={() => setIsSearchOpen(true)} className="flex">
                <IoIosSearch className="w-8 h-8" />
              </button>
            </li>
            <li className="p-2">
              <IoCartOutline className="w-8 h-8 " />
            </li>
            <li className="hidden lg:flex">
              <FaRegUser />
            </li>
          </ul>

          <button
            className="lg:hidden ml-4 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <RxHamburgerMenu className="w-8 h-8" />
          </button>

          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>

      {isSearchOpen && (
        <div className="mt-12 transition-all duration-900 transform -translate-y-4 opacity-100">
          <form className="rounded-xl flex px-4 py-3 items-center border w-full max-w-md mx-auto ">
            <div className="flex items-center flex-1">
              <input
                type="text"
                className="flex-1 h-10 border-none outline-none bg-transparent"
                placeholder="Search..."
              />

              <button onClick={() => setIsSearchOpen(false)}>
                <IoIosSearch className="w-8 h-8 " />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
