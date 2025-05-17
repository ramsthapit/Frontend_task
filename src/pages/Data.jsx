import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { Doughnut, PolarArea } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const Data = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-100 p-3 md:p-9"> 
      <h1 className="text-2xl font-bold">Data</h1>
      <div className="flex flex-col md:flex-row w-full my-5 justify-center items-center overflow-auto">
        
        <div className='flex w-full sm:w-1/2 md:w-1/3'>
          <Doughnut data={data} />
        </div>
        <div className='flex w-full sm:w-1/2 md:w-1/3'>
          <PolarArea data={data} />
        </div>
      </div>
    </main>
  )
}

export default Data