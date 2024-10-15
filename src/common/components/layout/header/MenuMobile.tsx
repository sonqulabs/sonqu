import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@shadcnui/popover'
import { MenuIcon } from '../../icons/solid/MenuIcon'

const MenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="rounded-md bg-transparent px-0 text-sm text-black shadow-none transition-all hover:bg-transparent lg:hidden">
          <MenuIcon className="size-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          'bg-p-blue-300 max-w-full overflow-auto border-none data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
          {
            // 'rounded-none': isScrolled,
            // 'rounded-none rounded-tl-lg': !isScrolled
          }
        )}
        sideOffset={20}
        showOverlay
      >
        <span className="fill-p-blue-300 absolute right-[9%] top-0 z-50 origin-top rotate-180 transform">
          <svg
            className="block"
            width="10"
            height="5"
            viewBox="0 0 30 10"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 30,0 15,10" />
          </svg>
        </span>
      </PopoverContent>
    </Popover>
  )
}

export default MenuMobile
