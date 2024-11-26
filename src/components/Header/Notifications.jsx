import { Dropdown } from 'flowbite-react'
import { HiBell } from "react-icons/hi"

function Notifications() {
  return (
    <Dropdown color='none' label={<HiBell />} >
      <Dropdown.Item>Someone posted a new loan</Dropdown.Item>
      <Dropdown.Item>Product A sold</Dropdown.Item>
      <Dropdown.Item>Someone approved a loan</Dropdown.Item>
      <Dropdown.Item>Someone ask a question</Dropdown.Item>
    </Dropdown>
  )
}

export default Notifications