'use client'
import { getMenuList } from '@/common/data/nav'

import { usePathname } from 'next/navigation'
import { ActiveLinksMobile } from './ActiveLinksMobile'

export const NavLinksMobile = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)
  return (
    <div className="block lg:hidden">
      <div className="flex flex-col overflow-hidden">
        {menuList.map((link) => {
          return <ActiveLinksMobile key={link.label} {...link} />
        })}
      </div>
    </div>
  )
}
