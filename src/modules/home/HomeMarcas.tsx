'use client'

import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/common/components/shadcnui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export function HomeMarcas() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  const Marcas = [
    {
      image: '/quality.png'
    },
    {
      image: '/ajinomoto.png'
    },
    {
      image: '/quality.png'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="relative flex items-center overflow-hidden bg-[#1A1A19] px-4 py-20">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          {/* Left Column - Text */}
          <div className="relative z-10 flex w-full flex-col justify-center">
            <h2 className="mb-4 font-monserrat text-4xl font-bold tracking-tight text-white md:text-5xl">
              Marcas Aliadas
              <br /> De Sonqu
            </h2>
            <p className="flex items-center gap-2 font-fingerPaint text-lg text-white">
              ¡Juntos hacemos más! <span className="text-2xl text-yellow-400">💡</span>
            </p>
          </div>

          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent>
              {Marcas.map((marca, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
                  <Image
                    src={marca.image}
                    alt="colaboracion de sonqu"
                    width={300}
                    height={300}
                    className="h-full w-full rounded-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
