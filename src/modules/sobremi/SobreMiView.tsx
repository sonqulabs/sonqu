import React from 'react'
import AboutMeStyles from './style/aboutMe.module.css'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { TopSeparator2 } from '@/common/components/customize/TopSeparator2'

export const SobreMiView = () => {
  return (
    <div className="wrapper relative w-full bg-white">
      {/* <Image
        src="/about-me/separator.webp"
        alt=""
        className="mb-16 aspect-[483/17] w-full object-cover lg:mb-0"
        width={900}
        height={200}
      /> */}

      <TopSeparator2 className="mb-16 lg:mb-0" />

      <div className="container flex flex-col-reverse items-center justify-center gap-20 px-8 py-16 lg:flex-row-reverse lg:gap-28 2xl:gap-40">
        <Image
          src="/about-me/sonqu-about-me.webp"
          alt=""
          className="aspect-[300/373] w-full max-w-[400px] object-cover"
          width={600}
          height={500}
        />
        <div className="relative order-1 flex max-w-[500px] flex-col gap-6 lg:order-1">
          <Image
            src="/adornoBottom.webp"
            alt="adorno de sonqu"
            className="absolute -left-10 -top-20 block object-cover lg:-left-20 lg:hidden xl:block"
            width={100}
            height={100}
          />
          <Image
            src="/adornoTop.webp"
            alt="adorno de sonqu"
            className="absolute -bottom-20 -right-10 object-cover lg:-right-20"
            width={100}
            height={100}
          />
          <div>
            <h2 className="lg::text-[50px] mb-2 text-center font-monserrat text-[40px] font-bold leading-none lg:mb-4 lg:text-start">
              Eric Layme
            </h2>
            <h3 className="text-center font-fingerPaint text-[20px] font-normal text-[#646161] lg:text-start lg:text-3xl">
              Chef de Sonqu
            </h3>
          </div>
          <p
            className={cn(
              'text-center font-monserrat text-sm leading-relaxed max-lg:max-w-[350px] lg:text-start lg:text-base'
            )}
          >
            <span className="mb-3 block">
              Soy cocinero peruano con más de 15 años de experiencia en el mundo gastronómico,
              fundador del canal Sonqu y apasionado por la cocina tradicional. Emprendedor y
              subcampeón del Segundo Torneo Nacional de Fuegos y Parrillas en la categoría Cilindro.
            </span>
            Disfruto compartiendo mi conocimiento, enseñando a cocinar y contribuyendo con labores
            sociales, llevando el sabor y la tradición a más personas.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#E4E3E3]">
        <TopSeparator2 className="pt-2" />
        <div className="mx-auto max-w-[900px] pb-16 pt-10">
          <div className="mb-8 flex flex-col-reverse items-center gap-10 lg:flex-row">
            <Image
              src="/about-me/sonqu2.webp"
              alt=""
              className="aspect-[45/58] w-full max-w-[400px] object-cover px-8 lg:px-0"
              width={600}
              height={500}
            />
            <div className="px-8">
              <h2 className="mb-4 font-monserrat text-5xl font-bold md:text-[50px]">Sobre mí...</h2>
              <p className="font-monserrat">
                Creador de contenido gastronómico con más de 15 años de experiencia en la cocina
                peruana. Fundador del canal Sonqu, con una comunidad de más de 2 millones de
                seguidores, y apasionado por la cocina tradicional de mi país.
              </p>
            </div>
          </div>
          <p className="px-8 font-monserrat lg:px-0">
            Emprendedor y subcampeón del Segundo Torneo Nacional de Fuegos y Parrillas en la
            categoría Cilindro. Disfruto compartiendo mi conocimiento, enseñando a cocinar y
            contribuyendo con labores sociales, llevando el sabor, la tradición y las costumbres del
            Perú a nuevos horizontes y a todos quienes disfrutan de lo que hago.
          </p>
        </div>
        <Image
          src="/about-me/separator.webp"
          alt=""
          className="w-full object-cover"
          width={900}
          height={200}
        />
      </div>
    </div>
  )
}
