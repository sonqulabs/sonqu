'use client'

import type React from 'react'

import { History, Clock, X, TrendingUp } from 'lucide-react'
import { Button } from '@/common/components/shadcnui/button'
import { Badge } from '@/common/components/shadcnui/badge'
import { RecentSearch } from './types/search-types'
// import type { RecentSearch } from "../t"

interface RecentSearchesProps {
  searches: RecentSearch[]
  onSelect: (query: string) => void
  onRemove: (query: string, e: React.MouseEvent) => void
  onClearAll: () => void
}

export function RecentSearches({ searches, onSelect, onRemove, onClearAll }: RecentSearchesProps) {
  // Tendencias (simuladas para el ejemplo)
  const trendingSearches = [
    'Recetas saludables',
    'Postres sin azúcar',
    'Comida rápida casera',
    'Platos vegetarianos'
  ]

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000)

    if (seconds < 60) return 'hace un momento'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `hace ${minutes} min`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `hace ${hours}h`
    const days = Math.floor(hours / 24)
    return `hace ${days}d`
  }

  return (
    <div className="border-b p-4 duration-200 animate-in fade-in">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <div className="h-4 w-4">
            <History className="h-full w-full" />
          </div>
          <span>Búsquedas recientes</span>
        </div>
        {searches.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Borrar todo
          </Button>
        )}
      </div>

      {searches.length > 0 ? (
        <div className="grid grid-cols-1 gap-1">
          {searches.map((search) => (
            <div
              key={search.query}
              onClick={() => onSelect(search.query)}
              className="group flex cursor-pointer items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 text-gray-400">
                  <Clock className="h-full w-full" />
                </div>
                <span className="text-gray-700">{search.query}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{formatTimeAgo(search.timestamp)}</span>
                <button
                  onClick={(e) => onRemove(search.query, e)}
                  className="text-gray-400 opacity-0 transition-opacity hover:text-gray-600 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-3 text-center text-sm text-gray-500">No hay búsquedas recientes</div>
      )}

      {/* Tendencias */}
      {/* <div className="mt-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
          <div className="h-4 w-4">
            <TrendingUp className="h-full w-full" />
          </div>
          <span>Tendencias</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingSearches.map((trend) => (
            <Badge
              key={trend}
              variant="outline"
              className="cursor-pointer bg-gray-50 text-gray-700 hover:bg-orange-50"
              onClick={() => onSelect(trend)}
            >
              {trend}
            </Badge>
          ))}
        </div>
      </div> */}
    </div>
  )
}
