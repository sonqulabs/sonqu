import { cn } from '@/lib/utils'
import Image from 'next/image'
import separator from '@recursos/about-me/separator.webp'

export const TopSeparator2 = ({ className }: Props) => {
  return (
    // <div className="wrapper">

    <Image
      src={separator}
      alt="separador de la pagina"
      className={cn('h-auto w-full object-cover', className)}
    />
    // </div>
  )
}

type Props = {
  className?: string
}
