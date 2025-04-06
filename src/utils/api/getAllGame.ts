import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_DB_API_BASE_URL;
export const getAllGames = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/games/`);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
