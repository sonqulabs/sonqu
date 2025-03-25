import funMetaData from '@/common/helpers/funMetaData'
import { SobreMiView } from '@/modules/sobremi/SobreMiView'

export const metadata = funMetaData({
  title: 'Sobre Mi'
})

export default function SobreMi() {
  return <SobreMiView />
}
