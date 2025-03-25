import { Instagram, Youtube } from 'lucide-react'
import HomeStyles from './style/home.module.css'
import { cn } from '@/lib/utils'
import Image from 'next/image'
// import { LogoTiktok } from '@/common/components/icons/solid/LogoTiktok'

const HomeHero = () => {
  return (
    <div className="wrapper relative">
      <Image
        src="/inicio/ericHero.webp"
        alt="foto del chef sonqu"
        className="absolute bottom-0 z-10 hidden w-full max-w-[300px] lg:right-[20px] lg:block lg:max-w-[700px] xl:right-[calc(10vw+10px)] xl:max-w-[700px] 2xl:right-[calc(10vw+70px)]"
        width={500}
        height={500}
      />
      <div
        className={cn(
          HomeStyles.homeHero,
          'container flex items-center justify-center px-0 pb-20 lg:justify-start lg:pb-32 lg:pl-24'
        )}
      >
        <div className="relative flex flex-col px-2 text-center sm:text-start">
          <Image
            src="/adornobottom.webp"
            alt="adorno de sonqu"
            className="absolute -top-20 left-0 z-20 object-cover md:-left-20"
            width={100}
            height={100}
          />
          <Image
            src="/adornotop.webp"
            alt="adorno de sonqu"
            className="absolute -bottom-16 right-0 z-20 object-cover md:-right-16 lg:hidden min-[1900px]:block"
            width={100}
            height={100}
          />
          <div className="flex items-center justify-center gap-4 pb-3 text-black lg:justify-start">
            <a href="#" className="flex items-center gap-2 transition-colors">
              <Youtube className="size-6" />
              <span className="text-sm font-medium">500k </span>
            </a>
            <a href="#" className="flex items-center gap-2 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="text-sm font-medium">250k </span>
            </a>
            <a href="#" className="flex items-center gap-2 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="size-6"
                width="100"
                height="100"
                viewBox="0 0 32 32"
                stroke="black"
              >
                <path d="M 16 3.9980469 C 13.080861 3.9980469 10.161004 4.3447693 7.2480469 5.0371094 C 6.1507011 5.2968904 5.2962649 6.1524002 5.0371094 7.25 C 3.6528787 13.075289 3.652579 18.92667 5.0371094 24.751953 C 5.2967541 25.848723 6.1512769 26.703246 7.2480469 26.962891 C 13.073961 28.347571 18.926039 28.347571 24.751953 26.962891 C 25.848723 26.703246 26.703246 25.848723 26.962891 24.751953 L 26.962891 24.75 C 28.346971 18.925342 28.346971 13.074658 26.962891 7.25 L 26.962891 7.2480469 C 26.703246 6.1512738 25.848723 5.2967541 24.751953 5.0371094 C 21.838996 4.3447693 18.919139 3.9980469 16 3.9980469 z M 16 5.9960938 C 18.760861 5.9960936 21.522019 6.324762 24.289062 6.9824219 L 24.291016 6.9824219 C 24.63284 7.0631309 24.93687 7.3671602 25.017578 7.7089844 L 25.017578 7.7109375 C 26.332898 13.245024 26.332898 18.754976 25.017578 24.289062 L 25.017578 24.291016 C 24.936868 24.63284 24.63284 24.93687 24.291016 25.017578 L 24.289062 25.017578 C 18.754976 26.332898 13.245024 26.332898 7.7109375 25.017578 L 7.7089844 25.017578 C 7.3671571 24.936827 7.0631304 24.63284 6.9824219 24.291016 L 6.9824219 24.289062 C 5.6671021 18.754977 5.6671021 13.245024 6.9824219 7.7109375 L 6.9824219 7.7089844 C 7.0631304 7.3672031 7.3671602 7.0631304 7.7089844 6.9824219 L 7.7109375 6.9824219 C 10.477984 6.324762 13.239139 5.9960938 16 5.9960938 z M 17.015625 8.4863281 A 1.0001 1.0001 0 0 0 16.916016 8.4921875 A 1.0001 1.0001 0 0 0 16.238281 8.8769531 A 1.0001 1.0001 0 0 0 16.179688 8.9589844 A 1.0001 1.0001 0 0 0 16.132812 9.0449219 A 1.0001 1.0001 0 0 0 16.091797 9.1367188 A 1.0001 1.0001 0 0 0 16.0625 9.2324219 A 1.0001 1.0001 0 0 0 16.042969 9.3300781 A 1.0001 1.0001 0 0 0 16.029297 9.5 L 16.029297 19.5 C 16.029297 20.621847 15.151144 21.5 14.029297 21.5 C 12.907449 21.5 12.029297 20.621847 12.029297 19.5 C 12.029297 18.378153 12.907449 17.5 14.029297 17.5 A 1.0001 1.0001 0 1 0 14.029297 15.5 C 11.831144 15.5 10.029297 17.301847 10.029297 19.5 C 10.029297 21.698153 11.831144 23.5 14.029297 23.5 C 16.081561 23.5 17.727794 21.90948 17.945312 19.912109 A 1.0001 1.0001 0 0 0 18.029297 19.5 L 18.029297 13.388672 C 18.856875 14.029837 19.838966 14.484614 20.957031 14.5 A 1.0001 1.0001 0 1 0 20.984375 12.5 C 19.341158 12.47739 18.029297 11.154231 18.029297 9.5 A 1.0001 1.0001 0 0 0 18.027344 9.4003906 A 1.0001 1.0001 0 0 0 18.013672 9.3007812 A 1.0001 1.0001 0 0 0 17.736328 8.7792969 A 1.0001 1.0001 0 0 0 17.496094 8.6015625 A 1.0001 1.0001 0 0 0 17.310547 8.5253906 A 1.0001 1.0001 0 0 0 17.214844 8.5019531 A 1.0001 1.0001 0 0 0 17.115234 8.4902344 A 1.0001 1.0001 0 0 0 17.015625 8.4863281 z"></path>
              </svg>
              <span className="text-sm font-medium">1M </span>
            </a>
          </div>
          <h1 className="mb-4 text-center font-monserrat text-[45px] font-bold uppercase leading-none text-black sm:text-[60px] lg:text-start lg:text-6xl xl:text-7xl">
            Las Mejores <span className="block"> Recetas</span>
          </h1>
          <h2 className="mb-4 text-center font-fingerPaint text-[25px] leading-none text-[#646161] sm:text-[30px] lg:text-start lg:text-[45px] xl:text-[55px]">
            En un solo lugar
          </h2>
          <p className="mx-auto mb-6 max-w-[500px] text-center font-monserrat text-base font-medium text-black sm:mx-0 lg:text-start lg:text-[20px]">
            En SONQU encontrarás las mejores recetas de la gastronomía peruana. Te enseñaremos paso
            a paso cómo preparar los mejores platos peruanos.
          </p>

          <button className="mx-auto w-fit rounded-xl bg-[#CE0146] px-10 py-3 text-white lg:mx-0">
            VER RECETAS
          </button>
        </div>
      </div>
      <div
        className={cn(HomeStyles.image, 'absolute top-0 z-[-2]')}
        // style={{
        //   filter: 'brightness(0.35)',
        //   transform: 'rotateY(180deg)'
        // }}
      />
    </div>
  )
}

export default HomeHero

// import HomeStyles from './style/home.module.css'
// import { cn } from '@/lib/utils'

// const HomeHero = () => {
//   return (
//     <div className="wrapper relative">
//       <div
//         className={cn(
//           HomeStyles.homeHero,
//           'container flex items-center justify-center px-0 pb-32 sm:justify-end sm:pr-10 md:pr-24 xl:pr-40'
//         )}
//       >
//         <div className="flex flex-col text-center sm:text-start">
//           <h1 className="font-jallaOne text-6xl uppercase sm:text-7xl">
//             Las Mejores <span className="block"> Recetas</span>
//           </h1>
//           <h2 className="mb-4 font-fingerPaint text-3xl text-sonqu-black-300">En un solo lugar</h2>
//           <p className="font mx-auto mb-3 max-w-80 font-medium sm:mx-0">
//             En SONQU encontrarás las mejores recetas de la gastronomía peruana. Te enseñaremos paso
//             a paso cómo preparar los mejores platos peruanos.
//           </p>

//           <button className="mx-auto w-fit rounded-xl bg-sonqu-orange-400 px-10 py-3 text-white sm:mx-0">
//             CONOCE MÁS
//           </button>
//         </div>
//       </div>
//       <div
//         className={cn(HomeStyles.image, 'absolute top-0 z-[-2]')}
//         style={{
//           filter: 'brightness(0.35)'
//         }}
//       />
//     </div>
//   )
// }

// export default HomeHero
