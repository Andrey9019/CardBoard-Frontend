import axios from "axios";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : "http://localhost:3001";

export const getGameById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/api/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
