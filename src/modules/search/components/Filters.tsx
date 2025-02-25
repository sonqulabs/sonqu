'use client'
import { useEffect, useState } from 'react'
import { getAllCategoriesGroup } from '../services/searchService'
import FilterSelector from './FilterSelector'
// import DifficultRadioGroup from './DifficultRadioGroup/DifficultRadioGroup'

const Filters = () => {
  const [listFood, setListFood] = useState([])
  useEffect(() => {
    const getCG = async () => {
      setListFood(await getAllCategoriesGroup())
    }

    getCG()
  }, [])
  return (
    <div className="flex flex-col gap-3">
      {/* <DifficultRadioGroup /> */}
      <FilterSelector data={listFood} />
    </div>
  )
}

export default Filters
