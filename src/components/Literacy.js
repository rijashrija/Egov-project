import React from 'react'
// import literacy from './literacy.jpg'

// import {Line} from 'react-chartjs-2'
// import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LiteracyChart } from './Age_Data.js'
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
function Literacy() {
  
       
      
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Literacy Status of Population Aged 5 Years and Above (2021)",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Population",
        },
      },
    },
  };

        
  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <Bar data={LiteracyChart} options={options} />
    </div>
  );
};
     

export default Literacy
