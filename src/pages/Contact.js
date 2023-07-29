import React from 'react';
import '../App.css';
export default function Contact() {
  return (
    <>
      <div >
          <img src="https://images.unsplash.com/photo-1640702316122-ee9e044954e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1891&q=80" alt="" className='about-img' />  
          <div className='about-text '>
              <h1>Contact Us</h1>
          </div>
          <div className='form-container'>
            <h1>Send a message to us!</h1>
            <form>
               <input type="text" placeholder='Name'/>
               <input type="email" placeholder='Email'/>
               <textarea type="text" placeholder='Message' rows="4"></textarea>
              <button>Send Message</button>
            </form>
          </div>
      </div>
    </>
  )
}
