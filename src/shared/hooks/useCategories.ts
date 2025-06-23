import { useEffect, useState } from "react";
import { Categories } from "@/shared/types/allCategories";
import { getAllCategories } from "@/shared/utils/index";

export function useCategories() {
  const [categories, setCategories] = useState<Categories>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCategories();
        setCategories(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}

// import { useQuery } from "@tanstack/react-query";
// import { Categories } from "@/shared/types/allCategories";
// import { getAllCategories } from "@/shared/utils";

// export function useCategories() {
//   return useQuery<Categories, Error>({
//     queryKey: ["categories"],
//     queryFn: getAllCategories,
//     staleTime: 5 * 60 * 1000,
//     retry: 1,
//   });
// }
