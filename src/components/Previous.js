import React from 'react'
import imgpopulation from './bargraph.jpg'
import './Previous.css';
function Previous() {
  return (
    <>
    <div className="image">
    <img src={imgpopulation} alt="img" />
    <div className="links">
    <a href="#"><button type="button" className="btn btn-primary"> Based on age</button></a>
    <a href="#"><button type="button" className="btn btn-info"> Based on literacy</button></a>
    <a href="#"><button type="button" className="btn btn-dark"> Based on economy</button></a>
    <a href="#"><button type="button" className="btn btn-secondary"> Based on age</button></a>
    
    </div>
    </div>

    </>
  )
}

export default Previous
