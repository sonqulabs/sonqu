import funMetaData from '@/common/helpers/funMetaData'
import AboutView from '@/modules/about/AboutView'

export const metadata = funMetaData({
  title: 'Nosotros',
  description:
    'Conoce quiénes somos, nuestra misión y el amor por la cocina peruana que dio origen a Sonqu. Te contamos cómo nació este proyecto gastronómico.'
})

export default function Nosotros() {
  return <AboutView />
}
