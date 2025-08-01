// src/components/StockDashboard.jsx
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StockDashboard = () => {
  const [symbol, setSymbol] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const fakeStock = {
      symbol: symbol.toUpperCase(),
      name: 'Apple Inc.',
      exchange: 'NasdaqGS',
      price: 189.32,
      change: '+1.45',
      history: [182.3, 185.4, 183.6, 187.2, 189.32],
    };
    setResult(fakeStock);
  };

  const chartData = {
    labels: ['قبل 5 أيام', 'قبل 4 أيام', 'قبل 3 أيام', 'أمس', 'اليوم'],
    datasets: [
      {
        label: 'السعر ($)',
        data: result?.history || [],
        borderColor: '#4f46e5',
        backgroundColor: '#c7d2fe66',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#4f46e5',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#1f2937',
          font: { size: 14, family: 'sans-serif' },
        },
        grid: { color: '#e5e7eb' },
      },
      y: {
        ticks: {
          color: '#1f2937',
          font: { size: 14, family: 'sans-serif' },
        },
        grid: { color: '#e5e7eb' },
      },
    },
  };

  return (
    <div className="w-full px-4 md:px-8 py-10">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8 drop-shadow-md">تحليل سهم</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <button
          onClick={handleAnalyze}
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition shadow-md"
        >
          تحليل
        </button>
        

         <input
          type="text"
          placeholder="AAPL أدخل رمز السهم "
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />


      </div>

      {result && (
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 space-y-4 border border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">
              {result.name} <span className="text-sm text-gray-500">({result.symbol})</span>
            </h3>
            <p className="text-sm text-gray-500">السوق: {result.exchange}</p>
          </div>

          <div className="flex justify-between items-center text-center">
            <p className="text-lg font-bold text-green-600">${result.price}</p>
            <p className="text-green-500">{result.change}</p>
          </div>

          <div className="mt-4">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StockDashboard;
