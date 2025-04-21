"use client";

import { useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  onClose: () => void;
  toggleSearch: () => void;
  isMobileMenuOpen: boolean;
}

export default function MobileMenu({ onClose, toggleSearch }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
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
        className="bg-primary text-secondary fixed top-0 left-0 z-[99] h-full w-full overflow-y-auto px-9 pt-6 pb-12 shadow-xl"
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

        <div className="mt-12">Каталог, навігація, контент</div>
      </motion.div>
    </AnimatePresence>
  );
}
