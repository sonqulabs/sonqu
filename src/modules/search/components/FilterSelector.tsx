'use client'
import { Button } from '@/common/components/shadcnui/button'
import { Checkbox } from '@/common/components/shadcnui/checkbox'
import { Tags } from 'lucide-react'
import { useEffect, useState } from 'react'
import useSearchParamCategories from '../hooks/useSearchParamCategories'
import FilterSelectorSkeleton from './FilterSelectorSkeleton'

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
      {/* <div className="hidden min-w-48 flex-col gap-5 md:flex">
        <ListCategoriesGroup
          listFood={listFood}
          getCateries={getCateries}
          handleGroup={handleGroup}
        />
      </div> */}

      <div className="h-fit w-full overflow-hidden rounded-lg border border-[#0707072d] bg-background shadow-md md:w-64">
        <Button
          onClick={toggleFilter}
          variant="ghost"
          className="flex h-fit w-full items-center justify-between p-3"
        >
          <span className="flex items-center gap-2 text-base">
            <Tags />
            Categorias
          </span>
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
    (item) =>
      item?.Category?.length > 0 && (
        <div className="" key={item?.name}>
          <h3 className="mb-2 font-semibold uppercase">{item?.name}</h3>
          <div className="ml-2 flex flex-col gap-1">
            {item?.Category?.map((itemData, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <Checkbox
                  // key={i}
                  // value={itemData.name}
                  id={itemData.name}
                  checked={getCateries().some((category) => category == itemData.name)}
                  onCheckedChange={(check) => handleGroup(check, itemData.name)}
                />
                <label className="cursor-pointer" htmlFor={itemData.name}>
                  {itemData.name}
                </label>
              </div>
            ))}
            {/* <RadioGroup defaultValue="default" onValueChange={(value) => handleGroup(value)}>
        {item.data.map((itemData, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <RadioGroupItem value={itemData} id={itemData} />
            <label htmlFor={itemData}>{itemData}</label>
          </div>
        ))}
      </RadioGroup> */}
          </div>
        </div>
      )
  )
}

export default FilterSelector
