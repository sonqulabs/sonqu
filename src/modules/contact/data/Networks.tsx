import { LogoEmail } from '@/common/components/icons/solid/LogoEmail'
import { LogoFacebook } from '@/common/components/icons/solid/LogoFacebook'
import { LogoInstagram } from '@/common/components/icons/solid/LogoInstagram'
import { LogoTiktok } from '@/common/components/icons/solid/LogoTiktok'
import { LogoWhatsApp } from '@/common/components/icons/solid/LogoWhatsApp'
import { LogoYoutube } from '@/common/components/icons/solid/LogoYoutube'

export const linksNetworks = {
  Facebook: 'https://www.facebook.com/Sonquoficial?locale=es_LA',
  Instagram: 'https://www.instagram.com/sonqu.oficial/',
  Youtube: 'https://www.youtube.com/c/SONQU',
  Whatsapp: 'https://wa.me/51990938491',
  Tiktok: 'https://www.tiktok.com/@sonquoficial',
  Mail: 'mailto:sonquoficial@gmail.com?subject=SONQU&body=Hola,%20me%20gustaría%20saber%20más%20sobre%20Recetas'
}

export function getNetworks() {
  return [
    {
      logo: <LogoFacebook className="facebookLogo shapeLogo shadowLow" />,
      name: 'Sonqu',
      href: linksNetworks.Facebook
    },
    {
      logo: <LogoInstagram className="instagramLogo shapeLogo shadowLow" />,
      name: 'sonqu.oficial',
      href: linksNetworks.Instagram
    },
    {
      logo: <LogoYoutube className="youtubeLogo shapeLogo shadowLow" />,
      name: 'SONQU',
      href: linksNetworks.Youtube
    },
    {
      logo: <LogoWhatsApp className="whatsAppLogo shapeLogo shadowLow" />,
      name: '+51 990938491',
      href: linksNetworks.Whatsapp
    },
    {
      logo: <LogoTiktok className="titokLogo shapeLogo shadowLow" />,
      name: '@sonqu.ogicial',
      href: linksNetworks.Tiktok
    },
    {
      logo: <LogoEmail className="emailLogo shapeLogo shadowLow" />,
      name: 'sonquoficial@gmail.com',
      href: linksNetworks.Mail
    }
  ]
}
