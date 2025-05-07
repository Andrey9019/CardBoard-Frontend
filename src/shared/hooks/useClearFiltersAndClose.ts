// import { useRouter } from "next/navigation";
// import { useState, useCallback } from "react";
// import Categorires from "../types/allCategories";

// interface FiltersStaticProps {
//   toggleFilter: () => void;
//   categories: Categorires[];
// }

// export default function useClearFilters({ toggleFilter }: FiltersStaticProps) {
//   const [, setSelectedFilters] = useState<{
//     [key: string]: number[];
//   }>({});
//   const router = useRouter();

//   const resetFiltersAndClose = useCallback(() => {
//     setSelectedFilters({});
//     router.push("/catalog");
//     toggleFilter();
//   }, [router]);

//   return {
//     resetFiltersAndClose,
//   };
// }
