import funMetaData from '@/common/helpers/funMetaData'

export const metadata = funMetaData({
  title: 'Catálogo'
})

export default function Contacto() {
  return (
    <div className="absolute inset-0 z-50 h-full w-full">
      <iframe
        src="/catalogo2025.pdf"
        className="h-full w-full"
        title="Catálogo"
        aria-label="Visualizador del catálogo 2025 en PDF"
      ></iframe>
    </div>
  )
}
