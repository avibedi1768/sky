import React, { useRef } from 'react'
import './../css/navbar.css'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  let onOpen = useRef(null)
  let down = useRef(null)
  let up = useRef(null)

  const show = () => {
    onOpen.current.style.display = 'block'
    up.current.style.display = 'block'
    down.current.style.display = 'none'
  }
  const hide = () => {
    onOpen.current.style.display = 'none'
    up.current.style.display = 'none'
    down.current.style.display = 'block'
  }

  return (
    <div className='navbar'>
      <a href="#home"><h1>SKY.RA</h1></a>
      <div className="navbar-item">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className="ac-ln-menucta-chevron i" onClick={show} ref={down} />
      <FontAwesomeIcon icon={faChevronUp} className="ac-ln-menucta-chevron i" onClick={hide} ref={up} style={{display:'none'}}/>
      <button id='preorder'>Buy</button>
      <div ref={onOpen} style={{display:'none'}}>
        <a href="#home">Home</a><br/>
        <a href="#about">About</a><br/>
        <a href="#contact">Contact</a><br/>
      </div>
    </div>
  )
}

export default Navbar