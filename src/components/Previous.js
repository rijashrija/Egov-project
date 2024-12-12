import React from 'react'
import imgpopulation from './bargraph.jpg'
import './Previous.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router';
import { Chart as ChartJS } from 'chart.js';
import { Pie } from 'react-chartjs-2';
function Previous() {

  return (
    <>
    <br />
   <center> <h3>According to Year 2021 AD (2078 BS)</h3></center>
   <br />

    <div className="image" >
      <PieChart/>
    {/* <canvas id="myChart" className="bg-dark"ref={canvasRef}></canvas> */}
{/* const data = [
  {"bag",45}
]
    */}
    {/* <img src={imgpopulation} alt="img" /> */}
   
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
