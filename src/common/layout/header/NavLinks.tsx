'use client'
import { getMenuList } from '@/common/data/nav'

import { usePathname } from 'next/navigation'
import { ActiveLinks } from './ActiveLinks'

export const NavLinks = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)
  return (
    <div className="hidden lg:block">
      <div className="flex items-center gap-10">
        {menuList.map((link) => {
          return <ActiveLinks key={link.label} {...link} />
        })}
      </div>
    </div>
  )
}
