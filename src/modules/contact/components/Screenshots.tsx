import { cn } from "@/lib/utils"
import Image from "next/image"
import ContactStyles from '../style/contact.module.css'

const images = [
  "/screen-facebook.png",
  "/screen-tiktok.png",
  "/screen-instagram.png"
]

export const Screenshots = () => {
  return (
    <div className={cn(ContactStyles.wrapScreenShots, 'flex justify-between items-center flex-row flex-wrap gap-7 pt-16')}>
      {
        images.map(image => (
          <Image key={image} src={image} alt="Screenshot" width={315} height={632} />
        ))
      }
    </div>
  )
}
