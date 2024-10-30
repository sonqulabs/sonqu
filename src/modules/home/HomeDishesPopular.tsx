import { Star } from 'lucide-react'
import { Suspense } from 'react'
import { RecipesPopular } from './components/RecipesPopular'

export const HomeDishesPopular = () => {
  return (
    <section className="container mb-8 mt-10 px-4 xl:px-0">
      <h1 className="mb-4 flex items-center gap-2 font-poppins text-lg font-bold uppercase md:text-2xl">
        PLATOS POPULARES <Star className="size-6 fill-yellow-400 text-yellow-400" />
      </h1>
      <Suspense fallback={<h1>cargandoooooooo...</h1>}>
        <RecipesPopular />
      </Suspense>
    </section>
  )
}
