'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/common/components/shadcnui/pagination'
import useSearchParamPage from '../hooks/useSearchParamPage'

const PaginationResult = ({ meta }) => {
  // console.log(meta)
  const { urlPage } = useSearchParamPage()

  const pages = Array.from({ length: meta?.lastPage }, (_, index) => index + 1)

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="hidden sm:block"></div>
      <Pagination>
        <PaginationContent>
          {meta.prev != null && (
            <PaginationItem>
              <PaginationPrevious
                href={urlPage(meta.prev)}
                // onClick={() => addPage(meta.prev)}
              />
            </PaginationItem>
          )}
          {pages.map((item, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href={urlPage(item)}
                  // href="#"
                  // onClick={() => addPage(item)}
                  isActive={item == meta.currentPage}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          {meta.next != null && (
            <PaginationItem>
              <PaginationNext
                href={urlPage(meta.next)}
                // href="#"
                // onClick={() => addPage(meta.next)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
      <div className="flex items-center justify-center text-sm font-medium sm:justify-end">
        <div className="rounded-full bg-white px-4 py-2">Recetas encontradas : {meta.total}</div>
      </div>
    </div>
  )
}

export default PaginationResult
