import type { JSX } from 'react'

export type Recipe = {
  id: string
  name: string
  description: string
  time: string
  difficulty: string
  servings: number
  rating: number
}

export type Category = {
  id: string
  name: string
  icon: JSX.Element
}

export type RecentSearch = {
  query: string
  timestamp: number
}
