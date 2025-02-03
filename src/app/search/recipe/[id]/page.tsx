import funMetaData from '@/common/helpers/funMetaData'
import RecipeIdView from '@/modules/recipeId/RecipeIdView'
import RecipeIdViewSkeleton from '@/modules/recipeId/skeleton/RecipeIdViewSkeleton'
import { Suspense } from 'react'

type Props = { readonly params: { readonly id: string } }

export const generateMetadata = ({ params }: Props) => {
  return funMetaData({
    title: params.id
  })
}

export default function SearchId({ params }: Props) {
  return (
    <Suspense
      // fallback={<div className="flex h-svh items-center justify-center">...cargando Receta</div>}
      fallback={<RecipeIdViewSkeleton />}
    >
      {/* <RecipeIdViewSkeleton /> */}
      <RecipeIdView id={params.id} />
    </Suspense>
  )
}
