const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getRecipeId = async (recipeId: string) => {
  const result = await fetch(`${API_URL}/public/recipe/${recipeId}`)
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await result.json()
  // console.log(data)
  return data
}
