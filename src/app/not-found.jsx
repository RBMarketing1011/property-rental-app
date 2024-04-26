import Link from 'next/link'
import { BiSolidMessageAltError } from "react-icons/bi"


const NotFound = () =>
{
  return (
    <section className="bg-primary-700 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-primary-300 px-6 py-24 mb-4 shadow-[0_0_20px_0_var(--color-primary-300)] rounded-md m-4 md:m-0"
        >
          <div className="flex justify-center">
            <BiSolidMessageAltError className='text-accent-300 drop-shadow-[0_0_15px_var(--color-primary-700)]' size={ 100 } />
          </div>
          <div className="text-center text-black">
            <h1 className="text-3xl font-bold mt-4 mb-2">404 <span className='mx-3'>|</span> Page Not Found</h1>
            <p className="text-xl mb-10">
              The page you are looking for does not exist.
            </p>
            <h4 className="text-xl my-10">
              Try these pages instead.
            </h4>
            <div className="flex flex-col gap-3 items-center">
              <Link
                href="/"
                className="w-[50%] bg-primary-500 hover:bg-primary-700 text-accent-300 font-bold py-4 px-12 rounded-xl"
              >
                Home
              </Link>
              <Link
                href="/properties"
                className="w-[50%] bg-primary-500 hover:bg-primary-700 text-accent-300 font-bold py-4 px-12 rounded-xl"
              >
                Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  )
}

export default NotFound