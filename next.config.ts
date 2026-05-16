import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Allow local IP for HMR during development
  allowedDevOrigins: ["192.168.1.16", "localhost:3000"],
};

export default nextConfig;
