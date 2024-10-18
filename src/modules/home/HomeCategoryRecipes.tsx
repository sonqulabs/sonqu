import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@shadcnui/carousel'
import { CategoryDishes } from './data/DishesCategory'
import Link from 'next/link'
import Image from 'next/image'
export const HomeCategoryRecipes = () => {
  const menuCategorias = CategoryDishes()
  return (
    <section>
      <div className="container py-4">
        <Carousel
          opts={{
            align: 'start',
            loop: false
          }}
          className="w-full"
        >
          <div className="px-12">
            <CarouselContent className="-ml-0 gap-3.5">
              {menuCategorias.map(({ name, image, path }) => {
                return (
                  <CarouselItem
                    key={name}
                    className="basis-1/2 pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  >
                    <Link
                      href={`/categoria/${path}`}
                      className="flex flex-col items-center gap-2 text-center font-poppins text-sm font-medium uppercase lg:text-base"
                    >
                      <div className="h-full w-full overflow-hidden rounded-3xl">
                        <Image
                          src={image}
                          alt={name}
                          className="w-full object-cover transition-transform duration-300 hover:scale-105"
                          width={200}
                          height={200}
                        />
                      </div>
                      {name}
                    </Link>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </div>
          <CarouselPrevious className="left-0 border-none bg-transparent text-sonqu-white-500 hover:bg-transparent hover:text-sonqu-white-500" />
          <CarouselNext className="right-0 border-none bg-transparent text-sonqu-white-500 hover:bg-transparent hover:text-sonqu-white-500" />
        </Carousel>
      </div>
    </section>
  )
}
