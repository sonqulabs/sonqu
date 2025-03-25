import { HomeAbout } from './HomeAbout'
import { HomeCategoryRecipes } from './HomeCategoryRecipes'
import HomeHero from './HomeHero'
import { HomeMarcas } from './HomeMarcas'
import { HomeShareRecipe } from './HomeShareRecipe'

const HomeView = () => {
  return (
    <main className="flex-1">
      <HomeHero />

      <HomeCategoryRecipes />
      <HomeAbout />
      <HomeShareRecipe />
      <HomeMarcas />
    </main>
  )
}

export default HomeView
