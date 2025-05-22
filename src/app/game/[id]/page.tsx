"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Game from "@/shared/types/game";
import { getGameById } from "@/shared/utils/index";

import RecommendationsList from "@/app/(main)/components/RecommendationsList";
import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import GameHeader from "./components/GameHeader";
import GameDetails from "./components/GameDetails";

export default function GamePage() {
  const [game, setGame] = useState<Game | null>(null);

  const params = useParams();
  const id = params.id;
  console.log("id", id);

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
    <>
      <BreadcrumbWidgest text1="Каталог" text2={game?.title} link="/catalog" />

      <section className="px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
        <div>
          <h2 className="mb-12 text-2xl font-bold lg:text-4xl xl:mb-16 xl:hidden">
            {game?.title}
          </h2>

          <GameHeader game={game} />

          <GameDetails game={game} />
        </div>
        <div className="mb-12 lg:mb-16">
          <RecommendationsList title="Вас також може зацікавити" />
        </div>
      </section>
    </>
  );
}
