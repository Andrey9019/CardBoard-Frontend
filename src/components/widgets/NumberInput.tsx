import Game from "@/shared/types/game";
import { useCartStore } from "@/stores/cartStore";
import { Minus, Plus } from "lucide-react";

interface NumberInputCard {
  game: Game;
}

export default function NumberInput({ game }: NumberInputCard) {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const addProduct = useCartStore((state) => state.addProduct);
  return (
    <div className="flex w-max items-center gap-2 rounded-md border p-1 text-sm xl:text-lg">
      <button
        onClick={() => removeProduct(game)}
        disabled={game.amount === 1}
        className={`${
          game.amount === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:text-primary"
        }`}
        aria-label="Зменшити кількість"
      >
        <Minus
          className="size-4 xl:size-5"
          absoluteStrokeWidth
          strokeWidth={3}
        />
      </button>

      <div className="flex min-w-[24px] justify-center">
        <span className="font-semibold">{game.amount}</span>
      </div>

      <button
        onClick={() => addProduct(game)}
        disabled={game.amount === 99}
        className={`${
          game.amount === 99
            ? "cursor-not-allowed opacity-50"
            : "hover:text-primary"
        }`}
        aria-label="Збільшити кількість"
      >
        <Plus
          className="size-4 xl:size-5"
          absoluteStrokeWidth
          strokeWidth={3}
        />
      </button>
    </div>
  );
}
