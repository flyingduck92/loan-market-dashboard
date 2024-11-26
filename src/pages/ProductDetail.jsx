import {
  HiOutlineArrowLeft,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi"

import { Link, useParams } from 'react-router-dom'
import bankProducts from '../data/bankproducts'
import Header from '../components/Header'
import Input from '../components/ProductDetail/Input'

function ProductDetail() {
  let params = useParams()

  let products = [...bankProducts]
  let product = products.filter(product => product.id == params.id)[0]

  return (
    <>
      <Header pageTitle="Product" />
      <header className='py-4 px-4 sm:pl-8 flex flex-wrap items-center justify-between gap-4 shadow-md '>
        <section className='sm:ml-60 flex gap-4'>
          <Link to=".." relative='path' className='p-2 flex items-center text-nowrap rounded-full bg-blues-700 hover:bg-blues-800 text-white'>
            <HiOutlineArrowLeft className='w-6 h-6' />
          </Link>
          <p className='text-2xl md:text-3xl text-nowrap'>Bank Product Detail {product.id}</p>
        </section>
        <section className='ml-auto flex gap-4'>
          <Link to="edit" relative='path' className='p-2 ml-auto flex items-center text-nowrap rounded-md bg-blues-700 hover:bg-blues-800 text-white'>
            <HiOutlinePencilAlt className='w-6 h-6' />
            &nbsp;<p>Edit Product</p>
          </Link>
          <Link to="delete" relative='path' className='p-2 flex items-center text-nowrap rounded-md bg-red-600 hover:bg-red-700 text-white'>
            <HiOutlineTrash className='w-6 h-6' />
            &nbsp;<p>Delete Product</p>
          </Link>
        </section>
      </header>

      <div className='bg-gray-200'>

        {/* Container */}
        <div className="px-4 sm:ml-60">

          {/*  Marker Dashed Line - (use red-200) */}
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">

            {/* Input Form Full width */}
            <div className="grid grid-cols-1 gap-4 mb-4 p-6 bg-white">

              <Input id="bank" label="Bank" type="text" value={product.bankName} />
              <Input id="productName" label="Nama Product" type="text" value={product.productName} />
              <Input id="jaminan" label="Jaminan" type="text" value={product.jaminan.join(', ')} />
              <Input id="targetMarket" label="Target Market" type="text" value={product.targetMarket.join(', ')} />
              <Input id="komisi" label="Komisi" type="text" value={`${product.komisi}%`} />
              <Input id="appraisal" label="Appraisal" type="text" value={`${product.appraisal}%`} />
              <Input id="floating" label="Floating" type="text" value={`${product.floating}%`} />
              <Input id="loanToValue" label="Loan To Value" type="text" value={`${product.loanToValue}%`} />
              <Input id="penaltyFee" label="Penalty Fee" type="text" value={`${product.penaltyFee}`} />
              <Input id="interestRate" label="Interest Rate" type="text" value={`${product.interestRate}`} />
              <Input id="fixRatePercentage" label="Fix Rate %" type="text" value={`${product.fixRatePercentage}`} />
              <Input id="fixRatePerYear" label="Fix Rate (year)" type="text" value={`${product.fixRatePerYear}`} />
              <Input id="maxTenorPerYear" label="Max Tenor (year)" type="text" value={`${product.maxTenorPerYear}`} />
              <Input id="keterangan" label="Keterangan" type="textarea" value={`${product.keterangan}`} />
              <Input id="url" label="URL" type="text" value={`${product.url === null && 'null'}`} />

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetail