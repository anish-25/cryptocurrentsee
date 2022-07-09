import React from 'react'
import './Css/Homepage.css'

const Results = (props) => {
  return (
  
    <div className='resText'>
    
<div className="row mt-3 d-flex">


    
    <div className="col-12 contentRes col-md-6 order-1 order-md-1">
      <div className="d-flex justify-content-center mt-5">
        <h2 className='resText'> {props.coinName}  </h2>
        
      </div>
     
    </div>
  
    
    <div className="col-12 contentRes col-md-6 order-3 order-md-2">
      <div className="d-flex justify-content-center mt-5">
        <h2 className='resText text-center my-2'> {props.countryName} </h2>
      </div>
    </div>

    <div className="col-12 contentRes col-md-6 order-2 order-md-3">
      <div className="d-flex justify-content-center mt-4">
        <h2 className='valText text-center my-2'> {props.unit} {props.coinCode} </h2>
      </div>
    </div>

    <div className="col-12 contentRes col-md-6 order-4 order-md-4">
      <div className="d-flex justify-content-center mt-4">
        <h2 className='valText'> {props.result} {props.countryCode}  </h2>
      </div>
    </div>
    </div>
    </div>
  
  )
}

export default Results