import { cn } from '@/lib/utils'
import { Inter, Manrope, Fjalla_One, Finger_Paint, Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import Footer from '../layout/footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
        poppins.variable,
        'flex min-h-screen flex-col bg-sonqu-white-400 font-poppins antialiased'
      )}
    >
      {children}
      <Footer />
    </body>
  )
}

type FontWrapperProps = {
  children: ReactNode
}

export default FontWrapper
