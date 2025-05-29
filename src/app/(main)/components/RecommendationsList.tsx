"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

import noImg from "../../../../public/images/not-found-page/no-image.png";
import SkeletonCard from "@/components/layout/Skeleton";
import { useAllGame } from "@/shared/hooks/useAllGame";

interface ListGameProp {
  title: string;
}

export default function RecommendationsList(title: ListGameProp) {
  const { games, isLoading, error, handleRetry } = useAllGame();

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

  return (
    <>
      <div className="mb-7 flex justify-between lg:mb-4 xl:mb-12">
        <p className="text-xl font-semibold lg:text-2xl xl:text-3xl">
          {title.title}
        </p>
        <div className="hidden items-center justify-center gap-4 lg:flex">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-primary transition-transform hover:scale-110 disabled:opacity-50"
          >
            <svg className="h-5 w-5 text-[#2B1047]">
              <use href="/sprite.svg#icon-arrow-left"></use>
            </svg>
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
            <svg className="h-5 w-5 text-[#2B1047]">
              <use href="/sprite.svg#icon-arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>

      {/* якщо помилка то... */}
      {error && (
        <div className="mx-auto flex min-h-[365px] max-w-[628px] flex-col items-center justify-center gap-9 py-9 lg:min-h-[429px] xl:min-h-[477px]">
          <p className="text-primary text-center font-semibold">
            Oops... <br /> З запитом сталася помилка. Спробуйте ще раз
          </p>
          <Button
            as="button"
            variant="primary"
            onClick={handleRetry}
            text="Спробувати ще раз"
          />
        </div>
      )}

      {/* якщо нічого не знайдено */}
      {!isLoading && !error && !games.length && (
        <div className="mx-auto flex min-h-[365px] max-w-[628px] flex-col items-center justify-center gap-9 py-9 lg:min-h-[429px] xl:min-h-[477px]">
          <p className="text-primary text-center font-semibold">
            Oops... <br /> Ми не знайшли нічого за вашим запитом. Але не
            засмучуйтесь — у нас точно є гра, яка вам сподобається. Пограйте з
            фільтрами!
          </p>
          <Button
            as="button"
            variant="primary"
            onClick={() => window.location.reload()}
            text=" Скинути фільтри"
          />
        </div>
      )}
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-9 sm:justify-between">
          {/* {games.map((game) => ( */}
          {currentGames.map((game) => (
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
                    <svg width="18" height="18">
                      <use href="/sprite.svg#icon-heart"></use>
                    </svg>
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

                <div className="mt-auto flex flex-col justify-end">
                  <Button
                    // тут лінг на кошик?
                    as="button"
                    variant="primary"
                    text="Купити"
                    className="min-w-full !py-1.5 text-sm uppercase lg:!py-3 lg:text-base"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-7 flex items-center justify-center gap-4 lg:hidden">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-primary transition-transform hover:scale-110 disabled:opacity-50"
        >
          <svg className="h-5 w-5 text-[#2B1047]">
            <use href="/sprite.svg#icon-arrow-left"></use>
          </svg>
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
          <svg className="h-5 w-5 text-[#2B1047]">
            <use href="/sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
    </>
  );
}
