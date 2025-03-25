import React from 'react'
import AboutMeStyles from './style/aboutMe.module.css'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const SobreMiView = () => {
  return (
    <div className="wrapper relative w-full bg-white">
      <Image
        src="/about-me/separator.webp"
        alt=""
        className="w-full object-cover pb-16 lg:pb-0"
        width={900}
        height={200}
      />
      <div className="container flex flex-col-reverse items-center justify-center gap-20 px-8 py-16 lg:flex-row-reverse lg:gap-28 2xl:gap-40">
        <Image
          src="/about-me/sonqu-about-me.webp"
          alt=""
          className="w-full max-w-[400px] object-cover"
          width={600}
          height={500}
        />
        <div className="relative order-1 flex max-w-[500px] flex-col gap-6 lg:order-1">
          <Image
            src="/adornobottom.webp"
            alt="adorno de sonqu"
            className="absolute -left-10 -top-20 block object-cover lg:-left-20 lg:hidden xl:block"
            width={100}
            height={100}
          />
          <Image
            src="/adornotop.webp"
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
              Eric Layme, el corazón y la mente detrás de Sonqu. Nacido en la selva peruana, crecí
              rodeado de sabores vibrantes y ingredientes únicos que han marcado mi pasión por la
              cocina. A través de Sonqu, mi canal de YouTube, comparto recetas nutritivas y llenas
              de sabor, inspiradas en la riqueza de nuestra gastronomía amazónica y en la
              importancia de una alimentación equilibrada.
            </span>
            Mi objetivo es que cada plato no solo deleite el paladar, sino que también nutra el
            cuerpo y el alma. ¡Bienvenidos a mi mundo culinario!
          </p>
        </div>
      </div>

      <div className="w-full bg-[#E4E3E3]">
        <Image
          src="/about-me/separator.webp"
          alt=""
          className="w-full object-cover pt-2"
          width={900}
          height={200}
        />
        <div className="mx-auto max-w-[900px] pb-16 pt-10">
          <div className="mb-8 flex flex-col-reverse items-center gap-10 lg:flex-row">
            <Image
              src="/about-me/sonqu2.webp"
              alt=""
              className="w-full max-w-[400px] object-cover px-8 lg:px-0"
              width={600}
              height={500}
            />
            <div className="px-8">
              <h2 className="mb-4 font-monserrat text-5xl font-bold md:text-[50px]">Sobre mí...</h2>
              <p className="font-monserrat">
                Soy cocinero peruano con más de 15 años de experiencia en el mundo gastronómico,
                fundador del canal Sonqu y apasionado por la cocina tradicional. Emprendedor y
                subcampeón del Segundo Torneo Nacional de Fuegos y Parrillas en la categoría
                Cilindro. Disfruto compartiendo mi conocimiento, enseñando a cocinar y contribuyendo
                con labores sociales, llevando el sabor y la tradición a más personas.
              </p>
            </div>
          </div>
          <p className="px-8 font-monserrat lg:px-0">
            Cocinero peruano y creador de contenido gastronómico con más de 15 años de experiencia
            en la cocina peruana. Fundador del canal Sonqu, con una comunidad de más de 2 millones
            de seguidores, y apasionado por la cocina tradicional de mi país. Emprendedor y
            subcampeón del Segundo Torneo Nacional de Fuegos y Parrillas en la categoría Cilindro.
            Disfruto compartiendo mi conocimiento, enseñando a cocinar y contribuyendo con labores
            sociales, llevando el sabor, la tradición y las costumbres del Perú a nuevos horizontes
            y a todos quienes disfrutan de lo que hago.
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
