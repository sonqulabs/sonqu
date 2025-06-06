const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getCategories = async () => {
  const result = await fetch(`${API_URL}/public/category`)
  return await result.json()
}

export const searchMatchesRecipe = async (searchParam: { query?: string; categories?: string }) => {
  const params = new URLSearchParams(searchParam)
  // console.log(params)
  const result = await fetch(`${API_URL}/public/search/matches/?${params.toString()}&perPage=10`)

  const data = await result.json()
  // console.log(data)
  return data
}

export type TypeSearchQueryRecipe = {
  title: string
  id: number
  description: string
  imageUrl: string
  servings: number
  // user: {
  username: string
  // }
}
export const searchQueryRecipe = async (searchParam: {
  query?: string
}): Promise<TypeSearchQueryRecipe[]> => {
  const params = new URLSearchParams(searchParam)
  // console.log(params)
  const result = await fetch(`${API_URL}/public/search/query/?${params.toString()}`)

  const data = await result.json()
  // console.log(data)
  return data
}

export const getAllCategoriesGroup = async () => {
  const result = await fetch(`${API_URL}/public/category-group`)

  const data = await result.json()
  // console.log(data)
  return data
}

// Obtener los titulos de las recetas para el sitemap
export const getAllRecipeTitles = async (): Promise<{ title: string }[]> => {
  const result = await fetch(`${API_URL}/public/all-recipe-titles`)

  const data = await result.json()
  // console.log(data)
  return data
}
