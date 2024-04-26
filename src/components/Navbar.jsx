'use client'
//dependencies
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

//images 
import Logo from '@assets/logos/logo_light.png'
import Profile from '@assets/images/profile.png'

//icons
import { FaGoogle, FaBars, FaRegBell } from 'react-icons/fa'

const Navbar = () =>
{
  // set logged in for dev purposes
  const isLoggedIn = true

  const pathname = usePathname()

  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)
  const [ profileMenuOpen, setProfileMenuOpen ] = useState(false)

  return (
    <nav className="bg-primary-500">
      <div className="bg-primary-500 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-[50]">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */ }
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-300 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={ () => setMobileMenuOpen(!mobileMenuOpen) }
            >
              <FaBars size={ 20 } />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */ }
            <Link className="flex flex-shrink-0 items-end" href="/">
              <Image
                src={ Logo }
                width={ 50 }
                height={ 50 }
                priority={ true }
                alt='Rentify Logo'
              />

              <h5 className="hidden md:block text-white text-2xl font-bold"
              >entify</h5
              >
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */ }
            <div className="hidden md:ml-6 md:block">
              <div className="flex items-center h-full space-x-2">
                <Link
                  href="/"
                  className={ `${ pathname === '/' ? 'text-black bg-primary-300' : 'text-white hover:bg-primary-700' } font-semibold rounded-md px-3 py-2 transition-all ease-in-out` }
                >
                  Home
                </Link>

                <Link
                  href="/properties"
                  className={ `${ pathname === '/properties' ? 'text-black bg-primary-300' : 'text-white hover:bg-primary-700' } font-semibold rounded-md px-3 py-2 transition-all ease-in-out` }
                >
                  Properties
                </Link>

                {
                  isLoggedIn &&
                  <Link
                    href="/properties/add"
                    className={ `${ pathname === '/properties/add' ? 'text-black bg-primary-300' : 'text-white hover:bg-primary-700' } font-semibold rounded-md px-3 py-2 transition-all ease-in-out` }
                  >
                    Add Property
                  </Link>
                }
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */ }
          {
            !isLoggedIn &&
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button
                  className="flex items-center text-white bg-primary-700 hover:bg-primary-300 hover:text-black font-semibold rounded-md px-3 py-2 transition-all ease-in-out"
                >
                  <FaGoogle className="mr-2" />
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          }

          {/* <!-- Right Side Menu (Logged In) --> */ }
          {
            isLoggedIn &&
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
            >
              <Link href="/messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-primary-700 p-1.5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <FaRegBell size={ 22 } />

                </button>
                <span
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-primary-300 rounded-full"
                >
                  2
                  {/* <!-- Replace with the actual number of notifications --> */ }
                </span>
              </Link>

              {/* <!-- Profile dropdown button --> */ }
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={ () => setProfileMenuOpen(!profileMenuOpen) }
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      src={ Profile }
                      width={ 30 }
                      height={ 30 }
                      alt='Profile Image'
                      priority={ true }
                    />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */ }
                <div
                  id="user-menu"
                  className={ `${ !profileMenuOpen && 'hidden' } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary-300 text-primary-700 font-semibold` }
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-primary-500 hover:text-primary-300 transition-all ease-in-out"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={ () => setProfileMenuOpen(false) }
                  >
                    Your Profile
                  </Link>

                  <Link
                    href="/properties/saved"
                    className="block px-4 py-2 text-sm hover:bg-primary-500 hover:text-primary-300 transition-all ease-in-out"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    onClick={ () => setProfileMenuOpen(false) }
                  >
                    Saved Properties
                  </Link>

                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-primary-500 hover:text-primary-300 transition-all ease-in-out"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    onClick={ () => setProfileMenuOpen(false) }
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          }

        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */ }
      <div id="mobile-menu">
        <div className={ `${ !mobileMenuOpen && '-translate-y-[150%]' } flex flex-col gap-2 bg-primary-500 space-y-1 px-2 pb-3 pt-2 absolute w-full z-10 transition-transform ease-in-out` }>
          <Link
            href="/"
            className={ `${ pathname === '/' ? 'text-black bg-primary-300' : 'text-white hover:bg-primary-700' } block font-semibold rounded-md px-3 py-2 transition-all ease-in-out` }
            onClick={ () => setMobileMenuOpen(false) }
          >
            Home
          </Link>

          <Link
            href="/properties"
            className={ `${ pathname === '/properties' ? 'text-black bg-primary-300' : 'text-white hover:bg-primary-700' } block font-semibold rounded-md px-3 py-2 transition-all ease-in-out` }
            onClick={ () => setMobileMenuOpen(false) }
          >
            Properties
          </Link>

          <Link
            href="/properties/add"
            className={ `${ pathname === '/properties/add' ? 'text-black bg-primary-300' : 'text-white hover:bg-primary-700' } block font-semibold rounded-md px-3 py-2 transition-all ease-in-out` }
            onClick={ () => setMobileMenuOpen(false) }
          >
            Add Property
          </Link>

          <button
            className="flex w-[max-content] items-center text-white bg-primary-700 hover:bg-primary-300 hover:text-black font-semibold rounded-md px-3 py-2 my-4 transition-all ease-in-out"
            onClick={ () => setMobileMenuOpen(false) }
          >
            <FaGoogle className="mr-2" />
            <span>Login or Register</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar