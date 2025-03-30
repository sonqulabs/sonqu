import { getImageRecipe } from '@/common/helpers/getImageRecipe'
import Image from 'next/image'
import YoutubeLite from './components/YoutubeLite'
import { getRecipeId } from './services/recipeId'

import { TopSeparator2 } from '@/common/components/customize/TopSeparator2'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/shadcnui/tabs'
import { capitalizeFirstLetter } from '@/lib/utils'
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
    <div>
      <TopSeparator2 />
      <div className="container max-w-[850px] pb-10 pt-6 sm:pt-6">
        {recipe.categories?.length > 0 && (
          <div className="mb-12 flex items-center justify-center gap-2 px-10">
            {recipe.categories?.map(({ category }, i) => {
              return (
                <span
                  className="flex cursor-pointer items-center gap-1 rounded-3xl bg-[#000000cc] px-2 py-0.5 text-[0.6875rem] text-white opacity-90 shadow-lg"
                  key={i}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              )
            })}
          </div>
        )}

        <h1 className="mb-6 text-center text-3xl font-bold underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8">
          {recipe.title}
        </h1>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-gray-600 md:px-10">
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

        <Tabs defaultValue="ingredientes" className="">
          <TabsList className="grid h-auto w-full grid-cols-1 text-3xl md:grid-cols-2">
            <TabsTrigger
              className="flex flex-1 items-center gap-2 text-xl font-medium"
              value="ingredientes"
            >
              <UtensilsCrossed /> Ingredientes
            </TabsTrigger>
            <TabsTrigger
              className="flex flex-1 items-center gap-2 text-xl font-medium"
              value="preparacion"
            >
              <ListCheck /> Preparación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ingredientes">
            <div className="flex flex-col justify-center rounded-xl border border-[#000000cc] bg-white px-4 py-4 shadow-md md:px-10 md:py-9">
              {recipe.ingredients?.map((ingredient, i) => {
                return (
                  <div
                    className=""
                    key={i}
                    dangerouslySetInnerHTML={{ __html: ingredient.name }}
                  ></div>
                )
              })}
            </div>
          </TabsContent>
          <TabsContent value="preparacion">
            <div className="flex flex-col justify-center rounded-xl border border-[#000000cc] bg-white px-4 py-4 shadow-md md:px-10 md:py-9">
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: recipe?.instructions[0]?.description }}
              ></div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-11 flex flex-col justify-center rounded-xl border border-[#000000cc] bg-white px-4 py-4 shadow-md md:px-10 md:py-7">
          <h2 className="mb-6 text-2xl font-medium underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8">
            <Youtube className="mr-2 inline-block" />
            Vea el proceso en <span className="text-red-500">Youtube</span>
          </h2>
          <YoutubeLite url={recipe.videoUrl} />
        </div>
      </div>
    </div>
  )
}

export default RecipeIdView
