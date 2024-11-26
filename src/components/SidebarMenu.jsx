import { Sidebar, Button } from "flowbite-react"
import { Link, useLocation } from 'react-router-dom'

import Logo from '../assets/Logo.png'

import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineDocument,
  HiOutlineShoppingBag,
  HiOutlineDocumentReport,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi"

import { HiOutlineSquare3Stack3D, HiOutlineArchiveBox, HiOutlineBanknotes } from "react-icons/hi2"
import { PiWhatsappLogoThin } from "react-icons/pi"

function SidebarMenu() {

  let isActive = false

  let { pathname } = useLocation()

  return (
    <>
      <Button color='none' aria-hidden="true" data-drawer-target="sidebar" data-drawer-toggle="sidebar"
        className="sm:hidden w-full p-2 m-2 rounded-lg hover:bg-gray-100 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
      >
        <div>
          <img src={Logo} alt="logo" className='w-10 h-10 mx-auto' />
          <p className='uppercase'>Menu</p>
        </div>
      </Button>

      <Sidebar id="sidebar" aria-label="sidebar"
        className='fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0'
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <img src={Logo} alt="logo" className='mx-auto cursor-pointer' />
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/" prefetch="false" icon={HiOutlineHome}
              className={`${pathname === '/' ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white`}  >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineClipboardList}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
              Contact
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineDocument}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
              Loan
            </Sidebar.Item>
            <Sidebar.Collapse data-accordion="collapse" icon={HiOutlineShoppingBag} label="Product" className="hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white">
              <Sidebar.Item as={Link} to="product" className={`${pathname === '/product' ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>Bank Product</Sidebar.Item>
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>Product</Sidebar.Item>
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>Category Product</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiOutlineBanknotes}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white`}
            >
              Bank
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineDocumentReport}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}
            >
              Credit Scoring
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineQuestionMarkCircle}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}
            >
              FAQ&lsquo;s
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineSquare3Stack3D}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}
            >
              Pipeline
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineSquare3Stack3D}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}
            >
              Pipeline Developer
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineArchiveBox}
              className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}
            >
              Marketing Tools
            </Sidebar.Item>
            <Sidebar.Collapse data-accordion="collapse" icon={PiWhatsappLogoThin} label="Whatsapp" className="hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white">
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
                Report
              </Sidebar.Item>
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
                Engagement
              </Sidebar.Item>
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
                Chat
              </Sidebar.Item>
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
                User Management
              </Sidebar.Item>
              <Sidebar.Item href="#" className={`${isActive ? "bg-blues-600 text-white" : null} hover:bg-blues-600 hover:text-white active:bg-blues-600 active:text-white `}>
                Quota Limit Office
              </Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  )
}

export default SidebarMenu
