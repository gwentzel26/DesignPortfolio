import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  }, []);
  return (
    <main className='bg-gradient-to-r from-gray-100 via-white to-[#914e0f]'>
      <Navbar />
      <Hero /> 
      <About />
      <Service />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}
