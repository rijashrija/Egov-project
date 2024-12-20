import React from 'react'
import imggov from './gov.png'
import './Navbar.css'
import imglogo from './lopho.png'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <>
    
    <div className="header">
    <img className='gov' src={imggov} alt="govlogo" />
    <div className="heading">
    <h3>Government of Nepal</h3>
    <h3>Office of Prime Minister and Council of Minister</h3>
    <h3>National Statistics Office</h3>
    </div>
    
    <img className='census' src={imglogo} alt="census logo" />
    </div>
    


    <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/faq">Faq</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active":"nav-link"}} to="/tech">Tech</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
