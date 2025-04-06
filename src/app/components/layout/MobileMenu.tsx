import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

interface MobileMenuProps {
  onClose: () => void;
}

import Logo from "./Logo";

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="bg-primary text-secondary absolute top-0 left-0 h-screen w-full px-9 pt-6 pb-12">
      <div className="flex items-center justify-between">
        <Logo size="small" className="w-24" />

        <div className="flex">
          <ul className="flex gap-4">
            <li className={`p-2 transition-all duration-300`}>
              <button className="flex">
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

          <button onClick={onClose} className="ml-4 p-2">
            <IoCloseOutline className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div>каталог</div>
    </div>
  );
}
