'use client'
import { useEffect, useState } from 'react'
import { getCategories } from '../services/searchService'
import FilterSelector from './FilterSelector'
import { useCategoriesStore } from '@/context/useCategoriesStore'
// import DifficultRadioGroup from './DifficultRadioGroup/DifficultRadioGroup'

const Filters = () => {
  // const [listFood, setListFood] = useState([] as { Category: string }[])
  const { categories } = useCategoriesStore()
  // useEffect(() => {
  //   const getCG = async () => {
  //     setListFood([{ Category: await getCategories() }])
  //   }

  //   getCG()
  // }, [])
  return (
    <div className="flex flex-col gap-3">
      {/* <DifficultRadioGroup /> */}
      <FilterSelector data={categories.length != 0 ? [{ Category: categories }] : []} />
    </div>
  )
}

export default Filters
