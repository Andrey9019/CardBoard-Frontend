"use client";

import Link from "next/link";
import Image from "next/image";
import { Game } from "@/shared/types/game";
import Button from "@/components/ui/Button";
import noImg from "../../../../../public/images/not-found-page/no-image.png";

interface GameListCard {
  game: Game;
}

export default function GameListCard({ game }: GameListCard) {
  return (
    <li className="item-shadow animate-fade-in-left-07 min-h-[365px] max-w-[196px] rounded-lg bg-white lg:min-h-[429px] lg:max-w-[228px] xl:min-h-[477px] xl:max-w-[270px]">
      <Link
        href={`/game/${game.id}`}
        className="flex h-full flex-col justify-between p-4"
      >
        <div className="flex justify-end">
          <button className="max-w-max">
            {/* <svg className="h-[18px] w-[18px]">
              <use href="/sprite.svg#icon-heart"></use>
            </svg> */}
          </button>
        </div>

        <Image
          className="my-4 flex justify-center"
          src={game.thumbnail || noImg}
          alt="Фото гри"
          width={242}
          height={242}
        />

        <p className="mb-2 line-clamp-2 leading-snug font-bold lg:text-lg">
          {game.title}
        </p>
        <p className="mb-2 text-lg font-bold lg:text-xl">{game.price} ₴</p>

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
  );
}
