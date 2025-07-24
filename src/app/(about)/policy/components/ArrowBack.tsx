"use client";

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
      <button
        onClick={() => setMobilePage(true)}
        className="mb-[48px] flex h-[40px] items-center md:hidden"
      >
        <svg height="32" width="32">
          <use href="/icon/sprite.svg#icon-arrow-left"></use>
        </svg>
      </button>
    );
  } else {
    return (
      <div className="mb-[48px] flex h-[40px] items-center md:hidden">
        <Link href="/">
          <svg height="32" width="32">
            <use href="/icon/sprite.svg#icon-arrow-left"></use>
          </svg>
        </Link>
      </div>
    );
  }
}
