import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales:{
        x:{
          ticks:{
            font:{
              size:8.5,   
            },
            maxRotation:0,
            minRotation:0,
           
          },
        },
        y:{
          ticks:{
            font:{
              size:11,
            },
          },
          beginAtZero:true
        },
      },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Holdings',
    },
  },
};




export function VerticalGraph({data}) {
   return(
    <div style={{height:"400px",width:"100%"}}> 
      <Bar options={options} data={data} />;
  </div>
   )
  
 
}
