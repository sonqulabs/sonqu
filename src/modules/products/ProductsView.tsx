import Image from 'next/image'
import StyleProducts from './style/products.module.css'
import { cn } from '@/lib/utils'
import { GetProductos } from './data/productos'
import { CardProduct } from './components/CardProduct'
export const ProductsView = () => {
  const productos = GetProductos()
  return (
    <main className="flex-1">
      <div className="wrapper">
        <Image
          src="/fondo-hero.png"
          alt="fondo about"
          className={cn(StyleProducts.imgTop, 'w-full object-cover')}
          width={700}
          height={10}
        />
      </div>
      <div className="container mb-8 mt-4">
        <h1 className="mb-6 font-jallaOne text-4xl font-semibold uppercase">
          Productos recomendados
        </h1>
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          {productos.map((producto) => {
            return <CardProduct key={producto.id} {...producto} />
          })}
        </div>
      </div>
    </main>
  )
}
