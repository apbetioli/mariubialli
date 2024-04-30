/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'mariubialli.s3.amazonaws.com',
      },
    ],
  },
}

export default nextConfig
