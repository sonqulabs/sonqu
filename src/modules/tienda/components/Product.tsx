'use client'
import { useState } from 'react'
import { Button } from '@/common/components/shadcnui/button'
import { formatPricePEN } from '@/common/utils/price'
import CauroselProduct from './CarouselProduct'
import WhatsAppButton from './WhatsappButton'
import CustomTabs from './cardProduct/CustomTabs'
import { mockProducts } from '../data/dataTest'
import { Product as ProductType, ProductVariant } from '../type'

interface ProductProps {
  productHandle: string
}

const Product = ({ productHandle }: ProductProps) => {
  // Buscar el producto
  const findProduct = mockProducts.find(
    (product) => product.name === decodeURIComponent(productHandle)
  )

  // Estado de variantes y cantidad
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [quantity, setQuantity] = useState<number>(1)

  if (!findProduct) {
    return <div className="text-center text-gray-500">Producto no encontrado</div>
  }

  const product: ProductType = findProduct
  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0

  if (!selectedVariant && hasVariants) {
    setSelectedVariant(product.variants![0])
  }

  const handleVariantChange = (variantId: string) => {
    const variant = product.variants?.find((v) => v.id === variantId) || null
    setSelectedVariant(variant)
  }

  // Determinar el precio y descuento
  const basePrice = selectedVariant?.price ?? product.price ?? 0
  const discountPercentage =
    selectedVariant?.discount_percentage ?? product.discount_percentage ?? 0
  const discountedPrice = basePrice - (basePrice * discountPercentage) / 100
  const savings = basePrice - discountedPrice

  // 💰 Precio total según la cantidad seleccionada
  const totalPrice = discountedPrice * quantity

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <CauroselProduct imagenes={product.images || []} />

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-[#030712]">{product.name}</h1>
          </div>

          <div className="flex w-fit flex-col items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold">{formatPricePEN(totalPrice)}</span>
              {discountPercentage > 0 && (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPricePEN(basePrice * quantity)}
                  </span>
                  <span className="rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Ahorras {formatPricePEN(savings * quantity)}
                  </span>
                </>
              )}
            </div>
          </div>

          {hasVariants && (
            <div className="mt-1">
              <div className="mb-2 text-sm font-medium">Tamaño:</div>
              <div className="flex flex-wrap gap-2">
                {product.variants?.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantChange(variant.id)}
                    className={`rounded-full px-3 py-1 text-xs transition-colors ${
                      selectedVariant?.id === variant.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8"
            >
              -
            </Button>
            <span className="w-4 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8"
            >
              +
            </Button>
            <span className="ml-2 text-sm text-muted-foreground">Cantidad</span>
          </div>

          <WhatsAppButton
            productName={product.name || 'Producto sin nombre'}
            productPrice={formatPricePEN(discountedPrice)}
            totalPrice={formatPricePEN(discountedPrice * quantity)}
            phoneNumber="51969507475"
            quantity={quantity}
            variantName={selectedVariant?.name}
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <CustomTabs />
      </div>
    </div>
  )
}

export default Product
