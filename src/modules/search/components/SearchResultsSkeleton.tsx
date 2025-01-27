import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/common/components/shadcnui/pagination'

const SearchResultsSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="hidden sm:block"></div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            {/* {[1, 2].map((item, i) => {
              return (
                <PaginationItem key={i}>
                  <PaginationLink href="#" isActive={item == 2}>
                    {item}
                  </PaginationLink>
                </PaginationItem>
              )
            })} */}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="flex items-center justify-center text-sm font-medium sm:justify-end">
          Count: ...
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
        {[0, 0, 0, 0, 0, 0].map((item, i) => (
          <div
            key={i}
            role="status"
            className="flex animate-pulse flex-col overflow-hidden rounded-3xl bg-white md:flex md:items-center lg:flex-row"
          >
            <div className="flex h-full min-h-52 w-full flex-1 items-center justify-center bg-gray-300 object-cover dark:bg-gray-700 lg:w-0">
              <svg
                className="h-10 w-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="relative w-full px-4 py-8 lg:max-w-[60%]">
              <div className="mb-4 h-3.5 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              {/* <div className="mb-3 h-3 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div> */}
              {/* <div className="mb-3 h-3 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div> */}
              <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchResultsSkeleton
