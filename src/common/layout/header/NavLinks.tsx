'use client'
import { getMenuList } from '@/common/data/nav'

import { usePathname } from 'next/navigation'
import { ActiveLinks } from './ActiveLinks'
import { Suspense } from 'react'

export const NavLinks = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)
  return (
    <div className="hidden lg:block">
      <div className="flex items-center gap-10">
        {menuList.map((link) => {
          return (
            <Suspense key={link.label} fallback={null}>
              <ActiveLinks {...link} />
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}
