import React from 'react'
import '../App.css';

export default function trips({trpData}) {
  return (
    <>
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='trip-area'>
                {
                    trpData.map(curntElem=>{
                        return(
                            <>
                            <div className='trip-card' key={curntElem.id}>
                                <div className='trip-img'>
                                    <img src={curntElem.img} alt="img" />
                                </div>
                                <h4>{curntElem.title}</h4>
                                <p>{curntElem.info}</p>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div> 
    </>
  )
}
