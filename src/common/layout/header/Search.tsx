import { cn } from '@/lib/utils'
import StylesButton from '../../styles/header.module.css'
import { SearchIcon } from '@/common/components/icons/outline/SearchIcon'
const SearchNav = () => {
  return (
    <button
      className={cn(
        StylesButton.shadowSearch,
        'flex h-0 items-center justify-between rounded-md bg-white px-2.5 py-3 text-xs text-gray-500/80 hover:bg-white/80'
      )}
    >
      <SearchIcon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
      <span className="hidden sm:inline-flex">¿Qué esta buscando?...</span>
    </button>
  )
}

export default SearchNav
