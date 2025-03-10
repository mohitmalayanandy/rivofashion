import React from 'react'
import { styles_list } from '../../assets/assets'

const Offer = () => {
  return (
    <div className='flex m-10 p-10 bg-blue-200 gap-10'>
      <div>
        <img src={styles_list[4].image} alt="" className='h-[400px] w-[350px]'/>
      </div>
      <div className='justify-center m-10 p-10'>
        <h2 className='font-medium text-lg text-green-900'>Exclusive offer</h2>
        <p className='text-base text-justify'>Unluck the ultimate style upgrade with our exclusive <br /> offer Enjoy saving of up to 40% off on our latest New Arrivals.</p>
        <div className='flex m-3 gap-1 text-center'>
          <p className='p-3 rounded bg-gray-100'>06 Days</p>
          <p className='p-3 rounded bg-gray-100'>18 Hours</p>
          <p className='p-3 rounded bg-gray-100'>48 Min</p>
        </div>
        <button className="bg-green-700 text-white px-4 py-2 rounded-sm hover:bg-green-900 transition">BUY NOW</button>
      </div>
    </div>
  )
}

export default Offer
