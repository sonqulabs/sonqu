import { Product, ProductVariant } from '@/modules/tienda/type'
import { convertToLocale } from '../utils/money'

// Función para calcular el precio con descuento
export const calculateDiscountedPrice = (price: number, discount_percentage?: number): number => {
  if (discount_percentage) {
    return price - price * (discount_percentage / 100)
  }
  return price
}

// Función para obtener el precio con y sin descuento de una variante
export const getPricesForVariant = (
  variant: ProductVariant | undefined,
  currency_code: string
): { originalPrice: string; finalPrice: string; discountPercentage?: number } | null => {
  if (!variant) return null

  const discountPercentage = variant.discount_percentage ?? 0
  const finalPrice = calculateDiscountedPrice(variant.price, discountPercentage)

  return {
    originalPrice: convertToLocale({ amount: variant.price, currency_code }),
    finalPrice: convertToLocale({ amount: finalPrice, currency_code }),
    discountPercentage
  }
}

export function getProductPrice({ product, variantId }: { product: Product; variantId?: string }) {
  if (!product || !product.id) {
    throw new Error('No product provided')
  }

  const currency_code = 'PEN' // Moneda por defecto

  // Obtener el precio de la variante más barata con descuento
  const getCheapestPrice = (): {
    originalPrice: string
    finalPrice: string
    discountPercentage?: number
  } | null => {
    if (!product.variants?.length) {
      if (!product.price) return null

      const discountPercentage = product.discount_percentage ?? 0
      const finalPrice = calculateDiscountedPrice(product.price, discountPercentage)

      return {
        originalPrice: convertToLocale({ amount: product.price, currency_code }),
        finalPrice: convertToLocale({ amount: finalPrice, currency_code }),
        discountPercentage
      }
    }

    // Encontramos la variante más barata considerando el descuento
    const cheapestVariant = product.variants.reduce((prev, curr) =>
      calculateDiscountedPrice(prev.price, prev.discount_percentage) <
      calculateDiscountedPrice(curr.price, curr.discount_percentage)
        ? prev
        : curr
    )

    return getPricesForVariant(cheapestVariant, currency_code)
  }

  // Obtener el precio de una variante específica con descuento
  const getVariantPrice = (): {
    originalPrice: string
    finalPrice: string
    discountPercentage?: number
  } | null => {
    if (!variantId) return null

    const variant = product.variants?.find((v) => v.id === variantId || v.sku === variantId)

    return getPricesForVariant(variant, currency_code)
  }

  return {
    product,
    cheapestPrice: getCheapestPrice(),
    variantPrice: getVariantPrice()
  }
}
