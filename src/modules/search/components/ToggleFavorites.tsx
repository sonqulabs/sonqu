'use client'

import { cn } from '@/lib/utils'
import { useFavoritesStore } from '@/store/useFavoritesStore'
import { Heart } from 'lucide-react'

const ToggleFavorites = ({ recipeId, size }: { recipeId: number; size?: 'small' | 'default' }) => {
  const { favorites, toggleFavorite } = useFavoritesStore()

  const isFavorite = favorites.includes(recipeId.toString())

  return (
    <button
      onClick={(e) => toggleFavorite(recipeId.toString(), e)}
      className={cn(
        'absolute right-3 top-3 rounded-full bg-white/60 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white',
        size === 'small' && 'right-1 top-1 p-1.5'
      )}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    >
      <Heart
        className={cn(
          isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-800',
          size === 'small' ? 'h-3.5 w-3.5' : 'h-5 w-5'
        )}
      />
    </button>
  )
}

export default ToggleFavorites
