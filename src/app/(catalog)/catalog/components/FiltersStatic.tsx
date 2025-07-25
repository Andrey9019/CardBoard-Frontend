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

interface FiltersStaticProps {
  toggleFilter: () => void;
  categories: Category[];
}

export default function FiltersStatic({
  toggleFilter,
  categories,
}: FiltersStaticProps) {
  // const { data: categories = [], isLoading, error } = useCategories();

  const {
    selectedFilters,
    handleToggle,
    handlleApplyFilters,
    handlleResetFilters,
  } = useFilterLogic(toggleFilter);

  // вимагає налаштування

  // if (error) {
  //   return (
  //     <div className="mx-auto flex max-w-[628px] flex-col items-center gap-9 py-9">
  //       <p className="text-primary text-center font-semibold">
  //         Oops... <br /> З запитом сталася помилка. Спробуйте ще раз
  //       </p>
  //       <Button
  //         as="button"
  //         variant="primary"
  //         onClick={toggleFilter}
  //         text="Спробувати ще раз"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="item-shadow animate-fade-in-left-03 mr-4 flex h-max max-w-[228px] min-w-[228px] flex-col gap-4 rounded-lg bg-white p-6 lg:mr-[86px] xl:mr-10 xl:max-w-[270px] xl:min-w-[270px]">
      <Accordion type="multiple">
        {categories.map((category) => (
          <AccordionItem
            key={category.name}
            value={category.name}
            className="mb-4 max-w-max font-semibold"
          >
            <AccordionTriggerFilter className="mb-4">
              {category.display_name || category.name}
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
        variant="primary"
        text="Застосувати"
        onClick={handlleApplyFilters}
        className="min-w-full"
      />
      <Button
        variant="secondary"
        text="Скинути фільтр"
        onClick={handlleResetFilters}
        className="min-w-full !px-3"
      />
    </div>
  );
}
