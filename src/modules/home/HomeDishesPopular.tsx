import { CardDishes } from '@/common/components/customize/CardDishes'
import { Star } from 'lucide-react'
import { GetDishesPopular } from './data/DishesPopular'

export const HomeDishesPopular = () => {
  const dishes = GetDishesPopular()
  return (
    <section className="container mb-8 mt-10 px-4 xl:px-0">
      <h1 className="mb-4 flex items-center gap-2 font-poppins text-lg font-bold uppercase md:text-2xl">
        PLATOS POPULARES <Star className="size-6 fill-yellow-400 text-yellow-400" />
      </h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {dishes.map((dishe) => {
          return <CardDishes key={dishe.name} {...dishe} />
        })}
      </div>
    </section>
  )
}
