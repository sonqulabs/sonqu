import { getAllRecipeTitles } from '@/modules/search/services/searchService'
import { mockProducts } from '@/modules/tienda/data/dataTest'
import { type MetadataRoute } from 'next'

interface SitemapEntry {
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const recipeTitles = await getAllRecipeTitles()
  // const tips = await getTips()
  const productos = mockProducts

  const APP_URL =
    process.env.APP_URL || process.env.VERCEL_URL || `http://localhost:${process.env.PORT || 3000}`

  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${APP_URL}`, lastModified: now, priority: 1.0, changeFrequency: 'daily' },
    {
      url: `${APP_URL}nosotros`,
      lastModified: now,
      priority: 0.5,
      changeFrequency: 'yearly'
    },
    {
      url: `${APP_URL}contacto`,
      lastModified: now,
      priority: 0.5,
      changeFrequency: 'yearly'
    },
    {
      url: `${APP_URL}tienda`,
      lastModified: now,
      priority: 0.6,
      changeFrequency: 'weekly'
    },
    {
      url: `${APP_URL}subir-receta`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      url: `${APP_URL}tips`,
      lastModified: now,
      priority: 0.6,
      changeFrequency: 'monthly'
    },
    {
      url: `${APP_URL}sobre-mi`,
      lastModified: now,
      priority: 0.4,
      changeFrequency: 'yearly'
    }
  ]

  const dynamicRoutes = [
    ...recipeTitles.map(
      (r) =>
        ({
          url: `${APP_URL}recetas/${encodeURIComponent(r.title)}`,
          lastModified: now,
          priority: 0.7,
          changeFrequency: 'weekly'
        }) as SitemapEntry
    ),
    // ...tips.map((t) => ({
    //   url: `${APP_URL}tips/${t.id}`,
    //   lastModified: now,
    //   priority: 0.6,
    //   changeFrequency: 'monthly',
    // })),
    ...productos.map(
      (p) =>
        ({
          url: `${APP_URL}tienda/${encodeURIComponent(p.name || '')}`,
          lastModified: now,
          priority: 0.6,
          changeFrequency: 'monthly'
        }) as SitemapEntry
    )
  ]

  return [...staticRoutes, ...dynamicRoutes]
}
