import { useState, useEffect, useRef } from "react";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
// import SearchBtn from "./SearchBtn";

import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setIsCatalogOpen(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, []);

  const toggleSearch = () => {
    if (isCatalogOpen) setIsCatalogOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCatalog = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    setIsCatalogOpen(!isCatalogOpen);
  };

  const toggleMobileMenu = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    if (isCatalogOpen) setIsCatalogOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`header relative z-10 bg-primary px-9 py-6 text-secondary xl:px-16 ${
        isSearchOpen || isCatalogOpen ? "rounded-b-none" : "rounded-b-3xl"
      } `}
    >
      <div className="flex items-center justify-between">
        <div className="hidden xl:flex">
          <button
            onClick={toggleCatalog}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-lg font-bold">Каталог</span>

            <IoIosArrowDown
              className={`h-8 w-8 transform transition-transform duration-300 ${
                isCatalogOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <Logo size="small" className="w-24" />

        <div className="flex">
          <ul className="flex gap-4">
            <li
              className={`p-2 transition-all duration-300 ${
                isSearchOpen ? "scale-90 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <button
                onClick={toggleSearch}
                disabled={isSearchOpen}
                className="flex"
              >
                <IoIosSearch className="h-8 w-8" />
              </button>
            </li>
            <li className="p-2">
              <IoCartOutline className="h-8 w-8" />
            </li>
            <li className="hidden p-2 lg:flex">
              <HiOutlineUser className="h-8 w-8" />
            </li>
          </ul>

          <button className="ml-4 p-2 xl:hidden" onClick={toggleMobileMenu}>
            <RxHamburgerMenu className="h-8 w-8" />
          </button>

          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>

      {isSearchOpen && (
        <div
          ref={itemRef}
          className={`absolute left-0 z-10 mt-4 w-full rounded-b-3xl bg-primary px-9 py-4`}
        >
          <form className="mx-auto flex items-center rounded-xl border px-4 py-3 md:max-w-prose">
            <div className="flex flex-1 items-center">
              <input
                type="text"
                className="h-10 flex-1 border-none bg-transparent outline-none"
                placeholder="Search..."
              />

              <button type="button" onClick={() => setIsSearchOpen(false)}>
                <IoIosSearch className="h-8 w-8" />
              </button>
            </div>
          </form>
        </div>
      )}

      {isCatalogOpen && (
        <div
          className={`absolute left-0 z-10 mt-4 w-full rounded-b-3xl bg-primary px-9 py-4`}
        >
          <div className="mb-9 grid grid-cols-3 grid-rows-3">
            <ul className="gap-9">
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
            <ul>
              <li>null</li>
            </ul>
          </div>
          <div>
            <div className="relative before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-secondary"></div>
          </div>
          <div className="pb-9 pt-9">
            <ul className="grid grid-cols-3 gap-9">
              <Link>
                <li>Обмін і повернення</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
