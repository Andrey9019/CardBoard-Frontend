import axios from "axios";

export const getAllGames = async (query?: string) => {
  try {
    const url = `/api/products${query ? `?${query}` : ""}`;
    console.log("Fetching games from:", url);
    const response = await axios.get(url, {
      headers: { "Cache-Control": "no-cache" },
      maxRedirects: 5,
      timeout: 10000,
    });
    console.log("Games response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
