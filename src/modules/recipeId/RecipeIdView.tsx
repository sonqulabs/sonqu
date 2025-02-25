import { getImageRecipe } from '@/common/helpers/getImageRecipe'
import Image from 'next/image'
import YoutubeLite from './components/YoutubeLite'
import { getRecipeId } from './services/recipeId'

import { CalendarDays, CircleUser, ListCheck, Users, UtensilsCrossed, Youtube } from 'lucide-react'

type Props = {
  id: string
}

const RecipeIdView = async ({ id }: Props) => {
  const recipe = await getRecipeId(id)
  // console.log(recipe)

  const formatDateToShort = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <div className="container max-w-[850px] py-10">
      <h1 className="mb-6 text-center text-3xl font-bold underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8 md:text-start">
        {recipe.title}
      </h1>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-gray-600 md:justify-start md:px-10">
        <div className="flex items-center gap-2 rounded-full border border-[#000000cc] bg-white px-3 py-1 text-gray-600">
          <CircleUser className="h-5 w-5" />
          <span> {recipe.user?.username || 'User'}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#000000cc] bg-white px-3 py-1 text-gray-600">
          <CalendarDays className="h-5 w-5" />
          <span>Fecha: {formatDateToShort(recipe.createdAt)}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#000000cc] bg-white px-3 py-1 text-gray-600">
          <Users className="h-5 w-5" />
          <span>Porciones: {recipe.servings}</span>
        </div>
        {/* <div className="flex items-center gap-2 text-gray-600">
          <BarChart2 className="w-5 h-5" />
          <span>Dificultad: Media</span>
        </div> */}
      </div>

      <div className="mb-6 flex flex-col items-center justify-center gap-6 md:flex-row md:px-10">
        <Image
          src={getImageRecipe(recipe.imageUrl, 'medium')}
          height={450}
          width={450}
          className="m-auto aspect-[10/9] w-[350px] rounded-xl border border-[#000000cc] object-cover shadow-md"
          alt={recipe.title}
        />
        {/* <h2 className="underline-red mb-2 text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
          Descripcion
        </h2> */}
        <div className="">{recipe.description}</div>
      </div>

      <div className="mb-6 flex items-center justify-center gap-2 md:justify-start md:px-10">
        {/* <h2 className="text-2xl font-medium">Categorias:</h2> */}
        {recipe.categories?.map(({ category }, i) => {
          return (
            <span
              className="flex cursor-pointer items-center rounded-3xl bg-[#000000cc] px-3 py-1 text-xs text-white"
              key={i}
            >
              {category.name}
            </span>
          )
        })}
      </div>

      <div className="flex flex-col justify-center rounded-xl border border-[#000000cc] bg-white px-4 py-4 shadow-md md:px-10 md:py-7">
        <div className="mb-11">
          <h2 className="flex items-center gap-2 text-2xl font-semibold underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8">
            <UtensilsCrossed /> Ingredientes
          </h2>
          {recipe.ingredients?.map((ingredient, i) => {
            return (
              <div
                className="mt-5 pl-0 md:pl-8"
                key={i}
                dangerouslySetInnerHTML={{ __html: ingredient.name }}
              ></div>
            )
          })}
        </div>
        <div className="mb-11">
          <h2 className="mb-2 flex items-center gap-2 text-2xl font-medium underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8">
            <ListCheck />
            Instrucciones
          </h2>
          <div
            className="mt-5 pl-0 md:pl-8"
            dangerouslySetInnerHTML={{ __html: recipe?.instructions[0]?.description }}
          ></div>
        </div>

        <h2 className="mb-6 flex items-center gap-2 text-2xl font-medium underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8">
          <Youtube />
          Vea el proceso en <span className="text-red-500">Youtube</span>
        </h2>
        <YoutubeLite url={recipe.videoUrl} />
      </div>
    </div>
  )
}

export default RecipeIdView
