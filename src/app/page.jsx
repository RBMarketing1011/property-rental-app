import Hero from '@components/Hero'
import HomeInfoBoxes from '@components/HomeInfoBoxes'
import HomePageProperties from '@components/HomePageProperties'

import connectDB from '@config/connectDB'

const Home = async () =>
{
  await connectDB()
  return (
    <main>
      <Hero />
      <HomeInfoBoxes />
      <HomePageProperties />
    </main>
  )
}

export default Home