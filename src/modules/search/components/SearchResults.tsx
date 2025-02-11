import { cn } from '@/lib/utils'
import Image from 'next/image'
import { searchMatchesRecipe } from '../services/searchService'
import Link from 'next/link'
import PaginationResult from './PaginationResult'
import { getImageRecipe } from '@/common/helpers/getImageRecipe'

const SearchResult = async ({ searchParams }) => {
  const recipes = await searchMatchesRecipe(searchParams)

  return (
    <>
      <PaginationResult meta={recipes.meta} />

      <div className="text- grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
        {recipes.data?.length
          ? recipes.data.map((item, i) => (
              <Link
                href={'search/recipe/' + item.title}
                className={cn(
                  'flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-150 hover:shadow-2xl lg:h-[230px] lg:flex-row'
                )}
                key={i}
              >
                <Image
                  src={getImageRecipe(item.imageUrl, 'medium')}
                  height={100}
                  width={100}
                  className="h-[230px] w-full object-cover lg:h-auto lg:w-0 lg:flex-1"
                  alt="fondo hero"
                />
                <div className="relative w-full px-4 py-8 lg:max-w-[60%]">
                  <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                  <p className="mb-2 line-clamp-[6] text-sm">{item.description}</p>
                </div>
              </Link>
            ))
          : 'No hay Recetas'}
      </div>
    </>
  )
}

export default SearchResult
