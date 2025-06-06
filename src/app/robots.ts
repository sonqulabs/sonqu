import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const APP_URL =
    process.env.APP_URL || process.env.VERCEL_URL || `http://localhost:${process.env.PORT || 3000}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${APP_URL}sitemap.xml`
  }
}
