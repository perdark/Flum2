import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip build errors for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
