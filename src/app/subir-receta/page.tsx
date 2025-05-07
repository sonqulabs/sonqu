import funMetaData from '@/common/helpers/funMetaData'
import { SubirRecetaView } from '@/modules/subir-receta/SubirRecetaView'

export const metadata = funMetaData({
  title: 'Sube tu Receta',
  description:
    '¿Tienes una receta peruana especial? Súbela a Sonqu y compártela con el mundo. Tu cocina también puede inspirar a otros.'
})

export default function SubirReceta() {
  return <SubirRecetaView />
}
