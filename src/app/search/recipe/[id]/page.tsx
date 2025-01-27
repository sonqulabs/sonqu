import funMetaData from '@/common/helpers/funMetaData'
import RecipeIdView from '@/modules/recipeId/RecipeIdView'
import { Suspense } from 'react'

type Props = { readonly params: { readonly id: string } }

export const generateMetadata = ({ params }: Props) => {
  return funMetaData({
    title: params.id
  })
}

export default function SearchId({ params }: Props) {
  return (
    <Suspense fallback={<div>...cargando</div>}>
      <RecipeIdView id={params.id} />
    </Suspense>
  )
}
