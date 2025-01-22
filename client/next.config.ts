import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['unsplash.it', 'avatars.githubusercontent.com', 'picsum.photos', 'cloudflare-ipfs.com', 'loremflickr.com', 'via.placeholder.com'], // Add all necessary domains
  },
};

export default nextConfig;
