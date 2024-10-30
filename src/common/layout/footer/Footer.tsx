import { cn } from '@/lib/utils'
import { Mail, MapPin, Phone, Upload } from 'lucide-react'
import Image from 'next/image'
import StyleFooter from '../../styles/footer.module.css'
import IconFacebook from './iconsSocialMedia/IconFacebook'
import IconInstagram from './iconsSocialMedia/IconInstagram'
import IconWhatsapp from './iconsSocialMedia/IconWhatsapp'
import IconX from './iconsSocialMedia/IconX'
import IconYoutube from './iconsSocialMedia/IconYoutube'
import { contactInfo, footerSections } from '@/common/data/footer'
import Link from 'next/link'

const Footer = () => {
  const iconComponents = { Mail, Phone, MapPin }

  return (
    <footer className="text-white">
      <div className="wrapper relative z-[-1]">
        <Image
          src="/footer.png"
          alt="footer image"
          className="h-32 w-full object-cover"
          width={700}
          height={200}
        />
      </div>
      <div className={cn(StyleFooter.image, 'bg-sonqu-red-300 px-4 py-12')}>
        <div className="container">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="max-w-md">
              <Image src="/logo.png" className="mb-2" height={150} width={140} alt="logo" />
              <p className="mb-4 text-sm leading-snug">
                Descubre recetas deliciosas e inspiración culinaria para cada ocasión.
              </p>
              <div className="flex items-center space-x-4">
                <ul className="flex gap-4">
                  <li>
                    <IconFacebook />
                  </li>
                  <li>
                    <IconInstagram />
                  </li>
                  <li>
                    <IconX />
                  </li>
                  <li>
                    <IconWhatsapp />
                  </li>
                  <li>
                    <IconYoutube />
                  </li>
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
                        <Icon size={18} className="mr-2 text-yellow-300" />
                        <Link
                          href={item.href}
                          className="text-sm transition-colors duration-200 hover:text-yellow-300"
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
                <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-sonqu-yellow-300 px-3 py-3 text-sm font-bold text-sonqu-red-300 transition-colors hover:bg-yellow-300 lg:w-auto lg:gap-4 lg:px-5 lg:text-base">
                  <Upload className="size-5" />
                  Sube tu receta
                </button>
                <p className="w-full whitespace-nowrap text-sm font-medium lg:text-base">
                  Total de recetas: <span className="text-yellow-300">1,234</span>
                </p>
              </div>
              <div className="text-center text-sm">
                &copy; 2024 Sonqu. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
