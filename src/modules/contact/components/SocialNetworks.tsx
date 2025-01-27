import { cn } from '@/lib/utils'
import ContactStyles from '../style/contact.module.css'
import Link from 'next/link'
import { getNetworks } from '../data/Networks'

const socialNet = getNetworks()

export const SocialNetworks = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <span>Siguenos en nuestras redes sociales.</span>
      <ul className={cn(ContactStyles.socialNetworks, 'flex flex-wrap justify-center gap-3')}>
        {socialNet.map((social) => (
          <li key={social.name}>
            <Link
              className={cn(ContactStyles.social, 'flex flex-row items-center gap-2')}
              href={social.href}
              target="_blank"
            >
              {social.logo}
              <span className="font-bold text-sonqu-black-300">{social.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
