'use client'
import { Button } from '@/common/components/shadcnui/button'
import { Checkbox } from '@/common/components/shadcnui/checkbox'
import { useEffect, useState } from 'react'
import useSearchParamCategories from '../hooks/useSearchParamCategories'
import IconAdjustmentsHorizontal from '../Icons/IconAdjustmentsHorizontal'
import FilterSelectorSkeleton from './FilterSelectorSkeleton'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { ChevronRight, Filter } from 'lucide-react'

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}

const FilterSelector = ({ data: listFood }) => {
  const { addParamCategories, deleteParamCategories, getCateries } = useSearchParamCategories()

  const [isOpen, setIsOpen] = useState(true)
  const toggleFilter = () => setIsOpen(!isOpen)

  const isMobile = useIsMobile()

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  const handleGroup = async (check, value) => {
    // console.log({ value, check })
    if (check) {
      addParamCategories(value)
    } else {
      deleteParamCategories(value)
    }
  }

  if (listFood.length == 0) {
    return <FilterSelectorSkeleton />
  }

  return (
    <>
      <div className="h-fit w-full overflow-hidden rounded-lg border border-[#0707072d] bg-background text-gray-900 shadow-md md:w-64">
        <Button
          onClick={toggleFilter}
          variant="ghost"
          className={cn(
            'flex h-fit w-full items-center justify-between p-3 py-3.5',
            isOpen && 'rounded-b-none border-b border-[#0707070c]'
          )}
        >
          {/* <span className="flex items-center gap-2 text-base">
            <IconAdjustmentsHorizontal /> FILTROS
          </span> */}
          <div className="flex items-center">
            <Filter size={18} className="mr-2" />
            <span className="font-medium">FILTROS</span>
          </div>

          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 15l6 -6l6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          )}
        </Button>
        <div className={`${isOpen ? 'block' : 'hidden'} `}>
          <div className="flex flex-col gap-5 py-4 pl-5">
            <ListCategoriesGroup
              listFood={listFood}
              getCateries={getCateries}
              handleGroup={handleGroup}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const ListCategoriesGroup = ({ listFood, getCateries, handleGroup }) => {
  return listFood.map(
    (item, i) =>
      item?.Category?.length > 0 && (
        <div className="" key={item?.name + i}>
          {item?.name && <h3 className="mb-2 font-semibold uppercase">{item?.name}</h3>}
          <div className={cn('ml-2 flex flex-col gap-1.5', !item.name && 'ml-0')}>
            {item?.Category?.map((itemData, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <Checkbox
                  // key={i}
                  // value={itemData.name}
                  id={itemData.name}
                  checked={getCateries().some((category) => category == itemData.name)}
                  onCheckedChange={(check) => handleGroup(check, itemData.name)}
                />
                <label
                  className="flex cursor-pointer items-center gap-1 text-[15px]"
                  htmlFor={itemData.name}
                >
                  {/* {itemData.name} */}
                  <span
                    className="inline-flex h-4 w-4 items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: itemData.icon }}
                  ></span>
                  {capitalizeFirstLetter(itemData.name)}
                </label>
              </div>
            ))}
          </div>
        </div>
      )
  )
}

export default FilterSelector
