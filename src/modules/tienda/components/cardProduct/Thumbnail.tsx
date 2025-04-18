/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'
import PlaceholderImage from './placeholder-image'

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?: 'small' | 'medium' | 'large' | 'full' | 'square'
  isFeatured?: boolean
  className?: string
  'data-testid'?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = 'small',
  isFeatured,
  className
}) => {
  const initialImage = thumbnail || images?.[0]

  return (
    <div
      className={cn(
        'bg-ui-bg-subtle shadow-elevation-card-rest group-hover:shadow-elevation-card-hover relative w-full overflow-hidden rounded-2xl p-4 transition-shadow duration-150 ease-in-out',
        className,
        {
          'aspect-[11/14]': isFeatured,
          'aspect-[9/16]': !isFeatured && size !== 'square',
          'aspect-[1/1]': size === 'square',
          'w-[180px]': size === 'small',
          'w-[290px]': size === 'medium',
          'w-[440px]': size === 'large',
          'w-full': size === 'full'
        }
      )}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
    </div>
  )
}

const ImageOrPlaceholder = ({ image, size }: Pick<ThumbnailProps, 'size'> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center"
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center">
      <PlaceholderImage size={size === 'small' ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
