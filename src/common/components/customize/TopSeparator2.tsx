import { cn } from '@/lib/utils'

export const TopSeparator2 = ({ className }: Props) => {
  return (
    <div className="wrapper flex-1">
      <div
        // className="h-10 bg-[url('/about-me/separator.webp')] bg-contain bg-top bg-repeat-x"
        className={cn(
          "mt-2 h-8 bg-[url('/about-me/separator.webp')] bg-cover bg-top bg-repeat-x md:h-14 md:bg-contain",
          className
        )}
      ></div>
      {/* <Image
        src="/about-me/separator.webp"
        alt=""
        // className={cn('h-full w-full object-cover pt-2', className)}
        className={cn("h-screen bg-[url('/about-me/separator.webp')] bg-repeat-x bg-auto bg-top", className)}
        width={900}
        height={200}
      /> */}
    </div>
  )
}

type Props = {
  className?: string
}
