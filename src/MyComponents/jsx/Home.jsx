import React from 'react'
import logo from './../../logo.png'
import '../css/home.css'

function Home() {
  return (
    <div id='home' className="home">
      {/* <h1>SKY.RA</h1> */}
      <img src={logo} className="App-logo" alt="logo" />
      <div className='texts'>
        <p>EST.</p>
        <p>2023</p>
      </div>

      <h1>SKY.RA</h1>
      <p>REALITY BUT AUGMENTED</p>
    </div>
  )
}

export default Home