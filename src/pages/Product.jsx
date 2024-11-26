import {
  Tabs,
  TextInput,
  Select,
  Button,
} from "flowbite-react"

import { LuPiggyBank } from "react-icons/lu" // deposito
import { HiOutlineCreditCard } from "react-icons/hi2" // kredit modal usaha
import {
  HiOutlineHome, //kpr
  HiOutlineOfficeBuilding, //take over and bridging loan
  HiOutlineUser, //refinancing
  HiOutlineSearch, // search
  HiOutlineSortAscending, // sort
  HiOutlinePlus, // tambah product
} from "react-icons/hi"

import Header from '../components/Header'
import ProductCard from '../components/ProductPage/ProductCard'
import bankProducts from '../data/bankproducts'

const tabsTheme = {
  "tablist": {
    "tabitem": {
      "base": "flex items-center justify-center py-4 px-12 text-lg font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
    },
  },
}

// const button

function Product() {
  return (
    <>
      <Header pageTitle="Product" />
      <Tabs theme={tabsTheme} aria-label="Tabs underline" variant="underline"
        className='rounded-none border-0 sm:ml-28 flex flex-nowrap justify-center gap-4'>
        <Tabs.Item title="Bank" />
        <Tabs.Item title="Developer" />
      </Tabs>

      <div className='bg-gray-200'>

        {/* Container */}
        <div className="px-4 sm:ml-60">

          {/*  Marker Dashed Line - (use red-200) */}
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">

            {/* 5 Cards */}
            <div className="p-4 flex flex-wrap items-center justify-center mb-4 gap-6 rounded bg-white">
              <button color='white' className='col-span-2 px-6 py-2 rounded-md border-1 border-solid border-black shadow-md bg-white hover:bg-gray-100'>
                <HiOutlineHome className='mx-auto w-20 h-20' />
                KPR dan Multiguna
              </button>
              <button color='white' className='col-span-2 px-6 py-2 rounded-md border-1 border-solid border-black shadow-md bg-white hover:bg-gray-100'>
                <HiOutlineUser className='mx-auto w-20 h-20' />
                Refinancing
              </button>
              <button color='white' className='col-span-2 px-6 py-2 rounded-md border-1 border-solid border-black shadow-md bg-white hover:bg-gray-100'>
                <HiOutlineCreditCard className='mx-auto w-20 h-20' />
                Kredit Modal Usaha dan Investasi
              </button>
              <button color='white' className='col-span-2 px-6 py-2 rounded-md border-1 border-solid border-black shadow-md bg-white hover:bg-gray-100'>
                <LuPiggyBank className='mx-auto w-20 h-20' />
                Deposito
              </button>
              <button color='white' className='col-span-2 px-6 py-2 rounded-md border-1 border-solid border-black shadow-md bg-white hover:bg-gray-100'>
                <HiOutlineOfficeBuilding className='mx-auto w-20 h-20' />
                Take Over dan Bridging Loan
              </button>
            </div>

            {/* Input Form + Sort + Add Button UI */}
            <div className="grid grid-rows-auto grid-cols-12 p-6 gap-4 mb-4 rounded bg-white ">

              <TextInput color='white' className='col-span-12 lg:col-span-6 shadow-md border-white border-solid ' id="search" type='search' rightIcon={HiOutlineSearch} placeholder='Cari berdasarkan nama' />

              <Select color='light' id="category" required className='col-span-12 lg:col-span-2 shadow-md'>
                <option>Kredit Pemilikan</option>
                <option>Bank Name</option>
                <option>Tenor</option>
              </Select>

              <Button color='white' className='col-span-12 lg:col-span-1 border-1 border-solid border-black shadow-md bg-white hover:bg-gray-100'>
                <HiOutlineSortAscending className="mr-3 h-4 w-4" />
                Sort
              </Button>

              <Button color='white' className='col-span-12 lg:col-span-3 text-nowrap border-solid border-black shadow-md bg-blues-500 hover:bg-blues-600 text-white'>
                <HiOutlinePlus className="mr-2 h-5 w-5" />
                Tambah Product
              </Button>
            </div>

            {/* Multiple Card Full width */}
            <div className="grid grid-cols-1 gap-4 mb-4">

              {
                /* ProductCard */
                bankProducts.map(product => {
                  return (
                    <ProductCard key={product.id} product={product} />
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Product