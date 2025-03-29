import { cn } from '@/lib/utils'
import React from 'react'
import HomeStyles from './style/home.module.css'
import Link from 'next/link'

export const HomeShareRecipe = () => {
  return (
    <div className={cn(HomeStyles.fondoShareRecipe, 'wrapper')}>
      <div className="container relative">
        <div className="absolute top-52 w-full max-w-[300px] max-lg:left-1/2 max-sm:left-4 sm:max-w-[370px] sm:-translate-x-1/2 md:top-[300px] lg:right-40 lg:top-[350px] lg:translate-x-0 xl:top-40">
          <h3 className="mb-6 hidden text-center font-monserrat text-[30px] font-bold uppercase leading-tight md:text-[40px] xl:block">
            ¡COMPARTE TU RECETA!
          </h3>
          <div className="flex w-full flex-col items-center gap-2.5 rounded-[35px] bg-white px-4 py-9 font-monserrat shadow-lg sm:px-7">
            <h4 className="text-[20px] font-bold">Envíanos tu receta</h4>
            <p className="w-full text-center text-[14px]">
              Comparte tu receta favorita y forma parte de nuestra comunidad de amantes de la buena
              comida. ¡Juntos hacemos la cocina más divertida! 🍽️👨‍🍳
            </p>
            <Link
              href="/subir-receta"
              className="rounded-lg bg-[#ED7203] px-8 py-1.5 text-sm text-white"
            >
              SUBIR RECETA
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
