import { useSearchParams } from "next/navigation";

import { getAllGames } from "@/shared/utils";
import { Game } from "@/shared/types/game";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAllGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const getGames = async () => {
      try {
        const query = searchParams.toString();
        console.log(query);
        const data = await getAllGames(query);
        setGames(data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError("Failed to load games. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    getGames();
  }, [searchParams]);

  const handleRetry = () => {
    router.refresh();
  };

  return { games, isLoading, error, handleRetry };
}
