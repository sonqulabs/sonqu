'use client'
import { usePathname } from 'next/navigation'
import { ActiveLinks } from './ActiveLinks'
import { getMenuList } from '@/common/data/nav'

export const NavLinks = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)
  return (
    <div className="hidden gap-3 lg:flex">
      {menuList.map((link) => {
        return <ActiveLinks key={link.name} {...link} />
      })}
    </div>
  )
}
