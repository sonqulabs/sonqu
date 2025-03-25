import { cn } from '@/lib/utils'
import HomeStyles from './style/home.module.css'
import Image from 'next/image'
import { LinkSonqu } from '@/common/components/customize/ButtonSonqu'
export const HomeAbout = () => {
  return (
    <div className={cn(HomeStyles.fondoAbout, 'wrapper relative')}>
      <div className="container h-full w-full px-4 py-32 lg:px-8">
        <div className="relative grid h-full w-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 aspect-square w-full max-w-[220px] justify-self-center drop-shadow-md lg:order-2 lg:max-w-[400px] lg:justify-self-end lg:pr-10 xl:max-w-[500px]">
            <Image
              src="/about.png"
              className="w-full object-cover lg:rotate-[10deg]"
              alt="imagen about"
              width={300}
              height={300}
            />
          </div>
          <div className="order-1 flex flex-col items-center gap-4 lg:order-1 lg:items-start lg:gap-6">
            <div>
              <h2 className="mb-2 text-center font-monserrat text-[30px] font-bold uppercase leading-tight text-white lg:mb-3 lg:text-start lg:text-[45px] xl:text-[50px]">
                ¿QUIÉNES SOMOS?
              </h2>
              <h3 className="text-center font-fingerPaint text-[25px] font-normal text-white md:text-[28px] lg:text-start lg:text-[30px]">
                Conócenos
              </h3>
            </div>
            <p
              className={cn(
                'max-w-[500px] text-center font-monserrat text-sm leading-relaxed text-white md:text-base lg:max-w-[47.625rem] lg:text-start'
              )}
            >
              <span className="mb-3 block">
                En SONQU encontrarás las mejores recetas de la gastronomía peruana. Nuestra labor es
                mostrarte los secretos de la gastronomía del Perú, para ello, nos hemos encargado de
                recolectar las mejores recetas de comida peruana de distintos libros reconocidos y
                también de los secretos de gran chefs.
              </span>
              <span className="hidden lg:block">
                En esta página encontrarás a detalle cada paso para que cocines tu plato favorito y
                aprendas el arte culinario de la gastronomía peruana. Te enseñaremos paso a paso
                cómo preparar los mejores platos peruanos. Nosotros somo SONQU.
              </span>
            </p>
            <LinkSonqu
              href="#"
              name="CONOCER MÁS"
              className="!bg-[#A1C517] text-sm md:!text-base"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
