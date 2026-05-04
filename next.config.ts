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
  /* 
     We removed 'devIndicators' and 'experimental' blocks.
     This ensures the TypeScript compiler on Vercel 
     does not see any "unknown" properties and allows the 
     build to finish successfully.
  */
};

export default nextConfig;