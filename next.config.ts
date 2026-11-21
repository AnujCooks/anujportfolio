import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the sandbox/live-preview host in development
  allowedDevOrigins: ["*.e2b.app"],
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
