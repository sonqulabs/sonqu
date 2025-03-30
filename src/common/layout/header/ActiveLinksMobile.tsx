'use client'
import { Nav } from '@/common/interfaces/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { useMenuStore } from '@/context/menuMobile'
import { SubMenuRecetasMobile } from './SubMenuRecetasMobile'

export const ActiveLinksMobile = ({ label, href, active, submenus }: Nav) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { closeMenu } = useMenuStore()
  // Función para manejar el clic en el enlace
  const handleToggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev)
  }

  return (
    <div className="relative flex w-full flex-col" ref={containerRef}>
      {!submenus ? (
        <Link
          href={href}
          className={cn(
            'w-full py-1 font-monserrat text-sm font-medium leading-loose text-black transition-colors',
            {
              'text-sonqu-red-300': active,
              'hover:text-sonqu-red-300': !active
            }
          )}
          onClick={closeMenu}
        >
          {label}
        </Link>
      ) : (
        <>
          <div className="flex w-full items-center justify-between" onClick={handleToggleSubmenu}>
            <Link
              href="#"
              // href={href}
              className={cn(
                'flex flex-1 items-center py-1 font-monserrat text-sm font-medium leading-loose text-black',
                {
                  'text-sonqu-red-300': active
                }
              )}
              // onClick={closeMenu}
            >
              {label}
            </Link>
            <ChevronDown
              className={cn('size-6 transition-transform duration-200', {
                'rotate-180': submenuOpen
              })}
            />
          </div>

          {submenuOpen && <SubMenuRecetasMobile closeMenu={closeMenu} />}
        </>
      )}
    </div>
  )
}
