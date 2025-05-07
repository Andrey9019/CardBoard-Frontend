"use client";

import { useEffect, useState } from "react";
import { getAllCategories } from "@/shared/utils";

import Categorires from "@/shared/types/allCategories";

import AllGameList from "@/components/Catalog/AllGameList";
import FiltersDrawer from "../../components/Catalog/FiltersDrawer";
import FiltersStatic from "../../components/Catalog/FiltersStatic";
import SortDrawer from "../../components/Catalog/SortDrawer";
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
// import useClearFilters from "@/shared/hooks/useClearFilters";
import { useRouter } from "next/navigation";

export default function Catalog() {
  const [categories, setCategories] = useState<Categorires[]>([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // хук скидає фільтр
  // const { resetFilters } = useClearFilters();

  const [, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});

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

  const router = useRouter();

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push("/catalog");
  };

  return (
    <section className="mb-12 px-9 pt-12 lg:px-8 lg:pt-16 lg:pb-16 xl:px-[120px]">
      {/* блок видно до 1024px */}
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
              {/* виводиться те ж чого перейшли, якщо перейшли з акцій вбо популярне відображати акції або популярне */}
              {/* виводиться те ж чого перейшли, якщо перейшли з акцій вбо популярне відображати акції або популярне */}
              <div className="text-primary mb-9 flex w-full justify-between">
                <div className="flex">
                  <button
                    onClick={toggleFilter}
                    // disabled={isFilterOpen}
                    className="flex"
                  >
                    <VscSettings className="mr-4 h-8 w-8 cursor-pointer" />
                  </button>
                  <button
                    onClick={handlleResetFilters}
                    className={`border-primary hover:text-card active:border-background active:text-background w-full cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-2 text-xs font-semibold hover:border-card${
                      isFilterOpen ? "flex" : "hidden"
                    } `}
                  >
                    Скинути фільтри
                  </button>
                </div>
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
      {/* блок видно після 1024px */}
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
          {/* виводиться те ж чого перейшли, якщо перейшли з акцій вбо популярне відображати акції або популярне */}
          {/* виводиться те ж чого перейшли, якщо перейшли з акцій вбо популярне відображати акції або популярне */}
          <div className="text-primary mb-9 flex w-full justify-between">
            <div className="flex gap-4 xl:gap-10">
              {/* може кастомні кнопки? */}
              {/* може кастомні кнопки? */}
              {/* може кастомні кнопки? */}
              <button
                onClick={toggleFilter}
                // disabled={isFilterOpen}
                className="lg:border-primary lg:active:border-background lg:active:text-background lg:hover:border-card lg:hover:text-card hidden w-full cursor-pointer items-center justify-center transition duration-200 lg:flex lg:max-w-[228px] lg:min-w-[228px] lg:rounded-lg lg:border lg:py-2 xl:max-w-[270px] xl:min-w-[270px]"
              >
                <VscSettings className="h-8 w-8 lg:mr-2.5" />
                <p className="text-2xl font-semibold">Фільтр</p>
              </button>
              <button
                className={`border-primary animate-fade-in-down-03 hover:text-card hover:border-card active:border-background active:text-background w-full transform cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  isFilterOpen ? "hidden" : "flex"
                } `}
                onClick={handlleResetFilters}
              >
                Скинути фільтри
              </button>
            </div>

            <button
              onClick={toggleSort}
              // disabled={isSortOpen}
              className="flex"
            >
              <TbSortDescending className="h-8 w-8 cursor-pointer" />
            </button>
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
