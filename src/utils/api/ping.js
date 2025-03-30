import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchPing = async () => {
  try {
    const response = await axios.get(`${baseUrl}/ping/`);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw error;
  }
};
