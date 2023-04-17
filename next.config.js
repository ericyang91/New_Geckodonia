/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    prependData: '@import "@/styles/variables.scss";',
  },
}

module.exports = nextConfig
