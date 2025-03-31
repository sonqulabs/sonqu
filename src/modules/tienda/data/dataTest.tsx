import { Product } from '../type'

export const mockProducts: Product[] = [
  {
    id: 'prod_001',
    name: 'Café Tostado',

    description:
      'Disfruta de la intensidad y el aroma inconfundible de nuestro café tostado artesanal, cuidadosamente seleccionado de los mejores granos para ofrecerte una experiencia única en cada taza.',
    category: 'cafes',
    images: ['/productos/producto1.webp'],
    price: 59.99,
    variants: [
      {
        id: 'var_001',
        name: '1kg',
        price: 29.99,
        discount_percentage: 10,
        stock: 10,
        sku: 'TS-AZ-001'
      },
      {
        id: 'var_002',
        name: '2kg',
        price: 31.99,
        stock: 15,
        sku: 'TM-AZ-002'
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_002',
    name: 'Manteca de Cerdo Artesanal',
    description:
      'Nuestra manteca de cerdo artesanal es el ingrediente perfecto para realzar el sabor de tus comidas con un toque tradicional y auténtico. Elaborada mediante un proceso natural y sin aditivos, conserva todo su aroma y textura cremosa, ideal para cocinar, freír o preparar recetas tradicionales.',
    category: 'Aceites',
    images: ['/productos/producto2.webp'],
    price: 59.99, // Precio agregado cuando no hay variantes
    discount_percentage: 20, // 20% de descuento aplicado al precio base
    // Este producto NO tiene variantes
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]
