import { useQuery } from "@tanstack/react-query";
import { getGameById } from "@/shared/utils";
import { useParams } from "next/navigation";
import type { Game } from "@/shared/types/game";

export function useGameByID() {
	const params = useParams();
	const id = params.id;

	const { data, isLoading, error } = useQuery<Game | null, Error>({
		queryKey: ["product", id],
		queryFn: () => (typeof id === "string" ? getGameById(parseInt(id, 10)) : null),
	});

	const notFound = !isLoading && !data && !error;

	return { product: data, notFound, isLoading };
}
