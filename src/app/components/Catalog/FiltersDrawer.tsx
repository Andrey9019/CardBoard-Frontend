"use client";

import Categorires from "@/app/types/allCategories";
import Button from "@/components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerFilter,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/ckeckbox";
import { Label } from "@/components/ui/label";
import { getAllCategories } from "@/utils";
import { useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";

interface FiltersDrawerProps {
  toggleFilter: () => void;
}

export default function FiltersDrawer({ toggleFilter }: FiltersDrawerProps) {
  const [categories, setCategories] = useState<Categorires[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});

  const searchParams = new URLSearchParams();

  Object.entries(selectedFilters).forEach(([key, values]) => {
    values.forEach((value) => {
      searchParams.append(key, value.toString());
    });
  });

  const url = `http://localhost:8000/api/games/?${searchParams}`;
  console.log(searchParams);
  console.log(url);

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

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-lg bg-white p-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Фільтр</p>
        <button onClick={toggleFilter} className="">
          <IoCloseOutline className="text-primary h-8 w-8" />
        </button>
      </div>
      <Accordion type="multiple">
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
        onClick={() => {
          console.log(selectedFilters);
        }}
        className=""
      />
    </div>
  );
}
