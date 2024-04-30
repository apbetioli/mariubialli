import createMDX from '@next/mdx'

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
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
