/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["cdn.jsdelivr.net"]
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,

};

export default nextConfig;
