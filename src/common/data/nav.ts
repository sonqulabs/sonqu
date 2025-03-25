import { Nav } from '../interfaces/nav'

export function getMenuList(pathname: string): Nav[] {
  return [
    {
      label: 'Inicio',
      href: '/',
      active: pathname === '/'
    },

    {
      label: 'Nosotros',
      href: '/nosotros',
      active: pathname === '/nosotros'
    },
    {
      label: 'Sobre Mi',
      href: '/sobre-mi',
      active: pathname === '/sobre-mi'
    },
    {
      // href: '#',
      href: '/search',
      label: 'Recetas',
      active: pathname.includes('/recetas'),
      // SubMenu: SubMenuRecetas,
      submenus: [
        {
          href: '/catalog/sube-baja',
          label: 'Comida Criolla',
          active: pathname.includes('/catalog/sube-baja')
        },
        {
          href: '/catalog/giratorios',
          label: 'Postres Peruanos',
          active: pathname.includes('/catalog/giratorios')
        },

        {
          href: '/catalog/psicomotricidad',
          label: 'Comida Andina',
          active: pathname.includes('/catalog/psicomotricidad')
        },
        {
          href: '/catalog/resorteras',
          label: 'Bebidas Tradicionales',
          active: pathname.includes('/catalog/resorteras')
        },
        {
          href: '/catalog/columpios',
          label: 'Clasicos',
          active: pathname.includes('/catalog/columpios')
        }
      ]
    },
    // {
    //   label: 'Tienda',
    //   href: '/productos',
    //   active: pathname === '/productos'
    // },
    {
      label: 'Contacto',
      href: '/contacto',
      active: pathname === '/contacto'
    }
  ]
}
