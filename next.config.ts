import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "res.cloudinary.com"], // Додано IP для зображень
  },
};

export default nextConfig;
