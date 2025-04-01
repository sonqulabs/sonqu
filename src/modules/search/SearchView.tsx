import { TopSeparator } from '@/common/components/customize/TopSeparator'
import { Suspense } from 'react'
import Filters from './components/Filters'
import SearchResult from './components/SearchResults'
import SearchResultsSkeleton from './components/SearchResultsSkeleton'
import SearchS from './components/SearchS/SearchS'
import SearchTags from './components/SearchTags'
import { TopSeparator2 } from '@/common/components/customize/TopSeparator2'

type Props = {
  searchParams: { query?: string; categories?: string; difficulty?: string; page?: string }
}

const SearchView = ({ searchParams }: Props) => {
  return (
    <>
      <div className="mb-10">
        <TopSeparator2 className="mb-10" />
        <div className="container font-poppins">
          <div className="mb-6 mt-0 flex flex-col items-center md:mb-14">
            <h1 className="text-center font-monserrat text-2xl font-extrabold uppercase text-[#1f1f1f] md:text-5xl">
              ¿Que recetas buscas?
            </h1>
            <h2 className="mb-6 font-monserrat font-bold uppercase text-sonqu-black-300 md:text-3xl">
              Te ayudamos
            </h2>
            {/* <Search searchAuto={true} /> */}
            <SearchS />

            <SearchTags />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            <div className="">
              {/* <div className="mb-5 flex items-center gap-3 rounded-lg text-xl font-bold uppercase text-black">
              <IconAdjustmentsHorizontal /> Filtros
            </div> */}
              <Filters />
            </div>

            <div className="flex-1">
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
    </>
  )
}

export default SearchView
