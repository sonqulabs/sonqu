import Link from 'next/link'
import { Product } from '../../type'
import PreviewPrice from './PreviewPrice'
import Thumbnail from './Thumbnail'
import { getProductPrice } from '@/common/helpers/getProductPrice'

export default async function CardProduct({ product }: { product: Product; isFeatured?: boolean }) {
  const { cheapestPrice } = getProductPrice({
    product
  })

  return (
    <Link href={`tienda/${product.name}`} className="group">
      <div>
        <Thumbnail images={product.images} size="square" />
        <div className="txt-compact-medium mt-4 flex items-center justify-between">
          <div className="line-clamp-1">{product.name}</div>
          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </Link>
  )
}
