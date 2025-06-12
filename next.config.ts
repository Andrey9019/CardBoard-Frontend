import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["16.170.31.38", "localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://16.170.31.38:8000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
