import funMetaData from '@/common/helpers/funMetaData'
import { ContactView } from '@/modules/contact/ContactView'

export const metadata = funMetaData({
  title: 'Contacto'
})

export default function Contacto() {
  return <ContactView />
}
