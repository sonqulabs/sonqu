'use client'
import { useMenuStore } from '@/context/menuMobile'
import { NavLinksMobile } from './NavLinksMobile'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/common/components/shadcnui/sheet'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'

const MenuMobile = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenuStore()
  return (
    <div className="flex flex-1 items-center justify-end lg:hidden">
      <Sheet open={isOpen} onOpenChange={toggleMenu}>
        <SheetTrigger asChild>
          <button className="h-auto bg-transparent p-0 hover:bg-transparent">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle className="mb-4 font-monserrat">Menu</SheetTitle>
          <SheetDescription hidden></SheetDescription>
          <div className="space-y-6">
            <Link
              href="/search"
              className="flex w-full items-center gap-4 rounded-xl border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)]"
              onClick={closeMenu}
            >
              <Search className="h-4 w-4" />
              <span className="font-monserrat text-sm">Buscar recetas...</span>
            </Link>
            <nav className="space-y-2">
              <NavLinksMobile />
              {/* <NavLinks mobile /> */}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
