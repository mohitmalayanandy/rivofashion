import React from 'react'
import { styles_list } from '../../assets/assets'

const Product = () => {
  return (
    <div className="text-center p-2 mb-20">
      <div className='text-center items-center'>
        <h1 className="text-3xl font-bold text-green-900">Our products</h1>
        <div>
          <ul className='flex justify-center text-center p-5 m-5 text-green-700'>
            <li className='px-5 hover:text-green-900 cursor-pointer'>SALE</li>
            <li className='px-5 hover:text-green-900 cursor-pointer'>HOT</li>
            <li className='px-5 hover:text-green-900 cursor-pointer'>NEW ARRIVALS</li>
            <li className='px-5 hover:text-green-900 cursor-pointer'>ACCESSORIES</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        {styles_list.map((style, index) => (
          <div key={index} className="w-60 h-60">
            <img src={style.image} alt={`Style ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="text-center mt-5">
              <p>{style.name}</p>
              <p>{style.price} $ | {style.rating}⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product