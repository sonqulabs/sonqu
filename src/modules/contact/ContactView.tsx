import { ButtonPrevius } from '@/common/components/customize/ButtonPrevius'
import { TopSeparator } from '@/common/components/customize/TopSeparator'
import { cn } from '@/lib/utils'
import { ContactDescription } from './components/ContactDescription'
import { Screenshots } from './components/Screenshots'
import { SocialNetworks } from './components/SocialNetworks'
import ContactStyles from './style/contact.module.css'

export const ContactView = () => {
  return (
    <section className="relative">
      <div className="wrapper flex-1">
        <TopSeparator />
      </div>

      <div className="container">
        <div className="relative grid grid-cols-1 pb-6 pt-14">
          <div className="flex flex-col items-center justify-center gap-11">
            <div className={cn(ContactStyles.maxWidth, 'w-full items-center gap-4 ps-9 md:ps-5')}>
              {/* <LeftArrow className={cn(ContactStyles.leftArrow)} /> */}
              <ButtonPrevius />
              <h1 className="ml-7 mt-10 font-jallaOne text-5xl uppercase md:text-7xl">Contacto</h1>
            </div>
            <ContactDescription />
            <div className={cn(ContactStyles.maxWidth)}>
              <SocialNetworks />
              <Screenshots />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
