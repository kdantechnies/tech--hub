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
        hostname: 'i.pravatar.cc',
        pathname: '**',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  /* 
     We removed the 'experimental: { turbo: { ... } }' block 
     because it is only for local Windows development and 
     Vercel does not support it in production.
  */
};

export default nextConfig;