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
    <div className="relative">
      <div className="wrapper py-28">
        <h2 className="mb-10 text-3xl font-bold uppercase text-white">Tips</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {data.map((item, i) => (
            <div
              className={cn(
                HomeStyles['home-tips__background-card'],
                'flex overflow-hidden rounded-3xl'
              )}
              key={i}
            >
              <Image
                src={item.img}
                height={200}
                width={200}
                className="flex-1 object-cover"
                alt="fondo hero"
              />
              <div className="relative max-w-80 px-4 py-8 text-white">
                <h3 className="mb-2 text-xl">{item.title}</h3>
                <p className="mb-2">{item.description}</p>

                <button className="absolute bottom-4 right-7 ml-auto block italic opacity-50">
                  Ver mas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/fondo-tips.png"
        height={500}
        width={500}
        className={cn(
          HomeStyles['home-tips__background-image'],
          'absolute left-0 top-0 -z-10 w-full'
        )}
        alt="fondo hero"
      />
    </div>
  )
}

export default HomeTips
