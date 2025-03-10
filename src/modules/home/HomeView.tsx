import { HomeCategoryRecipes } from './HomeCategoryRecipes'
import { HomeDishesPopular } from './HomeDishesPopular'
import HomeHero from './HomeHero'
import { HomeMarcas } from './HomeMarcas'
import HomeTips from './HomeTips'

const HomeView = () => {
  return (
    <main className="flex-1">
      <HomeHero />

      <HomeCategoryRecipes />
      <HomeTips />
      {/* <HomeDishesPopular /> */}
      <HomeMarcas />
    </main>
  )
}

export default HomeView
