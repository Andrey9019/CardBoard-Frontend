"use client";

import { Category } from "@/shared/types/allCategories";
import Link from "next/link";
// import { useCategories } from "@/shared/hooks/useCategories";

interface CatalogDropdownProp {
  toggleCatalog: () => void;
  categories: Category[];
}

export default function CatalogDropdown({
  toggleCatalog,
  categories,
}: CatalogDropdownProp) {
  // const { data: categories = [], isLoading, error } = useCategories();

  return (
    <div
      className={`bg-primary animate-fade-in-down-03 absolute left-0 z-9 mt-4 w-full rounded-b-3xl px-16 py-8 opacity-0`}
    >
      <div className="container mb-9 grid grid-cols-3 grid-rows-3 gap-9">
        {categories.map((category) => (
          <ul key={category.name} className="mr-2 font-bold">
            <div className="flex gap-2">
              <p> {category.display_name}</p>
              <svg className="h-6 w-6 items-start justify-between text-left">
                <use href="/sprite.svg#icon-arrow-down"></use>
              </svg>
            </div>
            {category.values.map((value) => (
              <li key={value.id} className="py-1.5 text-base">
                <Link
                  href={`/catalog?${category.name}=${value.id}`}
                  onClick={toggleCatalog}
                  className="pb-1 hover:border-b-1"
                >
                  {value.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div>
        <div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
      </div>
      <div className="container pt-9 pb-9">
        <Link
          href={"/exchange-return"}
          onClick={toggleCatalog}
          className="pb-1 hover:border-b-1"
        >
          Обмін і повернення
        </Link>
      </div>
    </div>
  );
}
