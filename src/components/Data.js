import { data } from "react-router";

export const lineChartData={
    labels:[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets:[
        {
            label:"Steps",
            data:[3000,5000,19247,1084,2038,35,87],
            borderColor:"rgb(75,82,192)",

        },
    ],
};
export const PieChartData={
    labels:[
        "Bagmati",
        "Madhesh",
        "Koshi",
        "Lumbini",
        "Sudurpashchim",
        "Gandaki",
        "Karnali"
    ],
    datasets:[
        {
            label:"Province",
            data:[6084042,6126288,4972021,5124255,2711270,2479745,1694889],
            backgroundColor:[
                "rgba(255,99,132,0.9)",
                "rgba(54,162,235,0.9)",
                "rgba(255,206,86,0.9)",
                "rgba(75,192,192,0.9)",
                "rgba(153,102,255,0.9)",
                "rgba(75,192,192,0.9)",
                "rgba(75,192,192,0.9)",
            ],
            hoverOffset:4,

        },

    ],
};