import Link from 'next/link'
import Image from 'next/image'
import Logo from '@assets/logos/logo_dark.png'

const Footer = () =>
{
  return (
    <footer className="bg-primary-300 py-4 mt-auto">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <Link href='/' className="mb-4 md:mb-0">
          <Image
            src={ Logo }
            alt="Logo"
            className="h-8 w-auto" />
        </Link>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex text-primary-700 font-semibold space-x-4">
            <li><Link href="/properties">Properties</Link></li>
            <li>|</li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-primary-700 font-semibold mt-2 md:mt-0">
            &copy; 2024 Rentify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer