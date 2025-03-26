'use client'
import { useCategoriesStore } from '@/context/useCategoriesStore'
import { useEffect } from 'react'

const DataFetcher = () => {
  const { getCategories } = useCategoriesStore()
  useEffect(() => {
    getCategories()
  }, [getCategories])

  return null
}

export default DataFetcher
