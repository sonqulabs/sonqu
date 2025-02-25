import { ArrowRight, Tags } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const SubMenuRecetas = ({ listFood }) => {
  function getCategoryGradient(number: number) {
    const gradients = [
      'from-pink-500 to-rose-500',
      'from-amber-500 to-orange-500',
      'from-indigo-500 to-purple-500',
      'from-sky-500 to-blue-500',
      'from-red-500 to-rose-500',
      'from-stone-500 to-neutral-500',
      'from-yellow-500 to-orange-500',
      'from-green-500 to-emerald-500',
      'from-blue-500 to-cyan-500',
      'from-orange-500 to-amber-500'
    ]
    return gradients[number] || 'from-slate-500 to-gray-500'
  }

  return (
    <>
      <div className="mx-auto flex max-w-7xl gap-6">
        <div className="p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold uppercase text-white">
            <Tags />
            <span className="">Categorias</span>
          </h2>
          <div className="mt-6 grid w-fit grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {/* <div className="mt-2 grid w-fit grid-cols-3 gap-x-16 text-sm"> */}
            {listFood.map((category, i) => {
              const gradient = getCategoryGradient(i)
              return (
                <Link
                  key={category.name}
                  href={`/search?categories=${category.name}`}
                  className="group relative isolate overflow-hidden rounded-xl bg-white/15 transition-all hover:bg-white/20"
                >
                  {/* Fondo con gradiente */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />

                  {/* Contenido */}
                  <div className="relative z-10 flex items-center gap-3 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:scale-110">
                      {/* <Icon className="h-4 w-4 text-white" /> */}
                      {i + 1}
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-1">
                      <span className="text-sm font-medium text-white">{category.name}</span>
                      <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Decorative dots */}
                  {/* <div className="absolute -right-1 -top-1 h-8 w-8 rotate-45 transform bg-white/5" />
                  <div className="absolute -bottom-1 -left-1 h-8 w-8 rotate-45 transform bg-white/5" /> */}
                </Link>
                // <Link className=" " key={category.name} href={`/search?categories=${category.name}`}>
                //   <div className="flex w-32 justify-between rounded-md px-2 py-1 hover:bg-muted/10">
                //     <span> {category.name}</span>
                //     <span className="text-[10px] text-muted/95">→</span>
                //   </div>
                // </Link>
              )
            })}
          </div>
        </div>

        <Image
          src="/ceviche1.png"
          className="m-auto aspect-square w-full max-w-72 p-6"
          width={100}
          height={100}
          alt=""
        />
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl border-t border-white/20 px-5 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/70">¿Buscas algo específico?</p>
            <Link
              href="/search"
              className="flex items-center gap-1 text-sm font-medium text-primary"
            >
              <span className="text-white hover:text-white/70 hover:underline">
                Ver todas las recetas
              </span>
              <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
