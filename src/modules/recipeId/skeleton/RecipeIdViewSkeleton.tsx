const RecipeIdViewSkeleton = () => {
  return (
    <div className="container min-h-svh max-w-[850px] animate-pulse py-10">
      <h1 className="mb-7 text-center text-3xl font-bold underline decoration-[#3a3a3a] decoration-1 underline-offset-8 md:text-start">
        {/* {recipe.title}{' '} */}
        <div className="mb-4 h-3.5 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        {/* <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>

        <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div> */}
      </h1>

      <div className="mb-5 flex items-center justify-center gap-2 md:justify-start md:px-10">
        {[0, 0].map((_, i) => {
          return (
            <span
              className="flex h-9 w-24 cursor-pointer items-center rounded-3xl bg-slate-400 px-3 py-1 text-white"
              key={i}
            ></span>
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
        {/* <Image
      src={getImageRecipe(recipe.imageUrl, 'medium')}
      height={450}
      width={450}
      className="m-auto aspect-[10/9] w-[350px] rounded-lg border border-[#ffffff57] object-cover shadow-md"
      alt={recipe.title}
    /> */}
        {/* <h2 className="underline-red mb-2 text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
      Descripcion
    </h2> */}
        <div className="flex-1 text-sm">
          <div className="mb-4 h-3.5 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center py-5 md:px-20">
        {[0, 0, 0].map((_, i) => {
          return (
            <div className="mb-11" key={i}>
              <h2 className="text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
                <div className="mb-4 h-3.5 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </h2>
              <div className="mt-5 pl-2 md:pl-10">
                <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-3 h-3 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          )
        })}
        {/* <div className="mb-11">
          <h2 className="mb-2 text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
            Instrucciones
          </h2>
          <div
            className="mt-5 pl-2 md:pl-10"
            // dangerouslySetInnerHTML={{ __html: recipe?.instructions[0]?.description }}
          ></div>
        </div>

        <h2 className="mb-6 text-2xl font-medium underline decoration-[#3a3a3a] decoration-1 underline-offset-8">
          Vea el proceso en Youtube
        </h2> */}
        {/* <YoutubeLite url={recipe.videoUrl} /> */}
      </div>
    </div>
  )
}

export default RecipeIdViewSkeleton
