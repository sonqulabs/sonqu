import { RecentSearches as FavoritesStore } from '@/modules/search/components/SearchS/RecentSearches'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type FavoritesStore = {
  favorites: string[]
  toggleFavorite: (recipeId: string, e: React.MouseEvent) => void
}

export const useFavoritesStore = create(
  persist<FavoritesStore>(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (recipeId: string, e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        set((state) => ({
          favorites: state.favorites.includes(recipeId)
            ? state.favorites.filter((id) => id != recipeId)
            : [...state.favorites, recipeId]
        }))
      }
    }),
    {
      name: 'favorites',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage)
    }
  )
)
