export const getRecipeId = async (recipeId: string) => {
  const result = await fetch(`http://localhost:3004/api/v1/public/recipe/${recipeId}`)
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await result.json()
  // console.log(data)
  return data
}
