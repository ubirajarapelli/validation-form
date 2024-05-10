/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.menudino.com",
        pathname: "/cardapios/**",
      },
    ],
  },
}

module.exports = nextConfig
