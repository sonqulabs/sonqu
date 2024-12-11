import Image from 'next/image'
import { getRecipeId } from './services/recipeId'

type Props = {
  id: string
}

const RecipeIdView = async ({ id }: Props) => {
  const recipe = await getRecipeId(id)
  // console.log(recipe)
  enum SIZES {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
  }
  const getImageRecipe = (name, size: SIZES) => {
    return `https://res.cloudinary.com/dc05tenjs/image/upload/v1732720929/thumbnails/${size}/${name}.webp`
  }

  return (
    <div className="wrapper container w-[500px] py-10">
      <h1 className="mb-7 text-center text-3xl font-bold">{recipe.title} </h1>

      <div className="mb-5 flex items-center gap-2">
        <h2 className="text-2xl font-medium">Categorias:</h2>
        {recipe.categories.map(({ category }, i) => {
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

      <Image
        src={getImageRecipe(recipe.imageUrl, SIZES.MEDIUM)}
        height={300}
        width={300}
        className="m-auto mb-6 w-full rounded-lg object-cover"
        alt={recipe.title}
      />

      <h2 className="mb-2 text-2xl font-medium">Descripcion:</h2>
      <div className="mb-6">{recipe.description}</div>

      <h2 className="mb-2 text-2xl font-medium">Ingredientes:</h2>
      <div className="mb-6 flex justify-center">
        {recipe.ingredients.map((ingredient, i) => {
          return (
            <div className="" key={i} dangerouslySetInnerHTML={{ __html: ingredient.name }}></div>
          )
        })}
      </div>

      <h2 className="mb-2 text-2xl font-medium">Instrucciones:</h2>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions[0].description }}></div>
    </div>
  )
}

export default RecipeIdView
