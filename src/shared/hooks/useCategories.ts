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
