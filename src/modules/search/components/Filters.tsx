'use client'
import { useCategoriesStore } from '@/context/useCategoriesStore'
import FilterSelector from './FilterSelector'

const Filters = () => {
  const { categories } = useCategoriesStore()

  return (
    <div className="flex flex-col gap-3">
      {/* <DifficultRadioGroup /> */}
      <FilterSelector data={categories.length != 0 ? [{ Category: categories }] : []} />
    </div>
  )
}

export default Filters
