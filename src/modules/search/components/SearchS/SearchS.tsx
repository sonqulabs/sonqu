'use client'

import { Badge } from '@/common/components/shadcnui/badge'
import { Carousel, CarouselContent, CarouselItem } from '@/common/components/shadcnui/carousel'
import { Input } from '@/common/components/shadcnui/input'
import { getImageRecipe } from '@/common/helpers/getImageRecipe'
import { useMenuStore } from '@/context/menuMobile'
import { useCategoriesStore } from '@/context/useCategoriesStore'
import { useQueryStore } from '@/context/useQueryStore'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { useRecentSearchesStore } from '@/store/useRecentSearchesStore'
import { CircleUser, Loader2, SearchIcon, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import useSearchParamCategories from '../../hooks/useSearchParamCategories'
import useSearchParamPage from '../../hooks/useSearchParamPage'
import { searchQueryRecipe, TypeSearchQueryRecipe } from '../../services/searchService'
import ToggleFavorites from '../ToggleFavorites'
import { RecentSearches } from './RecentSearches'
import { SearchBar } from './SearchBar'

const SearchS = ({ model }: { model?: number }) => {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const { checkParamPage } = useSearchParamPage()
  const { query, setQuery, getQuery } = useQueryStore()
  const { closeMenu } = useMenuStore()

  const {
    recentSearches,
    addRecentSearch,
    clearAllRecentSearches,
    removeRecentSearch,
    updateRecentSearch
  } = useRecentSearchesStore()
  const [showRecents, setShowRecents] = useState(false)
  const [resultsSearch, setResultSearch] = useState([] as TypeSearchQueryRecipe[])
  const [hasQuery, setHasQuery] = useState(false)
  const [loader, setLoader] = useState(false)
  // const [model, setModel] = useState(0)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSearch = (term: string) => {
    // console.log(term)
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

  const getSearch = async (value) => {
    setLoader(true)
    // setResultSearch([])
    const result = await searchQueryRecipe({ query: value })

    if (getQuery() == '') {
      setHasQuery(false)
    }
    if (getQuery() == value) {
      // data = result
      // setLoader(false)
      setResultSearch(result)
    }
    // setResultSearch(data)
    setLoader(false)
  }

  function debounce(func, delay) {
    // return (...arg) => {
    //   func(...arg)
    // }
    let timer
    return (...arg) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setHasQuery(true)
        return func(...arg)
      }, delay)
    }
  }

  const debounceAc = useRef(debounce(getSearch, 400))
  const searchDebounce = (value) => {
    // console.log(value)

    setQuery(value)
    // setLoader(true)
    if (value == '') {
      setHasQuery(false)
      // setResultSearch([])
      // setLoader(false)
      return
    }
    debounceAc.current(value, query)
    // handleSearch(value)
    // if (searchAuto) {
    //   debounce(handleSearch, 500)(value)
    // }
  }

  const submit = (e, query) => {
    if (e) e.preventDefault()
    closeMenu()
    handleSearch(query)
    addRecentSearch(query)
  }

  const selectRecipeSearch = (query: string) => {
    setQuery(query)
    submit('', query)
    addRecentSearch(query)
    // setShowRecents(false)
    setOpen(false)
  }

  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
        setShowRecents(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Manejar navegación con teclado
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!open) return

      if (event.key === 'Escape') {
        setOpen(false)
        setShowRecents(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const selectRecentSearch = (query: string) => {
    // setInputValue(query)
    setQuery(query)
    submit('', query)
    updateRecentSearch(query)
    setShowRecents(false)
    setOpen(false)
  }

  const selectCategoriaUrl = searchParams
    .get('categories')
    ?.toString()
    .split('|')
    .find((item, i) => {
      return item
    })

  useEffect(() => {
    setQuery(searchParams.get('query')?.toString() || '')
  }, [])

  const [isHydrated, setIsHydrated] = useState(false)
  useEffect(() => {
    useRecentSearchesStore.persist.rehydrate()
    setIsHydrated(true)
  }, [])

  if (!isHydrated)
    return (
      <div
        className={cn(
          'w-full max-w-[300px] overflow-visible transition-all',
          model == 1 ? 'max-w-[300px]' : 'max-w-[370px]',
          open && model != 1 && 'max-w-[500px]'
        )}
      >
        <div className={cn('relative mx-auto w-full', model == 1 && 'hidden lg:flex')}>
          <Input
            type="search"
            placeholder="Buscar recetas..."
            className={cn(
              'w-full rounded-xl py-4 pl-12 pr-12 text-lg shadow-lg',
              model == 1
                ? 'h-5 border border-[#44444415] bg-[#8b89894d] text-gray-100 shadow-none hover:bg-[#8b89894d] focus-visible:ring-0 focus-visible:ring-offset-0'
                : 'bg-[#fdfdfddc]'
            )}
          />
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-400" />
        </div>
      </div>
    )

  return (
    // <div className="w-full max-w-[500px]" ref={containerRef}>

    <div
      className={cn(
        'w-full max-w-[300px] overflow-visible transition-all',
        model == 1 ? 'max-w-[300px]' : 'max-w-[370px]',
        open && model != 1 && 'max-w-[500px]'
      )}
      ref={containerRef}
      onMouseLeave={(e) => {
        inputRef.current?.blur()
        setOpen(false)
      }}
      // onMouseEnter={() => setOpen(true)}
    >
      <SearchBar
        ref={inputRef}
        value={query}
        onChange={(e) => searchDebounce(e?.target?.value)}
        onSearch={(e) => submit(e, query)}
        model={model}
        onFocus={() => {
          setOpen(true)
          setShowRecents(true)
        }}
        onCleanQuery={() => setQuery('')}
        // onBlur={() => {
        //   // El cierre se maneja con el clic fuera para evitar problemas con los clics en elementos del dropdown
        // }}
      />

      {open && (
        <div className="relative mx-auto max-w-[500px]" ref={dropdownRef}>
          <div
            className={cn(
              'absolute left-0 right-0 top-0 z-10 max-h-[500px] w-full overflow-auto',
              model == 1 && 'w-[550px]'
            )}
          >
            <div className={cn('h-3', model == 1 && 'h-4')}></div>
            <div className="rounded-xl border border-t-0 bg-white shadow-lg">
              {/* {showRecents ? (
              <RecentSearches
                searches={recentSearches}
                onSelect={selectRecentSearch}
                onRemove={removeRecentSearch}
                onClearAll={clearAllRecentSearches}
              />
            ) : ( */}
              <>
                {loader ? (
                  <div className="flex justify-center py-7">
                    <Loader2 className="animate-spin" />
                  </div>
                ) : !hasQuery ? (
                  <>
                    {/* <CategoryFilters /> */}
                    <RecentSearches
                      searches={recentSearches}
                      onSelect={selectRecentSearch}
                      onRemove={removeRecentSearch}
                      onClearAll={clearAllRecentSearches}
                    />
                  </>
                ) : resultsSearch && resultsSearch.length == 0 ? (
                  <div className="p-4">no results</div>
                ) : (
                  <>
                    {/* <CategoryFilters /> */}
                    {resultsSearch.length != 0 && (
                      <div className="p-2">
                        {resultsSearch?.map((result, i) => {
                          return (
                            <Link
                              href={'/search/recipe/' + result?.title}
                              className="m-1 inline-block cursor-pointer overflow-hidden rounded-lg transition-colors hover:bg-gray-100"
                              key={i}
                            >
                              <div className="flex w-full items-start p-0">
                                <div className="relative h-24 w-24 flex-shrink-0">
                                  <Image
                                    src={getImageRecipe(result?.imageUrl, 'medium')}
                                    alt={result?.title}
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover"
                                  />
                                  {/* <ToggleFavorites recipeId={result.id} size="small" /> */}
                                </div>
                                <div className="flex-1 p-3">
                                  <div className="flex items-start justify-between">
                                    <h3 className="font-medium text-gray-900">{result?.title}</h3>
                                  </div>
                                  <p className="mb-2 line-clamp-1 text-sm text-gray-600">
                                    {result?.description}
                                  </p>
                                  <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                      <div className="h-4 w-4">
                                        <CircleUser className="h-full w-full" />
                                      </div>
                                      {result?.username}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <div className="h-3.5 w-3.5">
                                        <Users className="h-full w-full" />
                                      </div>
                                      {result?.servings}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      )}
    </div>
    // </div>
  )
}

export default SearchS

interface CategoryFiltersProps {
  selectedCategory: string | null
  onSelectCategory: (categoryId: string | null) => void
}

export function CategoryFilters() {
  const { categories } = useCategoriesStore()
  const { setParamCategories } = useSearchParamCategories()

  const handleCategoryClick = (category: string) => {
    setParamCategories(category)
  }

  return (
    <div className="border-b bg-gray-50 px-2 py-3.5">
      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
          containScroll: 'trimSnaps'
        }}
        className="w-full select-none"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.id} className="basis-auto pl-2 md:pl-4">
              <Badge
                // variant={selectedCategory === category.id ? 'default' : 'outline'}
                variant="outline"
                className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap px-3 py-1.5 ${
                  // selectedCategory === category.id
                  // ? 'bg-gray-800 hover:bg-gray-700'
                  // : 'text-gray-700 hover:bg-gray-100'
                  'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <span
                  className="inline-flex h-4 w-4 items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: category.icon }}
                ></span>
                {capitalizeFirstLetter(category.name)}
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-0 bg-white/80 hover:bg-white" />
        <CarouselNext className="right-0 bg-white/80 hover:bg-white" /> */}
      </Carousel>
    </div>
  )
}
