import { create } from 'zustand'

interface Query {
  query: string
  setQuery: (query: string) => void
}

export const useQueryStore = create<Query>((set) => ({
  query: '',
  // setCategories: (categories) => set({ categories }),
  setQuery: (query) => {
    set({ query })
  }
}))
