"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerFilter,
} from "@/components/ui/accordion";
import Categorires from "@/app/types/allCategories";
import { Checkbox } from "@/components/ui/ckeckbox";
import { Label } from "@/components/ui/label";
import Button from "@/components/ui/Button";

interface FiltersStaticProps {
  toggleFilter: () => void;
  categories: Categorires[];
}

export default function FiltersStatic({
  toggleFilter,
  categories,
}: FiltersStaticProps) {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});
  //   const [openItems, setOpenItems] = useState<string[]>([]);
  //   console.log(openItems);

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const restoredFilters: { [key: string]: number[] } = {};

    for (const [key, value] of currentParams.entries()) {
      const intValue = parseInt(value);
      if (!restoredFilters[key]) restoredFilters[key] = [];
      restoredFilters[key].push(intValue);
    }

    setSelectedFilters(restoredFilters);
    // setOpenItems(Object.keys(restoredFilters));
  }, []);

  const handleToggle = (category: string, value: number) => {
    setSelectedFilters((prevFilters) => {
      const categoryFilters = prevFilters[category] ?? [];
      const updatedFilters = categoryFilters.includes(value)
        ? categoryFilters.filter((v) => v !== value)
        : [...categoryFilters, value];
      return {
        ...prevFilters,
        [category]: updatedFilters,
      };
    });
  };

  const router = useRouter();

  const handlleApplyFilters = () => {
    const searchParams = new URLSearchParams();

    Object.entries(selectedFilters).forEach(([key, values]) => {
      values.forEach((value) => {
        searchParams.append(key, value.toString());
      });
    });
    router.push(`?${searchParams.toString()}`);

    toggleFilter();
  };

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push("/catalog");
    toggleFilter();
  };

  return (
    <div className="item-shadow animate-fade-in-left-03 mr-4 flex h-max max-w-[228px] min-w-[228px] flex-col gap-4 rounded-lg bg-white p-6 xl:mr-10 xl:max-w-[270px] xl:min-w-[270px]">
      <Accordion
        type="multiple"
        //   defaultValue={openItems}
      >
        {categories.map((category) => (
          <AccordionItem
            key={category.name}
            value={category.name}
            className="mb-4 max-w-max font-semibold"
          >
            <AccordionTriggerFilter className="mb-4">
              {category.display_name}
            </AccordionTriggerFilter>
            <AccordionContent className="">
              <ul className="flex flex-col gap-2.5">
                {category.values.map((value) => (
                  <li
                    className="flex items-center gap-6"
                    key={`filter-${category.name}-${value.id}`}
                  >
                    <Checkbox
                      id={`filter-${category.name}-${value.id}`}
                      checked={
                        selectedFilters[category.name]?.includes(value.id) ??
                        false
                      }
                      onCheckedChange={() =>
                        handleToggle(category.name, value.id)
                      }
                      className="h-6 w-6"
                    />
                    <Label
                      htmlFor={`filter-${category.name}-${value.id}`}
                      className="text-base"
                    >
                      {value.name}
                    </Label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        type="primary"
        text="Застосувати"
        onClick={handlleApplyFilters}
        className="min-w-full"
      />
      <Button
        type="secondary"
        text="Скинути фільтр"
        onClick={handlleResetFilters}
        className="min-w-full !px-3"
      />
    </div>
  );
}
