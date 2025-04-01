import { cn } from '@/lib/utils'
import Image from 'next/image'

export const TopSeparator2 = ({ className }: Props) => {
  return (
    // <div className="wrapper">

    <Image
      src="/about-me/separator.webp"
      alt=""
      className={cn('aspect-[483/17] w-full object-cover', className)}
      width={900}
      height={200}
    />
    // </div>
  )
}

type Props = {
  className?: string
}
