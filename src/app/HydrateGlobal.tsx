'use client'
import { useFavoritesStore } from '@/store/useFavoritesStore'
import { useEffect } from 'react'

const HydrateGlobal = () => {
  useEffect(() => {
    useFavoritesStore.persist.rehydrate()
  }, [])
  return null
}

export default HydrateGlobal
