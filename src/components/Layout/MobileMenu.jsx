import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

import Logo from "./Logo";

export default function MobileMenu({ onClose }) {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-primary text-secondary px-9 pt-6 pb-12">
      <div className="flex justify-between items-center ">
        <Logo size="small" className="w-24" />

        <div className="flex">
          <ul className="flex gap-4">
            <li className={`p-2 transition-all duration-300 `}>
              <button className="flex">
                <IoIosSearch className="w-8 h-8" />
              </button>
            </li>
            <li className="p-2">
              <IoCartOutline className="w-8 h-8 " />
            </li>
            <li className="hidden lg:flex p-2">
              <HiOutlineUser className="w-8 h-8 " />
            </li>
          </ul>

          <button onClick={onClose} className=" ml-4 p-2">
            <IoCloseOutline className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div>каталог</div>
    </div>
  );
}
