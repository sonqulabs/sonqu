export const searchService = () => {}

export const searchCategory = async (category: string) => {
  const result = await fetch(`http://localhost:3004/api/v1/search/${category}`, {
    method: 'POST'
  })

  const data = await result.json()
  // console.log(data)
  return data
}

export const searchMatchesTitleRecipe = async (matches: string) => {
  const result = await fetch(`http://localhost:3004/api/v1/search/matches/?query=${matches}`)

  const data = await result.json()
  // console.log(data)
  return data
}

export const searchMatchesRecipe = async (searchParam: { query: string; categories: string }) => {
  const params = new URLSearchParams(searchParam)
  const result = await fetch(
    `http://localhost:3004/api/v1/public/search/matches/?${params.toString()}`
  )

  const data = await result.json()
  // console.log(data)
  return data
}
