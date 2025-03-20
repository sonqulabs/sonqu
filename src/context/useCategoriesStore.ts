import { Category } from '@/modules/search/components/SearchS/types/search-types'
import { getCategories } from '@/modules/search/services/searchService'
import { create } from 'zustand'

interface Categories {
  categories: Category[]
  getCategories: () => void
}

export const useCategoriesStore = create<Categories>((set) => ({
  categories: [],
  // setCategories: (categories) => set({ categories }),
  getCategories: async () => {
    set({ categories: await getCategories() })
  }
}))
