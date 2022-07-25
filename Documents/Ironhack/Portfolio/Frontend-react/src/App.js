import React from 'react'

import {About, Header, Skills, Testimonial, Work, Footer} from './container'
import { Navbar } from './components'
import './App.scss';

const App = () => {
  return (
    
    <div className='app'>
      <Navbar/>
<Header/>
<Testimonial/>
<About/>
<Work/>
<Skills/>
<Footer/>


    </div>
  )
}

export default App