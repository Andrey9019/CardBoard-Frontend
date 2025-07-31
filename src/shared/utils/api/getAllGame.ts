import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_DB_API_BASE_URL ||
      "https://cardboard-backend.onrender.com/"
    : "http://localhost:3001";

export const getAllGames = async (query?: string) => {
  const response = await axios.get(`${baseUrl}/api/products/?${query}`);
  return response.data;
};
