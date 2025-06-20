import { Metadata } from 'next'

import CardProduct from '@/modules/tienda/components/cardProduct/CardProduct'
import { mockProducts } from '@/modules/tienda/data/dataTest'
import { Product } from '@/modules/tienda/type'
import Image from 'next/image'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Tienda',
  description: 'Explore todos nuestros productos.'
}

export default async function StorePage() {
  return (
    <div className="bg-white">
      <Image
        src="/about-me/separator.webp"
        alt=""
        className="wrapper w-full object-cover"
        width={900}
        height={200}
      />
      <div className="container mx-auto flex flex-col py-10">
        <h1 className="mb-8 text-center font-monserrat text-3xl font-bold">La tiendita de Sonqu</h1>
        <div className="w-full">
          <div className="text-2xl-semi mb-4">
            <h2 className="text-xl font-medium">Todos los productos(6)</h2>
          </div>
          <Suspense fallback={null}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-y-16">
              {mockProducts.map((product: Product) => (
                <li key={product.id}>
                  <CardProduct product={product} isFeatured />
                </li>
              ))}
            </ul>
          </Suspense>
        </div>
      </div>
      <Image
        src="/about-me/separator.webp"
        alt=""
        className="w-full object-cover"
        width={900}
        height={200}
      />
    </div>
  )
}
