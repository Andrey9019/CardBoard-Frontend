"use client";
import { getAllCategories } from "@/shared/utils/index";

import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      <motion.div
        key="mobileMenu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        ref={containerRef}
        className="bg-primary text-secondary fixed top-0 left-0 z-999 flex h-full w-full flex-col justify-between overflow-y-auto px-9 pt-6 pb-12 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <Logo size="small" className="w-24" />

          <div className="flex">
            <ul className="flex gap-2">
              <li className={`p-2 transition-all duration-300`}>
                <button onClick={toggleSearch} className="flex">
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

            <button onClick={onClose} className="ml-2 p-2">
              <IoCloseOutline className="h-8 w-8" />
            </button>
          </div>
        </div>

        <div className="flex-1 pt-9">
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

        <div>
          <p className="py-9 font-semibold">особистий кабінет</p>

          <div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
          <p className="pt-9 font-semibold">звʼязатись з нами</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
