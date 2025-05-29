// import { useRouter } from "next/navigation";
// import { useState, useCallback } from "react";

// export default function useClearFilters() {
//   const [, setSelectedFilters] = useState<{
//     [key: string]: number[];
//   }>({});
//   const router = useRouter();

//   const resetFilters = useCallback(() => {
//     setSelectedFilters({});
//     router.push("/catalog");
//   }, [router]);
//   return {
//     resetFilters,
//   };
// }
