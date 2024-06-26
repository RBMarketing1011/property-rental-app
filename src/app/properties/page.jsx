import PropertyCard from '@components/PropertyCard'
import properties from '@utils/properties.json'

const Properties = () =>
{
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {
          properties.length === 0 ?
            <h1 className="text-4xl">No Properties Found</h1>

            :

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {
                properties.map(prop => (
                  <PropertyCard key={ prop._id } data={ prop } />
                ))
              }

            </div>

        }
      </div>
    </section>
  )
}

export default Properties