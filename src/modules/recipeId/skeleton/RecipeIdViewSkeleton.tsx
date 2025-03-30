import { TopSeparator2 } from '@/common/components/customize/TopSeparator2'
import { CalendarDays, CircleUser, Users } from 'lucide-react'

const RecipeIdViewSkeleton = () => {
  return (
    <div>
      <TopSeparator2 />
      <div className="container min-h-svh max-w-[850px] animate-pulse py-10">
        <div className="mb-12 flex w-full items-center justify-center gap-2 px-10">
          <span className="flex h-5 w-14 items-center gap-1 rounded-3xl bg-gray-300 px-2 py-0.5 text-[0.6875rem] text-white opacity-90 shadow-lg"></span>
        </div>

        {/* <h1 className="mb-6 text-center text-3xl font-bold underline decoration-[#3a3a3a5d] decoration-1 underline-offset-8 "></h1> */}
        <h1 className="mb-6 flex justify-center text-center text-3xl font-bold underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
          {/* {recipe.title}{' '} */}
          <div className="mb-4 h-3.5 w-full max-w-48 rounded-full bg-gray-400 dark:bg-gray-700"></div>
          {/* <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>

        <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div> */}
        </h1>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-gray-600 md:px-10">
          {[0, 0, 0].map((_, i) => {
            return (
              <div
                key={i}
                className="flex h-8 w-48 items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-gray-600"
              ></div>
            )
          })}
        </div>

        <div className="mb-6 flex flex-col items-center justify-center gap-6 md:flex-row md:px-10">
          <div className="m-auto flex aspect-[10/9] w-[350px] items-center justify-center rounded-lg border border-[#ffffff57] bg-gray-300 object-cover shadow-md">
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

          <div className="flex-1 text-sm">
            <div className="mb-4 h-3.5 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>

        <div className="mb-2 h-12 w-full rounded-md bg-white"></div>

        <div className="flex flex-col justify-center rounded-xl bg-white px-4 py-4 shadow-md md:px-10 md:py-7">
          {[0, 0, 0].map((_, i) => {
            return (
              <div className="mb-11" key={i}>
                <h2 className="text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
                  <div className="mb-4 h-3.5 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </h2>
                <div className="mt-5 pl-2">
                  <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RecipeIdViewSkeleton
