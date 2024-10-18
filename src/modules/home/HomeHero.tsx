import HomeStyles from './style/home.module.css'
import { cn } from '@/lib/utils'

const HomeHero = () => {
  return (
    <div className="wrapper relative">
      <div
        className={cn(
          HomeStyles.homeHero,
          'container flex items-center justify-center px-0 pb-32 sm:justify-end sm:pr-10 md:pr-24 xl:pr-40'
        )}
      >
        <div className="flex flex-col text-center sm:text-start">
          <h1 className="font-jallaOne text-7xl uppercase">
            Las Mejores <span className="block"> Recetas</span>
          </h1>
          <h2 className="mb-4 font-fingerPaint text-3xl text-sonqu-black-300">En un solo lugar</h2>
          <p className="font mx-auto mb-3 max-w-80 font-medium sm:mx-0">
            En SONQU encontrarás las mejores recetas de la gastronomía peruana. Te enseñaremos paso
            a paso cómo preparar los mejores platos peruanos.
          </p>

          <button className="mx-auto w-fit rounded-xl bg-sonqu-orange-400 px-10 py-3 text-white sm:mx-0">
            CONOCE MÁS
          </button>
        </div>
      </div>
      <div className={cn(HomeStyles.image, 'absolute top-0 z-[-2]')} />
    </div>
  )
}

export default HomeHero
