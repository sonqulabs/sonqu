import Image from 'next/image'
import { Producto } from '../interfaces/producto'

export const CardProduct = ({ name, image, description, marca, precio }: Producto) => {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-sonqu-white-500">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/3">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            width={200}
            height={100}
          />
          <div className="absolute left-4 top-4 rounded-md bg-red-500 px-4 text-primary-foreground">
            {marca}
          </div>
        </div>
        <div className="flex min-h-52 w-full flex-col justify-between bg-white p-6 sm:w-2/3">
          <div>
            <h1 className="mb-1 text-lg font-medium leading-tight text-sonqu-black-300 md:text-2xl">
              {name}
            </h1>
            <p className="mb-2 text-sm leading-tight text-gray-600 md:text-sm">{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-medium">
              S/ <span className="font-normal">{precio.toFixed(2)}</span>
            </p>
            <button className="rounded-lg bg-sonqu-orange-400 px-4 py-2 text-sm text-white">
              comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
