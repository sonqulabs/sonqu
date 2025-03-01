'use client'
import { getMenuList } from '@/common/data/nav'

import { getCategories } from '@/modules/search/services/searchService'
import { usePathname } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { ActiveLinks } from './ActiveLinks'
import { SubMenuRecetas } from './SubMenuRecetas'

export const NavLinks = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)

  // console.log(listFood)

  return (
    <div className="hidden h-full lg:block">
      <div className="flex h-full items-center gap-10">
        {menuList.map((link) => {
          return (
            <Suspense key={link.label} fallback={null}>
              <ActiveLinks {...link} SubMenu={() => <SubMenuRecetas />} />
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}
