import Image from 'next/image'
import Link from 'next/link'

import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarkerAlt, FaMarker } from 'react-icons/fa'

const PropertyCard = ({ data }) =>
{
  const displayRate = () =>
  {
    const { rates } = data

    if (rates.monthly)
    {
      return `${ rates.monthly.toLocaleString() }/mo`
    } else if (rates.weekly)
    {
      return `${ rates.weekly.toLocaleString() }/wk`
    } else if (rates.nightly)
    {
      return `${ rates.nightly.toLocaleString() }/night`
    }
  }
  return (
    <div className="rounded-xl shadow-[0_0_10px_0_var(--color-accent-300)] relative bg-primary-700">
      <Image
        src={ `/images/properties/${ data.images[ 0 ] }` }
        sizes='100vw'
        width='0'
        height='0'
        alt=""
        className='w-full h-auto rounded-t-xl'
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-white">{ data.type }</div>
          <h3 className="text-accent-300 text-xl font-bold">{ data.name }</h3>
        </div>
        <h3
          className="absolute top-[10px] right-[10px] bg-accent-300 px-4 py-2 rounded-lg text-black font-bold text-right md:text-center lg:text-right"
        >
          ${ displayRate() }
        </h3>

        <div className="flex justify-center gap-4 text-white mb-4">
          <p>
            <FaBed className='inline mr-1 text-primary-300' /> { data.beds }{ ' ' }
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-1 text-primary-300' /> { data.baths }{ ' ' }
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-1 text-primary-300' /> { data.square_feet }{ ' ' }
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div
          className="flex justify-center gap-4 text-green-500 text-sm mb-4"
        >
          { data.rates.nightly && <p><FaMoneyBill className='inline mr-1' /> Nightly</p> }
          { data.rates.weekly && <p><FaMoneyBill className='inline mr-1' /> Weekly</p> }
          { data.rates.monthly && <p><FaMoneyBill className='inline mr-1' /> Monthly</p> }
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarkerAlt className='text-primary-300' />
            <span className="text-accent-300"> { data.location.city } { data.location.state } </span>
          </div>
          <Link
            href={ `/properties/${ data._id }` }
            className="h-[36px] bg-primary-300 hover:bg-accent-300 font-semibold text-black px-4 py-2 rounded-lg text-center text-sm transition-all ease-in-out"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard