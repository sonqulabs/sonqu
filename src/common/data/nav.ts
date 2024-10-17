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
      name: 'Productos Recomendados',
      href: '/',
      active: pathname === '/productos'
    },
    {
      name: 'Contacto',
      href: '/',
      active: pathname === '/contacto'
    }
  ]
}
