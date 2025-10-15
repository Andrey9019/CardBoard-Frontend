import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useFilterLogic(toggleFilter: () => void) {
  const router = useRouter();

  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const restoredFilters: { [key: string]: number[] } = {};

    for (const [key, value] of currentParams.entries()) {
      const intValue = parseInt(value, 10);
      if (!restoredFilters[key]) restoredFilters[key] = [];
      restoredFilters[key].push(intValue);
    }

    setSelectedFilters(restoredFilters);
  }, []);

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

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push('/catalog');
    toggleFilter();
  };

  return {
    selectedFilters,
    handleToggle,
    handlleApplyFilters,
    handlleResetFilters,
  };
}
