import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import BestSelling from './Components/BestSelling/BestSelling';
import Product from './Components/Product/Product';
import Offer from './Components/Offer/Offer';
import Designer from './Components/Designer/Designer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BestSelling />
      <Product />
      <Offer />
      <Designer />
      <Footer />
    </div>
  )
}

export default App
