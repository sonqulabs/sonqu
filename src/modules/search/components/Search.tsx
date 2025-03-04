'use client'
import { Input } from '@/common/components/shadcnui/input'
import { useMenuStore } from '@/context/menuMobile'
import { useQueryStore } from '@/context/useQueryStore'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import useSearchParamPage from '../hooks/useSearchParamPage'

const Search = ({ model, searchAuto }: { model?: number; searchAuto?: boolean }) => {
  const searchParams = useSearchParams()
  // const pathname = usePathname()
  const { replace } = useRouter()
  const { checkParamPage } = useSearchParamPage()
  // const [query, setQuery] = useState(searchParams.get('query')?.toString())
  const { query, setQuery } = useQueryStore()

  const { closeMenu } = useMenuStore()

  const handleSearch = (term: string) => {
    console.log(term)
    const params = new URLSearchParams(searchParams)
    checkParamPage(params)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${'/search'}?${params.toString()}`, {
      scroll: false
    })
  }

  function debounce(func, delay) {
    let timer
    return (...arg) => {
      clearTimeout(timer)
      timer = setTimeout(() => func(...arg), delay)
    }
  }

  const searchDebounce = (value) => {
    setQuery(value)
    if (searchAuto) {
      debounce(handleSearch, 500)(value)
    }
  }

  const submit = (e, query) => {
    e.preventDefault()
    closeMenu()
    handleSearch(query)
  }

  const handleSend = () => {
    closeMenu()
    handleSearch(query)
  }

  useEffect(() => {
    setQuery(searchParams.get('query')?.toString() || '')
  }, [])

  return (
    <form
      onSubmit={(e) => submit(e, query)}
      className={cn('relative mx-auto w-full max-w-96', model == 1 && 'hidden lg:flex')}
    >
      <Input
        type="search"
        placeholder="Buscar recetas..."
        className={cn(
          'w-full rounded-xl py-6 pl-4 pr-12 text-lg shadow-lg',
          model == 1
            ? 'h-5 border border-[#44444415] bg-[#8b89894d] py-5 text-gray-100 shadow-none hover:bg-white/5 focus-visible:ring-0 focus-visible:ring-offset-0 active:border-0'
            : 'bg-[#fdfdfddc]'
        )}
        autoFocus={true}
        onChange={(event) => searchDebounce(event.target.value)}
        value={query}
        // defaultValue={searchParams.get('query')?.toString()}
      />
      <SearchIcon
        onClick={handleSend}
        className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-gray-400"
      />
    </form>
  )
}

export default Search
