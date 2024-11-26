/* eslint-disable react/prop-types */
import {
  Button,
  Rating,
} from "flowbite-react"
import { Link } from 'react-router-dom'

import {
  HiOutlineUser, // target 
  HiOutlineChartSquareBar, // fix rate
  HiOutlineCurrencyDollar, // komisi
} from "react-icons/hi"

import {
  IoTimeOutline, // max tenor
  IoShieldCheckmarkOutline, // jaminan
} from "react-icons/io5"
import { BiTimer } from "react-icons/bi" // loan to value

function ProductCard({ product }) {
  let imgName = `images/bank/${product.bankName.toLowerCase()}.svg`
  let totalReview = product.totalReview
  let renderRating = () => {
    let rating = []
    for (let i = 0; i < 5; i++) {
      if (i < product.rating) {
        rating.push(<Rating.Star key={i} />)
      } else {
        rating.push(<Rating.Star key={i} filled={false} />)
      }
    }
    return rating
  }

  console.log(product.id)

  return (
    <div className="p-4 rounded-sm bg-white grid grid-cols-12 grid-rows-auto gap-4 md:justify-center items-center">
      <div id="left-col" className="col-span-12 lg:col-span-3 flex flex-col text-center">
        <img src={imgName} alt="bank name" className='mx-auto' />
        <div className='flex flex-wrap justify-center gap-4'>
          <div className='p-4 col-inner'>
            <p>Rating:</p>
            <Rating>
              {renderRating()}
            </Rating>
            <p className='text-sm font-medium'>{totalReview} Reviews</p>
          </div>
          <div className='p-4 col-inner'>
            <p>User:</p>
            <p className='text-sm font-medium'>{220}</p>
            <p className='text-sm font-medium'>User yearly</p>
          </div>
        </div>
      </div>
      <div id="right-col" className="col-span-12 lg:col-span-7 flex flex-col justify-center">
        <p className='text-4xl font-semibold mb-8'>
          <span>{product.bankName}</span>&nbsp;
          <span className='text-blues-500'>{product.productName}</span>
        </p>
        <div className='flex flex-wrap gap-3'>
          <div className='col-inner flex flex-col gap-2'>
            <p className='flex items-center'><HiOutlineChartSquareBar />&nbsp;Fix Rate: {product.fixRatePercentage}</p>
            <p className='flex items-center'><IoTimeOutline />&nbsp;Max Tenor: {product.maxTenorPerYear}</p>
            <p className='flex items-center'><BiTimer />&nbsp;Loan to Value: {product.loanToValue}</p>
          </div>
          <div className='col-inner flex flex-col gap-2'>
            <p className='flex items-center'><IoShieldCheckmarkOutline />&nbsp;Jaminan: {product.jaminan.join(', ')}</p>
            <p className='flex items-center'><HiOutlineUser />&nbsp;Target: {product.targetMarket.join(', ')}</p>
            <p className='flex items-center'><HiOutlineCurrencyDollar />&nbsp;Komisi: {product.komisi}</p>
          </div>
        </div>
      </div>
      <div id='detailBtn' className="col-span-12 lg:col-span-2">
        <Button as={Link} to={product.id.toString()} color='white' size='lg' className='mx-auto py-1 px-3 rounded-none shadow-md text-blues-500 hover:bg-gray-100'>Detail</Button>
      </div>
    </div >
  )
}

export default ProductCard