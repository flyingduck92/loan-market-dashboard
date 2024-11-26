import { Sidebar } from "flowbite-react"

// eslint-disable-next-line react/prop-types
function SidebarItem({ Icon, text, isActive }) {
  return (
    <Sidebar.Item href="#" className={`flex hover:bg-blues-600 hover:text-white hover:fill-white active:bg-blues-600 active:text-white ${isActive ? "bg-blues-600 text-white" : null}`}>
      <div className='flex justify-start items-center gap-2'>
        {Icon ? <Icon className='w-6 h-6' /> : null}
        <p>{text}</p>
      </div>
    </Sidebar.Item>
  )
}

export default SidebarItem