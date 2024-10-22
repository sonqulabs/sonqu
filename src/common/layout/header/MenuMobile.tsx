'use client'
import { MenuIcon } from '@/common/components/icons/solid/MenuIcon'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@shadcnui/popover'
import { NavLinksMobile } from './NavLinksMobile'
import { useMenuStore } from '@/context/menuMobile'

const MenuMobile = () => {
  const { isOpen, toggleMenu } = useMenuStore()

  return (
    <Popover open={isOpen} onOpenChange={toggleMenu}>
      <PopoverTrigger asChild>
        <button className="rounded-md bg-transparent px-0 text-sm text-black shadow-none transition-all hover:bg-transparent lg:hidden">
          <MenuIcon className="size-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          'max-w-full overflow-auto rounded-t-none rounded-ee-none rounded-se-md border-none bg-sonqu-white-400 p-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
        )}
        sideOffset={18}
        showOverlay
      >
        {/* <span className="absolute right-[7.5%] top-0 z-50 origin-top rotate-180 transform fill-sonqu-white-500">
          <svg
            className="block"
            width="10"
            height="5"
            viewBox="0 0 30 10"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 30,0 15,10" />
          </svg>
        </span> */}

        <NavLinksMobile />
      </PopoverContent>
    </Popover>
  )
}

export default MenuMobile
