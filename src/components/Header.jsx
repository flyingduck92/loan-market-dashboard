import Notifications from './Header/Notifications'
import Details from './Header/Details'

// eslint-disable-next-line react/prop-types
function Header({ pageTitle = "title", }) {
  return (
    <header className='py-4 px-4 sm:pl-8  flex items-center shadow-md w-full'>
      <p className='text-2xl md:text-3xl sm:ml-60'>{pageTitle}</p>
      <div className='ml-auto flex justify-center items-center border-x-2 mr-4'>
        <Notifications />
      </div>
      <Details />
    </header>
  )
}

export default Header