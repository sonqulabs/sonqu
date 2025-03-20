'use client'
import { useSearchParams } from 'next/navigation'
import useSearchParamCategories from '../hooks/useSearchParamCategories'
import { capitalizeFirstLetter } from '@/lib/utils'
import { useCategoriesStore } from '@/context/useCategoriesStore'
import { X } from 'lucide-react'

const SearchTags = () => {
  const { deleteParamCategories } = useSearchParamCategories()
  const searchParams = useSearchParams()
  const { categories } = useCategoriesStore()

  const getIcon = (category: string) => {
    return categories.find((item) => item.name === category)?.icon || ''
  }

  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-1">
      {/* <div className="">Categorias :</div> */}
      {searchParams
        .get('categories')
        ?.toString()
        .split('|')
        .map((item, i) => {
          return (
            <span
              className="flex cursor-pointer items-center gap-1 rounded-3xl bg-[#000000cc] px-2 py-0.5 text-[0.6875rem] text-white shadow-lg"
              key={i}
              onClick={() => deleteParamCategories(item)}
            >
              <span
                className="inline-flex h-3.5 w-3.5 items-center justify-center"
                dangerouslySetInnerHTML={{ __html: getIcon(item) }}
              ></span>
              {capitalizeFirstLetter(item)}
              <X className="h-3.5 w-3.5" />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x translate-x-[3px] text-red-100"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg> */}
            </span>
          )
        })}

      {/* <span>Limpiar Todo</span> */}
    </div>
  )
}

export default SearchTags
