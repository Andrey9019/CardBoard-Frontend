"use client";
import { useState } from "react";

import { getGameById } from "@/utils/api/getGameById";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import Game from "../../types/interface";

export default function GamePage() {
  const params = useParams();
  const id = params.id;
  console.log("id", id);

  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    const getGame = async () => {
      try {
        const numericId = parseInt(id);
        const data = await getGameById(numericId);
        console.log(data);
        setGame(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGame();
  }, [id]);

  return (
    <section>
      <h1>Welcome to Game Page</h1>
      <p>This is the game page content.</p>
      <p>Game ID: {id}</p>
      <p>Game Title: {game?.title}</p>
      <p>{game?.description}</p>
      <p>{game?.difficulty?.name}</p>
      <p>{game?.player_count?.name}</p>
      <p>{game?.age_group?.name}</p>
      <p>{game?.rules_summary}</p>
    </section>
  );
}
