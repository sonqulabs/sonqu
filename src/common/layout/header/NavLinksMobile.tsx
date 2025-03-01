'use client'
import { getMenuList } from '@/common/data/nav'

import { usePathname } from 'next/navigation'
import { ActiveLinksMobile } from './ActiveLinksMobile'
import { Suspense } from 'react'

export const NavLinksMobile = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)

  return (
    <div className="block lg:hidden">
      <div className="flex flex-col overflow-hidden">
        {menuList.map((link) => {
          return (
            <Suspense key={link.label} fallback={null}>
              <ActiveLinksMobile {...link} />
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}
