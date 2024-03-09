import About from '@/Components/About';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav'
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const tooglenav = () => setNav(prev => !prev)

  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} toogleNav={tooglenav} />
        <Nav toogleNav={tooglenav} />
        {/* Hero Section */}
        <Hero />
        <div className='relative z-[30]'>
          {/* About */}
          <About />
          {/* Services */}
          <Services />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default HomePage