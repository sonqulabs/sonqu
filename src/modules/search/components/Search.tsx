'use client'
import { Input } from '@/common/components/shadcnui/input'
import { useMenuStore } from '@/context/menuMobile'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import useSearchParamPage from '../hooks/useSearchParamPage'
import { cn } from '@/lib/utils'

const Search = ({ model }: { model?: number }) => {
  const searchParams = useSearchParams()
  // const pathname = usePathname()
  const { replace } = useRouter()
  const { checkParamPage } = useSearchParamPage()

  const { closeMenu } = useMenuStore()
  // console.log({ pathname })
  const handleSearch = (term: string) => {
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
    closeMenu()
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
    <div className={cn('relative mx-auto w-full max-w-96', model == 1 && 'hidden lg:flex')}>
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
        // type="text"
        // placeholder="ejemplo: pizza, pasta, etc."
        // className="flex-1 bg-transparent px-1 outline-none"
        defaultValue={searchParams.get('query')?.toString()}
      />
      <SearchIcon className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
    </div>
    // <div className="flex w-full max-w-96 gap-1 rounded-lg border border-[#3a3a3a11] bg-[#fdfdfddc] p-2.5 shadow-md">
    //   <input
    //     autoFocus={true}
    //     onChange={(event) => searchDebounce(event.target.value)}
    //     type="text"
    //     // placeholder="ejemplo: pizza, pasta, etc."
    //     className="flex-1 bg-transparent px-1 outline-none"
    //     defaultValue={searchParams.get('query')?.toString()}
    //   />
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width={20}
    //     height={20}
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     stroke="currentColor"
    //     strokeWidth={2}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     className="icon icon-tabler icons-tabler-outline icon-tabler-search m-auto opacity-40"
    //   >
    //     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //     <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    //     <path d="M21 21l-6 -6" />
    //   </svg>
    // </div>
  )
}

export default Search
