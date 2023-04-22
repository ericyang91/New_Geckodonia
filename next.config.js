/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  sassOptions: {
    prependData: '@import "@/styles/variables.scss";',
  },
}

module.exports = nextConfig
