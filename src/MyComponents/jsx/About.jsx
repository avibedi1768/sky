import React from 'react'
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import aboutGif from './../../aboutGif1.gif'
import './../css/about.css'

function About() {
  return (
    <div id='about' className='about'>
      <div className="about-image">
        <img src={aboutGif} alt="gif" />
      </div>
      <div className="about-para">
        <h1>Features of SKY.RA</h1>
        <div>
          <div className='about-element'>
            <i className="fa fa-bullseye"></i>
            <p><b>Clear Value Proposition: </b>Your product should clearly communicate its unique benefits, making it evident how it solves a problem or fulfills a need for users.</p>
          </div>

          <div className='about-element'>
            <i className="fa fa-desktop"></i>
            <p><b>User-Friendly Interface: </b>Prioritize an intuitive and user-friendly design to ensure that users can easily navigate your product without confusion or frustration.
            </p>
          </div>

          <div className='about-element'>
            <i className="fa fa-rocket"></i>
            <p><b>High-Quality Performance: </b>Deliver a reliable and responsive product with minimal bugs, ensuring that it consistently performs at its best.</p>
          </div>

          <div className='about-element'>
            <i className="fa fa-comments"></i>
            <p><b>Feedback and Support: </b>Provide accessible channels for users to seek help and offer feedback, fostering a positive and supportive user experience.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About