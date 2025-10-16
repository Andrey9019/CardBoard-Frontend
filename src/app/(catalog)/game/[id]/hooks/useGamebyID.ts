import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import type { Game } from '@/shared/types/game';
import { getGameById } from '@/shared/utils';

export function useGameByID() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useQuery<Game | null, Error>({
    queryKey: ['product', id],
    queryFn: () =>
      typeof id === 'string' ? getGameById(parseInt(id, 10)) : null,
  });

  const notFound = !isLoading && !data && !error;

  return { product: data, notFound, isLoading };
}
