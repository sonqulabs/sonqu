import Image from 'next/image'
import Link from 'next/link'
import useHandleImageFallback from '@/common/hooks/useHandleImageFallback'
import { IMAGEFALLBACK } from '@/common/data/constant'
export const ItemCarousel = ({ name, image, path }: Props) => {
  const { initialImage, handleError } = useHandleImageFallback(image, IMAGEFALLBACK.MEDIUM)

  return (
    <Link
      href={`/categoria/${path}`}
      className="flex aspect-square flex-col items-center gap-2 text-center font-poppins text-sm font-medium uppercase lg:text-base"
    >
      <div className="h-full w-full overflow-hidden rounded-3xl">
        <Image
          src={initialImage}
          alt={name}
          className="w-full object-cover transition-transform duration-300 hover:scale-105"
          width="200"
          height="200"
          placeholder="blur"
          blurDataURL="/loading.webp"
          onError={handleError}
        />
      </div>
      {name}
    </Link>
  )
}

type Props = {
  name: string
  image: string
  path: string
}
