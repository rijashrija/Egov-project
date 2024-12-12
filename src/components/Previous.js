import React from 'react'
import imgpopulation from './bargraph.jpg'
import './Previous.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router';
// import { Chart as ChartJS } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
function Previous() {
  return (
    <>
    <div className="image">
    <img src={imgpopulation} alt="img" />
    {/* <Pie 
    data={{
      labels:["Bagmati","Gandaki","Lumbini","Karnali","Sudurpashchim","Madhesh","Koshi"],
      datasets:[
        {
          "Bagmati":6084042,
          "Gandaki":2479745,
          "Lumbini":5124225,
          "Karnali":1694889,
          "Sudurpashchim":2711270,
          "Madhesh":6126288,
          "Koshi":4972021
        }
      ],
      borderRadius:5,
    }} */}
    {/* /> */}
    <div>
    <NavLink to="/age" className="links"><button type="button" className="btn btn-primary"> Based on age</button></NavLink>
    <NavLink to="/literacy" className="links"><button type="button" className="btn btn-info"> Based on literacy</button></NavLink>
    <NavLink to="/economy" className="links"><button type="button" className="btn btn-dark"> Based on economy</button></NavLink>
    {/* <a href=""><button type="button" className="btn btn-secondary"> Based on age</button></a> */}
    
    </div>
    </div>

    </>
  )
}

export default Previous
