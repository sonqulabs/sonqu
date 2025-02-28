'use client'

import React from 'react'
import Image from 'next/image'
import { Upload } from 'lucide-react'

export function HomeMarcas() {
  return (
    <div className="space-y-8">
      <div className="mx-auto mt-24 max-w-5xl">
        <div className="relative overflow-hidden rounded-[30px] shadow-xl">
          <Image
            src="/portada.jpg"
            alt="Fondo de cocina"
            width={800}
            height={400}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative bg-black bg-opacity-60 p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="mb-4 max-w-lg text-4xl font-bold text-white">
                ¿Esa receta que siempre piden en casa?
              </h2>
              <p className="mb-8 max-w-xl text-lg text-white">
                💛 Comparte tu receta favorita y forma parte de nuestra comunidad de amantes de la
                buena comida. ¡Juntos hacemos la cocina más divertida! 🍽️👨‍🍳
              </p>
              <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-sonqu-yellow-300 px-3 py-3 text-sm font-semibold text-sonqu-red-300 transition-colors hover:bg-yellow-300 lg:w-auto lg:px-5 lg:text-base">
                <Upload className="size-5" />
                Sube tu receta
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-16 flex items-center overflow-hidden bg-[#1A1A19] py-20">
        <Image
          src="/fondohomemid.jpg"
          alt=""
          className="absolute inset-0 w-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Column - Text */}
          <div className="relative z-10 flex w-full flex-col justify-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Marcas Aliadas
              <br /> De Sonqu
            </h2>
            <p className="flex items-center gap-2 font-fingerPaint text-lg text-white">
              ¡Juntos hacemos más! <span className="text-2xl text-yellow-400">💡</span>
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-full">
              <Image
                src="/quality.png"
                alt="Cocina Gourmet"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-xl font-bold">Cocina Gourmet</h3>
            </div> */}
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-full">
              <Image
                src="/ajinomoto.png"
                alt="Postres Artesanales"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-full">
              <Image
                src="/quality.png"
                alt="Bebidas Exclusivas"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
