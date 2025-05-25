import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerFilter,
} from "@/components/ui/accordion";

import Button from "@/components/ui/Button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/ckeckbox";
import { useCategories } from "@/shared/hooks/useCategories";
import { useFilterLogic } from "../hooks/useFilterLogic";

interface FiltersStaticProps {
  toggleFilter: () => void;
}

export default function FiltersStatic({ toggleFilter }: FiltersStaticProps) {
  const {
    categories,
    // isLoading, error
  } = useCategories();

  const {
    selectedFilters,
    handleToggle,
    handlleApplyFilters,
    handlleResetFilters,
  } = useFilterLogic(toggleFilter);

  return (
    <div className="item-shadow animate-fade-in-left-03 mr-4 flex h-max max-w-[228px] min-w-[228px] flex-col gap-4 rounded-lg bg-white p-6 xl:mr-10 xl:max-w-[270px] xl:min-w-[270px]">
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
            <AccordionContent>
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
