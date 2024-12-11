'use client'
import { Button } from '@/common/components/shadcnui/button'
import { Checkbox } from '@/common/components/shadcnui/checkbox'
import IconAdjustmentsHorizontal from '../Icons/IconAdjustmentsHorizontal'

const GroupCategoriesSkeleton = () => {
  return (
    <>
      <div className="hidden min-w-48 animate-pulse flex-col gap-5 rounded-lg md:flex">
        {[0, 0, 0, 0].map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3">
              <div className="h-3 w-32 rounded-full bg-gray-100 dark:bg-gray-700"></div>
              {/* <div className="h-3.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div> */}

              {/* <div className="ml-2 flex flex-col gap-1"> */}

              <div className="ml-2 flex flex-col gap-1">
                {[0, 0, 0, 0, 0].map((item, i) => {
                  return (
                    <div key={i} className="flex items-center space-x-2">
                      <Checkbox className="border-gray-100" />
                      <div className="my-2 h-2.5 w-12 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                      {/* <div className="my-1 h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div> */}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="h-fit w-full overflow-hidden rounded-lg border bg-background md:hidden md:w-64">
        <Button variant="ghost" className="flex w-full items-center justify-between p-4 md:hidden">
          <span className="flex items-center gap-2 text-base">
            <IconAdjustmentsHorizontal />
            Filtros
          </span>
        </Button>
        {/* <div className={`${isOpen ? 'block' : 'hidden'} p-4 md:block`}>
          <div className="flex flex-col gap-5">
           
          </div>
        </div> */}
      </div>
    </>
  )
}

const ListCategoriesGroup = ({ listFood, getCateries, handleGroup }) => {
  return listFood.map((item, i) => (
    <div className="" key={i}>
      <h3 className="mb-2 font-semibold uppercase">{item?.name}</h3>
      <div className="ml-2 flex flex-col gap-1">
        {item?.Category?.map((itemData, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <Checkbox
              // key={i}
              // value={itemData.name}
              // id={itemData.name}
              checked={getCateries().some((category) => category == itemData.name)}
              onCheckedChange={(check) => handleGroup(check, itemData.name)}
            />
            <label htmlFor={itemData.name}>{itemData.name}</label>
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
  ))
}

export default GroupCategoriesSkeleton
