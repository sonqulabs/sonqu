'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/common/components/shadcnui/pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const PaginationResult = ({ meta }) => {
  // console.log(meta)
  const pages = Array.from({ length: meta.lastPage }, (_, index) => index + 1)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const addPage = (data) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', data)
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="hidden sm:block"></div>
      <Pagination>
        <PaginationContent>
          {meta.prev != null && (
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => addPage(meta.prev)} />
            </PaginationItem>
          )}
          {pages.map((item, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  onClick={() => addPage(item)}
                  isActive={item == meta.currentPage}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          {meta.next != null && (
            <PaginationItem>
              <PaginationNext href="#" onClick={() => addPage(meta.next)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
      <div className="flex items-center justify-center text-sm font-medium sm:justify-end">
        Count: {meta.total}
      </div>
    </div>
  )
}

export default PaginationResult
