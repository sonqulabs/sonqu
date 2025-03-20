import { RecentSearches } from '@/modules/search/components/SearchS/RecentSearches'
import { RecentSearch } from '@/modules/search/components/SearchS/types/search-types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type RecentSearches = {
  recentSearches: RecentSearch[]
  setRecentSearches: (value: RecentSearch[]) => void
  addRecentSearch: (query: string) => void
  updateRecentSearch: (query: string) => void
  removeRecentSearch: (query: string, e: React.MouseEvent) => void
  clearAllRecentSearches: () => void
}

export const useRecentSearchesStore = create(
  persist<RecentSearches>(
    (set, get) => ({
      recentSearches: [],
      // recentSearches: [{ query: 'dasda', timestamp: 48464 }],
      setRecentSearches: (value) => {
        set((v) => ({ recentSearches: value }))
      },
      addRecentSearch: (query) => {
        // Si el valor no está vacío y es diferente a las búsquedas recientes, lo agregamos
        if (
          query.trim() &&
          !get().recentSearches.some((s) => s.query.toLowerCase() === query.toLowerCase())
        ) {
          const newSearch: RecentSearch = {
            query: query,
            timestamp: Date.now()
          }

          // Limitamos a 5 búsquedas recientes
          set((state) => ({ recentSearches: [newSearch, ...state.recentSearches].slice(0, 5) }))
        }
      },
      updateRecentSearch: (query: string) => {
        // Actualizamos el timestamp de esta búsqueda
        set((state) => ({
          recentSearches: [
            { query, timestamp: Date.now() },
            ...state.recentSearches.filter((s) => s.query !== query)
          ]
        }))
      },
      removeRecentSearch: (query: string, e: React.MouseEvent) => {
        e.stopPropagation()
        set((state) => ({ recentSearches: state.recentSearches.filter((s) => s.query !== query) }))
      },
      clearAllRecentSearches: () => {
        set({ recentSearches: [] })
      }
    }),
    {
      name: 'recentSearches',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage)
    }
  )
)
