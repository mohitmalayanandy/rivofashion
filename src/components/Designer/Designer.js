import React from 'react'
import { styles_list } from '../../assets/assets'
const Designer = () => {
  return (
    <div>
      <div>
        <h1>Designer Clothes For You</h1>
        <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
      </div>
      <div className="flex justify-center gap-6">
              <div className="w-96 h-96">
                <img src={styles_list[0].image} alt="Style 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="text-center mt-5">
                  <p>{styles_list[0].name}</p>
                  <p>{styles_list[0].price} $ | {styles_list[0].rating}⭐</p>
                </div>
              </div>
              <div className="w-96 h-96">
                <img src={styles_list[1].image} alt="Style 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="text-center mt-5">
                  <p>{styles_list[1].name}</p>
                  <p>{styles_list[1].price} $ | {styles_list[1].rating}⭐</p>
                </div>
              </div>
              <div className="w-96 h-96">
                <img src={styles_list[2].image} alt="Style 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="text-center mt-5">
                  <p>{styles_list[2].name}</p>
                  <p>{styles_list[2].price} $ | {styles_list[2].rating}⭐</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Designer
