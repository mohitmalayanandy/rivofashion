import React from "react";
import { assets, styles_list } from "../../assets/assets";

const BestSelling = () => {
  return (
    <div className="px-4 py-10">

      <div className="text-center mb-1">
        <h1 className="text-3xl font-bold text-green-900">Best Selling</h1>
        <p className="text-green-700 m-5">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
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

      <div className="flex flex-col items-center mt-20">
        <button className="flex items-center text-center gap-2 px-5 py-2 bg-white text-green-950 rounded border hover:bg-green-200 transition-all">
          See all
          <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
