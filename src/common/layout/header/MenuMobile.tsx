'use client'
import { MenuIcon } from '@/common/components/icons/solid/MenuIcon'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@shadcnui/popover'
import { NavLinksMobile } from './NavLinksMobile'
import { useMenuStore } from '@/context/menuMobile'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/common/components/shadcnui/sheet'
import { Button } from '@/common/components/shadcnui/button'
import { ChevronDown, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from '@/common/components/shadcnui/input'
import Search from '@/modules/search/components/Search'

function NavLinks({ mobile }: { mobile?: boolean }) {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const items = [
    { label: 'INICIO', href: '/' },
    { label: 'RECETAS', href: '/recetas', hasDropdown: true },
    { label: 'NOSOTROS', href: '/nosotros' },
    { label: 'CONTACTO', href: '/contacto' }
  ]

  return items.map((item) => (
    <div key={item.label} className={cn('relative', mobile && 'w-full')}>
      {item.hasDropdown ? (
        <button
          onClick={() => setActiveItem(activeItem === item.label ? null : item.label)}
          className={cn(
            'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
            mobile && 'w-full justify-between'
          )}
        >
          {item.label}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              activeItem === item.label && 'rotate-180'
            )}
          />
        </button>
      ) : (
        <Link
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            mobile && 'block w-full'
          )}
        >
          {item.label}
        </Link>
      )}
    </div>
  ))
}

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
          <div className="mt-6 space-y-6">
            <div className="space-y-2">
              {/* <Input type="search" placeholder="¿Qué estás buscando?" className="w-full" /> */}
              <Search />
            </div>
            <nav className="space-y-2">
              <NavLinksMobile />
              {/* <NavLinks mobile /> */}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
    // <Popover open={isOpen} onOpenChange={toggleMenu}>
    //   <PopoverTrigger asChild>
    //     <button className="rounded-md bg-transparent px-0 text-sm text-black shadow-none transition-all hover:bg-transparent lg:hidden">
    //       <MenuIcon className="size-5" />
    //     </button>
    //   </PopoverTrigger>
    //   <PopoverContent
    //     className={cn(
    //       'max-w-full overflow-auto rounded-t-none rounded-ee-none rounded-se-md border-none bg-sonqu-white-400 p-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
    //     )}
    //     sideOffset={18}
    //     showOverlay
    //   >
    //     {/* <span className="absolute right-[7.5%] top-0 z-50 origin-top rotate-180 transform fill-sonqu-white-500">
    //       <svg
    //         className="block"
    //         width="10"
    //         height="5"
    //         viewBox="0 0 30 10"
    //         preserveAspectRatio="none"
    //       >
    //         <polygon points="0,0 30,0 15,10" />
    //       </svg>
    //     </span> */}

    //     <NavLinksMobile />
    //   </PopoverContent>
    // </Popover>
  )
}

export default MenuMobile
