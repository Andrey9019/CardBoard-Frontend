"use client";

import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import Game from "@/shared/types/game";

import Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

interface GameProp {
  game: Game | null;
}

export default function GameHeader({ game }: GameProp) {
  const addProduct = useCartStore((state) => state.addProduct);

  const router = useRouter();

  return (
    <div className="xl:grid xl:grid-cols-2">
      <div className="mb-12 xl:mb-16">tyt spisok foto</div>
      <div className="mb-12 flex flex-col gap-6 xl:mb-16">
        <h2 className="hidden text-4xl font-bold xl:flex">{game?.title}</h2>
        <Badge variant="default" className="lg:text-sm">
          В наявності
        </Badge>
        <p>{game?.description}</p>
        <div className="flex flex-wrap gap-4 lg:text-sm xl:text-lg">
          {game?.type.map((type) => (
            <Badge key={type.id} variant="default">
              {type.name}
            </Badge>
          ))}
          {game?.player_count?.name && (
            <Badge variant="default">{game.player_count.name}</Badge>
          )}
        </div>
        <p className="text-2xl font-bold">
          {game?.price && (
            <span className="text-2xl font-bold">{game.price} грн</span>
          )}
        </p>
        <div className="flex justify-between gap-6 sm:justify-start">
          <Button
            as="button"
            variant="primary"
            text="Купити зараз"
            className="lg:min-w-[346px] xl:min-w-[264px]"
            onClick={() => {
              if (!game) return;
              addProduct(game);
              router.push("/cart");
            }}
          />
          <Button
            as="button"
            variant="secondary"
            text="Додати в кошик"
            className="lg:min-w-[346px] xl:min-w-[264px]"
            onClick={() => {
              if (!game) return;
              addProduct(game);
            }}
          />
        </div>
      </div>
    </div>
  );
}
