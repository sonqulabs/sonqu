'use client'
import { useMenuStore } from '@/context/menuMobile'
import { NavLinksMobile } from './NavLinksMobile'

import { Button } from '@/common/components/shadcnui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/common/components/shadcnui/sheet'
import Search from '@/modules/search/components/Search'
import { Menu } from 'lucide-react'

const MenuMobile = () => {
  const { isOpen, toggleMenu } = useMenuStore()

  return (
    <div className="flex flex-1 items-center justify-end lg:hidden">
      <Sheet open={isOpen} onOpenChange={toggleMenu}>
        <SheetTrigger asChild>
          <Button variant="secondary" className="bg-transparent hover:bg-white/30" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription hidden></SheetDescription>
          <div className="mt-6 space-y-6">
            <div className="space-y-2">
              {/* <Input type="search" placeholder="¿Qué estás buscando?" className="w-full" /> */}
              <Search searchAuto={false} />
            </div>
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
