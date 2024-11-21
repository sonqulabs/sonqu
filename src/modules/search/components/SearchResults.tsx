import { cn } from '@/lib/utils'
import Image from 'next/image'
import { searchMatchesRecipe } from '../services/searchService'
import Link from 'next/link'

// const recipes = []
const SeacrhResult = async ({ searchParams }) => {
  const recipes = await searchMatchesRecipe(searchParams)

  return (
    <div className="grid grid-cols-2 gap-4">
      {recipes.length
        ? recipes.map((item, i) => (
            <Link
              href={'search/recipe/' + item.id}
              className={cn('flex overflow-hidden rounded-3xl bg-white')}
              key={i}
            >
              <Image
                src={item.imageUrl}
                height={200}
                width={200}
                className="flex-1 object-cover"
                alt="fondo hero"
              />
              <div className="relative max-w-80 px-4 py-8">
                <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                <p className="mb-2">{item.description}</p>
                {/* {item.ingredients.map((ingredient, i) => {
          return (
            <div
              className=""
              key={i}
              dangerouslySetInnerHTML={{ __html: ingredient.name }}
            ></div>
          )
        })} */}
              </div>
            </Link>
          ))
        : 'No hay Recetas'}
    </div>
  )
}

export default SeacrhResult
