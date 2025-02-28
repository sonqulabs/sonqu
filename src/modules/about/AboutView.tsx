import Image from 'next/image'
import AboutStyles from './style/about.module.css'
import { cn } from '@/lib/utils'
import { TopSeparator } from '@/common/components/customize/TopSeparator'
import { LinkSonqu } from '@/common/components/customize/ButtonSonqu'
import { ButtonPrevius } from '@/common/components/customize/ButtonPrevius'
import TeamSection from './components/TeamSection'
import { Instagram, Youtube } from 'lucide-react'
import { LogoTiktok } from '@/common/components/icons/solid/LogoTiktok'

const AboutView = () => {
  return (
    <section className="relative flex-1">
      <div className="wrapper">
        <TopSeparator />
      </div>
      <div className="container flex flex-col gap-6">
        <ButtonPrevius />
        <div className="relative mb-10 mt-4 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="order-2 aspect-square w-full max-w-[500px] drop-shadow-md lg:order-2 lg:justify-self-start">
            <Image
              src="/about.png"
              className="w-full object-cover"
              alt="imagen about"
              width={300}
              height={300}
            />
          </div>
          <div className="order-1 flex flex-col gap-4 lg:order-1">
            <div>
              <h1 className="font-jallaOne text-5xl font-medium uppercase md:text-7xl">Nosotros</h1>
              <h2 className="font-fingerPaint text-xl text-sonqu-black-300 md:text-3xl">
                Conócenos
              </h2>
            </div>
            <p
              className={cn(
                AboutStyles.description,
                'text-sm font-medium leading-relaxed md:text-base'
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

        <section className="w-full rounded-3xl bg-red-600 py-4 text-white">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <a href="#" className="flex items-center gap-2 transition-colors hover:text-white/80">
                <Instagram className="h-6 w-6" />
                <span className="font-medium">250k seguidores</span>
              </a>
              <a href="#" className="flex items-center gap-2 transition-colors hover:text-white/80">
                <Youtube className="h-6 w-6" />
                <span className="font-medium">500k suscriptores</span>
              </a>
              <a href="#" className="flex items-center gap-2 transition-colors hover:text-white/80">
                <LogoTiktok className="h-6 w-6" />
                <span className="font-medium">1M seguidores</span>
              </a>
            </div>
          </div>
        </section>

        <TeamSection />
      </div>
    </section>
  )
}

export default AboutView
