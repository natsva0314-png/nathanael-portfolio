/** @type {import('next').NextConfig} */
const nextConfig = {
  // react-markdown v9 and remark-gfm v4 are pure ESM — transpile for Next.js compatibility
  transpilePackages: ['react-markdown', 'remark-gfm'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
}

module.exports = nextConfig
