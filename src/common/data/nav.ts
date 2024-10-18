import { Nav } from '../interfaces/nav'

export function getMenuList(pathname: string): Nav[] {
  return [
    {
      name: 'Inicio',
      href: '/',
      active: pathname === '/'
    },
    {
      name: 'Recetas',
      href: '/categoria/brasa-familiar',
      active: pathname.includes('/categoria') || pathname.includes('/products')
    },
    {
      name: 'Nosotros',
      href: '/nosotros',
      active: pathname === '/nosotros'
    },
    {
      name: 'Tienda',
      href: '/productos',
      active: pathname === '/productos'
    },
    {
      name: 'Contacto',
      href: '/contacto',
      active: pathname === '/contacto'
    }
  ]
}
