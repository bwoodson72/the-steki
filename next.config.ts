import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [45, 55, 60, 75],
    deviceSizes: [384, 428, 640, 750, 828, 1080, 1200, 1920],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;