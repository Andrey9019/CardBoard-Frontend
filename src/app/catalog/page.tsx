"use client";

import AllGameList from "@/app/components/Catalog/AllGameList";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { TbSortDescending } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { useState } from "react";
import FiltersDrawer from "../components/Catalog/FiltersDrawer";
import SortDrawer from "../components/Catalog/SortDrawer";

export default function Catalog() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleFilter = () => {
    if (isSortOpen) setIsSortOpen(false);
    setIsFilterOpen(!isFilterOpen);
  };
  const toggleSort = () => {
    if (isFilterOpen) setIsFilterOpen(false);
    setIsSortOpen(!isSortOpen);
  };
  return (
    <section className="px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
      {!isFilterOpen && (
        <>
          <Breadcrumb className="mb-12">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-primary" href="/">
                  <IoHomeOutline />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <IoIosArrowForward className="text-primary" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-bold">
                  Каталог
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col items-center gap-12">
            <p className="text-3xl font-bold">Каталог</p>
            {/* виводиться те ж чого перейшли, якщо перейшли з акцій вбо популярне відображати акції або популярне */}
            <div className="text-primary mb-9 flex w-full justify-between">
              <button
                onClick={toggleFilter}
                // disabled={isFilterOpen}
                className="flex"
              >
                <VscSettings className="h-8 w-8 cursor-pointer" />
              </button>
              <button
                onClick={toggleSort}
                // disabled={isSortOpen}
                className="flex"
              >
                <TbSortDescending className="h-8 w-8 cursor-pointer" />
              </button>
            </div>
          </div>
        </>
      )}
      {isFilterOpen && <FiltersDrawer toggleFilter={toggleFilter} />}
      {isSortOpen && !isFilterOpen && <SortDrawer />}
      {!isFilterOpen && <AllGameList />}
    </section>
  );
}
