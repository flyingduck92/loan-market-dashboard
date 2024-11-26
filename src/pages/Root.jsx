import { Outlet } from 'react-router-dom'
import SidebarMenu from '../components/SidebarMenu'

function Root() {
  return (
    <>
      <SidebarMenu />
      <main className='main mx-auto'>
        <Outlet />
      </main>
    </>
  )
}

export default Root