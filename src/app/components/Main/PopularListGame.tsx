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

export default function PopularListGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 2;

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
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-9">
        {currentGames.map((game) => (
          <li
            key={game.id}
            className="item-shadow max-w-[196px] rounded-lg bg-white p-4"
          >
            <Link href={`/game/${game.id}`} className="flex flex-col gap-4">
              <button className="ml-auto max-w-max">
                <FaRegHeart className="text-primary h-[18px] w-[18px]" />
              </button>

              <Image src={noImg} alt="Фото гри" />
              <div>
                <p className="mb-2 font-bold">
                  {game.title} {/* обмедення по відображенню строк */}
                </p>
                <p className="">{game.price}</p>
              </div>
              <Button
                type="primary"
                text="Купити"
                className="min-w-full !py-1.5 text-sm uppercase"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-center gap-4">
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
