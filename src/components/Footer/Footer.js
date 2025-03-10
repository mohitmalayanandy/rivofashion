import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-green-900 p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

                <div>
                    <h2 className="text-2xl font-extrabold text-white">Rivo</h2>
                    <h3 className="mt-2 font-medium text-white">Follow us</h3>
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <img src={assets.x_icon} alt="Social" className="w-6 h-6" />
                        <img src={assets.fb_icon} alt="Social" className="w-6 h-6" />
                        <img src={assets.insta_icon} alt="Social" className="w-6 h-6" />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white">SHOP</h3>
                    <div className="flex flex-col mt-2 space-y-2 text-green-200">
                        <a href="#">Products</a>
                        <a href="#">Overview</a>
                        <a href="#">Pricing</a>
                        <a href="#">Releases</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white">COMPANY</h3>
                    <div className="flex flex-col mt-2 space-y-2 text-green-200">
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">News</a>
                        <a href="#">Support</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white">STAY UP TO DATE</h3>
                    <div className="mt-2 flex flex-col gap-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="p-2 border rounded-md w-full"
                        />
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex mt-5 text-white px-1 flex-row-reverse items-center gap-5 cursor-pointer">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <div className="flex-1 border-b border-white"></div>
            </div>


        </footer>
    );
}

export default Footer;




















/* import React from 'react'

const Footer = () => {
    return (
        <div className='flex bg-green-200 p-10 items-center text-center '>
            <div className=''>
                <h2 className='font-extrabold'>Rivo</h2>
                <div className='flex '>
                    <h3>Social Media</h3>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='font-bold'>SHOP</h3>
                <div className='flex font-semibold'>
                    <a href="#">Products</a>
                    <a href="#">Overview</a>
                    <a href="#">Pricing</a>
                    <a href="#">Releases</a>
                </div>
            </div>
            <div>
                <h3 className='font-bold'>COMPANY</h3>
                <div>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">News</a>
                    <a href="#">Support</a>
                </div>
            </div>
            <div>
                <h3>STAY UP TO DATE</h3>
                <input type="email" name="email" id="email" placeholder='Enter Your email' />
                <button type='submit'>SUBMIT</button>
            </div>
        </div>
    )
}

export default Footer
 */