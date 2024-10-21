import { Nav } from '@/common/interfaces/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export const ActiveLinks = ({ label, href, active, submenus }: Nav) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  return (
    <div
      className="relative"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!submenus ? (
        <Link
          href={href}
          className={cn(
            'font-poppins text-xs font-semibold uppercase text-black transition-colors',
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
          <Link
            href={href}
            className={cn(
              'flex items-center font-poppins text-xs font-semibold uppercase leading-tight text-black',
              {
                'text-sonqu-red-300': active
              }
            )}
          >
            {label}
            <ChevronDown
              className={cn('ml-1 mt-1 size-3 transition-transform duration-200', {
                'rotate-180': submenuOpen
              })}
            />
          </Link>

          {submenuOpen && (
            <div className="absolute left-0 top-7 mt-2 w-auto overflow-hidden rounded-b-lg bg-sonqu-white-400 shadow-sm">
              <ul className="m-0 w-full list-none p-0">
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
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}
