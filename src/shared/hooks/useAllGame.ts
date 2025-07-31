import { queryClient } from "@/app/providers/queryClient";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "@/shared/utils";
import { Game } from "@/shared/types/game";

export function useAllGame() {
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const { data, isLoading, error } = useQuery<Game[], Error>({
    queryKey: ["allProducts", query],
    queryFn: () => getAllGames(query),
  });
  const handleRetry = () => {
    queryClient.refetchQueries({ queryKey: ["allProducts", query] });
  };
  return {
    products: data || [],
    isLoading,
    error,
    handleRetry,
  };
}
