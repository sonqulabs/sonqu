import { HomeCategoryRecipes } from './HomeCategoryRecipes'
import { HomeDishesPopular } from './HomeDishesPopular'
import HomeHero from './HomeHero'
import HomeTips from './HomeTips'

const HomeView = () => {
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeCategoryRecipes />
      <HomeTips />
      <HomeDishesPopular />
    </main>
  )
}

export default HomeView
