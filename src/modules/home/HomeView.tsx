import { DishesPopular } from './components/DishesPopular'
import { HomeCategoryRecipes } from './HomeCategoryRecipes'
import HomeHero from './HomeHero'
import HomeTips from './HomeTips'

const HomeView = () => {
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeCategoryRecipes />
      <HomeTips />
      <DishesPopular />
    </main>
  )
}

export default HomeView
