import React ,{useState} from 'react'
import Trips from '../components/trips';
import tripData from '../components/tripData';

export default function Service() {
  const [trip,setTrip]= useState(tripData);
  return (
    <>
      <div >
          <img src="https://images.unsplash.com/photo-1640702316122-ee9e044954e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1891&q=80" alt="" className='about-img' />  
          <div className='about-text '>
              <h1>Our Service</h1>
          </div>
          <Trips trpData={trip}/>
      </div>
    </>
  )
}
