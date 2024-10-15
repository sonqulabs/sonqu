import Link from 'next/link'
import clsx from 'clsx'
import { Nav } from '@/common/interfaces/nav'

export const ActiveLinks = ({ name, href, active }: Nav) => {
  return (
    <Link
      key={name}
      href={href}
      className={clsx('text-xs font-[600] text-black md:flex-none md:justify-start', {
        'text-red-600': active
      })}
    >
      <p className="font-poppins uppercase">{name}</p>
    </Link>
  )
}
