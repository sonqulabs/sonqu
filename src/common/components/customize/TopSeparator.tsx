import Image from 'next/image'
import React from 'react'

export const TopSeparator = ({className}: Props) => {
  return (
    <Image
          src="/fondo-hero.png"
          alt="separador top"
          className={className}
          width={700}
          height={10}
        />
  )
}

type Props = {
    className: string
}
