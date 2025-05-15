"use client";

import Logo from "./Logo";

import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-primary z-2 rounded-t-3xl">
      <div className="text-secondary container flex flex-col items-center px-9 pt-10 pb-6 lg:flex-row lg:justify-between lg:pt-6 xl:px-16">
        <ul className="mb-8 flex flex-col items-center gap-12 lg:mb-0 lg:flex-row lg:gap-8">
          <li>
            <Link href="/catalog">
              <span className="text-sm font-bold">Каталог</span>
            </Link>
          </li>
          <li>
            <Link href="/exchange-return">
              <span className="text-sm font-bold"> Обмін і повернення</span>
            </Link>
          </li>
          <li>
            <Link href="/policy">
              <span className="text-sm font-bold"> Правова політика</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="text-sm font-bold"> Звʼязатися з нами</span>
            </Link>
          </li>
        </ul>
        <div className="flex max-w-fit flex-col items-center gap-4 lg:items-end">
          <Logo size="extraLarge" />
          <span className="text-xs font-bold">
            ©{currentYear}. All right reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
