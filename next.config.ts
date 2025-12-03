import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    webpackMemoryOptimizations: true,
    preloadEntriesOnStart: false,
    optimizePackageImports: ['@chakra-ui/react'],
  },

  async rewrites() {
    return [
      {
        source: '/api/comfortar/v1/:path*',
        destination: 'https://api.comfortar.thescript.agency/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
