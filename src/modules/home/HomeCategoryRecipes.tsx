'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem
  // CarouselNext,
  // CarouselPrevious
} from '@shadcnui/carousel'
import { CategoryDishes } from './data/DishesCategory'
import Autoscroll from 'embla-carousel-auto-scroll'
import StyleCarousel from './style/home.module.css'
import { cn } from '@/lib/utils'
import { ItemCarousel } from './components/ItemCarousel'

export const HomeCategoryRecipes = () => {
  const menuCategorias = CategoryDishes()

  return (
    <section>
      <div className="container pb-6 pt-0 max-lg:px-0">
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
                  <ItemCarousel name={name} image={image} path={path} />
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
