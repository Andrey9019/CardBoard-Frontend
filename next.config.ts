import type { NextConfig } from "next";

const API_BASE_URL =
  process.env.AUTH_SERVICE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:3001";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  async rewrites() {
    const proxyRule = {
      source: "/api/:path*",
      destination: `${API_BASE_URL}/api/:path*`,
    };

    return {
      fallback: [proxyRule],
    };
  },
};

export default nextConfig;
