import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  experimental: {
    turbopackMemoryLimit: 1024,
    cpus: 1,
    webpackMemoryOptimizations: true,
    workerThreads: false,
    preloadEntriesOnStart: false,
    optimizePackageImports: ["@chakra-ui/react"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV == "production",
  },
  images: {
    domains: ["storage.yandexcloud.net"],
  },

  async rewrites() {
    return [
      {
        source: "/api/comfortar/v1/:path*",
        destination: "https://api.comfortar.thescript.agency/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
