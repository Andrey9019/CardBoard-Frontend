"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

export default function Header() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setIsCatalogOpen(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, []);

  const toggleSearch = () => {
    if (isCatalogOpen) setIsCatalogOpen(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
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
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`header bg-primary text-secondary relative z-10 px-9 py-6 xl:px-16 ${
        isSearchOpen || isCatalogOpen ? "rounded-b-none" : "rounded-b-3xl"
      } `}
    >
      <div className="container flex items-center justify-between">
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
          <ul className="flex gap-2">
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

          {!isMobileMenuOpen && (
            <button className="ml-2 p-2 xl:hidden" onClick={toggleMobileMenu}>
              <RxHamburgerMenu className="h-8 w-8" />
            </button>
          )}

          <AnimatePresence>
            {isMobileMenuOpen && (
              <MobileMenu
                onClose={() => setIsMobileMenuOpen(false)}
                toggleSearch={toggleSearch}
                isMobileMenuOpen={isMobileMenuOpen}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {isSearchOpen && (
        <div
          ref={itemRef}
          className={`bg-primary animate-fade-in-down-03 absolute left-0 z-10 mt-4 w-full translate-y-[-20px] rounded-b-3xl px-9 py-4 opacity-0`}
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
          className={`bg-primary animate-fade-in-down-03 absolute left-0 z-10 mt-4 w-full translate-y-[-20px] rounded-b-3xl px-9 py-4 opacity-0`}
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
            <div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
          </div>
          <div className="pt-9 pb-9">
            <ul className="grid grid-cols-3 gap-9">
              <Link href={"/"}>
                <li>Обмін і повернення</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
