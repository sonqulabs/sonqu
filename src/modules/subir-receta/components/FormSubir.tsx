/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem
} from '@shadcnui/file-upload'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@shadcnui/form'
import { CloudUpload, Loader2, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
// import { toast } from 'sonner';
import { Textarea } from '@shadcnui/textarea'

// import { toast } from 'sonner';
import { Input } from '@/common/components/shadcnui/input'
import RichTextEditor from './TextEditor'
import { Button } from '@/common/components/shadcnui/button'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/common/components/shadcnui/alert-dialog'

const MAX_PEOPLE = 20 // Maximum number of people allowed

const formSchema = z.object({
  publicUserName: z.string(),
  publicUserPhone: z
    .string()
    .optional()
    .superRefine((val, ctx) => {
      if (!val) return
      // Validar que tenga solo dígitos y 9 caracteres
      if (!/^\d+$/.test(val) || val.length !== 9) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'El número celular debe tener 9 dígitos'
        })
        return // Si falla esta validación, no se valida lo de comenzar con 9
      }
      // Validar que el primer dígito sea 9
      if (val[0] !== '9') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'El número de celular debe comenzar con 9'
        })
      }
    }),
  ingredients: z.string().min(2, {
    message: 'Escribe al menos una palabra.'
  }),
  instructions: z.string().min(2, {
    message: 'Escribe al menos una palabra.'
  }),
  servings: z
    .preprocess(
      (val) => {
        if (typeof val === 'string') {
          const parsed = Number(val)
          return isNaN(parsed) ? undefined : parsed
        }
        return val
      },
      z
        .number()
        .min(1, { message: 'Debe haber al menos 1 persona' })
        .max(20, { message: 'El máximo permitido es 20 personas' })
    )
    .transform((num) => String(num)),
  description: z.string(),
  title: z.string(),

  // .nonempty('Please select at least one framework.'),
  image: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: 'El tamaño del archivo debe ser inferior a 4 MB'
      })
    )
    .max(1, {
      message: 'Se permite un máximo de 1 archivo'
    })
    .nullable()
})

export default function CrearFormRecipePublic() {
  const [files, setFiles] = useState<File[] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
      instructions: '',
      title: '',
      servings: '1', // Valor por defecto para 1 persona
      description: '',
      image: null,
      publicUserPhone: '',
      publicUserName: ''
    }
  })

  const incrementCount = () => {
    // Convertimos el valor actual a número; si no hay valor, asumimos 0
    const currentValue = Number(form.getValues('servings')) || 0
    if (currentValue < MAX_PEOPLE) {
      form.setValue('servings', String(currentValue + 1))
    }
  }

  // Función para decrementar la cantidad
  const decrementCount = () => {
    const currentValue = Number(form.getValues('servings')) || 0
    if (currentValue > 1) {
      form.setValue('servings', String(currentValue - 1))
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true) // Activar loading

    const controller = new AbortController() // Controlador para timeout
    const timeoutId = setTimeout(() => controller.abort(), 10_000) // Abortar en 10s

    try {
      const formData = new FormData()

      // Agregar los campos dinámicamente sin repetir código
      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          if (Array.isArray(value)) {
            value.forEach((file) => formData.append(key, file))
          } else {
            formData.append(key, value)
          }
        }
      })

      // console.log('Datos enviados:', Array.from(formData.entries()))

      const response = await fetch(
        'https://backend-sonqu-production.up.railway.app/api/v1/public/pendingRecipe',
        {
          method: 'POST',
          body: formData,
          signal: controller.signal // Agregar control de timeout
        }
      )

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      // Mostrar modal y resetear formulario
      setShowConfirmation(true)
      form.reset()
      setFiles([])
      setResetKey((prev) => prev + 1) // Forzar reinicio de editores

      // console.log('Respuesta del servidor:', data)
    } catch (error) {
      if (error instanceof Error) {
        console.error(`❌ Error al enviar el formulario: ${error.message}`)
      } else {
        console.error('❌ Ocurrió un error desconocido', error)
      }
    } finally {
      setIsSubmitting(false) // Desactivar loading
      clearTimeout(timeoutId)
    }
  }

  return (
    <div className="container mb-10 h-full w-full max-w-[1000px] space-y-8">
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-muted-foreground">
              ¡Receta enviada con éxito!
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
              Gracias por contribuir con tu receta. Será revisada por nuestro equipo y publicada
              pronto.
            </p>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="mx-auto border-none bg-[#ED7203] text-white hover:bg-[#ED720] hover:text-white">
              Aceptar
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <FormField
                control={form.control}
                name="publicUserName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre y Apellido(opcional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Escriba el autor de la receta"
                        className="bg-[#EBEBEB] placeholder:text-[#9F9F9F]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="publicUserPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular(opcional)</FormLabel>
                    <div className="flex items-center">
                      <div className="flex h-10 items-center rounded-l-md border border-r-0 bg-white px-3 text-sm">
                        +51
                      </div>
                      <FormControl>
                        <Input
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="Escriba su numero de celular"
                          minLength={9}
                          maxLength={9}
                          className="rounded-es-none rounded-ss-none bg-[#EBEBEB] placeholder:text-[#9F9F9F]"
                          {...field}
                          onInput={(e) => {
                            // Reemplaza cualquier caracter que no sea un dígito por una cadena vacía.
                            e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, '')
                          }}
                        />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la Receta*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Escriba el título de la receta"
                        className="bg-[#EBEBEB] placeholder:text-[#9F9F9F]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="servings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cantidad de personas*(max 20 personas)</FormLabel>
                    <div className="flex w-full max-w-[100px] items-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="w-full rounded-r-none border-r-0"
                        onClick={decrementCount}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <FormControl>
                        <Input
                          minLength={1}
                          maxLength={2}
                          className="rounded-none bg-[#EBEBEB] text-center placeholder:text-[#9F9F9F]"
                          {...field}
                          onInput={(e) => {
                            // Reemplaza cualquier caracter que no sea un dígito por una cadena vacía.
                            e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, '')
                          }}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="w-full rounded-l-none border-l-0"
                        onClick={incrementCount}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripcion*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escriba una descripcion"
                      className="resize-none bg-[#EBEBEB] placeholder:text-[#9F9F9F]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen de la Receta(1 sola imagen)*</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={(newFiles) => {
                        setFiles(newFiles)
                        form.setValue('image', newFiles) // Sincronizar con react-hook-form
                      }}
                      dropzoneOptions={dropZoneConfig}
                      className="relative rounded-lg bg-[#EBEBEB] p-0.5"
                    >
                      <FileInput id="fileInput" {...field}>
                        <div className="flex w-full flex-col items-center justify-center p-2">
                          <CloudUpload className="h-10 w-10 text-gray-500" />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click para cargar</span>
                            &nbsp; o arraste y suelte
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Image
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                height={10}
                                width={10}
                                className="size-4 rounded-full object-cover p-0"
                              />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredientes*</FormLabel>
                  <FormControl>
                    <RichTextEditor key={`ingredients-${resetKey}`} {...field} />
                  </FormControl>
                  <FormDescription>Escribe tu lista de Ingredientes.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instrucciones*</FormLabel>
                  <FormControl>
                    <RichTextEditor key={`ingredients-${resetKey}`} {...field} />
                  </FormControl>
                  <FormDescription>Escribe tu lista de Instrucciones.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
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
              'Subir Receta'
            )}
          </button>
        </form>
      </Form>
    </div>
  )
}
