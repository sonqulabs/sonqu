import { Suspense } from 'react'
import { RecipesPopular } from './components/RecipesPopular'
import Link from 'next/link'

export const HomeDishesPopular = () => {
  return (
    <section className="container mb-16 mt-16 px-4 xl:px-0">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 flex items-center gap-2 text-lg font-bold md:text-3xl">
          Nuevas Recetas
        </h1>
        <Link href="/search" className="hover:underline">
          Ver todo
        </Link>
      </div>
      <RecipesPopular />
    </section>
  )
}
