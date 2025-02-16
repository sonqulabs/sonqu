import { SearchIcon } from '@/common/components/icons/outline/SearchIcon'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import StylesButton from '../../styles/header.module.css'
const SearchNav = () => {
  return (
    // <div className="relative">
    //   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    //   <input
    //     type="search"
    //     placeholder="¿Qué estás buscando?"
    //     className="w-full bg-muted pl-8 pr-4"
    //     // onFocus={() => setIsSearchFocused(true)}
    //     // onBlur={() => setIsSearchFocused(false)}
    //   />
    // </div>
    <Link
      href={'/search'}
      className={cn(
        StylesButton.shadowSearch,
        'mr-5 flex w-80 items-center justify-start rounded-md border border-[#44444415] bg-[#00000009] px-2.5 py-2.5 text-xs text-gray-500/80 hover:bg-white/5'
      )}
    >
      <SearchIcon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
      <span className="hidden h-5 sm:inline-flex"></span>
      {/* <span className="mr-2 hidden h-5 border-r border-gray-200 sm:inline-flex"></span> */}
      <span className="hidden px-1 sm:inline-flex">¿Qué esta buscando?</span>
    </Link>
  )
}

export default SearchNav
