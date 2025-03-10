import React from 'react'
import { assets } from '../../assets/assets'

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-green-200">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-green-800 font-semibold text-5xl md:text-7xl leading-tight">
          Discover and <br /> Find Your Own <br /> Fashion
        </h1>
        <p className="text-green-800 text-lg">
          Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-sm font-semibold hover:bg-green-900 hover:scale-110 transition">
          Explore Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-5">
        <img src={assets.hero_model} alt="banner-img" className="h-[500px] md:h-[600px] object-cover rounded-ss-3xl rounded-ee-3xl"/>
      </div>
    </div>
  )
}

export default HeroSection