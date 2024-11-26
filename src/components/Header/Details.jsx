import { Dropdown } from 'flowbite-react'

import { HiLogout, HiCog, HiSun } from "react-icons/hi"

function Details() {
  return (
    <Dropdown color='none' label="Yohannes Affandi" className='text-lg' inline>
      <Dropdown.Header>
        <span className="block text-sm">Yohannes Affandi</span>
        <span className="block truncate text-sm font-medium">yohannes.affandi@gmail.com</span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiCog}>Account</Dropdown.Item>
      <Dropdown.Item icon={HiSun}>Theme</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout}>Logout</Dropdown.Item>
    </Dropdown>
  )
}

export default Details