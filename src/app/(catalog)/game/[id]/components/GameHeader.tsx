"use client";

import { useRouter } from "next/navigation";
import { useCartStore } from "@/stores/cartStore";

import Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

import GameListImages from "./GameListImages";
import type { Game } from "@/shared/types/game";

interface GameHeaderProps {
	game: Game;
}

export default function GameHeader({ game }: GameHeaderProps) {
	const { addProduct } = useCartStore();

	const router = useRouter();

	if (!game) return null;

	return (
		<div className="ml:grid ml:grid-cols-2 gap-x-10 xl:mb-12">
			<GameListImages game={game} />

			<div className="mb-12 flex flex-col gap-6 xl:mb-16">
				<h2 className="hidden text-4xl font-bold xl:flex">{game.title}</h2>
				<Badge variant="default" className="lg:text-sm">
					В наявності
				</Badge>
				<p>{game.description}</p>
				<div className="flex flex-wrap gap-4 lg:text-sm xl:text-lg">
					{game.types.map((type) => (
						<Badge key={type.id} variant="default">
							{type.name}
						</Badge>
					))}
					<Badge variant="default">{game.player_count.name}</Badge>
				</div>
				<p className="text-2xl font-bold">
					<span className="text-2xl font-bold">{game.price} грн</span>
				</p>
				<div className="flex flex-wrap justify-between gap-6 sm:justify-start">
					<Button
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
