import { getCategories } from '@/modules/search/services/searchService'
import { create } from 'zustand'

interface Categories {
  categories: { name: string }[]
  getCategories: () => void
}

export const useCategoriesStore = create<Categories>((set) => ({
  categories: [],
  // setCategories: (categories) => set({ categories }),
  getCategories: async () => {
    set({ categories: await getCategories() })
  }
}))
