import funMetaData from '@/common/helpers/funMetaData'
import { ProductView } from '@/modules/tienda/ProductView'

type Props = {
  params: Promise<{ handle: string }>
}

export const generateMetadata = (props: { params: { handle: string } }) => {
  return funMetaData({
    title: props.params.handle
  })
}
export default async function ProductPage(props: Props) {
  const params = await props.params

  return <ProductView productHandle={params.handle} />
}
