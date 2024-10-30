import { isStringEmpty } from './string.helper'

export const isValidImageFormat = (image: string) => {
  const imageFormatRegex = /\.(png|webp|jpe?g)$/i
  return imageFormatRegex.test(image)
}
export const isValidImage = (image: string) => {
  return isStringEmpty(image) || !isValidImageFormat(image)
}
