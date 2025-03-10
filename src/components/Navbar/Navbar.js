import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="bg-green-200 p-4 md:p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
  
        <h1 className="text-2xl text-green-900 font-extrabold px-4 cursor-none">Rivo</h1>
        
        <ul className="hidden md:flex space-x-10 text-green-800 font-bold">
          <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition">HOME</li>
          <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition">SHOP</li>
          <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition">FEATURES</li>
          <li className="cursor-pointer hover:text-green-600 hover:scale-110 transition">CONTACT</li>
        </ul>

        <div className="flex items-center space-x-5">
          <img src={assets.cart_image} alt="Cart" className="w-6 cursor-pointer hover:scale-150 transition" />
          <a href="#" className="font-bold text-green-900 hover:text-green-600 hover:scale-110 transition">LOGIN</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar













/* import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='flex justify-around bg-green-200 p-6'>
        <div>
          <h1 className='px-10 text-2xl text-green-900 font-extrabold cursor-none'>Rivo</h1>
        </div>
        <div >
          <ul className='flex justify-evenly text-green-800 font-bold'>
            <li className='cursor-pointer '>HOME</li>
            <li className='cursor-pointer '>SHOP</li>
            <li className='cursor-pointer '>FEATURES</li>
            <li className='cursor-pointer '>CONTACT</li>
          </ul>
        </div>
        <div className='flex items-center mx-2'>
          <img src={assets.cart_image} alt="" className='w-6 mx-5 cursor-pointer'/>
          <a href="#" className=''>LOGIN</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
 */