import React from 'react'
import { styles_list } from '../../assets/assets'
const Product = () => {
  return (
    <div>
      <div className='text-center items-center'>
        <h1>Our products</h1>
        <div className=''>
          <ul className='flex justify-center text-center p-5 m-5'>
            <li className='px-5'>SALE</li>
            <li className='px-5'>HOT</li>
            <li className='px-5'>NEW ARRIVALS</li>
            <li className='px-5'>ACCESSORIES</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <div className="w-60 h-60">
          <img src={styles_list[0].image} alt="Style 1" className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="text-center mt-5">
            <p>{styles_list[0].name}</p>
            <p>{styles_list[0].price} $ | {styles_list[0].rating}⭐</p>
          </div>
        </div>
        <div className="w-60 h-60">
          <img src={styles_list[1].image} alt="Style 2" className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="text-center mt-5">
            <p>{styles_list[1].name}</p>
            <p>{styles_list[1].price} $ | {styles_list[1].rating}⭐</p>
          </div>
        </div>
        <div className="w-60 h-60">
          <img src={styles_list[2].image} alt="Style 3" className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="text-center mt-5">
            <p>{styles_list[2].name}</p>
            <p>{styles_list[2].price} $ | {styles_list[2].rating}⭐</p>
          </div>
        </div>
        <div className="w-60 h-60">
          <img src={styles_list[3].image} alt="Style 3" className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="text-center mt-5">
            <p>{styles_list[3].name}</p>
            <p>{styles_list[3].price} $ | {styles_list[3].rating}⭐</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
