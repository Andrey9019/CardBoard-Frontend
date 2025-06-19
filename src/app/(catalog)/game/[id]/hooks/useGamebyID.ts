"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { Game } from "@/shared/types/game";
import { getGameById } from "@/shared/utils";

export function useGameByID() {
  const [game, setGame] = useState<Game | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    const getGame = async () => {
      try {
        const numericId = parseInt(id);
        const data = await getGameById(numericId);
        if (!data) {
          setNotFound(true);
        } else {
          setGame(data);
          console.log(data);
        }
      } catch (error) {
        setNotFound(true);
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getGame();
  }, [id]);

  return { game, notFound, isLoading };
}
