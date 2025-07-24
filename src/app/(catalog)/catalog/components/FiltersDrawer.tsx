import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerFilter,
} from "@/components/ui/accordion";

import Button from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/ckeckbox";
// import { useCategories } from "@/shared/hooks/useCategories";
import { useFilterLogic } from "../hooks/useFilterLogic";
import { Category } from "@/shared/types/allCategories";

interface FiltersDrawerProps {
  toggleFilter: () => void;
  categories: Category[];
}

export default function FiltersDrawer({
  toggleFilter,
  categories,
}: FiltersDrawerProps) {
  // const { data: categories = [], isLoading, error } = useCategories();

  const {
    selectedFilters,
    handleToggle,
    handlleApplyFilters,
    handlleResetFilters,
  } = useFilterLogic(toggleFilter);

  return (
    <div className="animate-fade-in-left-03 flex max-w-[408px] flex-col gap-4 rounded-lg bg-white p-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Фільтр</p>
        <button onClick={toggleFilter} className="">
          <svg className="h-6 w-6">
            <use href="/icon/sprite.svg#icon-close-black"></use>
          </svg>
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
                    <label
                      htmlFor={`filter-${category.name}-${value.id}`}
                      className="text-base"
                    >
                      {value.name}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        as="button"
        variant="primary"
        text="Застосувати"
        onClick={handlleApplyFilters}
        className="min-w-full"
      />
      <Button
        as="button"
        variant="secondary"
        text="Скинути фільтр"
        onClick={handlleResetFilters}
        className="min-w-full !px-3"
      />
    </div>
  );
}
