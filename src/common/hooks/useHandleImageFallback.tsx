import { useEffect, useState } from 'react'
import { isValidImage } from '../helpers/images.helper'

const useHandleImageFallback = (image: string, fallbackImage: string) => {
  const [initialImage, setInitialImage] = useState(image)

  useEffect(() => {
    if (isValidImage(image)) {
      setInitialImage(fallbackImage)
    }
  }, [image, fallbackImage])

  const handleError = () => setInitialImage(fallbackImage)

  return { initialImage, handleError }
}

export default useHandleImageFallback
