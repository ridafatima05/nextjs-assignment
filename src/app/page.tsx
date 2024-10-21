import React from 'react'
import Hero from './components/hero'
import AboutUs from './about/page'
import Menu from './menu/page'
import Contact from './contact/page'


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Menu/>
      <Contact/>

    </div>
  )
}

export default Homepage
