import { cn } from '@/lib/utils'
import Link from 'next/link'

export const LinkSonqu = ({ href, className, name }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        'w-fit rounded-xl bg-sonqu-orange-400 px-10 py-3 uppercase text-white',
        className
      )}
    >
      {name}
    </Link>
  )
}

type Props = {
  href: string
  className?: string
  name: string
}
