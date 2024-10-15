import Image from 'next/image'
import HomeStyles from './style/home.module.css'
import { cn } from '@/lib/utils'

const HomeHero = () => {
  return (
    <div className="relative">
      <div
        className={cn(
          HomeStyles['home-hero'],
          'wrapper relative grid grid-cols-1 items-center md:grid-cols-2'
        )}
      >
        <div className="hidden md:block"></div>
        <div className="flex flex-col text-center md:text-start">
          <h1 className="font-jallaOne text-7xl uppercase">
            Las Mejores <span className="block"> Recetas</span>
          </h1>
          <h2 className="mb-4 font-fingerPaint text-3xl text-sonqu-black-300">En un solo lugar</h2>
          <p className="font mx-auto mb-3 max-w-80 font-medium md:mx-0">
            En SONQU encontrarás las mejores recetas de la gastronomía peruana. Te enseñaremos paso
            a paso cómo preparar los mejores platos peruanos.
          </p>

          <button
            className={cn(
              HomeStyles['home-hero__btn'],
              'mx-auto w-fit rounded-xl px-10 py-3 text-white md:mx-0'
            )}
          >
            CONOCE MÁS
          </button>
        </div>
      </div>
      <Image
        src="/fondo-hero.png"
        height={400}
        width={500}
        className={cn(
          HomeStyles['home-hero__background-image'],
          'absolute left-0 top-0 -z-10 w-full opacity-70 md:opacity-100'
        )}
        alt="fondo hero"
      />
    </div>
  )
}

export default HomeHero
