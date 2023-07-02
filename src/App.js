import React from 'react'
import { Blog, Footer, Possibility, Features, Header, WhatGPT3 } from './Containers'
import { CTA, Brand, Navbar } from './Components'


const App = () => {
  return (
    <div className='App gradient_bg'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App