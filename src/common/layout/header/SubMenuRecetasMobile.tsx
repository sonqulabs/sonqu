import { useCategoriesStore } from '@/context/useCategoriesStore'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const SubMenuRecetasMobile = ({ closeMenu }) => {
  const { categories } = useCategoriesStore()

  return (
    <ul className="overflow-hidden">
      {categories?.map((category) => (
        <li key={category.name} className="w-full whitespace-nowrap">
          <Link
            // href={href}
            href={`/search?categories=${category.name}`}
            className={cn(
              'block w-full py-2 pl-2 font-monserrat text-sm font-medium leading-none text-gray-700 transition-colors hover:bg-sonqu-red-300 hover:text-white focus:bg-accent focus:text-white'
            )}
            onClick={closeMenu}
          >
            {category.name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}
          </Link>
        </li>
      ))}
    </ul>
  )
}
