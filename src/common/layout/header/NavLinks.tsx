'use client'
import { getMenuList } from '@/common/data/nav'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { ActiveLinks } from './ActiveLinks'
import { SubMenuRecetas } from './SubMenuRecetas'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export const NavLinks = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)

  // console.log(listFood)

  return (
    <div className="hidden h-full lg:flex lg:items-center lg:gap-8">
      <div className="flex h-full items-center gap-8">
        {menuList.map((link) => {
          return (
            <Suspense key={link.label} fallback={null}>
              <ActiveLinks {...link} SubMenu={() => <SubMenuRecetas />} />
            </Suspense>
          )
        })}
      </div>
      <Link
        href="/tienda"
        className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-[#CE0146] px-3.5 py-1.5 font-medium text-white transition-all duration-300 hover:bg-[#CE0146] active:scale-95 active:bg-[#CE0146]"
      >
        <span className="absolute left-0 top-0 h-full w-full -translate-x-full transform bg-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-20"></span>
        <ShoppingBag className="h-4 w-4" />
        <span className="font-monserrat text-sm font-normal">Tienda</span>
      </Link>
    </div>
  )
}
