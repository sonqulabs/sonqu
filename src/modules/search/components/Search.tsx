'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  function debounce(func, delay) {
    let timer
    return (...arg) => {
      clearTimeout(timer)
      timer = setTimeout(() => func(...arg), delay)
    }
  }

  const searchDebounce = debounce(handleSearch, 500)

  return (
    <div className="flex w-full max-w-96 gap-1 rounded-lg bg-white p-2">
      <input
        onChange={(event) => searchDebounce(event.target.value)}
        type="text"
        className="flex-1 border-r border-gray-400 outline-none"
        defaultValue={searchParams.get('query')?.toString()}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-search opacity-40"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </div>
  )
}

export default Search
