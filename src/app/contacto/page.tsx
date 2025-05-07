import funMetaData from '@/common/helpers/funMetaData'
import { ContactView } from '@/modules/contact/ContactView'

export const metadata = funMetaData({
  title: 'Contacto',
  description:
    '¿Tienes dudas, sugerencias o recetas para compartir? Escríbenos a través de nuestro formulario de contacto y conecta con la comunidad de Sonqu.'
})

export default function Contacto() {
  return <ContactView />
}
