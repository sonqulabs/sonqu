import { LogoEmail } from '@/common/components/icons/solid/LogoEmail';
import { LogoFacebook } from '@/common/components/icons/solid/LogoFacebook';
import { LogoInstagram } from '@/common/components/icons/solid/LogoInstagram';
import { LogoTiktok } from '@/common/components/icons/solid/LogoTiktok';
import { LogoWhatsApp } from '@/common/components/icons/solid/LogoWhatsApp';
import { LogoYoutube } from '@/common/components/icons/solid/LogoYoutube';

export function getNetworks() {
    return [
        {
            logo: <LogoFacebook className='facebookLogo shapeLogo shadowLow' />,
            name: "Sonqu",
            href: 'https://www.facebook.com/Sonquoficial?locale=es_LA'
        },
        {
            logo: <LogoInstagram className='instagramLogo shapeLogo shadowLow' />,
            name: "sonqu.oficial",
            href: 'https://www.instagram.com/sonqu.oficial/'
        },
        {
            logo: <LogoYoutube className='youtubeLogo shapeLogo shadowLow' />,
            name: "SONQU",
            href: 'https://www.youtube.com/c/SONQU'
        },
        {
            logo: <LogoWhatsApp className='whatsAppLogo shapeLogo shadowLow' />,
            name: "+51 990938491",
            href: 'https://wa.me/51990938491'
        },
        {
            logo: <LogoTiktok className='titokLogo shapeLogo shadowLow' />,
            name: "@sonqu.ogicial",
            href: 'https://www.tiktok.com/@sonquoficial'
        },
        {
            logo: <LogoEmail className='emailLogo shapeLogo shadowLow' />,
            name: "sonquoficial@gmail.com",
            href: 'mailto:sonquoficial@gmail.com?subject=SONQU&body=Hola,%20me%20gustaría%20saber%20más%20sobre%20Recetas'
        },
    ]
}