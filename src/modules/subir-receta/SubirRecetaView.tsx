import React from 'react'
import CrearFormRecipePublic from './components/FormSubir'
import Image from 'next/image'

export const SubirRecetaView = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/sube-tu-receta.webp"
        alt="banner de subir receta"
        className="h-[20vh] w-full object-cover md:h-[30vh] lg:h-[50vh]"
        width={900}
        height={400}
      />
      <div className="bg-white">
        <h1 className="mb-4 py-6 text-center font-monserrat text-3xl font-bold">Subir receta</h1>
        <CrearFormRecipePublic />
      </div>
      <Image
        src="/about-me/separator.webp"
        alt=""
        className="w-full object-cover"
        width={900}
        height={200}
      />
    </div>
  )
}
