"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getAllGames } from "@/shared/utils";
import Game from "@/shared/types/game";

import SkeletonCard from "../../../components/layout/Skeleton";
import Button from "@/components/ui/Button";
import GameListCard from "./GameListCard";

export default function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});

  const searchParams = useSearchParams();

  useEffect(() => {
    const getGames = async () => {
      try {
        const query = searchParams.toString();
        console.log(query);
        const data = await getAllGames(query);
        setGames(data.results);
        setIsLoading(true);
      } catch (error) {
        console.log("error getGame", error);
      } finally {
        setIsLoading(false);
      }
    };
    getGames();
  }, [searchParams]);

  const router = useRouter();

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push("/catalog");
  };

  if (isLoading) return <SkeletonCard />;
  if (!games.length)
    return (
      <div className="mx-auto flex max-w-[628px] flex-col items-center gap-9 py-9">
        <p className="text-primary text-center font-semibold">
          Oops... <br /> Ми не знайшли нічого за вашим запитом. Але не
          засмучуйтесь — у нас точно є гра, яка вам сподобається. Пограйте з
          фільтрами!
        </p>

        <Button
          as="button"
          variant="primary"
          onClick={handlleResetFilters}
          text=" Скинути фільтри"
        />
      </div>
    );

  return (
    <>
      <ul className="animate-fade-in-left-03 grid grid-cols-[repeat(auto-fit,minmax(196px,1fr))] justify-items-center gap-x-6 gap-y-9 lg:grid-cols-[repeat(auto-fit,minmax(228px,1fr))] lg:gap-x-10 xl:grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
        {games.map((game) => (
          <GameListCard key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
}
