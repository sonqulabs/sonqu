import { Product } from '../type'

export const mockProducts: Product[] = [
  {
    id: 'prod_001',
    name: 'Café Tostado Molido',

    description:
      'Disfruta un café excepcional de Chanchamayo, cultivado con pasión desde 1986 y tostado con maestría para resaltar su sabor, acidez suave y cuerpo equilibrado. En cada sorbo sentirás calidad, tradición y respeto por la naturaleza.',
    category: 'cafes',
    images: ['/productos/producto1.webp'],
    // price: 25,
    variants: [
      {
        id: 'var_001',
        name: '250g',
        price: 25,
        // discount_percentage: 10,
        stock: 10000,
        sku: 'TS-AZ-001'
      },
      {
        id: 'var_002',
        name: '500g',
        price: 45,
        stock: 1500,
        sku: 'TM-AZ-002'
      },
      {
        id: 'var_003',
        name: '1kg',
        price: 85,
        stock: 1500,
        sku: 'TM-AZ-003'
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_002',
    name: 'Manteca de Cerdo Artesanal',
    description:
      'Manteca de Cerdo 100% Natural. Sin colorantes, químicos ni conservantes. Resistente a altas temperaturas, Ideal para freír cualquier tipo de alimento. Saludable para la cocción de cualquier tipo de alimento.',
    category: 'Aceites',
    images: ['/productos/producto2.webp'],
    // price: 59.99,
    // discount_percentage: 20,
    // Este producto NO tiene variantes
    variants: [
      {
        id: 'var_001',
        name: '400 gr',
        price: 20,
        // discount_percentage: 10,
        stock: 10000,
        sku: 'TS-AZ-001'
      },

      {
        id: 'var_002',
        name: '1kg',
        price: 40,
        stock: 1500,
        sku: 'TM-AZ-003'
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_003',
    name: 'Cafetera Italiana de Acero Inoxidable',
    description:
      'Material en acero inoxidable, ofreciendo máxima durabilidad, resistencia y un diseño elegante que complementa cualquier espacio. Diseñada para realzar los sabores y aromas del café de especialidad, brindándote una experiencia inigualable en cada taza. Capacidad para 6 tazas tipo espresso.',
    category: 'Cafeteras',
    images: ['/productos/cafetera.webp'],
    price: 60,
    // discount_percentage: 20,
    // Este producto NO tiene variantes

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]
