import { getImageRecipe } from '@/common/helpers/getImageRecipe'
import { cn } from '@/lib/utils'
import { CalendarDays, CircleUser, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { searchMatchesRecipe } from '../services/searchService'
import PaginationResult from './PaginationResult'

const SearchResult = async ({ searchParams }) => {
  const recipes = await searchMatchesRecipe(searchParams)

  const formatDateToShort = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
  }
  return (
    <>
      <PaginationResult meta={recipes.meta} />

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
        {recipes.data?.length
          ? recipes.data.map((item, i) => (
              <Link
                href={'search/recipe/' + item.title}
                className={cn(
                  'flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-150 hover:shadow-2xl lg:h-[230px] lg:flex-row'
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
                <div className="relative flex w-full flex-col justify-around gap-2 px-5 py-5 lg:max-w-[60%]">
                  <h3 className="text-center text-xl font-medium leading-none md:text-start">
                    {item.title}
                  </h3>

                  <p className="line-clamp-[5] text-balance text-sm">{item.description}</p>

                  <div className="mt-1 flex flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center text-gray-600">
                      <CircleUser className="mr-2 h-4 w-4" />

                      <span>{item.user?.username}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CalendarDays className="mr-2 h-3.5 w-3.5" />
                      <span>{formatDateToShort(item.createdAt)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-2 h-3.5 w-3.5" />
                      <span>{item.servings}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : 'No hay Recetas'}
      </div>
    </>
  )
}

export default SearchResult
