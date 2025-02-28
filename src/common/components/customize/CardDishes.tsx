import { Dishes } from '@/common/interfaces/dishes'
import Image from 'next/image'
import Link from 'next/link'

export const CardDishes = ({ image, name, description, path }: Dishes) => {
  return (
    <div className="overflow-hidden rounded-3xl font-poppins drop-shadow-xl">
      <Link href={`/recetas/${path}`} className="flex aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={`plato de ${name}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          width={250}
          height={200}
        />
      </Link>

      <div className="flex items-center justify-between gap-1 bg-white px-6 py-3">
        <h2 className="line-clamp-1 text-base font-medium leading-tight">{name}</h2>
        {/* <p className="mb-2 line-clamp-2 h-8 text-xs leading-tight md:h-10 md:text-sm">
          {description}
        </p> */}
        <Link
          href={`/recetas/${path}`}
          className="hidden w-fit self-end whitespace-nowrap rounded-lg bg-sonqu-orange-400 px-3.5 py-1 text-xs font-light uppercase text-white md:block md:rounded-xl md:px-6 md:py-1.5 md:text-sm"
        >
          Ver Receta
        </Link>
      </div>
    </div>
  )
}
