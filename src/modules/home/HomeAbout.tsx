import { cn } from '@/lib/utils'
import HomeStyles from './style/home.module.css'
import Image from 'next/image'
import { LinkSonqu } from '@/common/components/customize/ButtonSonqu'
export const HomeAbout = () => {
  return (
    <div className={cn(HomeStyles.fondoAbout, 'wrapper relative')}>
      <div className="container h-full w-full px-4 xl:px-0">
        <div className="relative grid h-full w-full grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2">
          <div className="order-2 aspect-square w-full max-w-[500px] drop-shadow-md lg:order-2 lg:justify-self-start">
            <Image
              src="/about.png"
              className="w-full rotate-[10deg] object-cover"
              alt="imagen about"
              width={300}
              height={300}
            />
          </div>
          <div className="order-1 flex flex-col gap-4 lg:order-1">
            <div>
              <h1 className="font-jallaOne text-5xl font-medium uppercase text-white md:text-7xl">
                Nosotros
              </h1>
              <h2 className="font-fingerPaint text-xl text-white md:text-3xl">Conócenos</h2>
            </div>
            <p
              className={cn(
                'max-w-[47.625rem] text-sm font-medium leading-relaxed text-white md:text-base'
              )}
            >
              <span className="mb-3 block">
                En SONQU encontrarás las mejores recetas de la gastronomía peruana. Nuestra labor es
                mostrarte los secretos de la gastronomía del Perú, para ello, nos hemos encargado de
                recolectar las mejores recetas de comida peruana de distintos libros reconocidos y
                también de los secretos de gran chefs.
              </span>
              En esta página encontrarás a detalle cada paso para que cocines tu plato favorito y
              aprendas el arte culinario de la gastronomía peruana. Te enseñaremos paso a paso cómo
              preparar los mejores platos peruanos. Nosotros somo SONQU.
            </p>
            <LinkSonqu href="#" name="ver recetas" className="text-sm md:!text-base" />
          </div>
        </div>
      </div>
    </div>
  )
}
