import { LogoEmail } from '@/common/components/icons/solid/LogoEmail'
import { LogoFacebook } from '@/common/components/icons/solid/LogoFacebook'
import { LogoInstagram } from '@/common/components/icons/solid/LogoInstagram'
import { LogoTiktok } from '@/common/components/icons/solid/LogoTiktok'
import { LogoWhatsApp } from '@/common/components/icons/solid/LogoWhatsApp'
import { LogoYoutube } from '@/common/components/icons/solid/LogoYoutube'
import { cn } from '@/lib/utils'
import ContactStyles from '../style/contact.module.css'

const socialNet = [
    {
        logo: <LogoFacebook className='facebookLogo shapeLogo shadowLow' />,
        name: "Sonqu"
    },
    {
        logo: <LogoInstagram className='instagramLogo shapeLogo shadowLow' />,
        name: "sonqu.oficial"
    },
    {
        logo: <LogoYoutube className='youtubeLogo shapeLogo shadowLow' />,
        name: "SONQU"
    },
    {
        logo: <LogoWhatsApp className='whatsAppLogo shapeLogo shadowLow' />,
        name: "+51 990938491"
    },
    {
        logo: <LogoTiktok className='titokLogo shapeLogo shadowLow' />,
        name: "@sonqu.ogicial"
    },
    {
        logo: <LogoEmail className='emailLogo shapeLogo shadowLow' />,
        name: "sonquoficial@gmail.com"
    },
]

export const SocialNetworks = () => {
    return (
        <div className='flex items-center flex-col gap-5'>
            <span>Siguenos en nuestras redes sociales.</span>
            <ul className={cn(ContactStyles.socialNetworks, 'flex flex-wrap gap-3 justify-center')}>
                {
                    socialNet.map(social => (
                        <li className='flex flex-row items-center gap-2' key={social.name}>
                            {social.logo}
                            <span className='font-bold text-sonqu-black-300'>{social.name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
