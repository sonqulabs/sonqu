'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/common/components/shadcnui/alert-dialog'
import { Button } from '@/common/components/shadcnui/button'
import { Input } from '@/common/components/shadcnui/input'
import { Textarea } from '@/common/components/shadcnui/textarea'
import { Loader2 } from 'lucide-react'
import type React from 'react'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true) // Activar loading

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s de timeout

    try {
      const response = await fetch(
        'https://backend-sonqu-production.up.railway.app/api/v1/public/contact-message',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData), // Convertir a JSON
          signal: controller.signal // Control de timeout
        }
      )

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      // console.log('Form submitted:', data)
      setShowConfirmation(true)
      // Resetear el formulario después del envío exitoso
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.error('Error: La solicitud fue abortada por timeout.')
        } else {
          console.error('Error al enviar el formulario:', error.message)
        }
      } else {
        console.error('Error desconocido:', error)
      }
    } finally {
      setIsSubmitting(false) // Desactivar loading
      clearTimeout(timeoutId) // Limpiar el timeout
    }
  }

  return (
    <div className="h-full w-full max-w-[500px] rounded-[25px] bg-white px-8 py-8 shadow-sm">
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-muted-foreground">
              ¡Mensaje enviado con éxito!
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-center text-sm text-muted-foreground">
              Gracias por compartir tus datos de contacto. Los hemos recibido y te enviaremos un
              correo pronto.
            </p>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="mx-auto border-none bg-[#ED7203] text-white hover:bg-[#ED720] hover:text-white">
              Aceptar
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <h1 className="mb-4 text-center font-monserrat text-2xl font-bold">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="h-full w-full space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Nombre
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Correo electrónico
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Mensaje
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[100px] w-full bg-gray-100"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto flex w-min items-center justify-center whitespace-nowrap rounded-lg bg-[#ED7203] px-4 py-2 text-white disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </div>
  )
}
