"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getAllCategories } from "@/shared/utils";
import Categorires from "@/shared/types/allCategories";

import FiltersStatic from "@/app/catalog/components/FiltersStatic";
import FiltersDrawer from "@/app/catalog/components/FiltersDrawer";
import SortDrawer from "@/app/catalog/components/SortDrawer";
import Button from "@/components/ui/Button";

import { TbSortDescending } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";

interface CatalogControlsProps {
  setIsFilterOpen: (value: boolean) => void;
  isFilterOpen: boolean;
}

export default function CatalogControls({
  setIsFilterOpen,
  isFilterOpen,
}: CatalogControlsProps) {
  const [categories, setCategories] = useState<Categorires[]>([]);
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
    <section className="px-9 lg:px-8 xl:px-[120px]">
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
    </section>
  );
}
