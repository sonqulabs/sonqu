import Image from 'next/image'
import React from 'react'
import StyleTopSeparator from '../../styles/components/separatortop.module.css'
import { cn } from '@/lib/utils'

export const TopSeparator = ({ className }: Props) => {
  return (
    <Image
      src="/fondo-hero.png"
      alt="separador top"
      className={cn(StyleTopSeparator.imgTop, className, 'w-full object-cover')}
      width={700}
      height={10}
    />
  )
}

type Props = {
  className?: string
}
