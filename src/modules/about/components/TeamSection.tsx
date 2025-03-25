'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/common/components/shadcnui/carousel'
import React, { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

// Componente ExpandableText sin useEffect, basado en una longitud de caracteres para determinar truncamiento
interface ExpandableTextProps {
  text: string
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  // Se define un umbral de caracteres; si el texto lo excede, se mostrará el botón "Ver más"
  const maxCharThreshold = 75
  const shouldTruncate = text.length > maxCharThreshold

  return (
    <div className="px-4">
      <div
        className={`${!isExpanded && shouldTruncate ? 'line-clamp-2' : ''} transition-all duration-300`}
      >
        {text}
      </div>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-2 font-bold text-blue-500 hover:underline hover:underline-offset-4"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  )
}
export default function TeamSection() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  const teamMembers = [
    {
      name: 'Edson Ames',
      role: 'Productor audiovisual ',
      image: '/about/M1.webp',
      bio: 'Fusionamos la experiencia con lo especial y como productor audiovisual te llevare conocer de nuestros productos y su historia.'
    },
    {
      name: 'Cristhian Morales',
      role: 'Administrador y Financiero',
      image: '/about/M2.webp',
      bio: 'Mi pasión es convertir visiones en realidades, inspirándome en cada decisión para transformar lo pequeño en grande.'
    },
    {
      name: 'Jitoshi Dominguez',
      role: 'Barista Senior',
      image: '/about/M4.webp',
      bio: 'Especialista en postres peruanos, Ana combina técnicas tradicionales con toques modernos.'
    },
    {
      name: 'Eric Raúl',
      role: 'Ceo',
      image: '/about/M2.webp',
      bio: 'Luis asegura que nuestras recetas sean no solo deliciosas, sino también nutritivas y balanceadas.'
    },
    {
      name: 'Lesly Morales',
      role: 'Editora',
      image: '/about/M3.webp',
      bio: 'Luis asegura que nuestras recetas sean no solo deliciosas, sino también nutritivas y balanceadas.'
    },
    {
      name: 'Luis Vargas',
      role: 'Nutricionista',
      image:
        'https://img.freepik.com/foto-gratis/cerca-voluntario-sonriendo_23-2149134454.jpg?t=st=1740083938~exp=1740087538~hmac=990dc3fb105ee2752c18f395b5b587c53b0f11a5c847c3b2a7dc7c3aa21bf3f4&w=740',
      bio: 'Luis asegura que nuestras recetas sean no solo deliciosas, sino también nutritivas y balanceadas.'
    }
  ]
  const colors = ['bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-purple-300', 'bg-yellow-300']

  return (
    <section className="pt-16">
      <div>
        <h2 className="mb-3 text-center font-monserrat text-[30px] font-bold uppercase lg:text-4xl">
          Nuestro Equipo
        </h2>
        <p className="mx-auto mb-12 text-center font-fingerPaint text-[18px] text-[#646161] lg:text-xl">
          Conoce a nuestros expertos de sonqu
        </p>
        <Carousel plugins={[plugin.current]} className="w-full pb-16 max-sm:px-8">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="py-2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <div className="relative w-full rounded-[100px] bg-white py-8 shadow-md">
                  <div className="relative mx-auto mb-4 h-full max-h-64 w-full max-w-64 overflow-hidden rounded-full">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="bold mb-1 font-monserrat text-[28px] font-bold">
                      {member.name}
                    </h3>
                    <p className="mb-3 font-fingerPaint text-[16px] font-medium text-[#646161]">
                      {member.role}
                    </p>
                    <ExpandableText text={member.bio} />
                  </div>
                  <div
                    className={`absolute bottom-0 left-1/2 h-[10px] w-[50%] -translate-x-1/2 ${colors[index % colors.length]}`}
                  ></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Image
          src="/about-me/separator.webp"
          alt=""
          className="w-full object-cover"
          width={900}
          height={200}
        />
      </div>
    </section>
  )
}
