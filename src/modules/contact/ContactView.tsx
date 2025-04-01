import { cn } from '@/lib/utils'
import Image from 'next/image'
import ContactForm from './components/ContactForm'
import ContactStyles from './style/contact.module.css'

export const ContactView = () => {
  return (
    <section className="relative lg:pt-10">
      <div
        className={cn(ContactStyles.fondoContactTop, 'wrapper lg:max-w-[950px] lg:rounded-3xl')}
      ></div>
      <div className="container flex h-[560px] w-full flex-col items-center justify-center gap-10 py-10 lg:flex-row">
        {/* <SocialNetworks /> */}
        <Image
          src="/contact/sonqu3.webp"
          className="h-full w-full max-w-[400px] rounded-[25px] object-cover"
          alt=""
          width={400}
          height={400}
        />
        <ContactForm />
      </div>
    </section>
  )
}
