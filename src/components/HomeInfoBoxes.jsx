import InformationBox from './InformationBox'

const HomeInfoBoxes = () =>
{
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InformationBox
            heading='For Renters'
            backgroundColor='bg-primary-300'
            textColor='text-black'
            button={ {
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-primary-500'
            } }
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InformationBox>

          <InformationBox
            heading='For Property Owners'
            backgroundColor='bg-white'
            textColor='text-black'
            button={ {
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-primary-300'
            } }
          >
            List your properties and reach potential tenants. Rent as an
            airbnb or long term.
          </InformationBox>
        </div>
      </div>
    </section>
  )
}

export default HomeInfoBoxes