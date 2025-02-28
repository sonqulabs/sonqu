import { SearchIcon } from '@/common/components/icons/outline/SearchIcon'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import StylesButton from '../../styles/header.module.css'
const SearchNav = () => {
  return (
    <Link
      href={'/search'}
      className={cn(
        StylesButton.shadowSearch,
        'flex h-8 w-auto items-center justify-start whitespace-nowrap rounded-xl border border-[#44444415] bg-[#00000009] px-4 text-xs text-gray-500/80 hover:bg-white/5'
      )}
    >
      <SearchIcon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
      <span className="hidden px-1 sm:inline-flex">¿Qué receta esta buscando?</span>
    </Link>
  )
}

export default SearchNav
