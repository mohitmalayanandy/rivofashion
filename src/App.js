import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import BestSelling from './components/BestSelling/BestSelling'
import Product from './components/Products/Product'
import Offer from './components/Offer/Offer'
import Designer from './components/Designer/Designer'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <BestSelling />
      <Product />
      <Offer/>
      <Designer/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default App
