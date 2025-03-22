'use client'

import { Input } from '@/common/components/shadcnui/input'
import { cn } from '@/lib/utils'
import { Search, SearchIcon, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface SearchBarProps {
  value: string
  onChange: (e, valueA?) => void
  onSearch: (e) => void
  onFocus: () => void
  onBlur: () => void
  onCleanQuery: () => void
  model?: number
}

export function SearchBar({
  value,
  onChange,
  onSearch,
  onFocus,
  onBlur,
  onCleanQuery,
  model
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

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
        ref={inputRef}
        type="search"
        placeholder="Buscar recetas..."
        className={cn(
          'w-full rounded-xl py-4 pl-12 pr-12 text-lg shadow-lg',
          model == 1
            ? 'h-5 border border-[#44444415] bg-[#8b89894d] text-gray-100 shadow-none hover:bg-[#8b89894d] focus-visible:ring-0 focus-visible:ring-offset-0'
            : 'bg-[#fdfdfddc]'
        )}
        value={value}
        // autoFocus={true}
        // onFocusCapture={onFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
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
    // <div className="relative">
    //   <input
    //     type="text"
    //     placeholder="Buscar recetas..."
    //     value={value}
    //     onChange={(e) => onChange(e.target.value)}
    //     onKeyDown={(e) => {
    //       if (e.key === 'Enter') {
    //         onSearch(value)
    //       }
    //     }}
    //     onClick={onFocus}
    //     onBlur={onBlur}
    //     className="w-full rounded-lg border-none py-4 pl-12 pr-10 text-lg shadow-sm outline-none focus:ring-2 focus:ring-orange-200"
    //     aria-label="Buscar recetas"
    //   />
    //   <div className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400">
    //     <Search className="h-5 w-5" />
    //   </div>
    //   {value && (
    //     <button
    //       className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
    //       onClick={() => onChange('')}
    //       aria-label="Limpiar búsqueda"
    //     >
    //       <X className="h-5 w-5" />
    //     </button>
    //   )}
    // </div>
  )
}
