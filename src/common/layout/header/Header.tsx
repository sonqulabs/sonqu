import Image from 'next/image'
import { NavLinks } from './NavLinks'
import SearchNav from './Search'
import Link from 'next/link'
import MenuMobile from './MenuMobile'

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-sonqu-white-400 drop-shadow-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex gap-7">
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
          <SearchNav />
        </div>
        <div className="flex items-center gap-2 lg:gap-6">
          <NavLinks />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
