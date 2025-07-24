import MobileMenu from "./MobileMenu";
import CartTooltip from "./CartTooltip";
import { Category } from "@/shared/types/allCategories";

interface HeaderNavProp {
  isCatalogOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;

  categories: Category[];

  hasCart?: boolean;

  setIsCatalogOpen: (value: boolean) => void;
  setIsSearchOpen: (value: boolean) => void;
  setIsMobileMenuOpen: (value: boolean) => void;

  closeAll: () => void;
}

export default function HeaderNav({
  isCatalogOpen,
  isSearchOpen,
  isMobileMenuOpen,

  hasCart = true,

  setIsCatalogOpen,
  setIsSearchOpen,
  setIsMobileMenuOpen,

  closeAll,
  categories,
}: HeaderNavProp) {
  const toggleSearch = () => {
    if (isCatalogOpen) setIsCatalogOpen(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    if (isCatalogOpen) setIsCatalogOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-12">
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
              <use href="/icon/sprite.svg#icon-search"></use>
            </svg>
          </button>
        </li>

        {hasCart && (
          <li className="p-2">
            <CartTooltip closeAll={closeAll} />
          </li>
        )}

        {/* <li className="hidden p-2 lg:flex">
          <svg className="h-8 w-8 cursor-pointer">
            <use href="/icon/sprite.svg#icon-person"></use>
          </svg>
        </li> */}

        <li className="p-2 xl:hidden">
          <button className=" " onClick={toggleMobileMenu}>
            <svg className="h-8 w-8 cursor-pointer">
              <use href="/icon/sprite.svg#icon-burger"></use>
            </svg>
          </button>
        </li>
      </ul>

      {isMobileMenuOpen && (
        <MobileMenu
          closeAll={closeAll}
          onClose={() => setIsMobileMenuOpen(false)}
          toggleSearch={toggleSearch}
          isMobileMenuOpen={isMobileMenuOpen}
          categories={categories}
        />
      )}
    </div>
  );
}
