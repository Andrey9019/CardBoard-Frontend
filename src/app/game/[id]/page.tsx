"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Game from "@/shared/types/game";
import { getGameById } from "@/shared/utils/index";

import RecommendationsList from "@/app/(main)/components/RecommendationsList";
import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import GameHeader from "./components/GameHeader";
import GameDetails from "./components/GameDetails";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";

export default function GamePage() {
  const [game, setGame] = useState<Game | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  console.log("id", id);

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

  if (isLoading) {
    return <Loading />;
  }

  if (notFound) {
    return <NotFound />;
  }

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
