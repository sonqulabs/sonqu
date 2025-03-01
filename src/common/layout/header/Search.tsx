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
        'mr-5 hidden w-80 items-center justify-start rounded-md border border-[#44444415] bg-[#8b89894d] px-2.5 py-2.5 text-xs text-gray-100 hover:bg-white/5 lg:flex'
      )}
    >
      <SearchIcon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
      <span className="hidden px-1 sm:inline-flex">¿Qué receta esta buscando?</span>
    </Link>
  )
}

export default SearchNav
