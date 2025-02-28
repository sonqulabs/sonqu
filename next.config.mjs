/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: 'http://localhost:3000/'
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
