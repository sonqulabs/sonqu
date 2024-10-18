import { TopSeparator } from '@/common/components/customize/TopSeparator'
import ContactStyles from './style/contact.module.css'
import { cn } from '@/lib/utils'
import { LeftArrow } from '@/common/components/icons/solid/LeftArrow'
import { ContactDescription } from './components/ContactDescription'
import { SocialNetworks } from './components/SocialNetworks'
import { Screenshots } from './components/Screenshots'

export const ContactView = () => {
    return (
        <section className="relative">
            <div className="flex-1 wrapper">
                <TopSeparator className={cn(ContactStyles.imgTop, 'w-full object-cover')} />
            </div>
            <div className='container'>
                <div className="grid grid-cols-1 pt-14 pb-6 relative">
                    <div className="flex justify-center items-center flex-col gap-11">
                        <div className={cn(ContactStyles.maxWidth, 'relative block w-full')}>
                            <LeftArrow className={cn(ContactStyles.leftArrow)} />
                            <h1 className="font-jallaOne text-5xl md:text-7xl uppercase ps-9 md:ps-5">
                                Contacto
                            </h1>
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
