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
import logoSonqu from '@recursos/logoSonqu.webp'
export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className={cn('sticky top-0 z-40 bg-black drop-shadow-md')}>
      {/* <header className="sticky top-0 z-40 bg-sonqu-white-400 drop-shadow-md"> */}
      <div className="container flex h-14 items-center justify-between">
        <div className="flex w-full items-center gap-7">
          <Link href="/" className="w-full max-w-[80px]">
            <Image
              src={logoSonqu}
              alt="logo de sonqu"
              className="h-auto w-[100px] object-cover"
              priority
            />
          </Link>
          {/* <SearchNav /> */}
          <Suspense fallback={<div>loading...</div>}>
            {/* <Search searchAuto={true} model={1} /> */}
            <SearchS model={1} />
          </Suspense>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <NavLinks />

          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
