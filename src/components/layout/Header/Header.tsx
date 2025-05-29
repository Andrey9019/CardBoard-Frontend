"use client";

import { useState, useEffect } from "react";

import Logo from "../Logo";
import HeaderNav from "./HeaderNav";
import SearchDropdown from "./SearchDropdown";
import CatalogDropdown from "./CatalogDropdown";

interface HeaderProps {
  hasCart?: boolean;
}

export default function Header({ hasCart = true }: HeaderProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCatalog = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setIsCatalogOpen(!isCatalogOpen);
  };

  const closeAll = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    if (isCatalogOpen) setIsCatalogOpen(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`bg-primary text-secondary relative z-10 px-9 py-6 transition-all xl:px-16 ${
        isSearchOpen || isCatalogOpen ? "rounded-b-none" : "rounded-b-3xl"
      } `}
    >
      <div className="container flex items-center justify-between">
        {/* Кнопка каталог */}
        <button
          onClick={toggleCatalog}
          className="hidden cursor-pointer items-center justify-between gap-4 xl:flex"
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

        {/* Логотип */}
        <Logo size="small" className="w-24" closeAll={closeAll} />

        {/* Навігація : пошук, кошик, моб. меню */}
        <HeaderNav
          isCatalogOpen={isCatalogOpen}
          isSearchOpen={isSearchOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsCatalogOpen={setIsCatalogOpen}
          setIsSearchOpen={setIsSearchOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          closeAll={closeAll}
          hasCart={hasCart}
        />
      </div>

      {isSearchOpen && (
        <SearchDropdown
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
      )}

      {isCatalogOpen && <CatalogDropdown toggleCatalog={toggleCatalog} />}
    </header>
  );
}
