'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function CustomTabs() {
  const [activeTab, setActiveTab] = useState('descripcion')

  return (
    <div className="w-full">
      <div className="flex border-b">
        <TabButton
          id="descripcion"
          label="DESCRIPCIÓN"
          isActive={activeTab === 'descripcion'}
          onClick={() => setActiveTab('descripcion')}
        />
        <TabButton
          id="especificaciones"
          label="ESPECIFICACIONES"
          isActive={activeTab === 'especificaciones'}
          onClick={() => setActiveTab('especificaciones')}
        />

        <TabButton
          id="condiciones"
          label="CONDICIONES"
          isActive={activeTab === 'condiciones'}
          onClick={() => setActiveTab('condiciones')}
        />
      </div>

      <div className="p-4">
        {activeTab === 'descripcion' && (
          <div>
            <p className="text-gray-600">
              Disfruta de la intensidad y el aroma inconfundible de nuestro café tostado artesanal,
              cuidadosamente seleccionado de los mejores granos para ofrecerte una experiencia única
              en cada taza.
            </p>
            <p className="mt-3 text-gray-600">
              Este café de especialidad ha sido tostado con precisión para resaltar sus notas
              naturales y brindar un equilibrio perfecto entre acidez, cuerpo y dulzor. Ideal para
              los amantes del buen café que buscan una experiencia sensorial completa.
            </p>
          </div>
        )}

        {activeTab === 'especificaciones' && (
          <div className="w-full">
            <table className="w-full border-collapse">
              <tbody>
                <TableRow label="Tipo de producto" value="Café tostado" />
                <TableRow label="Marca" value="CHANCHAMAYO" />
                <TableRow label="Origen" value="Perú" />
                <TableRow label="Peso neto" value="250g" />
                <TableRow label="Tipo de grano" value="Arábica" />
                <TableRow label="Nivel de tueste" value="Medio" />
                <TableRow label="Notas de sabor" value="Chocolate, caramelo y frutos rojos" />
                <TableRow label="Método de procesamiento" value="Lavado" />
                <TableRow label="Altitud de cultivo" value="1,200-1,800 msnm" />
                <TableRow label="Fecha de tueste" value="Ver empaque" />
                <TableRow label="Ideal para" value="Espresso, prensa francesa, cafetera" />
                <TableRow
                  label="Almacenamiento"
                  value="Lugar fresco y seco, alejado de la luz solar directa"
                />
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'condiciones' && (
          <div>
            <h3 className="mb-2 font-medium">Condiciones de compra</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-4 w-4 text-green-600" />
                <span>Pago seguro mediante transferencia bancaria o pago contra entrega.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-4 w-4 text-green-600" />
                <span>Envío a todo el país. Tiempo estimado de entrega: 1-3 días hábiles.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-4 w-4 text-green-600" />
                <span>Envío gratis en compras superiores a S/ 100.</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function TabButton({
  id,
  label,
  isActive,
  onClick
}: {
  id: string
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-purple-700' : 'text-gray-500 hover:text-gray-700'
      }`}
      style={{ flex: label === 'CAMBIOS Y DEVOLUCIONES' ? '1.5' : '1' }}
    >
      {label}
      {isActive && <div className="absolute bottom-0 left-0 h-1 w-full bg-purple-700"></div>}
    </button>
  )
}

function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b">
      <td className="px-2 py-3 text-sm text-gray-600">{label}</td>
      <td className="px-2 py-3 text-sm">{value}</td>
    </tr>
  )
}
