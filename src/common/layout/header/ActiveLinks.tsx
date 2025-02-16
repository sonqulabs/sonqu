'use client'
import { Nav } from '@/common/interfaces/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

import { ChefHat, ChevronDown, Tags } from 'lucide-react'

export const ActiveLinks = ({ label, href, active, submenus }: Nav) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParamsString = searchParams.toString()

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current!)
    setSubmenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
        setSubmenuOpen(false)
      }
    }, 200) // Un pequeño retraso para permitir al usuario moverse
  }

  useEffect(() => {
    setSubmenuOpen(false) // Cierra el submenú cuando cambia la ruta
    return () => {
      setSubmenuOpen(false)
      clearTimeout(timeoutRef.current!)
    }
  }, [pathname, searchParamsString])

  return (
    <div
      className="relative text-gray-800"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!submenus ? (
        <Link
          href={href}
          className={cn('font-poppins text-sm font-medium uppercase transition-colors', {
            'text-sonqu-red-300': active,
            'hover:text-sonqu-red-300': !active
          })}
        >
          {label}
        </Link>
      ) : (
        <>
          <Link
            href={href}
            className={cn(
              'inline-flex items-center font-poppins text-sm font-medium uppercase leading-tight transition-colors',
              {
                'text-sonqu-red-300': active
              }
            )}
          >
            {label}
            <ChevronDown
              className={cn('ml-1 size-3 transition-transform duration-200', {
                'rotate-180': submenuOpen
              })}
            />
          </Link>

          {submenuOpen && (
            // submenuOpen
            <div className="fixed left-0 top-[100%] w-full overflow-hidden bg-gradient-to-r from-[#d31008] to-[#db5932] text-white shadow-sm">
              {/* <div className="mx-auto max-w-7xl"> */}
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-3 gap-4 p-4">
                  <div className="border-r border-muted/95">
                    <h2 className="flex items-center gap-2 font-medium uppercase text-yellow-300">
                      <ChefHat /> Dificultad
                    </h2>
                    <ul className="mt-4 flex flex-col gap-2 pl-1 text-sm">
                      <li>
                        <Link href="/search?difficulty=facil">Fáciles</Link>
                      </li>
                      <li>
                        <Link href="/search?difficulty=medio">Intermedias</Link>
                      </li>
                      <li>
                        <Link href="/search?difficulty=dificil">Difíciles</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <h2 className="flex items-center gap-2 font-medium uppercase text-yellow-300">
                      <Tags />
                      Categorias
                    </h2>
                    <ul className="mt-2 flex flex-col text-sm">
                      <Link
                        href="/search?categories=Dulce"
                        className="flex w-full items-center justify-between rounded-md px-2 py-1 hover:bg-muted/10"
                      >
                        <span>Dulce</span>
                        <span className="text-[10px] text-muted/95">→</span>
                      </Link>
                      <Link
                        href="/search?categories=Salado"
                        className="flex w-full items-center justify-between rounded-md px-2 py-1 hover:bg-muted/10"
                      >
                        <span>Amargo</span>
                        <span className="text-[10px] text-muted/95">→</span>
                      </Link>
                      <Link
                        href="/search?categories=Amargo"
                        className="flex w-full items-center justify-between rounded-md px-2 py-1 hover:bg-muted/10"
                      >
                        <span>Salado</span>
                        <span className="text-[10px] text-muted/95">→</span>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/95">
                <div className="mx-auto max-w-7xl p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">¿Buscas algo específico?</p>
                    <Link
                      href="/search"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Ver todas las recetas →
                    </Link>
                  </div>
                </div>
              </div>
              {/* <ul className="m-0 w-full list-none p-0">
                {submenus?.map(({ href, label }) => (
                  <li key={label} className="w-full whitespace-nowrap border-t border-gray-300">
                    <Link
                      href={href}
                      className={cn(
                        'block px-3 py-2 text-xs font-medium uppercase leading-none text-gray-700 transition-colors hover:bg-sonqu-red-300 hover:text-white focus:bg-accent focus:text-white'
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul> */}
              {/* </div> */}
            </div>
          )}
        </>
      )}
    </div>
  )
}

// {true && (
//   // submenuOpen
//   <div className="absolute left-0 top-8 mt-2 w-full overflow-hidden rounded-b-lg bg-sonqu-white-400 shadow-sm">
//     <ul className="m-0 w-full list-none p-0">
//       {submenus?.map(({ href, label }) => (
//         <li key={label} className="w-full whitespace-nowrap border-t border-gray-300">
//           <Link
//             href={href}
//             className={cn(
//               'block px-3 py-2 text-xs font-medium uppercase leading-none text-gray-700 transition-colors hover:bg-sonqu-red-300 hover:text-white focus:bg-accent focus:text-white'
//             )}
//           >
//             {label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// )}
