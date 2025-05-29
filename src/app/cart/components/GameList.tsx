"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";

import noImg from "../../../../public/images/not-found-page/no-image.png";

import NumberInput from "@/components/widgets/NumberInput";
import { cn } from "@/shared/lib/utils";

interface GameListProp {
  isFormСonfirm: boolean;
}

export default function GameList({ isFormСonfirm }: GameListProp) {
  const { cart, deleteProduct } = useCartStore();

  return (
    <ul
      className={cn(
        "animate-fade-in-left-03 flex flex-col items-center gap-5 sm:px-6 lg:gap-4 lg:px-0",
        isFormСonfirm &&
          `border-primary/40 mb-4 max-h-[400px] overflow-y-auto rounded-md border lg:max-h-[450px] xl:max-h-[500px]`,
      )}
    >
      {cart.map((game) => (
        <li
          key={game.id}
          className="flex w-full max-w-[358px] rounded-lg bg-white px-4 py-3 lg:max-w-[472px] xl:min-w-[684px]"
        >
          <Image
            className="mr-4 h-[120px] w-[120px] lg:h-[164px] lg:w-[164px] xl:h-[175px] xl:w-[175px]"
            src={noImg}
            alt="Фото гри"
          />

          <div className="flex flex-1 flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <Link
                href={`/game/${game.id}`}
                className="hover:text-primary line-clamp-2 cursor-pointer overflow-hidden text-base font-bold text-ellipsis sm:text-lg lg:text-lg xl:text-lg"
              >
                {game.title}
              </Link>
              <button
                onClick={() => deleteProduct(game.id)}
                className="text-primary text-xl"
              >
                <svg className="h-6 w-6 xl:h-7 xl:w-7" fill="currentColor">
                  <use href="/sprite.svg#icon-delete"></use>
                </svg>
              </button>
            </div>

            <NumberInput game={game} />

            <span className="text-xs xl:text-sm">{game.price} грн</span>

            <div className="flex justify-between text-xs md:text-base">
              <p>Всього:</p>
              <span className="font-semibold">
                {game.price * game.amount} грн
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
