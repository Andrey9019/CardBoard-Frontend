// import axios from "axios";

// const API_BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.NEXT_PUBLIC_API_BASE_URL
//     : "http://localhost:3001";

// export const getAllGames = async (query?: string) => {
//   const response = await axios.get(
//     `${API_BASE_URL}/api/products${query ? `?${query}` : ""}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     },
//   );
//   return response.data;
// };

import { Game } from "@/shared/types/game";

export async function getAllGames(query: string): Promise<Game[]> {
  const url = `${process.env.NEXT_PUBLIC_DB_API_BASE_URL}/api/products?${query}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch games");
  return response.json();
}
