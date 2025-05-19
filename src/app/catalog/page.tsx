"use client";

import { Suspense, useEffect, useState } from "react";
import { getAllCategories } from "@/shared/utils";
import { useRouter } from "next/navigation";

import Categorires from "@/shared/types/allCategories";
import AllGameList from "@/components/Catalog/AllGameList";
import FiltersDrawer from "@/components/Catalog/FiltersDrawer";
import FiltersStatic from "@/components/Catalog/FiltersStatic";
import SortDrawer from "@/components/Catalog/SortDrawer";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Button from "@/components/ui/Button";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { TbSortDescending } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";

export default function Catalog() {
  const [categories, setCategories] = useState<Categorires[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [, setSelectedFilters] = useState<{ [key: string]: number[] }>({});

  const router = useRouter();

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push("/catalog");
  };

  const toggleFilter = () => {
    if (isSortOpen) setIsSortOpen(false);
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleSort = () => {
    if (isFilterOpen) setIsFilterOpen(false);
    setIsSortOpen(!isSortOpen);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.log("error getCategories", error);
      }
    };
    getCategories();
  }, []);

  return (
    <section className="mb-12 px-9 pt-12 lg:px-8 lg:pt-16 lg:pb-16 xl:px-[120px]">
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

        <div className="text-primary mb-9 flex w-full items-center justify-between">
          <div className="flex">
            <button onClick={toggleFilter} className="flex">
              <VscSettings className="h-8 w-8 cursor-pointer lg:hidden" />
            </button>

            <Button
              as="button"
              variant="secondary"
              text="Фільтр"
              icon={<VscSettings className="h-8 w-8" />}
              onClick={toggleFilter}
              className="hidden w-full max-w-[228px] min-w-[228px] cursor-pointer items-center justify-center lg:flex lg:h-11 lg:max-w-[228px] lg:min-w-[228px] xl:max-w-[270px] xl:min-w-[270px]"
            />

            <Button
              as="button"
              variant="secondary"
              text="Скинути фільтри"
              onClick={handlleResetFilters}
              className={`ml-4 h-8 border-2 px-4 py-2 !text-xs font-semibold lg:h-11 xl:ml-10 ${
                isFilterOpen ? "flex" : "hidden"
              }`}
            />
          </div>

          <button onClick={toggleSort} className="flex">
            <TbSortDescending className="h-8 w-8 cursor-pointer" />
          </button>
        </div>
      </div>

      {isFilterOpen && (
        <div className="lg:hidden">
          <FiltersDrawer toggleFilter={toggleFilter} categories={categories} />
        </div>
      )}
      {isFilterOpen && (
        <div className="hidden lg:block">
          <FiltersStatic toggleFilter={toggleFilter} categories={categories} />
        </div>
      )}

      {isSortOpen && !isFilterOpen && <SortDrawer />}

      <div className={`${isFilterOpen ? "hidden" : "block"} w-full`}>
        <Suspense>
          <AllGameList />
        </Suspense>
      </div>
    </section>
  );
}
