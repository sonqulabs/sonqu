import { Recipe } from '../types/search-types'

export const recipeData: Record<string, Recipe[]> = {
  desayunos: [
    {
      id: 'pancakes',
      name: 'Pancakes con Arándanos',
      description: 'Esponjosos pancakes con arándanos frescos y miel de maple',
      time: '20 min',
      difficulty: 'Fácil',
      servings: 2,
      rating: 4.8
    },
    {
      id: 'avocado-toast',
      name: 'Tostada de Aguacate',
      description: 'Tostada integral con aguacate, huevo pochado y semillas',
      time: '15 min',
      difficulty: 'Fácil',
      servings: 1,
      rating: 4.5
    },
    {
      id: 'smoothie-bowl',
      name: 'Smoothie Bowl de Açaí',
      description: 'Refrescante bowl de açaí con frutas y granola casera',
      time: '10 min',
      difficulty: 'Fácil',
      servings: 1,
      rating: 4.7
    }
  ],
  principales: [
    {
      id: 'pasta',
      name: 'Pasta al Pesto',
      description: 'Pasta fresca con pesto casero de albahaca y piñones',
      time: '25 min',
      difficulty: 'Media',
      servings: 4,
      rating: 4.6
    },
    {
      id: 'salmon',
      name: 'Salmón al Horno',
      description: 'Salmón horneado con hierbas y limón sobre cama de vegetales',
      time: '35 min',
      difficulty: 'Media',
      servings: 2,
      rating: 4.9
    }
  ],
  postres: [
    {
      id: 'tiramisu',
      name: 'Tiramisú Clásico',
      description: 'Postre italiano con capas de bizcocho, café y mascarpone',
      time: '30 min + 4h reposo',
      difficulty: 'Media',
      servings: 6,
      rating: 4.8
    },
    {
      id: 'brownie',
      name: 'Brownie de Chocolate',
      description: 'Brownie húmedo con trozos de chocolate y nueces',
      time: '40 min',
      difficulty: 'Fácil',
      servings: 8,
      rating: 4.7
    }
  ],
  ensaladas: [
    {
      id: 'cesar',
      name: 'Ensalada César',
      description: 'Lechuga romana, crutones, parmesano y aderezo césar casero',
      time: '15 min',
      difficulty: 'Fácil',
      servings: 2,
      rating: 4.5
    },
    {
      id: 'mediterranea',
      name: 'Ensalada Mediterránea',
      description: 'Tomate, pepino, aceitunas, queso feta y vinagreta de limón',
      time: '10 min',
      difficulty: 'Fácil',
      servings: 4,
      rating: 4.6
    }
  ]
}
