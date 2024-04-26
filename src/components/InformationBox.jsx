import Link from 'next/link'


const InformationBox = ({
  heading,
  backgroundColor = 'bg-primary-300',
  textColor = 'text-black',
  button,
  children
}) =>
{
  return (
    <div className={ `${ backgroundColor } p-6 rounded-lg shadow-md` }>
      <h2 className={ `${ textColor } text-2xl font-bold` }>{ heading }</h2>
      <p className={ `${ textColor } mt-2 mb-4` }>
        { children }
      </p>
      <Link
        href={ button.link }
        className={ `${ button.backgroundColor } inline-block text-white rounded-lg px-4 py-2 hover:opacity-90 transition-all ease-in-out` }
      >
        { button.text }
      </Link>
    </div>
  )
}

export default InformationBox