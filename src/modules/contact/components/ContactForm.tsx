'use client'

import { Button } from '@/common/components/shadcnui/button'
import { Input } from '@/common/components/shadcnui/input'
import { Textarea } from '@/common/components/shadcnui/textarea'
import type React from 'react'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="h-full w-full max-w-[500px] rounded-[25px] bg-white px-8 py-8 shadow-sm">
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

        <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
          Enviar
        </Button>
      </form>
    </div>
  )
}
