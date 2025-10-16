import { useQuery } from '@tanstack/react-query';
import type { Categories } from '@/shared/types/allCategories';
import { getAllCategories } from '@/shared/utils/index';

export function useCategories() {
  const { data, isLoading, error } = useQuery<Categories, Error>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  return { categories: data, isLoading, error };
}
