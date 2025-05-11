"use client";

import { useState, useEffect, useRef } from "react";

import Logo from "./Logo";
import SearchBtn from "./SearchBtn";
import MobileMenu from "./MobileMenu";

import Categorires from "@/shared/types/allCategories";

import { getAllCategories } from "@/shared/utils/index";
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

  const [categories, setCategories] = useState<Categorires[]>([]);

  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.log("error getGame", error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        // setIsSearchOpen(false);
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
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`header bg-primary text-secondary relative z-10 px-9 py-6 transition-all xl:px-16 ${
        isSearchOpen || isCatalogOpen ? "rounded-b-none" : "rounded-b-3xl"
      } `}
    >
      <div className="container flex items-center justify-between">
        <div className="hidden xl:flex">
          <button
            onClick={toggleCatalog}
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <span className="text-lg font-bold">Каталог</span>

            <IoIosArrowDown
              className={`h-8 w-8 transform transition-transform duration-300 ${
                isCatalogOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <Logo size="small" className="w-24" toggleCatalog={toggleCatalog} />

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
                <IoIosSearch className="h-8 w-8 cursor-pointer" />
              </button>
            </li>
            <li className="p-2">
              <IoCartOutline className="h-8 w-8 cursor-pointer" />
            </li>
            <li className="hidden p-2 lg:flex">
              <HiOutlineUser className="h-8 w-8 cursor-pointer" />
            </li>
            <li className="p-2 xl:hidden">
              <button className=" " onClick={toggleMobileMenu}>
                <RxHamburgerMenu className="h-8 w-8 cursor-pointer" />
              </button>
            </li>
          </ul>

          {/* {!isMobileMenuOpen && ( */}
          {/* <button className="ml-2 p-2 xl:hidden" onClick={toggleMobileMenu}>
            <RxHamburgerMenu className="h-8 w-8 cursor-pointer" />
          </button> */}
          {/* )} */}

          {isMobileMenuOpen && (
            <MobileMenu
              onClose={() => setIsMobileMenuOpen(false)}
              toggleSearch={toggleSearch}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          )}
        </div>
      </div>

      {isSearchOpen && (
        <SearchBtn
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
      )}

      {isCatalogOpen && (
        <div
          // ref={itemRef}

          className={`bg-primary animate-fade-in-down-03 absolute left-0 z-9 mt-4 w-full rounded-b-3xl px-16 py-8 opacity-0`}
        >
          <div className="container mb-9 grid grid-cols-3 grid-rows-3 gap-9">
            {categories.map((category) => (
              <ul key={category.name} className="mr-2 font-bold">
                <div className="flex gap-2">
                  {category.display_name}
                  <IoIosArrowDown className="h-6 w-6 items-start justify-between text-left" />
                </div>
                {category.values.map((value) => (
                  <li key={value.id} className="py-1.5 text-base">
                    {value.name}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div>
            <div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
          </div>
          <div className="container pt-9 pb-9">
            <Link href={"/"}>
              <p>Обмін і повернення</p>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
