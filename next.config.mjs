/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: 'https://www.sonqu.pe/'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'freepik.es'
      },
      {
        protocol: 'https',
        hostname: 'stimpulsacdnprod.blob.core.windows.net'
      }
    ],
    unoptimized: true
  }
}

export default nextConfig
