import { CardDishes } from '@/common/components/customize/CardDishes'
import React from 'react'
import { GetDishesPopular } from '../data/DishesPopular'

export const RecipesPopular = () => {
  const dishes = GetDishesPopular()

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {dishes.map((dishe) => {
        return <CardDishes key={dishe.name} {...dishe} />
      })}
    </div>
  )
}
