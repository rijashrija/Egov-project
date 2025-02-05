import React from 'react'
// import line from './age.jpg'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'
import { LineChartData } from './Age_Data.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


    function Age() {
      
     
        const options={
          plugins : {
            legend : {
              position : "right",
              labels : {
                boxWidth : 25,
                padding : 25,
                margin:20 
              }
            }
          }
        };
       
        return (
          <div>
          <Line options={options} data={LineChartData}/>
        </div>
      )
    }
    
    




export default Age
