import { TopSeparator } from '@/common/components/customize/TopSeparator'
import { Suspense } from 'react'
import Filters from './components/Filters'
import Search from './components/Search'
import SearchResult from './components/SearchResults'
import SearchResultsSkeleton from './components/SearchResultsSkeleton'
import SearchTags from './components/SearchTags'
import IconAdjustmentsHorizontal from './Icons/IconAdjustmentsHorizontal'

type Props = {
  searchParams: { query?: string; categories?: string; difficulty?: string; page?: string }
}

const SearchView = ({ searchParams }: Props) => {
  return (
    <div>
      <div className="wrapper flex-1">
        <TopSeparator />
      </div>
      <div className="container font-poppins">
        <div className="mb-14 mt-6 flex flex-col items-center">
          <h1 className="mb-2 text-center font-jallaOne text-6xl uppercase">
            ¿Que recetas buscas?
          </h1>
          <h2 className="mb-8 font-fingerPaint text-3xl text-sonqu-black-300">Te ayudamos</h2>
          <Search />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <div className="mb-5 flex items-center gap-3 rounded-lg text-xl font-bold uppercase text-black">
              <IconAdjustmentsHorizontal /> Filtros
            </div>
            <Filters />
          </div>

          <div className="flex-1">
            <SearchTags />
            {/* <SearchResultsSkeleton /> */}
            <Suspense
              key={
                '' +
                searchParams.query +
                searchParams.categories +
                searchParams.difficulty +
                searchParams.page
              }
              fallback={<SearchResultsSkeleton />}
            >
              <SearchResult searchParams={searchParams} />
              {/* <SearchResultsSkeleton /> */}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchView
