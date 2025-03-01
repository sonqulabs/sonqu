'use client'
import Image from 'next/image'
import Link from 'next/link'
import MenuMobile from './MenuMobile'
import { NavLinks } from './NavLinks'
import SearchNav from './Search'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useCategoriesStore } from '@/context/useCategoriesStore'
import Search from '@/modules/search/components/Search'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const { getCategories } = useCategoriesStore()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    getCategories()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    <header className={cn('fixed left-0 right-0 top-0 z-40 drop-shadow-md', navbarBgClass())}>
      {/* <header className="sticky top-0 z-40 bg-sonqu-white-400 drop-shadow-md"> */}
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-7">
          <Link href="/" className="my-auto">
            <Image
              src="/logoSonqu.png"
              alt="logo de sonqu"
              className="h-auto w-24 object-contain"
              width="100"
              height="40"
              priority
            />
          </Link>
          {/* <SearchNav /> */}
          <Search model={1} />
        </div>
        <div className="flex h-full items-center gap-2 lg:gap-6">
          <NavLinks />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
