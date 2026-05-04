import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Add this for the customer avatars
        pathname: '**',
      },
    ],
  },
  experimental: {
    turbo: {
      root: ".",
    },
  },
};

export default nextConfig;