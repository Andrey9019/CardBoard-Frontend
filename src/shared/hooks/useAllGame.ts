import { queryClient } from '@/app/providers/queryClient';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import type { Game } from '@/shared/types/game';
import { getAllGames } from '@/shared/utils';

export function useAllGame() {
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const { data, isLoading, error } = useQuery<Game[], Error>({
    queryKey: ['allProducts', query],
    queryFn: () => getAllGames(query),
    staleTime: 1000 * 60 * 5,
  });
  const handleRetry = () => {
    queryClient.refetchQueries({ queryKey: ['allProducts', query] });
  };
  return {
    products: data || [],
    isLoading,
    error,
    handleRetry,
  };
}
