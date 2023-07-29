import React from 'react';
import '../App.css';
import {Link,Outlet} from 'react-router-dom';

export default function navbar() {
  return (
    <div className='App'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light  NavbarItems" >
          <div className="container-fluid">
            <Link className="navbar-brand navbar-logo" href="#">TourSense</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-menu"  id="navbarNavAltMarkup">
              <div class="navbar-nav nav-menu">
                <Link className="nav-link nav-links" to="/"><i className="fa-solid fa-house-user"></i>Home</Link>
                <Link className="nav-link nav-links" to="/about"><i className="fa-solid fa-circle-info"></i>About</Link>
                <Link className="nav-link nav-links" to="/service"><i className="fa-solid fa-briefcase"></i>Service</Link>
                <Link className="nav-link nav-links" to="/contact"><i className="fa-solid fa-address-book"></i>Contact</Link>
                <button to="/signup" className='nav-links-signup'>SignUp</button>
              </div>
            </div>
          </div>
        </nav>
        <Outlet/>
    </div>
  )
}
