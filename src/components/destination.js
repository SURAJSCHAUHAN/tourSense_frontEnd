import React from 'react'
import '../App.css';

export default function Destination({desData}) {
  return (
    <>
      <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
        
        {
            desData.map((curntElem)=>{
                return(
                    <>
                        <div className={curntElem.design} key={curntElem.key}>
                            <div className='des-text'>
                                <h2>{curntElem.title}</h2>
                                <p>{curntElem.info}</p>
                            </div>
                            <div className='des-img'>
                                <img src={curntElem.img1} alt="img" />
                                <img src={curntElem.img2} alt="img" /> 
                            </div>
                        </div>
                    </>
                )
            })
        }
      </div>
    </>
  )
}
