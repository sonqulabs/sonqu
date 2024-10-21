import { Nav } from '@/common/interfaces/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export const ActiveLinksMobile = ({ label, href, active, submenus }: Nav) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Función para manejar el clic en el enlace
  const handleToggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev)
  }

  return (
    <div
      className="relative flex w-full flex-col border border-b-gray-300 border-l-gray-300 border-t-gray-300 last:border-b-0"
      ref={containerRef}
    >
      {!submenus ? (
        <Link
          href={href}
          className={cn(
            'w-full py-1 pl-4 font-poppins text-xs font-semibold uppercase leading-loose text-black transition-colors',
            {
              'text-sonqu-red-300': active,
              'hover:text-sonqu-red-300': !active
            }
          )}
        >
          {label}
        </Link>
      ) : (
        <>
          <div className="flex w-full items-center justify-between">
            <Link
              href={href}
              className={cn(
                'flex flex-1 items-center py-1 pl-4 font-poppins text-xs font-semibold uppercase leading-loose text-black',
                {
                  'text-sonqu-red-300': active
                }
              )}
            >
              {label}
            </Link>
            <ChevronDown
              onClick={handleToggleSubmenu}
              className={cn('size-6 border-l border-gray-300 transition-transform duration-200', {
                'rotate-180': submenuOpen
              })}
            />
          </div>

          {submenuOpen && (
            <ul className="overflow-hidden bg-sonqu-white-400 shadow-sm">
              {submenus?.map(({ href, label }) => (
                <li key={label} className="w-full whitespace-nowrap">
                  <Link
                    href={href}
                    className={cn(
                      'block w-full py-2 pl-6 text-[11px] font-medium uppercase leading-none text-gray-700 transition-colors hover:bg-sonqu-red-300 hover:text-white focus:bg-accent focus:text-white'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
