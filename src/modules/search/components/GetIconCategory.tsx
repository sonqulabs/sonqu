'use client'
import { useCategoriesStore } from '@/context/useCategoriesStore'

const GetIconCategory = ({ categoryName }) => {
  const { categories } = useCategoriesStore()
  const getIcon = (category: string) => {
    return categories.find((item) => item.name === category)?.icon || ''
  }

  return (
    <span
      className="inline-flex h-4 w-4 items-center justify-center"
      dangerouslySetInnerHTML={{ __html: getIcon(categoryName) }}
    ></span>
  )
}

export default GetIconCategory
