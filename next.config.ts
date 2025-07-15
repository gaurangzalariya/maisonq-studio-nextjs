import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  // Configure base path for GitHub Pages
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
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
  // Enhanced performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@headlessui/react'],
    scrollRestoration: true,
  },
  // Bundle analyzer and optimization
  webpack: (config, { dev, isServer }) => {
    // Only apply Webpack optimizations when Turbopack is not in use (production builds)
    if (!dev && !isServer && process.env.NEXT_TURBO !== '1') {
      // Bundle splitting for better caching
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          animations: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 20,
          },
          icons: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'icons',
            chunks: 'all',
            priority: 15,
          },
        },
      };
    }
    return config;
  },
  // Cache optimization
  onDemandEntries: {
    maxInactiveAge: 31536000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
