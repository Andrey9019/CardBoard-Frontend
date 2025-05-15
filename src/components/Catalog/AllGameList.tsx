"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getAllGames } from "@/shared/utils";
import Game from "@/shared/types/game";

import Button from "@/components/ui/Button";
import SkeletonCard from "../layout/Skeleton";

import { FaRegHeart } from "react-icons/fa";

import noImg from "../../../public/images/not-found-page/no-image.png";
// import useClearFilters from "@/shared/hooks/useClearFilters";
import { useRouter } from "next/navigation";
// import GameCard from "../Game/GameCard";

export default function PopularListGame() {
  const [games, setGames] = useState<Game[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});

  // хук скидає фільтр
  // const { resetFilters } = useClearFilters();

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
      {/* {isLoading ? (
        <SkeletonCard />
      ) : ( */}
      <ul className="flex h-max flex-wrap justify-center gap-x-4 gap-y-9 sm:justify-between xl:gap-x-10">
        {games.map((game) => (
          <li
            key={game.id}
            className="item-shadow min-h-[365px] max-w-[196px] rounded-lg bg-white lg:min-h-[429px] lg:max-w-[228px] xl:min-h-[477px] xl:max-w-[270px]"
          >
            {/* <GameCard game={game} /> */}
            <Link
              href={`/game/${game.id}`}
              className="flex h-full flex-col justify-between p-4"
            >
              <div className="flex justify-end">
                <button className="max-w-max">
                  <FaRegHeart className="text-primary h-[18px] w-[18px]" />
                </button>
              </div>

              <Image
                className="my-4 flex justify-center"
                src={noImg}
                alt="Фото гри"
              />

              <p className="mb-2 line-clamp-2 leading-snug font-bold lg:text-lg">
                {game.title}
              </p>
              <p className="mb-2 text-lg font-bold lg:text-xl">{game.price}</p>

              <div className="mt-auto flex w-full flex-col justify-end">
                <Button
                  as="button"
                  variant="primary"
                  text="Купити"
                  className="min-w-full !py-1.5 text-sm uppercase lg:!py-3 lg:text-base"
                  onClick={() => {}}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* )} */}
    </>
  );
}
