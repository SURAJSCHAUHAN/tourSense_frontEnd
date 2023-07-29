import React,{useState} from 'react';
import Destination from '../components/destination';
import destinationData from '../components/destinationData';
import Trips from '../components/trips';
import tripData from '../components/tripData';


export default function Home() {

  const [travel,setTravel]=useState(destinationData);
  const [trip,setTrip]= useState(tripData);

  return (
    <>
    <div >
      <img src="https://images.unsplash.com/photo-1631867675167-90a456a90863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80" alt="" className='home-img' />  
       <div className='home-text'>
          <h1>Your Journey Your Story</h1>
          <p>Choose Your Favourite Destination. </p>
          <button to='/'>Travel Plan </button>
       </div>
       <Destination desData={travel}/>
        <Trips trpData={trip}/>
    </div>
    
    </>
  )
}
