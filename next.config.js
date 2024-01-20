/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ['components', 'pages', 'sections']
  }
}

module.exports = nextConfig
