import { ButtonPrevius } from '@/common/components/customize/ButtonPrevius'
import { cn } from '@/lib/utils'
import { ContactDescription } from './components/ContactDescription'
import { SocialNetworks } from './components/SocialNetworks'
import ContactStyles from './style/contact.module.css'
import ContactForm from './components/ContactForm'
import Image from 'next/image'

export const ContactView = () => {
  return (
    <section className="relative lg:pt-10">
      <div
        className={cn(ContactStyles.fondoContactTop, 'wrapper lg:max-w-[950px] lg:rounded-3xl')}
      ></div>
      <div className="container flex h-full min-h-full w-full flex-col items-center justify-center gap-10 py-10 lg:flex-row">
        {/* <SocialNetworks /> */}
        <Image
          src="/contact/sonqu3.webp"
          className="w-full max-w-[400px] object-cover"
          alt=""
          width={400}
          height={400}
        />
        <ContactForm />
      </div>
    </section>
  )
}
