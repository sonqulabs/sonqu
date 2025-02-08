import Image from 'next/image'
import { getRecipeId } from './services/recipeId'
import { getImageRecipe } from '@/common/helpers/getImageRecipe'
import YoutubeLite from './components/YoutubeLite'

import { Clock, Users } from 'lucide-react'

type Props = {
  id: string
}

const RecipeIdView = async ({ id }: Props) => {
  const recipe = await getRecipeId(id)
  // console.log(recipe)

  const getHoursMinutes = (minutes) => {
    // const minutes = 131
    const hours = Math.floor(minutes / 60)
    const minutesRest = minutes % 60
    return hours === 1 ? '1 hora' : `${hours} horas${minutesRest ? ` ${minutesRest}m` : ''}`
  }

  return (
    <div className="container max-w-[850px] py-10">
      <h1 className="mb-7 text-center text-3xl font-bold underline decoration-[#3a3a3a] decoration-1 underline-offset-8 md:text-start">
        {recipe.title}{' '}
      </h1>

      <div className="mb-5 flex items-center justify-between md:px-10">
        <div className="flex items-center text-gray-600">
          <Clock className="mr-2 h-5 w-5" />
          <span>Prep time: {getHoursMinutes(recipe.prepTime)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="mr-2 h-5 w-5" />
          <span>Servings: {recipe.servings}</span>
        </div>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center gap-6 md:mb-3 md:flex-row md:px-10">
        <Image
          src={getImageRecipe(recipe.imageUrl, 'medium')}
          height={450}
          width={450}
          className="m-auto aspect-[10/9] w-[350px] rounded-xl border-8 border-[#ffffff57] object-cover shadow-md"
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
              className="flex cursor-pointer items-center rounded-3xl bg-slate-400 px-3 py-1 text-white"
              key={i}
            >
              {category.name}
            </span>
          )
        })}
      </div>

      <div className="flex flex-col justify-center py-5 md:px-20">
        <div className="mb-11">
          <h2 className="text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
            Ingredientes
          </h2>
          {recipe.ingredients?.map((ingredient, i) => {
            return (
              <div
                className="mt-5 pl-2 md:pl-10"
                key={i}
                dangerouslySetInnerHTML={{ __html: ingredient.name }}
              ></div>
            )
          })}
        </div>
        <div className="mb-11">
          <h2 className="mb-2 text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
            Instrucciones
          </h2>
          <div
            className="mt-5 pl-2 md:pl-10"
            dangerouslySetInnerHTML={{ __html: recipe?.instructions[0]?.description }}
          ></div>
        </div>

        <h2 className="mb-6 text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
          Vea el proceso en <span className="text-red-500">Youtube</span>
        </h2>
        <YoutubeLite url={recipe.videoUrl} />
      </div>
    </div>
  )
}

export default RecipeIdView
