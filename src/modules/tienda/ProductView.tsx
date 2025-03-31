import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import Product from './components/Product'
import { mockProducts } from './data/dataTest'
import CardProduct from './components/cardProduct/CardProduct'
import Image from 'next/image'

const ProductView = ({ productHandle }: { productHandle: string }) => {
  // Productos relacionados
  const productosRelacionados = mockProducts
  // .filter(
  //   (product) => product.category === collection.title // Puedes hacer un filtro por categoría, por ejemplo
  // )

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de navegación */}
      <div className="border-b">
        <div className="container mx-auto flex w-full items-center justify-between py-4">
          <Link
            href="/tienda"
            className="flex w-full items-center text-sm text-gray-800 hover:underline hover:underline-offset-4"
          >
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Volver</span>
          </Link>
          <div className="w-full">
            <div className="flex w-full items-center justify-end space-x-2 text-sm">
              <Link href="/" className="flex items-center">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link href="/tienda" className="text-muted-foreground">
                Tienda
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span>{decodeURIComponent(productHandle)}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto mb-4 mt-6 max-w-7xl p-4">
        <Product productHandle={productHandle} />

        {/* Productos relacionados */}
        <div className="mb-16 mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-black">También te podría gustar</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productosRelacionados.map((product) => (
              <CardProduct key={product.id} product={product} isFeatured />
            ))}
          </div>
        </div>
      </main>
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

export default ProductView
