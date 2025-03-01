'use client'
import { useMenuStore } from '@/context/menuMobile'
import { NavLinksMobile } from './NavLinksMobile'

import { Button } from '@/common/components/shadcnui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/common/components/shadcnui/sheet'
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
