"use client";

import { getAllCategories } from "@/shared/utils/index";
import Categorires from "@/shared/types/allCategories";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import SearchBtn from "./SearchBtn";
import Logo from "./Logo";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

import noImg from "../../../public/images/not-found-page/no-image.png";
import { useCartStore } from "@/stores/cartStore";
import Button from "../ui/Button";

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.total);
  const countTotal = useCartStore((state) => state.countTotal);

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

  useEffect(() => {
    countTotal();
  }, [cart]);

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
        <Logo size="small" className="w-24" closeAll={closeAll} />

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
              <HoverCard openDelay={0}>
                <HoverCardTrigger asChild>
                  <Link href="/cart" onClick={closeAll}>
                    <IoCartOutline className="h-8 w-8 cursor-pointer" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="bg-secondary text-black">
                    {cart.length != 0 ? (
                      <div className="justify-between gap-4 lg:flex">
                        <ul className="flex flex-col items-center gap-5 px-6 lg:gap-4 lg:px-0">
                          {cart.map((game) => (
                            <li
                              key={game.id}
                              className="item-shadow lg: flex rounded-lg bg-white px-4 py-3"
                            >
                              <Image
                                // className="mr-4 h-[120px] lg:h-[164px] lg:w-[164px] xl:h-[175px] xl:w-[175px]"
                                width={120}
                                src={noImg}
                                alt="Фото гри"
                              />
                              <div className="flex flex-1 flex-col justify-between">
                                <span>{game.price} грн</span>

                                <div className="flex justify-between">
                                  <p className="">Всього:</p>
                                  <span className="font-semibold">
                                    {game.price * game.amount} грн
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>

                        <div className="mx-2 flex flex-1 flex-col gap-4 pt-7 lg:mx-6 lg:border-t-[1px] lg:border-gray-400">
                          <div className="flex justify-between">
                            <p>Всього:</p>
                            <span>{total}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3">
                        <p className="text-primary text-center font-semibold">
                          Кошик пустий, як поле перед першим ходом!
                          <br /> Зроби перший хід — обери свою гру!
                        </p>
                        <Button
                          as="link"
                          href="/catalog"
                          text={"Перейти до каталогу"}
                          variant="primary"
                          className="text-sm"
                        />
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
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
                  <p> {category.display_name}</p>
                  <IoIosArrowDown className="h-6 w-6 items-start justify-between text-left" />
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
