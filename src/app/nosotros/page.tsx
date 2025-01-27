import funMetaData from '@/common/helpers/funMetaData'
import AboutView from '@/modules/about/AboutView'

export const metadata = funMetaData({
  title: 'Nosotros'
})

export default function Nosotros() {
  return <AboutView />
}
