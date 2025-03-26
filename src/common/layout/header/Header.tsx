'use client'
import Image from 'next/image'
import Link from 'next/link'
import MenuMobile from './MenuMobile'
import { NavLinks } from './NavLinks'
// import SearchNav from './Search'
import { cn } from '@/lib/utils'
import SearchS from '@/modules/search/components/SearchS/SearchS'
import { usePathname } from 'next/navigation'
import { Suspense, useState } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY
  //     if (offset > 50) {
  //       setScrolled(true)
  //     } else {
  //       setScrolled(false)
  //     }
  //   }
  //   handleScroll()

  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const navbarBgClass = () => {
    if (scrolled) {
      return 'bg-primary/70 backdrop-blur-md'
    } else if (isHomePage) {
      return 'bg-transparent'
    } else {
      return 'bg-primary/40 backdrop-blur-sm'
    }
  }

  return (
    <header className={cn('sticky top-0 z-40 bg-black drop-shadow-md')}>
      {/* <header className="sticky top-0 z-40 bg-sonqu-white-400 drop-shadow-md"> */}
      <div className="container flex h-14 items-center justify-between">
        <div className="flex w-full items-center gap-7">
          <Link href="/" className="w-full max-w-[80px]">
            <Image
              src="/logo.png"
              alt="logo de sonqu"
              className="w-full object-cover"
              width="100"
              height="60"
              priority
            />
          </Link>
          {/* <SearchNav /> */}
          <Suspense fallback={<div>loading...</div>}>
            {/* <Search searchAuto={true} model={1} /> */}
            <SearchS model={1} />
          </Suspense>
        </div>
        <div className="flex h-full w-full items-center justify-end gap-2 lg:gap-6">
          <NavLinks />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
