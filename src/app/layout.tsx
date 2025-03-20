import type { Metadata } from 'next'
import '../styles/globals.css'
import { FontWrapper } from '@/common/wrappers'
import { Header } from '@/common/layout/header/Header'
import funMetaData from '@/common/helpers/funMetaData'
import HydrateGlobal from './HydrateGlobal'

// export const metadata: Metadata = {
//   title: 'Sonqu',
//   description: 'Recetas de cocina'
// }

export const metadata = funMetaData({
  title: 'Sonqu'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <FontWrapper>
        <HydrateGlobal />
        <Header />
        {children}
      </FontWrapper>
    </html>
  )
}
