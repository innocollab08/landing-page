import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
          </>
  )
}

export default page