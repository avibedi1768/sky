import React from 'react'
import './../css/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <a href="#home"><h1>SKY.RA</h1></a>
      <div className="navbar-item">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button><a href="#home">Order Now</a></button>
    </div>
  )
}

export default Navbar