"use client";
import { getAllCategories } from "@/shared/utils/index";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Categorires from "@/shared/types/allCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
  toggleSearch: () => void;
  isMobileMenuOpen: boolean;
}

export default function MobileMenu({ onClose, toggleSearch }: MobileMenuProps) {
  const [categories, setCategories] = useState<Categorires[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.log("error getGame", error);
      }
    };
    getCategories();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-primary custom-scroll animate-fade-in-rigth-05 text-secondary fixed top-0 left-0 z-999 flex h-full w-full flex-col justify-between overflow-y-auto shadow-xl"
    >
      <div className="container flex items-center justify-between px-9 py-6">
        <Logo size="small" className="w-24" />

        <div className="flex">
          <ul className="flex gap-2">
            <li className={`p-2 transition-all duration-300`}>
              <button onClick={toggleSearch} className="flex">
                <svg className="h-8 w-8">
                  <use href="/sprite.svg#icon-search"></use>
                </svg>
              </button>
            </li>
            <li className="p-2">
              <svg className="h-8 w-8">
                <use href="/sprite.svg#icon-cart"></use>
              </svg>
            </li>
            <li className="hidden p-2 lg:flex">
              <svg className="h-8 w-8">
                <use href="/sprite.svg#icon-person"></use>
              </svg>
            </li>
          </ul>

          <button onClick={onClose} className="ml-2 p-2">
            <svg className="h-8 w-8" fill="currentColor">
              <use href="/sprite.svg#icon-close-black"></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 px-9">
        <p className="pb-9 text-2xl font-bold">Каталог</p>
        <Accordion type="single" collapsible>
          {categories.map((category) => (
            <AccordionItem
              key={category.name}
              value={category.name}
              className="mb-9 max-w-max font-semibold"
            >
              <AccordionTrigger>{category.display_name}</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {category.values.map((value) => (
                    <li key={value.id} className="py-1.5 text-base">
                      <Link
                        href={`/catalog${value.filter_url}`}
                        onClick={onClose}
                        className="pb-1 hover:border-b-1"
                      >
                        {value.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="before:bg-secondary relative w-full pb-9 before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
        <Link
          href={"/exchange-return"}
          className="font-semibold"
          onClick={onClose}
        >
          Обмін і повернення
        </Link>
      </div>

      <div className="px-9 pb-12">
        <p className="py-9 font-semibold">особистий кабінет</p>

        <div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
        <p className="pt-9 font-semibold">звʼязатись з нами</p>
      </div>
    </div>
  );
}
