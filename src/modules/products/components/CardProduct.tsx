import Image from 'next/image'
import { Producto } from '../interfaces/producto'

export const CardProduct = ({ name, image, description, marca, precio }: Producto) => {
  return (
    <div className="flex w-full flex-1 items-start gap-4">
      <div className="max-w-[120px] overflow-hidden drop-shadow-lg lg:max-w-[210px]">
        <Image
          src={image}
          alt={name}
          className="aspect-square h-auto w-full"
          width={200}
          height={100}
        />
      </div>
      <div>
        <h1 className="mb-1 text-lg font-medium leading-tight text-sonqu-black-300 md:text-2xl">
          {name}
        </h1>
        <p className="mb-2 text-sm leading-tight text-gray-600 md:text-sm">{description}</p>
        <p className="font-medium">
          marca: <span className="font-normal">{marca}</span>
        </p>
        <p className="mb-4 font-medium">
          precio: <span className="font-normal">{precio}</span>
        </p>
        <button className="rounded-lg bg-sonqu-orange-400 px-4 py-2 text-sm text-white">
          comprar
        </button>
      </div>
    </div>
  )
}
