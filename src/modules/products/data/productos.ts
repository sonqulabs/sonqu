import { Producto } from '../interfaces/producto'

export function GetProductos(): Producto[] {
  return [
    {
      id: 1,
      name: 'Set De 6 Cuchillos Para Carne Outset',
      image: '/ceviche1.png',
      description: 'Son chuchillos de acero de adamantium.Perfectos para la cocina.',
      marca: 'asd',
      precio: 100
    },
    {
      id: 2,
      name: 'Rallador 3 en 1 De Acero Inoxidable',
      description: 'Rayador de queso.',
      image: '/carbon.png',
      marca: 'asd',
      precio: 300
    }
  ]
}
