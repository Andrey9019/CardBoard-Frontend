"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";

import noImg from "../../../../public/images/not-found-page/no-image.png";
import NumberInput from "@/components/widgets/NumberInput";

export default function GameList() {
  const cart = useCartStore((state) => state.cart);
  // const removeProduct = useCartStore((state) => state.removeProduct);
  // const addProduct = useCartStore((state) => state.addProduct);
  const deleteProduct = useCartStore((state) => state.deleteProduct);

  return (
    <ul className="flex flex-col items-center gap-5 sm:px-6 lg:gap-4 lg:px-0">
      {cart.map((game) => (
        <li
          key={game.id}
          className="item-shadow flex w-full max-w-[358px] rounded-lg bg-white px-4 py-3 lg:max-w-[472px] xl:min-w-[684px]"
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
                className="hover:text-primary line-clamp-2 cursor-pointer overflow-hidden text-base font-bold text-ellipsis sm:text-lg lg:text-lg"
              >
                {game.title}
              </Link>
              <button
                onClick={() => deleteProduct(game.id)}
                className="text-primary text-xl"
              >
                <svg className="h-6 w-6" fill="currentColor">
                  <use href="/sprite.svg#icon-delete"></use>
                </svg>
              </button>
            </div>

            {/* <div className="flex w-max items-center gap-3 rounded border p-1">
              <button onClick={() => removeProduct(game)} className="">
                -
              </button>
              <span className="text-center font-semibold">{game.amount}</span>
              <button onClick={() => addProduct(game)} className="">
                +
              </button>
            </div> */}
            <NumberInput />

            <span className="text-xs">{game.price} грн</span>

            <div className="flex justify-between">
              <p className="text-xs md:text-base">Всього:</p>
              <span className="text-xs font-semibold md:text-base">
                {game.price * game.amount} грн
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
