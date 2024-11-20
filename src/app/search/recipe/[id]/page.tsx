import RecipeIdView from '@/modules/recipeId/RecipeIdView'
import { Suspense } from 'react'

type Props = { readonly params: { readonly id: string } }

export default function SearchId({ params }: Props) {
  return (
    <Suspense fallback={<div>...cargando</div>}>
      <RecipeIdView id={params.id} />
    </Suspense>
  )
}
