import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["board-games-back-1-0-0.onrender.com", "localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/api/media/:path*",
        destination: "https://board-games-back-1-0-0.onrender.com/media/:path*",
      },
    ];
  },
};

export default nextConfig;
