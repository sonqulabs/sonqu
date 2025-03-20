import { create } from 'zustand'

interface Query {
  query: string
  setQuery: (query: string) => void
  getQuery: () => string
}

export const useQueryStore = create<Query>((set, get) => ({
  query: '',
  // setCategories: (categories) => set({ categories }),
  setQuery: (query) => {
    set({ query })
  },
  getQuery: () => get().query
}))
