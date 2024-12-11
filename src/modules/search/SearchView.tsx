import { Suspense } from 'react'
import GroupCategories from './components/GroupCategories'
import Search from './components/Search'
import SearchResult from './components/SearchResults'
import SearchTags from './components/SearchTags'
import IconAdjustmentsHorizontal from './Icons/IconAdjustmentsHorizontal'
import SearchResultsSkeleton from './components/SearchResultsSkeleton'

type Props = { searchParams: { query?: string; categories?: string } }

const SearchView = ({ searchParams }: Props) => {
  return (
    <div className="bg-[#E4E3E3]">
      <div className="wrapper container font-poppins">
        <div className="mb-20 mt-20 flex flex-col items-center">
          <h1 className="mb-2 text-center font-jallaOne text-6xl uppercase">
            ¿Que recetas buscas?
          </h1>
          <h2 className="mb-8 font-fingerPaint text-3xl text-sonqu-black-300">Te ayudamos</h2>
          <Search />
        </div>

        <div className="mb-5 hidden gap-5 md:flex">
          <button className="flex gap-3 rounded-lg bg-slate-500 px-6 py-5 text-white">
            <IconAdjustmentsHorizontal /> Filtros
          </button>
          <button className="rounded-lg bg-slate-300 px-6 py-5">Orden Ascendente</button>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <GroupCategories />

          <div className="flex-1">
            <SearchTags />
            {/* <SearchResultsSkeleton /> */}
            <Suspense
              key={searchParams.query || '' + searchParams.categories}
              fallback={<SearchResultsSkeleton />}
            >
              <SearchResult searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchView
