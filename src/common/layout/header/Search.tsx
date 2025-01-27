import { cn } from '@/lib/utils'
import StylesButton from '../../styles/header.module.css'
import { SearchIcon } from '@/common/components/icons/outline/SearchIcon'
import Link from 'next/link'
const SearchNav = () => {
  return (
    <Link
      href={'/search'}
      className={cn(
        StylesButton.shadowSearch,
        'mr-5 flex items-center justify-between rounded-md bg-white px-2.5 py-2.5 text-xs text-gray-500/80 hover:bg-white/80'
      )}
    >
      <SearchIcon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
      <span className="mr-2 hidden h-5 border-r border-gray-300 sm:inline-flex"></span>
      <span className="hidden px-1 sm:inline-flex">¿Qué esta buscando?</span>
    </Link>
  )
}

export default SearchNav
