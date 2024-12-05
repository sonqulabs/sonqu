import { cn } from '@/lib/utils'
import Image from 'next/image'
import { searchMatchesRecipe } from '../services/searchService'
import Link from 'next/link'

const SeacrhResult = async ({ searchParams }) => {
  const recipes = await searchMatchesRecipe(searchParams)

  enum SIZES {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
  }
  const getImageRecipe = (name, size: SIZES) => {
    return `https://res.cloudinary.com/dc05tenjs/image/upload/v1732720929/thumbnails/${size}/${name}.webp`
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {recipes.length
        ? recipes.map((item, i) => (
            <Link
              href={'search/recipe/' + item.id}
              className={cn('overflow-hidden rounded-3xl bg-white lg:flex')}
              key={i}
            >
              <Image
                src={getImageRecipe(item.imageUrl, SIZES.MEDIUM)}
                height={200}
                width={200}
                className="w-full flex-1 object-cover lg:w-52"
                alt="fondo hero"
              />
              <div className="relative w-full px-4 py-8 md:max-w-80">
                <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                <p className="mb-2 line-clamp-[10]">{item.description}</p>
              </div>
            </Link>
          ))
        : 'No hay Recetas'}
    </div>
  )
}

export default SeacrhResult
