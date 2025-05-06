import funMetaData from '@/common/helpers/funMetaData'
import { SobreMiView } from '@/modules/sobremi/SobreMiView'

export const metadata = funMetaData({
  title: 'Sobre Mi',
  description:
    'Cocinero peruano con más de 15 años de experiencia, fundador del canal Sonqu, subcampeón en el Segundo Torneo Nacional de Fuegos y Parrillas. Apasionado por la cocina tradicional peruana, comparto mi conocimiento y contribuyo a las labores sociales, llevando el sabor y la cultura del Perú a nuevas audiencias.'
})

export default function SobreMi() {
  return <SobreMiView />
}
