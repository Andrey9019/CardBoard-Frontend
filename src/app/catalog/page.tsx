"use client";

import { useEffect, useState } from "react";
import { getAllCategories } from "@/utils";

import Categorires from "@/app/types/allCategories";

import AllGameList from "@/app/components/Catalog/AllGameList";
import FiltersDrawer from "../components/Catalog/FiltersDrawer";
import FiltersStatic from "../components/Catalog/FiltersStatic";
import SortDrawer from "../components/Catalog/SortDrawer";
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

export default function Catalog() {
  const [categories, setCategories] = useState<Categorires[]>([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

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
      <div className="block lg:hidden">
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
        {isFilterOpen && (
          <FiltersDrawer toggleFilter={toggleFilter} categories={categories} />
        )}
        {isSortOpen && !isFilterOpen && <SortDrawer />}
        {!isFilterOpen && <AllGameList />}
      </div>
      <div className="hidden lg:block">
        {/* <> */}
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
            <div className="lg:border-primary lg:active:border-background lg:active:text-background lg:hover:border-card lg:hover:text-card items-center transition duration-200 lg:flex lg:max-w-[228px] lg:min-w-[228px] lg:rounded-lg lg:border lg:py-2 xl:max-w-[270px] xl:min-w-[270px]">
              <button
                onClick={toggleFilter}
                // disabled={isFilterOpen}
                className="flex w-full cursor-pointer justify-center"
              >
                <VscSettings className="h-8 w-8 lg:mr-2.5" />
                <p className="hidden text-2xl font-semibold lg:block">Фільтр</p>
              </button>
            </div>
            <div>
              <button
                onClick={toggleSort}
                // disabled={isSortOpen}
                className="flex"
              >
                <TbSortDescending className="h-8 w-8 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        {/* </> */}

        <div className="flex">
          {isFilterOpen && (
            <FiltersStatic
              toggleFilter={toggleFilter}
              categories={categories}
            />
          )}
          {/* {isSortOpen && !isFilterOpen && <SortDrawer />} */}
          <AllGameList />
        </div>
      </div>
    </section>
  );
}
