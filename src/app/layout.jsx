import '@styles/globals.css'
import { Pacifico, Poppins } from 'next/font/google'

//font setup
//subsets `cyrillic`, `cyrillic-ext`, `latin`, `latin-ext`, `vietnamese`
const pacifico = Pacifico({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: '400',
  variable: '--font-pacifico'
})

const poppins = Poppins({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
  variable: '--font-poppins'
})

// Add Your Metadata Here
export const metadata = {
  title: 'Rentify | Renting Made Easy',
  description: 'Rentify: Your ultimate solution for seamless property rental management. Streamline your process, maximize efficiency, and find the perfect tenants effortlessly with our intuitive web application. Take control of your rental properties today!'
}

const Layout = ({ children }) =>
{
  return (
    <html lang='en-US' className={ `${ pacifico.variable } ${ poppins.variable }` }>
      <body>
        <main>
          { children }
        </main>
      </body>
    </html>
  )
}

export default Layout