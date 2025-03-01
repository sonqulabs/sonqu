'use client'
import { Nav } from '@/common/interfaces/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

import { ChevronDown } from 'lucide-react'

export const ActiveLinks = ({
  label,
  href,
  active,
  submenus,
  SubMenu
}: Nav & { SubMenu: React.ComponentType }) => {
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
      // if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
      //   setSubmenuOpen(false)
      // }

      setSubmenuOpen(false)
    }, 200)
  }
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // console.log('dinos')
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setSubmenuOpen(false)
    }
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
      className="relative h-full text-gray-800"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur} // Agrega esto para cerrar el menú cuando se pierde el foco
      tabIndex={0} // Hace que el div pueda recibir el foco
    >
      {!submenus ? (
        <Link
          href={href}
          className={cn(
            'flex h-full items-center font-fingerPaint text-sm font-medium uppercase leading-tight tracking-wide text-gray-100 transition-colors',
            {
              'text-sonqu-orange-400': active,
              'hover:text-sonqu-red-300': !active
            }
          )}
        >
          {label}
        </Link>
      ) : (
        <>
          <Link
            href={href}
            className={cn(
              'inline-flex h-full items-center font-fingerPaint text-sm font-medium uppercase leading-tight tracking-wide text-gray-100 transition-colors',
              // 'inline-flex h-full items-center font-poppins text-sm font-medium uppercase leading-tight tracking-wide text-gray-600 transition-colors',
              {
                'text-sonqu-orange-400': active
                // 'text-sonqu-red-300': active
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
              <SubMenu />
              {/* <div className="mx-auto max-w-7xl"> */}

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
