import { cn } from '@/lib/utils'
import Image from 'next/image'
import HomeStyles from './style/home.module.css'

const data = [
  {
    title: '¿Cómo se prende el carbón?',
    description:
      'Forma una casita con el carbón. Corta un trozo de papel de la bolsa del carbón y forma un churrito. Ponlo en el centro de la casita de carbón y prende el papel.Recuerda que tienes que dejar un hueco en la casita de carbón para no ahogar el fuego.',
    img: '/carbon.png'
  },
  {
    title: '¿Pelar huevos duros fácilmente?',
    description:
      'Si quieres pelar fácilmente los huevos duros solo tienes que añadir un buen chorro de vinagre al agua de cocción, de esta manera, el ácido ablandará la cáscara y hará que los huevos se pelen con mayor facilidad.',
    img: '/huevo.png'
  }
]

const HomeTips = () => {
  return (
    <div className="wrapper relative">
      <div
        className={cn(
          HomeStyles.homeHeightTips,
          'container flex flex-col justify-center gap-3 px-4 xl:px-0'
        )}
      >
        <h2 className="mb-1 pt-10 font-poppins text-lg font-bold uppercase text-white md:text-2xl">
          Tips
        </h2>

        <div className="flex w-full justify-center gap-4">
          {data.map((item, i) => (
            <div
              className={cn(
                HomeStyles.homeTipsBackgroundCard,
                'flex flex-1 flex-col items-center gap-3 overflow-hidden rounded-3xl lg:flex-row'
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
              <div className="flex flex-col px-4 py-2 text-white lg:py-4">
                <h3 className="mb-2 line-clamp-1 text-lg lg:text-xl">{item.title}</h3>
                <p className="mb-2 line-clamp-3 text-justify text-xs sm:line-clamp-4 sm:text-sm">
                  {item.description}
                </p>

                <button className="self-end italic opacity-50">Ver mas</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(HomeStyles.imageTips, 'absolute top-0 z-[-2]')} />
      {/* <Image
        src="/fondo-tips.png"
        height={500}
        width={500}
        className={cn(
          HomeStyles['home-tips__background-image'],
          'absolute left-0 top-0 -z-10 w-full'
        )}
        alt="fondo hero"
      /> */}
    </div>
  )
}

export default HomeTips
