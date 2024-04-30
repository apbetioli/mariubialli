/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'mariubialli.s3.amazonaws.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'media.graphassets.com',
      },
    ],
  },
}

export default nextConfig
