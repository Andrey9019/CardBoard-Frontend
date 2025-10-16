import type { Game } from '@/shared/types/game';

export async function getAllGames(query: string): Promise<Game[]> {
  const url = `${process.env.NEXT_PUBLIC_DB_API_BASE_URL}/api/products?${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Failed to fetch games');
  return response.json();
}
