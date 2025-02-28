import Image from 'next/image'
import Link from 'next/link'
import useHandleImageFallback from '@/common/hooks/useHandleImageFallback'
import { IMAGEFALLBACK } from '@/common/data/constant'
export const ItemCarousel = ({ name, image, path }: Props) => {
  const { initialImage, handleError } = useHandleImageFallback(image, IMAGEFALLBACK.MEDIUM)

  return (
    <Link
      href={`/categoria/${path}`}
      className="group relative flex aspect-square flex-col items-center gap-2 text-center font-poppins text-sm font-medium lg:text-base"
    >
      <div className="h-full w-full overflow-hidden rounded-[30px]">
        <Image
          src={initialImage}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          width="200"
          height="200"
          placeholder="blur"
          blurDataURL="/loading.webp"
          onError={handleError}
        />
      </div>
      <div className="absolute inset-0 rounded-[30px] bg-black/30"></div>
      <div className="absolute z-20 flex h-full w-full items-center justify-center text-white group-hover:underline group-hover:underline-offset-8">
        {name}
      </div>
    </Link>
  )
}

type Props = {
  name: string
  image: string
  path: string
}
