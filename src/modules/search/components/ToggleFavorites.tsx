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
        'absolute rounded-full border bg-white/70 p-2 backdrop-blur-sm transition-colors hover:bg-white',
        isFavorite ? 'border-red-500/50' : 'border-gray-800/15',
        size === 'small' ? 'left-1 top-1 p-1.5' : 'left-3 top-3'
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
