import ProductView from '@/modules/tienda/ProductView'

type Props = {
  params: Promise<{ handle: string }>
}

export default async function ProductPage(props: Props) {
  const params = await props.params

  return <ProductView productHandle={params.handle} />
}
