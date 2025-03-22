'use client'

import React from 'react'
import Image from 'next/image'

export function HomeMarcas() {
  return (
    <div className="space-y-8">
      <div className="relative flex items-center overflow-hidden bg-[#1A1A19] py-20">
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
