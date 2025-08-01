import React, { useState } from "react";

const RiskAnalysisPage = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [loans, setLoans] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    const i = parseFloat(income);
    const e = parseFloat(expenses);
    const l = parseFloat(loans);

    if (isNaN(i) || isNaN(e) || isNaN(l)) {
      setResult("❌ الرجاء إدخال أرقام صحيحة في جميع الحقول.");
      return;
    }

    const totalObligations = e + l;
    const ratio = totalObligations / i;

    if (ratio > 0.9) {
      setResult("⚠️ خطر مالي مرتفع! يجب تقليل المصاريف أو إعادة جدولة الديون.");
    } else if (ratio > 0.7) {
      setResult("🔶 خطر متوسط. راقب مصاريفك عن كثب.");
    } else {
      setResult("✅ الوضع المالي جيد، استمر في الموازنة والتحكم.");
    }
  };

  return (
  <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-2">🛡️ تحليل المخاطر المالية</h1>
      <p className="mb-6">
        أدخل بياناتك المالية لتحليل مدى تعرضك لمخاطر مالية.
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
          placeholder="💳 الالتزامات الشهرية (قروض، أقساط)"
          value={loans}
          onChange={(e) => setLoans(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
        />
        <button
          onClick={handleAnalyze}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded transition"
        >
          🔍 تحليل المخاطر
        </button>
      </div>

      {result && (
        <div className="mt-6 w-full max-w-xl">
          <div className="bg-white/20 p-4 rounded-lg text-white text-center font-semibold">
            {result}
          </div>
        </div>
      )}
    </div>
  </div>
);

};

export default RiskAnalysisPage;
