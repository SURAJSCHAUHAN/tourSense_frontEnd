import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
export default function About() {
  return (
    <>
      <div >
          <img src="https://images.unsplash.com/photo-1640702316122-ee9e044954e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1891&q=80" alt="" className='about-img' />  
          <div className='about-text '>
              <h1>About Us</h1>
          </div>
          <div className='about-container'>
            <h1>Our History</h1>
            <p>TourSense is owned and managed by Suraj Singh,a leading brand in web designing services and e-commerce solutions. TourSense was devloped by Suraj & Team for IBM Internship project.Our Invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation.  </p>
          
            <h1>Our Mission</h1>
            <p>Our mission is to touch the horizon where our capabilites may succesfully meet with the requirements of our clients, that to with ultimate transparency and cost-effectiveness.</p>

            <h1>Our Vision</h1>
            <p>To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>

            <h1>Our Team</h1>
            <div><Link to='https://www.linkedin.com/in/chauhan-suraj-singh/' className='team-link'>CHAUHAN SURAJ SINGH <i class="fa-solid fa-link"></i></Link></div>
            <div><Link to='https://www.linkedin.com/in/udit-kumawat/' className='team-link'>UDIT KUMAWAT <i class="fa-solid fa-link"></i></Link></div>
            <div><Link to='https://www.linkedin.com/in/siddharth-sharma-12279a220/' className='team-link'>SIDDHARTH SHARMA <i class="fa-solid fa-link"></i></Link></div>
            <div><Link to='https://www.linkedin.com/in/lakshya-khandelwal-4a665b222/'className='team-link'>LAKSHYA KHANDELWAL <i class="fa-solid fa-link"></i></Link></div>
          </div>
      </div>
    </>
  )
}
