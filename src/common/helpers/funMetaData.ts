import { Metadata } from 'next'
import { ReactNode } from 'react'

type Props = {
  title: string
  complement?: string
  description?: string
  type?: string
  image?: string
  children?: ReactNode
}

export const funMetaData = ({
  title,
  description = 'En SONQU encontrarás las mejores recetas de la gastronomía peruana. Te enseñaremos paso a paso cómo preparar los mejores platos peruanos.'
}: Props): Metadata => {
  return {
    icons: '/favicon.png',
    metadataBase: new URL(
      process.env.APP_URL
        ? `${process.env.APP_URL}`
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : `http://localhost:${process.env.PORT || 3000}`
    ),
    keywords: ['recetas', 'comida', 'peruana', 'cocina', 'perú', 'platos', 'gastronomía'],
    title: {
      default: decodeURIComponent(title),
      template: `%s - Sonqu`
    },
    description,
    openGraph: {
      title: `${decodeURIComponent(title)} - ¡Las mejores recetas de la gastronomía peruana!`,
      description,
      images: ['/image-opengraph.png'],
      url: `${process.env.APP_URL || process.env.VERCEL_URL}/`,
      type: 'website'
    }
  }
}
export default funMetaData
