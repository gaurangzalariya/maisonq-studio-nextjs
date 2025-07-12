import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // Ensure trailing slashes for consistent routing
  trailingSlash: true,
  // Add compression
  compress: true,
  // Add performance optimizations
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
