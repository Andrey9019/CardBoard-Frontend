import { Categories } from "@/shared/types/allCategories";

export async function getAllCategories(): Promise<Categories> {
  const url = `${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_DB_API_BASE_URL : "http://localhost:3001"}/api/all_categories`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
}
