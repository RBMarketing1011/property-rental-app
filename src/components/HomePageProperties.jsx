import properties from '@utils/properties.json'
import PropertyCard from './PropertyCard'
import Link from 'next/link'

const HomePageProperties = () =>
{
  const featuredProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3)

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl text-primary-300 mb-6 text-center underline">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

            {
              featuredProperties === 0 ?
                <h1 className="text-2xl">No Properties</h1>

                :

                featuredProperties.map(prop => (
                  <PropertyCard
                    key={ prop._id }
                    data={ prop }
                  />
                ))
            }

          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-primary-300 text-black font-bold text-center py-4 px-6 rounded-xl hover:bg-accent-300 transition-all ease-in-out"
        >
          View All Properties
        </Link>
      </section>
    </>
  )
}

export default HomePageProperties