import type { Game } from "@/shared/types/game";

export async function getGameById(id: number): Promise<Game> {
	const url = `${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_DB_API_BASE_URL : "http://localhost:3001"}/api/product/${id}`;
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!response.ok) throw new Error(`Failed to fetch game with id ${id}`);
	return response.json();
}
