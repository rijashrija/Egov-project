export const LineChartData={
    labels:[
        "0-9",
        "10-19",
        "20-29",
        "30-39",
        "40-49",
        "50-59",
        "60-69",
        "70-79",
        "80-89",
        "90-99",

    ],
    datasets:[
        {
            label:"Population",
            data:[2.9,2.7,2.2,1.7,1.3,0.8,0.5,0.3,0.1],
            borderColor:"rgb(75,192,192)",
        }
    ]

    
}

export const LiteracyChart =  {
    // Data from the provided table
    
      labels: ["Total", "Male", "Female"],
      datasets: [
        {
          label: "Can Read & Write",
          data: [20377980, 10830886, 9547094],
          backgroundColor: "rgba(75, 192, 192, 0.7)", // Light blue
        },
        {
          label: "Can Read Only",
          data: [114331, 43921, 70410],
          backgroundColor: "rgba(255, 165, 0, 0.7)", // Orange
        },
        {
          label: "Can't Read & Write",
          data: [6223061, 2083529, 4139532],
          backgroundColor: "rgba(255, 0, 0, 0.7)", // Red
        },
        {
          label: "Not Stated",
          data: [9923, 4690, 5233],
          backgroundColor: "rgba(0, 128, 0, 0.7)", // Green
        },
      ],
    };