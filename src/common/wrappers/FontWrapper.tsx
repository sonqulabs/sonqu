import { cn } from '@/lib/utils'
import { Inter, Manrope, Fjalla_One, Finger_Paint } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope'
})
const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  variable: '--font-fjalla-one',
  weight: '400'
})
const fingerPaint = Finger_Paint({
  subsets: ['latin'],
  variable: '--font-finger-paint',
  weight: '400'
})

const FontWrapper = ({ children }: FontWrapperProps) => {
  return (
    <body
      className={cn(
        inter.variable,
        manrope.variable,
        fjallaOne.variable,
        fingerPaint.variable,
        'bg-marus-orange-200 flex min-h-screen flex-col font-sans antialiased'
      )}
    >
      {children}
    </body>
  )
}

type FontWrapperProps = {
  children: ReactNode
}

export default FontWrapper
