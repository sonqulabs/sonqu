import { getImageRecipe } from '@/common/helpers/getImageRecipe'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { CalendarDays, CircleUser, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { searchMatchesRecipe } from '../services/searchService'
import PaginationResult from './PaginationResult'
import ToggleFavorites from './ToggleFavorites'
import GetIconCategory from './GetIconCategory'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/common/components/shadcnui/tooltip'

const SearchResult = async ({ searchParams }) => {
  const recipes = await searchMatchesRecipe(searchParams)

  const formatDateToShort = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
  }
  return (
    <>
      <PaginationResult meta={recipes.meta} />

      <div className="grid grid-cols-1 gap-4 py-3 sm:grid-cols-2">
        {recipes.data?.length
          ? recipes.data.map((item, i) => (
              <Link
                href={'search/recipe/' + item.title}
                className={cn(
                  'flex flex-col overflow-hidden rounded-2xl border border-[#0707072d] bg-white shadow-md transition-shadow duration-150 hover:shadow-2xl lg:h-[230px] lg:flex-row'
                )}
                key={i}
              >
                <div className="relative h-[230px] w-full object-cover lg:h-auto lg:w-0 lg:flex-1">
                  <Image
                    src={getImageRecipe(item.imageUrl, 'medium')}
                    height={100}
                    width={100}
                    className="h-[230px] w-full object-cover"
                    alt={item.title || 'imagen de receta'}
                  />
                  <div
                    className="absolute left-0 top-0 h-full w-full bg-[#ffffff70]"
                    style={{ background: 'linear-gradient(transparent 70% ,#0a0a0a70)' }}
                  ></div>
                  <ToggleFavorites recipeId={item.id} />

                  <div className="absolute bottom-2 left-1.5 z-0 flex w-full flex-wrap items-center justify-center gap-1">
                    {item.categories?.length > 0 &&
                      item.categories?.map((category, i) => {
                        return (
                          <TooltipProvider key={i} delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="flex items-center rounded-3xl bg-white/80 px-2 py-1 text-center text-gray-900 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white">
                                <GetIconCategory categoryName={category?.name} />
                              </TooltipTrigger>
                              <TooltipContent>
                                {/* <p>Add to library</p> */}
                                {capitalizeFirstLetter(category?.name)}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          // {/* <span
                          //   className="inline-flex h-3.5 w-3.5 items-center justify-center"
                          //   dangerouslySetInnerHTML={{ __html: category?.icon }}
                          // ></span> */}

                          // {/* {capitalizeFirstLetter(category?.name)} */}
                        )
                      })}
                  </div>
                </div>

                <div className="relative flex w-full flex-col justify-around gap-2 px-5 py-4 lg:max-w-[60%]">
                  <h3 className="text-center text-lg font-medium leading-none">{item.title}</h3>

                  <p className="line-clamp-[5] text-balance text-sm">{item.description}</p>

                  <div className="mt-1 flex flex-row flex-wrap items-center justify-between gap-3 text-[11px]">
                    <div className="flex items-center text-gray-600">
                      <CircleUser className="mr-1.5 h-4 w-4" />

                      <span>{item.user?.username}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                      <span>{formatDateToShort(item.createdAt)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-1.5 h-3.5 w-3.5" />
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
