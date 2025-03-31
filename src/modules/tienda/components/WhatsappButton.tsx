'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/common/components/shadcnui/button'

interface WhatsAppButtonProps {
  productName: string
  productPrice: string
  totalPrice: string
  phoneNumber?: string
  message?: string
  quantity: number
  variantName?: string
}

export default function WhatsAppButton({
  productName,
  productPrice,
  totalPrice,
  phoneNumber = '51999999999', // Número de WhatsApp
  message = 'Hola, me gustaría comprar:',
  quantity,
  variantName
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    let formattedMessage = `${message}\n\n*Producto:* ${productName}`

    if (variantName) {
      formattedMessage += `\n*Tamaño:* ${variantName}`
    }

    formattedMessage += `\n*Precio unitario:* ${productPrice}
*Cantidad:* ${quantity}
*Total a pagar:* ${totalPrice}\n\n¿Está disponible?`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex w-full max-w-full flex-col gap-4">
      <Button
        onClick={handleWhatsAppClick}
        className="w-full rounded-xl bg-green-600 text-white hover:bg-green-700"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Comprar por WhatsApp
      </Button>
      <div className="text-center text-xs text-muted-foreground">
        <p>Envía tu orden para confirmar tu pedido y coordinar el pago</p>
        <p className="mt-0.5">Horario de atención: Lunes a Sábado 9am - 6pm</p>
      </div>
    </div>
  )
}
