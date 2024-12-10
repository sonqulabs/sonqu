const API_URL = process.env.NEXT_PUBLIC_API_URL
export const searchService = () => {}

export const searchCategory = async (category: string) => {
  const result = await fetch(`${API_URL}/search/${category}`, {
    method: 'POST'
  })

  const data = await result.json()
  // console.log(data)
  return data
}

export const searchMatchesTitleRecipe = async (matches: string) => {
  const result = await fetch(`${API_URL}/search/matches/?query=${matches}`)

  const data = await result.json()
  // console.log(data)
  return data
}

export const searchMatchesRecipe = async (searchParam: { query: string; categories: string }) => {
  const params = new URLSearchParams(searchParam)
  // console.log(params)
  const result = await fetch(`${API_URL}/public/search/matches/?${params.toString()}`)

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
