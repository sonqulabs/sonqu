'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem
  // CarouselNext,
  // CarouselPrevious
} from '@shadcnui/carousel'
import { CategoryDishes } from './data/DishesCategory'
import Link from 'next/link'
import Image from 'next/image'
import Autoscroll from 'embla-carousel-auto-scroll'
import StyleCarousel from './style/home.module.css'
import { cn } from '@/lib/utils'
export const HomeCategoryRecipes = () => {
  const menuCategorias = CategoryDishes()
  return (
    <section>
      <div className="container pb-6 pt-0">
        <Carousel
          opts={{
            loop: true,
            align: 'start'
          }}
          plugins={[
            Autoscroll({
              startDelay: 0,
              speed: 1.5,
              stopOnMouseEnter: true,
              stopOnFocusIn: false,
              stopOnInteraction: false
            })
          ]}
          className={cn(StyleCarousel.carouselShadow, 'w-full')}
        >
          <CarouselContent>
            {menuCategorias.map(({ name, image, path }) => {
              return (
                <CarouselItem
                  key={name}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <Link
                    href={`/categoria/${path}`}
                    className="flex aspect-square flex-col items-center gap-2 text-center font-poppins text-sm font-medium uppercase lg:text-base"
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

          {/* <CarouselPrevious className="-left-12 border-none bg-transparent text-sonqu-white-500 hover:bg-transparent hover:text-sonqu-white-500" />
          <CarouselNext className="-right-12 border-none bg-transparent text-sonqu-white-500 hover:bg-transparent hover:text-sonqu-white-500" /> */}
        </Carousel>
      </div>
    </section>
  )
}
