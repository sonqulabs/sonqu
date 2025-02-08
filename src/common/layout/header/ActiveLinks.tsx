'use client'
import { Nav } from '@/common/interfaces/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'

export const ActiveLinks = ({ label, href, active, submenus }: Nav) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const pathname = usePathname()
  const searchParams = useSearchParams()

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
  }, [pathname, searchParams.toString()])

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
          className={cn('font-poppins text-sm font-bold uppercase transition-colors', {
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
              'inline-flex items-center font-poppins text-sm font-semibold uppercase leading-tight',
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
            <div className="fixed left-0 top-[100%] grid w-full grid-cols-3 overflow-hidden bg-gradient-to-r from-[#d31008] to-[#db5932] p-4 text-white shadow-sm">
              <div className="">
                <h2 className="font-medium uppercase text-yellow-300">Dificultad</h2>
                <ul className="mt-2 pl-5">
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
                <h2 className="font-medium uppercase text-yellow-300">Sabor</h2>
                <ul className="mt-2 pl-5">
                  <li>
                    <Link href="/search?difficulty=facil">Dulce</Link>
                  </li>
                  <li>
                    <Link href="/search?difficulty=medio">Amargo</Link>
                  </li>
                  <li>
                    <Link href="/search?difficulty=dificil">Salado</Link>
                  </li>
                </ul>
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
