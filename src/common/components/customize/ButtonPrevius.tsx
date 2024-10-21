'use client'
import { LeftArrow } from '../icons/solid/LeftArrow'
import { useRouter } from 'next/navigation'
export const ButtonPrevius = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="flex w-fit items-center justify-start gap-2 text-sm font-medium text-sonqu-red-300 hover:underline hover:underline-offset-4"
    >
      <LeftArrow className="size-10 !w-fit fill-sonqu-red-300 md:h-16 md:w-20" />
      Regresar
    </button>
  )
}
