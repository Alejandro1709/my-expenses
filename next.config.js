/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'you.com',
      'store.storeimages.cdn-apple.com',
    ],
  },
};

module.exports = nextConfig;
