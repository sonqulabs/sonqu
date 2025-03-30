import { cn } from '@/lib/utils'
import Image from 'next/image'

export const TopSeparator2 = ({ className }: Props) => {
  return (
    <div className="wrapper flex-1">
      {/* <div
        // className="h-10 bg-[url('/about-me/separator.webp')] bg-contain bg-top bg-repeat-x"
        className={cn(
          "h-8 bg-[url('/about-me/separator.webp')] bg-cover bg-top bg-repeat-x md:h-14 md:bg-contain",
          className
        )}
      ></div> */}

      <Image
        src="/about-me/separator.webp"
        alt=""
        className={cn('w-full object-cover', className)}
        width={900}
        height={200}
      />
    </div>
  )
}

type Props = {
  className?: string
}
