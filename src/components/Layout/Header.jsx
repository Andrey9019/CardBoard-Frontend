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
      className={`header relative bg-primary text-secondary px-9 xl:px-16 py-6 
        ${
          isSearchOpen || isCatalogOpen ? "rounded-b-none" : "rounded-b-3xl"
        }        
        `}
    >
      <div className="flex justify-between items-center">
        <div className="hidden xl:flex">
          <button
            onClick={toggleCatalog}
            className="flex gap-4 justify-between items-center"
          >
            <span className="text-lg font-bold ">Каталог</span>

            <IoIosArrowDown
              className={`w-8 h-8 transform transition-transform duration-300 ${
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
                isSearchOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              <button
                onClick={toggleSearch}
                disabled={isSearchOpen}
                className="flex"
              >
                <IoIosSearch className="w-8 h-8" />
              </button>
            </li>
            <li className="p-2">
              <IoCartOutline className="w-8 h-8 " />
            </li>
            <li className="hidden lg:flex p-2">
              <HiOutlineUser className="w-8 h-8 " />
            </li>
          </ul>

          <button className="xl:hidden ml-4 p-2" onClick={toggleMobileMenu}>
            <RxHamburgerMenu className="w-8 h-8" />
          </button>

          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>

      {isSearchOpen && (
        <div
          ref={itemRef}
          className={`absolute mt-4 left-0 w-full py-4 px-9 z-10 bg-primary rounded-b-3xl `}
        >
          <form className="rounded-xl flex px-4 py-3 items-center border md:max-w-prose mx-auto">
            <div className="flex items-center flex-1">
              <input
                type="text"
                className="flex-1 h-10 border-none outline-none bg-transparent"
                placeholder="Search..."
              />

              <button type="button" onClick={() => setIsSearchOpen(false)}>
                <IoIosSearch className="w-8 h-8" />
              </button>
            </div>
          </form>
        </div>
      )}

      {isCatalogOpen && (
        <div
          className={`absolute mt-4 left-0 w-full py-4 px-9 z-10 bg-primary rounded-b-3xl`}
        >
          <div className="mb-9 grid grid-cols-3 grid-rows-3">
            <ul className="gap-9 ">
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
            <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-secondary "></div>
          </div>
          <div className="pt-9 pb-9">
            <ul className="grid grid-cols-3 gap-9 ">
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
