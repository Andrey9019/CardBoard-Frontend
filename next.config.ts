import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_DB_API_BASE_URL?.replace(/https?:\/\//, "") ||
        "board-games-back-1-0-0.onrender.com",
      "localhost",
    ],
  },
};

export default nextConfig;
