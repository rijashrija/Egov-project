import React from 'react'
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

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function Economy() {
  
    // Data from the provided table
    const data = {
      labels: ["Total", "Male", "Female"],
      datasets: [
        {
          label: "6 months or above",
          data: [9820732, 5837570, 3983162],
          backgroundColor: "rgba(75, 192, 192, 0.7)", // Light blue
        },
        {
          label: "3-5 months",
          data: [2732151, 1084316, 1647835],
          backgroundColor: "rgba(255, 165, 0, 0.7)", // Orange
        },
        {
          label: "Less than 3 months",
          data: [2430427, 954436, 1475991],
          backgroundColor: "rgba(255, 0, 0, 0.7)", // Red
        },
        {
          label: "Did not do any economic work",
          data: [8975558, 3643299, 5332259],
          backgroundColor: "rgba(0, 128, 0, 0.7)", // Green
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Economic Work Status of Population Aged 10 Years and Above (2021)",
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
      <Bar data={data} options={options} />
    </div>
  );
};


export default Economy
