"use client";

import { getAllCategories } from "@/shared/utils/index";
import Categorires from "@/shared/types/allCategories";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import SearchBtn from "./SearchBtn";
import Logo from "./Logo";

import CartBtn from "./CartBtn";

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

  const closeAll = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    if (isCatalogOpen) setIsCatalogOpen(false);
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
      <div className="flex items-center justify-between">
        <div className="hidden xl:flex">
          <button
            onClick={toggleCatalog}
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <span className="text-lg font-bold">Каталог</span>

            <svg
              className={`h-8 w-8 transform transition-transform duration-300 ${
                isCatalogOpen ? "rotate-180" : ""
              }`}
            >
              <use href="/sprite.svg#icon-arrow-down"></use>
            </svg>
          </button>
        </div>
        <Logo size="small" className="w-24" closeAll={closeAll} />

        <div className="flex">
          <ul className="flex gap-x-2">
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
                <svg className="h-8 w-8 cursor-pointer">
                  <use href="/sprite.svg#icon-search"></use>
                </svg>
              </button>
            </li>
            <li className="p-2">
              <CartBtn closeAll={closeAll} />
            </li>

            <li className="hidden p-2 lg:flex">
              <svg className="h-8 w-8 cursor-pointer">
                <use href="/sprite.svg#icon-person"></use>
              </svg>
            </li>
            <li className="p-2 xl:hidden">
              <button className=" " onClick={toggleMobileMenu}>
                <svg className="h-8 w-8 cursor-pointer">
                  <use href="/sprite.svg#icon-burger"></use>
                </svg>
              </button>
            </li>
          </ul>

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
                  <p> {category.display_name}</p>
                  <svg className="h-6 w-6 items-start justify-between text-left">
                    <use href="/sprite.svg#icon-arrow-down"></use>
                  </svg>
                </div>
                {category.values.map((value) => (
                  <li key={value.id} className="py-1.5 text-base">
                    <Link
                      href={`/catalog${value.filter_url}`}
                      onClick={toggleCatalog}
                      className="pb-1 hover:border-b-1"
                    >
                      {value.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div>
            <div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
          </div>
          <div className="container pt-9 pb-9">
            <Link
              href={"/exchange-return"}
              onClick={toggleCatalog}
              className="pb-1 hover:border-b-1"
            >
              Обмін і повернення
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
