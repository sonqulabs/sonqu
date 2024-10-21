import { GetProductos } from './data/productos'
import { CardProduct } from './components/CardProduct'
import { TopSeparator } from '@/common/components/customize/TopSeparator'
import { ButtonPrevius } from '@/common/components/customize/ButtonPrevius'
export const ProductsView = () => {
  const productos = GetProductos()
  return (
    <main className="flex-1">
      <div className="wrapper">
        <TopSeparator />
      </div>
      <div className="container mb-16 flex flex-col gap-6">
        <ButtonPrevius />
        <div className="mb-8">
          <h1 className="font-jallaOne text-5xl font-medium uppercase md:text-7xl">Productos</h1>
          <h2 className="font-fingerPaint text-xl text-sonqu-black-300 md:text-3xl">
            Recomendados
          </h2>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          {productos.map((producto) => {
            return <CardProduct key={producto.id} {...producto} />
          })}
        </div>
      </div>
    </main>
  )
}
