import React, { useState } from 'react';
import axios from 'axios';

const SmartRisk = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [data, setData] = useState(null);

  const handleAnalyze = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/stock/${symbol}`);
      setData(res.data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div className="text-center bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">تحليل السهم</h2>
      <div className="flex justify-center gap-2 mb-4">
        <button onClick={handleAnalyze} className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">تحليل</button>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          className="border px-3 py-2 rounded w-1/2 text-right"
          placeholder="رمز السهم مثل AAPL"
        />
      </div>

      {data && (
        <div className="text-right">
          <p><strong>اسم الشركة:</strong> {data.name || '—'}</p>
          <p><strong>رمز السهم:</strong> {data.symbol || '—'}</p>
          <p><strong>السعر الحالي:</strong> {data.price ? `${data.price} $` : '—'}</p>
          <p><strong>سوق التداول:</strong> {data.exchange || '—'}</p>
        </div>
      )}
    </div>
  );
};

export default SmartRisk;
