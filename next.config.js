/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  experimental: {
    appDir: true,
    serverActions: true
  }
};

module.exports = nextConfig;
