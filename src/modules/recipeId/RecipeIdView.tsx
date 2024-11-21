import { getRecipeId } from './services/recipeId'

type Props = {
  id: string
}

const RecipeIdView = async ({ id }: Props) => {
  const recipe = await getRecipeId(id)

  return (
    <div className="wrapper container py-10">
      <h1 className="text-center">{recipe.title} </h1>
      <div className="">{recipe.description}</div>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions[0].description }}></div>
      <div className="flex justify-center">
        {recipe.ingredients.map((ingredient, i) => {
          return (
            <div className="" key={i} dangerouslySetInnerHTML={{ __html: ingredient.name }}></div>
          )
        })}
      </div>
    </div>
  )
}

export default RecipeIdView
