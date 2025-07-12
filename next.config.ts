import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ensure trailing slashes for consistent routing
  trailingSlash: true,
  // Add compression
  compress: true,
  // Add performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  // Cache optimization
  onDemandEntries: {
    maxInactiveAge: 31536000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
