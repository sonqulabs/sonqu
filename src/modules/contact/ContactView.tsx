import { TopSeparator } from '@/common/components/customize/TopSeparator'
import ContactStyles from './style/contact.module.css'
import { cn } from '@/lib/utils'
import { LeftArrow } from '@/common/components/icons/solid/LeftArrow'
import { ContactDescription } from './components/ContactDescription'
import { SocialNetworks } from './components/SocialNetworks'
import { Screenshots } from './components/Screenshots'
import { ButtonPrevius } from '@/common/components/customize/ButtonPrevius'

export const ContactView = () => {
  return (
    <section className="relative">
      <div className="wrapper flex-1">
        <TopSeparator className={cn(ContactStyles.imgTop, 'w-full object-cover')} />
      </div>
      <div className="container">
        <div className="relative grid grid-cols-1 pb-6 pt-14">
          <div className="flex flex-col items-center justify-center gap-11">
            <div
              className={cn(ContactStyles.maxWidth, 'flex w-full items-center gap-4 ps-9 md:ps-5')}
            >
              {/* <LeftArrow className={cn(ContactStyles.leftArrow)} /> */}
              <ButtonPrevius />
              <h1 className="mt-1 font-jallaOne text-5xl uppercase md:text-7xl">Contacto</h1>
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
