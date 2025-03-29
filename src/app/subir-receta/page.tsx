import funMetaData from '@/common/helpers/funMetaData'
import { SubirRecetaView } from '@/modules/subir-receta/SubirRecetaView'

export const metadata = funMetaData({
  title: 'Sube tu Receta'
})

export default function SubirReceta() {
  return <SubirRecetaView />
}
