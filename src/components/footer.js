import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='top'>
            <div>
                <h1>TourSense</h1>
                <p>Choose your favourite destination.</p>
            </div>
            <div>
                <Link to='/' className='footer-link'> <i className="fa-brands fa-facebook-square"></i></Link>
                <Link to='/' className='footer-link'> <i className="fa-brands fa-instagram-square"></i></Link>
                <Link to='/' className='footer-link'> <i className="fa-brands fa-twitter-square"></i></Link>
            </div>
        </div>

        <div className='bottom'>
            <div>
                <h4>Community</h4>
                <Link to='/' className='footer-link'>GitHub</Link>
                <Link to='/' className='footer-link'>Issues</Link>
                <Link to='/' className='footer-link'>Twitter</Link>
            </div>
            <div>
                <h4>Help</h4>
                <Link to='/' className='footer-link'>Support</Link>
                <Link to='/' className='footer-link'>Troubleshooting</Link>
                <Link to='/' className='footer-link'>Contact Us</Link>
            </div>
            <div>
                <h4>Others</h4>
                <Link to='/' className='footer-link'>Terms of Service</Link>
                <Link to='/' className='footer-link'>Privacy Policy</Link>
                <Link to='/' className='footer-link'>License</Link>
            </div>
        </div>
      </div>
    </>
  )
}
