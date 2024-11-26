import { Sidebar } from "flowbite-react"
import SidebarItem from './SidebarItem'

import {
  HiOutlineCurrencyDollar
} from "react-icons/hi"

function SidebarCollapse() {
  return (
    <Sidebar.Collapse data-accordion="collapse" label="Bank">
      <HiOutlineCurrencyDollar />
      {/* <SidebarItem.Collapse text="Bank Product" isActive={isActive} /> */}
      {/* <SidebarItem text="Product" isActive={isActive} /> */}
      {/* <SidebarItem text="Category Product" isActive={isActive} /> */}
    </Sidebar.Collapse>
  )
}

export default SidebarCollapse