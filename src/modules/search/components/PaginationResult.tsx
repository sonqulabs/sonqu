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
import useSearchParamPage from '../hooks/useSearchParamPage'

const PaginationResult = ({ meta }) => {
  // console.log(meta)
  const { urlPage } = useSearchParamPage()

  // let pages: any = Array.from({ length: meta?.lastPage }, (_, index) => index + 1)
  // let pages: any = []

  const getPaginationRange = (totalPages: number, currentPage: number) => {
    const visiblePages = 3 // Número de páginas visibles además de la primera y la última.
    const range: (number | string)[] = []

    if (totalPages <= visiblePages + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    range.push(1) // Primera página siempre visible

    if (currentPage > 3) {
      range.push('...') // Agrega puntos si hay más de una página oculta al inicio
    }

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    for (let i = start; i <= end; i++) {
      range.push(i)
    }

    if (currentPage < totalPages - 2) {
      range.push('...') // Agrega puntos si hay más de una página oculta al final
    }

    range.push(totalPages) // Última página siempre visible

    return range
  }

  const pages = getPaginationRange(meta?.lastPage || 1, meta?.currentPage)

  return (
    <div className="grid grid-cols-1 gap-6 md:gap-3 xl:grid-cols-2">
      {/* <div className="hidden xl:block"></div> */}
      <div className="flex items-center justify-center text-sm font-medium xl:justify-start">
        <div className="rounded-full border border-[#0707072d] bg-white px-4 py-2 text-xs shadow-sm">
          Recetas encontradas : {meta.total}
        </div>
      </div>

      <Pagination className="flex justify-center xl:justify-end">
        <PaginationContent>
          {meta.prev != null ? (
            <PaginationItem>
              <PaginationPrevious
                size={'sm'}
                href={urlPage(meta.prev)}
                // onClick={() => addPage(meta.prev)}
              />
            </PaginationItem>
          ) : (
            <PaginationItem className="opacity-35 md:invisible">
              <PaginationPrevious size={'sm'} />
            </PaginationItem>
          )}
          {pages.map((item, i) => {
            return (
              <PaginationItem key={i}>
                {typeof item === 'number' ? (
                  <PaginationLink
                    size={'sm'}
                    href={urlPage(item)}
                    isActive={item === meta.currentPage}
                    className="w-9"
                  >
                    {item}
                  </PaginationLink>
                ) : (
                  <PaginationEllipsis />

                  // <span className="px-2">...</span> // Muestra los puntos suspensivos
                )}
              </PaginationItem>
              // <PaginationItem key={i}>
              //   <PaginationLink
              //     href={urlPage(item)}
              //     // href="#"
              //     // onClick={() => addPage(item)}
              //     isActive={item == meta.currentPage}
              //   >
              //     {item}
              //   </PaginationLink>
              // </PaginationItem>
            )
          })}

          {meta.next != null ? (
            <PaginationItem>
              <PaginationNext
                href={urlPage(meta.next)}
                size={'sm'}
                // href="#"
                // onClick={() => addPage(meta.next)}
              />
            </PaginationItem>
          ) : (
            <PaginationItem className="opacity-35 md:invisible">
              <PaginationNext size={'sm'} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationResult
