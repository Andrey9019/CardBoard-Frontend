"use client";

import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

type PolicyMobileProps = {
  setMobilePage: React.Dispatch<React.SetStateAction<boolean>>;
  isMobilePage: boolean;
};

export default function ArrowBack({
  setMobilePage,
  isMobilePage,
}: PolicyMobileProps) {
  if (!isMobilePage) {
    return (
      <button  onClick={() => setMobilePage(true)} className="mb-[48px] flex h-[40px] items-center md:hidden">
        <IoIosArrowBack size={32} style={{ color: "#0B0105" }} />
      </button>
    );
  } else {
    return (
      <div className="mb-[48px] flex h-[40px] items-center md:hidden">
        <Link href="/">
          <IoIosArrowBack size={32} style={{ color: "#0B0105" }} />
        </Link>
      </div>
    );
  }
}
