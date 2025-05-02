"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getAllGames } from "@/utils";
import Game from "@/app/types/interface";

import Button from "@/components/ui/Button";
import SkeletonCard from "../layout/Skeleton";

import { FaRegHeart } from "react-icons/fa";
import noImg from "../../../../public/images/not-found-page/no-image.png";

export default function PopularListGame() {
  const [games, setGames] = useState<Game[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    const getGames = async () => {
      try {
        const query = searchParams.toString();
        console.log(query);
        const data = await getAllGames(query);
        setGames(data);
      } catch (error) {
        console.log("error getGame", error);
      } finally {
        setIsLoading(false);
      }
    };
    getGames();
  }, [searchParams]);
  return (
    <>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <ul className="flex h-max flex-wrap justify-center gap-x-4 gap-y-9 sm:justify-between xl:gap-x-10">
          {games.map((game) => (
            <li
              key={game.id}
              className="item-shadow min-h-[365px] max-w-[196px] rounded-lg bg-white lg:min-h-[429px] lg:max-w-[228px] xl:min-h-[477px] xl:max-w-[270px]"
            >
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
                <p className="mb-2 text-lg font-bold lg:text-xl">
                  {game.price}
                </p>

                <div className="mt-auto flex w-full flex-col justify-end">
                  <Button
                    type="primary"
                    text="Купити"
                    className="min-w-full !py-1.5 text-sm uppercase lg:!py-3 lg:text-base"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
