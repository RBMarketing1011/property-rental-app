import Hero from '@components/Hero'
import HomeInfoBoxes from '@components/HomeInfoBoxes'
import HomePageProperties from '@components/HomePageProperties'

const Home = () =>
{
  return (
    <main>
      <Hero />
      <HomeInfoBoxes />
      <HomePageProperties />
    </main>
  )
}

export default Home