import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getGameById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/api/games/${id}`);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
