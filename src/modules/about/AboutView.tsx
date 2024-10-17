import Image from "next/image"
import AboutStyles from './style/about.module.css'
import { cn } from '@/lib/utils'

const AboutView = () => {
  return (
    <section className="relative">
      <div className="flex-1 wrapper">
        <Image
          src="/fondo-hero.png"
          alt="fondo about"
          className={cn(AboutStyles.imgTop, 'w-full object-cover')}
          width={700}
          height={10}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-14 pb-6 px-10">
          <div className="wrap-image order-2 md:order-1 flex justify-center">
            <Image src="/about.png" alt="imagen about" width={485} height={485} />
          </div>
          <div className="about-content order-1 md:order-2">
            <div className="wrap-title">
              <h1 className="font-jallaOne text-7xl uppercase">
                Nosotros
              </h1>
              <h2 className="mb-4 font-fingerPaint text-3xl text-sonqu-black-300">Conócenos</h2>
            </div>
            <p className="description font mx-auto mb-3 max-w-2xl font-medium sm:mx-0">
              En SONQU encontrarás las mejores recetas de la gastronomía peruana.
              Nuestra labor es mostrarte los secretos de la gastronomía del Perú, para ello, nos hemos encargado de recolectar las mejores recetas de comida peruana de distintos libros reconocidos y también de los secretos de gran chefs.
              En esta página encontrarás a detalle cada paso para que cocines tu plato favorito y aprendas el arte culinario de la gastronomía peruana.
              Te enseñaremos paso a paso cómo preparar los mejores platos peruanos.
              Nosotros somo SONQU.
            </p>
            <button className="mx-auto w-fit rounded-xl bg-sonqu-orange-400 px-10 py-3 text-white sm:mx-0">VER RECETAS</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutView
