"use client";

import { useEffect, useState } from "react";

import noImg from "../../../../public/images/no-image.png";

import { getAllGames } from "@/utils/api/getAllGame";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Game from "@/app/types/interface";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

interface ListGameProp {
  title: string;
}

export default function PopularListGame(title: ListGameProp) {
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1023) setGamesPerPage(4);
      else if (screenWidth > 767) setGamesPerPage(3);
      else if (screenWidth > 479) setGamesPerPage(2);
      else if (screenWidth < 480) setGamesPerPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await getAllGames();
        setGames(data);
      } catch (error) {
        console.log("error getGame", error);
      }
    };
    getGames();
  }, []);
  return (
    <>
      <div className="mb-7 flex justify-between lg:mb-4">
        <p className="text-xl font-semibold lg:text-2xl xl:text-3xl">
          {title.title}
        </p>
        <div className="hidden items-center justify-center gap-4 lg:flex">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-primary transition-transform hover:scale-110 disabled:opacity-50"
          >
            <IoIosArrowBack className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentPage === i + 1
                    ? "bg-primary scale-125 shadow-md"
                    : "hover:bg-primary/50 border-primary border"
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="text-primary transition-transform hover:scale-110 disabled:opacity-50"
          >
            <IoIosArrowForward className="h-5 w-5" />
          </button>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-9 sm:justify-between">
        {currentGames.map((game) => (
          <li
            key={game.id}
            className="item-shadow h-[365px] max-w-[196px] rounded-lg bg-white lg:h-[429px] lg:max-w-[228px]"
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
              <p className="mb-2 text-lg font-bold lg:text-xl">{game.price}</p>

              <div className="mt-auto flex flex-col justify-end">
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
      <div className="mt-7 flex items-center justify-center gap-4 lg:hidden">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-primary transition-transform hover:scale-110 disabled:opacity-50"
        >
          <IoIosArrowBack className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentPage === i + 1
                  ? "bg-primary scale-125 shadow-md"
                  : "hover:bg-primary/50 border-primary border"
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="text-primary transition-transform hover:scale-110 disabled:opacity-50"
        >
          <IoIosArrowForward className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
