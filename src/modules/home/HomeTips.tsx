import { cn } from '@/lib/utils'
import Image from 'next/image'
import HomeStyles from './style/home.module.css'
import { GetTips } from './data/tips'

const HomeTips = () => {
  const dataTips = GetTips()
  return (
    <div className="wrapper relative">
      <div
        className={cn(
          HomeStyles.homeHeightTips,
          'container flex flex-col justify-center gap-3 px-4 xl:px-0'
        )}
      >
        <h2 className="mb-1 pt-10 text-lg font-bold text-white md:text-3xl">Tips Sonqu</h2>

        <div className={cn(HomeStyles.wrapCards, 'flex w-full justify-between gap-4')}>
          {dataTips.map((item, i) => (
            <div
              className={cn(
                HomeStyles.homeTipsBackgroundCard,
                'flex w-full flex-1 flex-col items-center overflow-hidden rounded-3xl lg:flex-row'
              )}
              key={i}
            >
              <div className="flex aspect-video h-full w-full overflow-hidden">
                <Image
                  src={item.img}
                  className="h-full w-full object-cover"
                  alt="fondo hero"
                  height={200}
                  width={200}
                />
              </div>
              <div className="flex flex-col px-4 py-4 text-white lg:px-6 lg:py-6">
                <h3 className="mb-2 line-clamp-1 text-base md:text-lg lg:text-xl">{item.title}</h3>
                <p className="mb-2 line-clamp-3 text-justify text-xs sm:line-clamp-4 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(HomeStyles.imageTips, 'absolute top-0 z-[-2]')} />
    </div>
  )
}

export default HomeTips
