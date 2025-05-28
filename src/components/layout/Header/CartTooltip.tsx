"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useCartStore } from "@/stores/cartStore";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/widgets/HoverCard";
import Button from "../../ui/Button";

import noImg from "../../../../public/images/not-found-page/no-image.png";

interface CartTooltipProps {
  closeAll: () => void;
}

export default function CartTooltip({ closeAll }: CartTooltipProps) {
  const { cart, total, countTotal } = useCartStore();

  useEffect(() => {
    countTotal();
  }, [cart, countTotal]);

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <Link href="/cart" onClick={closeAll} className="relative">
          <svg className="h-8 w-8 cursor-pointer">
            <use href="/sprite.svg#icon-cart"></use>
          </svg>

          {cart.length != 0 && (
            <div className="absolute -top-2 -right-3">
              <span className="bg-secondary text-primary flex h-4 w-4 items-center justify-center rounded-full p-2 text-xs">
                {cart.length}
              </span>
            </div>
          )}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="w-72">
          {cart.length != 0 ? (
            <div className="flex flex-col">
              <ul className="flex max-h-[300px] flex-col gap-2 overflow-y-auto p-2">
                {cart.map((game) => (
                  <li
                    key={game.id}
                    className="border-primary flex rounded-lg border"
                  >
                    <Image
                      className="mr-4 rounded-l-lg"
                      width={75}
                      src={noImg}
                      alt="Фото гри"
                    />

                    <div className="flex w-full flex-col justify-between py-2 pr-2">
                      <Link
                        href={`/game/${game.id}`}
                        className="hover:text-primary line-clamp-1 text-sm font-medium text-ellipsis"
                      >
                        {game.title}
                      </Link>

                      <div className="flex justify-between text-sm">
                        <span
                        // className="font-semibold"
                        >
                          {game.amount} шт.
                        </span>
                        <span
                        // className="font-semibold"
                        >
                          {game.price * game.amount} грн
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mx-2 flex flex-1 justify-between gap-4 pt-7">
                <p>Всього:</p>
                <span>{total} грн</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-primary text-center font-semibold">
                Кошик пустий, як поле перед першим ходом!
                <br /> Зроби перший хід — обери свою гру!
              </p>
              <Button
                as="link"
                href="/catalog"
                text={"Перейти до каталогу"}
                variant="primary"
                className="text-sm"
              />
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
