/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } }
    ]
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "avatars.githubusercontent.com"
    //   }
    // ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  }
}

module.exports = nextConfig
