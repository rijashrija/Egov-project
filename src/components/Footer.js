import React from 'react'
import './footer.css';
import fblogo from './fblogo.png'
function Footer() {
  return (
  <>
  <div className="footer">

    <h3>National Statistics Office</h3>
    <p>Address:Thapathali,Kathmandu,Nepal</p>
    <p>Phone: +977-14229406</p>
    <p>Fax:+977-14227720 </p>
  <img className="social"src={fblogo} alt="" />
    
  </div>
  
    

  </>
  )
}

export default Footer
