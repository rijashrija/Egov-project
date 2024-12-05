import React from 'react'
// import logo from './logo.png'
import './Body.css'
import img1 from'./census1.jpg'
import img2 from'./census2.jpg'
import img3 from'./census3.jpg'


function Body() {
  return (
    
    <>
    <h3 className='title'>Online Census</h3>
    <div className='verymain-container'>
    <div className="main-container">
    <div className="container">

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>

    <div className='description'>
    <h3>मेरो गणना मेरो सहभागी</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reprehenderit unde consequuntur vitae ipsam tempora nisi, harum similique provident magni autem eum nemo explicabo enim exercitationem voluptate inventore molestias placeat?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reprehenderit unde consequuntur vitae ipsam tempora nisi, harum similique provident magni autem eum nemo explicabo enim exercitationem voluptate inventore molestias placeat?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reprehenderit unde consequuntur vitae ipsam tempora nisi, harum similique provident magni autem eum nemo explicabo enim exercitationem voluptate inventore molestias placeat?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reprehenderit unde consequuntur vitae ipsam tempora nisi, harum similique provident magni autem eum nemo explicabo enim exercitationem voluptate inventore molestias placeat?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reprehenderit unde consequuntur vitae ipsam tempora nisi, harum similique provident magni autem eum nemo explicabo enim exercitationem voluptate inventore 
   
    </p>
    </div>
    </div>
    <div className='previous'>
    <h3>About previous census information 2078 B.S</h3>
    </div>

    </>
  )
}

export default Body
