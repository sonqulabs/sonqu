'use client'
import { Button } from '@/common/components/shadcnui/button'
import { Checkbox } from '@/common/components/shadcnui/checkbox'

const FilterSelectorSkeleton = () => {
  return (
    <>
      <div className="h-fit w-full overflow-hidden rounded-lg border bg-background md:w-64">
        <Button variant="ghost" className="flex h-fit w-full items-center justify-between p-3">
          <span className="flex items-center gap-2 text-base">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-category"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4h6v6h-6z" />
              <path d="M14 4h6v6h-6z" />
              <path d="M4 14h6v6h-6z" />
              <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>
            Categorias
          </span>

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
        </Button>
        {[0, 0, 0, 0].map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3 py-4 pl-5">
              <div className="h-3 w-32 rounded-full bg-gray-300 dark:bg-gray-700"></div>

              <div className="ml-2 flex flex-col gap-1">
                {[0, 0, 0, 0, 0].map((item, i) => {
                  return (
                    <div key={i} className="flex items-center space-x-2">
                      <Checkbox className="border-gray-300" />
                      <div className="my-2 h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FilterSelectorSkeleton
