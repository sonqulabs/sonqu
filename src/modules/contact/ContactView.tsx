import { cn } from '@/lib/utils'
import Image from 'next/image'
import ContactForm from './components/ContactForm'
import ContactStyles from './style/contact.module.css'
import { TopSeparator2 } from '@/common/components/customize/TopSeparator2'
import ContactFoto from '@recursos/contact/sonqu3.webp'
import separator from '@recursos/about-me/separator.webp'

export const ContactView = () => {
  return (
    <section className="relative">
      <TopSeparator2 className="mb-16 lg:mb-0" />

      <div
        className={cn(
          ContactStyles.fondoContactTop,
          'wrapper mt-10 lg:max-w-[950px] lg:rounded-3xl'
        )}
      ></div>
      <div className="container flex h-[560px] w-full flex-col items-center justify-center gap-10 py-10 lg:flex-row">
        {/* <SocialNetworks /> */}
        <Image
          src={ContactFoto}
          className="h-auto w-full max-w-[400px] rounded-[25px] object-cover"
          alt="imagen del contacto"
        />
        <ContactForm />
      </div>
      <Image src={separator} alt="separador de la pagina" className="h-auto w-full object-cover" />
    </section>
  )
}
