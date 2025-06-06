import { cn } from '@/lib/utils'
import { Mail, MapPin, Upload } from 'lucide-react'
import Image from 'next/image'
import IconFacebook from './iconsSocialMedia/IconFacebook'
import IconInstagram from './iconsSocialMedia/IconInstagram'
import IconWhatsapp from './iconsSocialMedia/IconWhatsapp'
// import IconX from './iconsSocialMedia/IconX'
import { contactInfo, footerSections } from '@/common/data/footer'
import { linksNetworks } from '@/modules/contact/data/Networks'
import Link from 'next/link'
import IconTiktok from './iconsSocialMedia/IconTiktok'
import IconYoutube from './iconsSocialMedia/IconYoutube'
import logoSonqu from '@recursos/logoSonqu.webp'

// const socialNet = getNetworks()

const Footer = async () => {
  const iconComponents = { Mail, IconWhatsapp, MapPin }
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const countRecipesRes = await fetch(`${API_URL}/public/count-recipes`)
  const countRecipes = await countRecipesRes.json()

  return (
    <footer className="text-white">
      <div className={cn('bg-[#CE0146] px-4 py-12')}>
        <div className="container">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="max-w-md">
              <Image src={logoSonqu} className="mb-2 h-auto w-[150px] object-cover" alt="logo" />
              <p className="mb-4 max-w-80 text-sm leading-snug">
                Descubre recetas deliciosas e inspiración culinaria para cada ocasión.
              </p>
              <div className="flex items-center space-x-4">
                <ul className="flex gap-2.5">
                  <Link href={linksNetworks.Facebook} target="_blank">
                    <IconFacebook />
                  </Link>
                  <Link href={linksNetworks.Instagram} target="_blank">
                    <IconInstagram />
                  </Link>
                  <Link href={linksNetworks.Tiktok} target="_blank">
                    <IconTiktok />
                  </Link>
                  <Link href={linksNetworks.Whatsapp} target="_blank">
                    <IconWhatsapp />
                  </Link>
                  <Link href={linksNetworks.Youtube} target="_blank">
                    <IconYoutube />
                  </Link>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-2.5">
                  <h4 className="text-base font-medium text-white">{section.title}</h4>
                  <ul className="space-y-0">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="text-sm transition-colors duration-200 hover:text-yellow-300"
                        >
                          <span className="mr-2 text-sonqu-yellow-300">{`>`}</span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="space-y-2.5">
                <h4 className="text-base font-medium text-white">Contacto</h4>
                <ul className="space-y-2">
                  {contactInfo.map((item, index) => {
                    // Usamos aserción de tipo para evitar el error
                    const Icon = iconComponents[item.icon as keyof typeof iconComponents]
                    return (
                      <li key={index} className="flex items-center">
                        <Icon className="mr-1 size-5 text-yellow-300" />
                        <Link
                          href={item.href}
                          className="text-sm transition-colors duration-200 hover:text-yellow-300"
                          target="_blank"
                        >
                          {item.text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-red-400 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/subir-receta"
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-sonqu-yellow-300 px-3 py-3 text-sm font-semibold text-[#d31008] transition-colors hover:bg-yellow-300 lg:w-auto lg:px-5 lg:text-base"
                >
                  <Upload className="size-5" />
                  Sube tu receta
                </Link>
                <p className="w-full whitespace-nowrap text-sm font-medium lg:text-base">
                  Total de recetas: <span className="text-yellow-300">{countRecipes?.count}</span>
                </p>
              </div>
              <div className="text-center text-sm">
                &copy; 2025 Sonqu. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
