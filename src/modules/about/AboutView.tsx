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
import Link from 'next/link'
import IconTiktok from '@/common/layout/footer/iconsSocialMedia/IconTiktok'

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
                  Llevamos la cocina peruana al mundo
                </h3>
              </div>
              <p
                className={cn(
                  'max-w-[600px] text-center font-monserrat text-sm leading-relaxed md:text-base lg:text-start'
                )}
              >
                <span className="mb-3 block">
                  En Sonqu, celebramos la riqueza de la gastronomía peruana, compartiendo recetas
                  tradicionales y promoviendo ingredientes autóctonos que están quedando en el
                  olvido. Nuestra misión es mantener viva la esencia de nuestra cocina y acercarla a
                  más personas de una manera sencilla y apasionada.
                </span>
                Hoy, somos una de las comunidades gastronómicas más grandes en redes sociales, con
                más de 2 millones de seguidores en Facebook, Instagram, YouTube y TikTok. Enseñamos
                a cocinar de forma fácil y práctica, con ingredientes que puedan conseguir en
                cualquier lugar, para que todos puedan disfrutar del auténtico sabor peruano sin
                complicaciones.
              </p>
            </div>
          </div>
          <div className="flex h-[50px] w-full items-center justify-center gap-6 rounded-full bg-[#DE006A] text-white">
            <span className="flex items-center gap-2">
              <InstagramIcon /> 19.9 K <span className="hidden md:block"> Seguidores</span>
            </span>
            <span className="flex items-center gap-2">
              <YoutubeIcon /> 200 K<span className="hidden md:block"> Seguidores</span>
            </span>
            <span className="flex items-center gap-2">
              {' '}
              <Facebook />
              1.1 K<span className="hidden md:block"> Seguidores</span>
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
              <Link
                href="https://www.facebook.com/Sonquoficial?locale=es_LA"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white"
              >
                <Facebook /> Facebook
              </Link>
              <Link
                href="https://www.youtube.com/c/SONQU"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white"
              >
                <YoutubeIcon /> Youtube
              </Link>
              <Link
                href="https://www.instagram.com/sonquoficial/"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white"
              >
                <InstagramIcon /> Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@sonquoficial"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white"
              >
                <IconTiktok /> Tiktok
              </Link>
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
