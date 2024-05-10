import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  //https://vercel.com/guides/how-to-enable-cors#enabling-cors-in-a-next.js-app
  async headers() {
    return [
      {
        source: '/api/stripe/webhook*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'mariubialli.s3.amazonaws.com',
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
