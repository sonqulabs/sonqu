'use client'

import { Input } from '@/common/components/shadcnui/input'
import { cn } from '@/lib/utils'
import { SearchIcon, X } from 'lucide-react'
import { forwardRef } from 'react'

interface SearchBarProps {
  value: string
  onChange: (e, valueA?) => void
  onSearch: (e) => void
  onFocus?: () => void
  onBlur?: () => void
  onCleanQuery: () => void
  onMouseLeave?: () => void
  model?: number
}
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value,
      onChange,
      onSearch,
      onFocus,
      onBlur,
      onCleanQuery,
      onMouseLeave,
      model
    }: SearchBarProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    // const inputRef = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //   if (inputRef.current) {
    //     inputRef.current.focus()
    //   }
    // }, [])
    return (
      <form
        // onSubmit={(e) => submit(e, query)}

        onSubmit={onSearch}
        className={cn('relative mx-auto w-full', model == 1 && 'hidden lg:flex')}
      >
        <Input
          ref={ref}
          type="search"
          placeholder="Buscar recetas..."
          className={cn(
            'w-full rounded-xl py-4 pl-12 pr-12 text-lg shadow-lg',
            model == 1
              ? 'h-5 border border-[#44444415] bg-[#8b89894d] text-gray-100 shadow-none hover:bg-[#8b89894d] focus-visible:ring-0 focus-visible:ring-offset-0'
              : 'bg-[#fdfdfddc] py-5'
          )}
          value={value}
          // autoFocus={true}
          // onFocusCapture={onFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onMouseLeave={onMouseLeave}
          // onChange={(event) => searchDebounce(event.target.value)}
          // value={query}
          // defaultValue={searchParams.get('query')?.toString()}
        />
        <SearchIcon
          // onClick={handleSend}
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-400"
        />

        {value && (
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            onClick={(e) => {
              e.preventDefault()
              onCleanQuery()
            }}
            aria-label="Limpiar búsqueda"
          >
            <X className="h-5 w-5" />
          </div>
        )}
      </form>
    )
  }
)

SearchBar.displayName = 'SearchBar'

// export default SearchBar
