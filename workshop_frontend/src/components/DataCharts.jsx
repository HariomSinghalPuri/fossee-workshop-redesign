import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const DataCharts = ({ chartData }) => {
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Workshop Types', font: { size: 16 } }
    }
  };

  const pieData = {
    labels: chartData.types.labels,
    datasets: [{
      data: chartData.types.counts,
      backgroundColor: ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899'],
      borderWidth: 0,
    }]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Workshops per State', font: { size: 16 } }
    }
  };

  const barData = {
    labels: chartData.states.labels,
    datasets: [{
      label: 'Workshops',
      data: chartData.states.counts,
      backgroundColor: '#6366f1',
      borderRadius: 4,
    }]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm min-h-[300px] flex flex-col">
        <div className="flex-1 relative w-full h-[250px]">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm min-h-[300px] flex flex-col">
        <div className="flex-1 relative w-full h-[250px]">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default DataCharts;
