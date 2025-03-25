import Image from 'next/image'
import AboutStyles from './style/about.module.css'
import { cn } from '@/lib/utils'
import { TopSeparator } from '@/common/components/customize/TopSeparator'
import { LinkSonqu } from '@/common/components/customize/ButtonSonqu'
import { ButtonPrevius } from '@/common/components/customize/ButtonPrevius'
import TeamSection from './components/TeamSection'
import {
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Youtube,
  YoutubeIcon
} from 'lucide-react'
import { LogoTiktok } from '@/common/components/icons/solid/LogoTiktok'
import HomeStyles from './style/about.module.css'

const AboutView = () => {
  return (
    <section className="relative flex-1">
      {/* <div className="wrapper">
        <TopSeparator />
      </div> */}

      <div className={cn(HomeStyles.fondoAboutTop, 'wrapper relative')}>
        <div className="container flex h-full w-full flex-col items-center justify-center gap-20 px-4">
          <div className="relative flex w-full items-center justify-center gap-20 px-4">
            <div className="order-2 hidden aspect-square w-full max-w-[350px] drop-shadow-md lg:order-2 lg:block lg:justify-self-start">
              <Image
                src="/about.png"
                className="w-full rotate-[6deg] object-cover"
                alt="imagen about"
                width={300}
                height={300}
              />
            </div>
            <div className="order-1 flex flex-col gap-6 lg:order-1">
              <div>
                <h2 className="text-center font-monserrat text-[30px] font-bold uppercase md:text-[50px] lg:mb-4 lg:text-start">
                  ¿QUIÉNES SOMOS?
                </h2>
                <h3 className="text-center font-fingerPaint text-[18px] font-normal md:text-4xl lg:text-start">
                  Conócenos
                </h3>
              </div>
              <p
                className={cn(
                  'max-w-[600px] text-center font-monserrat text-sm leading-relaxed md:text-base lg:text-start'
                )}
              >
                <span className="mb-3 block">
                  En SONQU encontrarás las mejores recetas de la gastronomía peruana. Nuestra labor
                  es mostrarte los secretos de la gastronomía del Perú, para ello, nos hemos
                  encargado de recolectar las mejores recetas de comida peruana de distintos libros
                  reconocidos y también de los secretos de gran chefs.
                </span>
                En esta página encontrarás a detalle cada paso para que cocines tu plato favorito y
                aprendas el arte culinario de la gastronomía peruana. Te enseñaremos paso a paso
                cómo preparar los mejores platos peruanos. Nosotros somo SONQU.
              </p>
            </div>
          </div>
          <div className="flex h-[50px] w-full items-center justify-center gap-6 rounded-full bg-[#DE006A] text-white">
            <span className="flex items-center gap-2">
              <InstagramIcon /> 250k <span className="hidden md:block"> Seguidores</span>
            </span>
            <span className="flex items-center gap-2">
              <YoutubeIcon /> 500k<span className="hidden md:block"> Seguidores</span>
            </span>
            <span className="flex items-center gap-2">
              {' '}
              <Facebook />
              1M<span className="hidden md:block"> Seguidores</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container flex w-full flex-col items-center justify-center gap-4 pb-8 pt-6 lg:flex-row lg:gap-10 lg:py-0">
          {' '}
          <Image
            src="/about/celular.png"
            alt="Redes de sonqu en diseño celular"
            className="-mb-14 w-full max-w-[400px] object-cover"
            width={400}
            height={400}
          />
          <div className="flex w-full max-w-[400px] flex-col items-center justify-center">
            <h4 className="mb-6 text-center font-monserrat text-[30px] font-bold uppercase md:text-[35px]">
              SÍGUENOS EN
            </h4>
            <div className="w-full space-y-4">
              <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white">
                <Facebook /> Facebook
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white">
                <YoutubeIcon /> Youtube
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white">
                <InstagramIcon /> Instagram
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* <ButtonPrevius /> */}

        <TeamSection />
      </div>
    </section>
  )
}

export default AboutView
