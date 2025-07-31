// src/pages/CrisisPredictionPage.jsx
import React, { useState } from "react";

const CrisisPredictionPage = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [debt, setDebt] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = () => {
    const i = parseFloat(income);
    const e = parseFloat(expenses);
    const d = parseFloat(debt);

    if (isNaN(i) || isNaN(e) || isNaN(d)) {
      setResult("❌ يرجى إدخال بيانات صحيحة في كل الحقول.");
      return;
    }

    const crisisScore = (e / i) + (d / i);

    if (crisisScore > 1.2) {
      setResult("🚨 احتمال عالي لحدوث أزمة مالية. راجع نفقاتك وسدد ديونك تدريجيًا.");
    } else if (crisisScore > 0.9) {
      setResult("⚠️ هناك إشارات تحذيرية. حاول ضبط مصروفاتك وتقليل التزاماتك.");
    } else {
      setResult("✅ وضعك المالي جيد حاليًا، استمر على هذا النهج.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">🧠 تنبؤ بالأزمات المالية</h1>
      <p className="mb-6 text-center">
        أدخل بياناتك المالية وسنقوم بتقييم احتمال وقوع أزمة مالية في المستقبل.
      </p>

      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md space-y-4">
        <input
          type="number"
          placeholder="💵 الراتب الشهري"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
        />
        <input
          type="number"
          placeholder="🧾 المصروفات الشهرية"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
        />
        <input
          type="number"
          placeholder="💳 مجموع الديون الحالية"
          value={debt}
          onChange={(e) => setDebt(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
        />
        <button
          onClick={handlePredict}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded transition"
        >
          🔍 تحليل التوقع
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-white/20 p-4 rounded-lg text-white w-full max-w-xl text-center font-semibold">
          {result}
        </div>
      )}
    </div>
  );
};

export default CrisisPredictionPage;
