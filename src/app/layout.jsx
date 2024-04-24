import '@styles/globals.css'

// Add Your Metadata Here
export const metadata = {
  title: 'Rentify | Renting Made Easy',
  description: 'Add Description Here'
}

const Layout = ({ children }) =>
{
  return (
    <html lang='en-US'>
      <body>
        <main>
          { children }
        </main>
      </body>
    </html>
  )
}

export default Layout