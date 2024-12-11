'use client'
import { useSearchParams } from 'next/navigation'
import useSearchParamCategories from '../hooks/useSearchParamCategories'

const SearchTags = () => {
  const { deleteParamCategories } = useSearchParamCategories()
  const searchParams = useSearchParams()

  return (
    <div className="flex items-center gap-2 md:mb-5">
      <div className="md:h-8"></div>
      {searchParams
        .get('categories')
        ?.toString()
        .split(',')
        .map((item, i) => {
          return (
            <span
              className="flex cursor-pointer items-center rounded-3xl bg-slate-400 px-3 py-1 text-white"
              key={i}
              onClick={() => deleteParamCategories(item)}
            >
              {item}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
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
              </svg>
            </span>
          )
        })}

      {/* <span>Limpiar Todo</span> */}
    </div>
  )
}

export default SearchTags
