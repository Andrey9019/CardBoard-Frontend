"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FiltersStatic from "./FiltersStatic";
import FiltersDrawer from "./FiltersDrawer";
import SortDrawer from "./SortDrawer";
import GameList from "./GameList";

import Button from "@/components/ui/Button";

import { cn } from "@/shared/lib/utils";
import { useCategories } from "@/shared/hooks/useCategories";

export default function CatalogBody() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [, setSelectedFilters] = useState<{ [key: string]: number[] }>({});
  const {
    // data:
    categories,
    // = [],
    // error
  } = useCategories();

  const router = useRouter();

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push("/catalog");
  };

  const toggleFilter = () => {
    if (isSortOpen) setIsSortOpen(false);
    setIsFilterOpen(!isFilterOpen);
  };

  // const toggleSort = () => {
  //   if (isFilterOpen) setIsFilterOpen(false);
  //   setIsSortOpen(!isSortOpen);
  // };

  return (
    <section className="mb-12 flex flex-col gap-9 px-9 lg:px-8 xl:px-[120px]">
      <p className="text-center text-3xl font-bold">Каталог</p>
      <div className="text-primary flex w-full items-center justify-between">
        <div className="flex">
          <button onClick={toggleFilter} className="flex">
            <svg className="h-8 w-8 cursor-pointer lg:hidden">
              <use href="/sprite.svg#icon-filters"></use>
            </svg>
          </button>

          <Button
            as="button"
            variant="secondary"
            text="Фільтр"
            icon={
              <svg className="h-8 w-8">
                <use href="/sprite.svg#icon-filters"></use>
              </svg>
            }
            onClick={toggleFilter}
            className="hidden w-full max-w-[228px] min-w-[228px] cursor-pointer items-center justify-center lg:flex lg:h-11 lg:max-w-[228px] lg:min-w-[228px] xl:max-w-[270px] xl:min-w-[270px]"
          />

          <Button
            as="button"
            variant="secondary"
            text="Скинути фільтри"
            onClick={handlleResetFilters}
            className={`ml-4 h-8 border-2 px-4 py-2 !text-xs font-semibold lg:h-11 xl:ml-10 ${
              isFilterOpen ? "hidden" : "flex"
            }`}
          />
        </div>

        {/* <div>
          <button onClick={toggleSort} className="flex">
            <svg className="h-8 w-8 cursor-pointer lg:hidden">
              <use href="/sprite.svg#icon-sort"></use>
            </svg>
          </button>

          <Button
            as="button"
            variant="secondary"
            text="Сортування"
            icon={
              <svg className="text-primary h-8 w-8">
                <use href="/sprite.svg#icon-arrow-down-dark"></use>
              </svg>
            }
            onClick={toggleSort}
            className="hidden w-full max-w-[228px] min-w-[228px] cursor-pointer items-center justify-center lg:flex lg:h-11 lg:max-w-[228px] lg:min-w-[228px] xl:max-w-[270px] xl:min-w-[270px]"
          />
        </div> */}
      </div>

      {isFilterOpen && (
        <div className="lg:hidden">
          <FiltersDrawer categories={categories} toggleFilter={toggleFilter} />
        </div>
      )}

      {isSortOpen && !isFilterOpen && <SortDrawer />}

      <div className={cn("lg:hidden", isFilterOpen && "hidden")}>
        <GameList />
      </div>

      <div className="hidden w-full lg:flex">
        {isFilterOpen && (
          <FiltersStatic
            categories={categories}
            // error={error}
            toggleFilter={toggleFilter}
          />
        )}
        <div className="flex-1">
          <GameList />
        </div>
      </div>
    </section>
  );
}
