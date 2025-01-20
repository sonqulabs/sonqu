import { cn } from '@/lib/utils'
import Image from 'next/image'
import { searchMatchesRecipe } from '../services/searchService'
import Link from 'next/link'
import PaginationResult from './PaginationResult'
import { getImageRecipe } from '@/common/helpers/getImageRecipe'

const SearchResult = async ({ searchParams }) => {
  const recipes = await searchMatchesRecipe(searchParams)

  // enum SIZES {
  //   SMALL = 'small',
  //   MEDIUM = 'medium',
  //   LARGE = 'large'
  // }
  // const getImageRecipe = (name, size: SIZES) => {
  //   const cluod_name = 'dpnhvrzyc'
  //   const codigo = 'v1737383049'
  //   //res.cloudinary.com/dpnhvrzyc/image/upload/v1737383049/thumbnails/small/cl1cb28273b-0f21-4fd7-a1ba-bd375efbff33.webp
  //   return `https://res.cloudinary.com/${cluod_name}/image/upload/${codigo}/thumbnails/${size}/${name}.webp`
  // }
  // const getImageRecipe = (name, size: SIZES) => {
  //   return `https://res.cloudinary.com/dc05tenjs/image/upload/v1732720929/thumbnails/${size}/${name}.webp`
  // }
  return (
    <>
      <PaginationResult meta={recipes.meta} />

      <div className="text- grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
        {recipes.data?.length
          ? recipes.data.map((item, i) => (
              <Link
                href={'search/recipe/' + item.id}
                className={cn(
                  'flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-150 hover:shadow-2xl lg:flex-row'
                )}
                key={i}
              >
                <Image
                  src={getImageRecipe(item.imageUrl, 'medium')}
                  height={100}
                  width={100}
                  className="w-full flex-1 object-cover lg:w-0"
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
