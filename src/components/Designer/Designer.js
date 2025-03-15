import React from 'react'
import { styles_list } from '../../assets/assets'

const Designer = () => {
  return (
    <div className="text-center p-5 my-20">
      <div>
        <h1 className="text-3xl font-bold text-green-900">Designer Clothes For You</h1>
        <p className="text-xl mb-5">Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
      </div>
      <div className="flex justify-center gap-6">
        {styles_list.map((style, index) => (
          <div key={index} className="w-96 h-96">
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

export default Designer