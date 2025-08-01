import React, { useState } from "react";

const EarlyAlertsPage = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [debt, setDebt] = useState("");
  const [alerts, setAlerts] = useState([]);

  const handleAnalyze = () => {
    const i = parseFloat(income);
    const e = parseFloat(expenses);
    const d = parseFloat(debt);

    if (isNaN(i) || isNaN(e) || isNaN(d)) {
      setAlerts(["❌ الرجاء إدخال بيانات مالية صحيحة."]);
      return;
    }

    const tips = [];

    if (e > i * 0.7) {
      tips.push("⚠️ مصاريفك تتجاوز 70٪ من دخلك، راجع ميزانيتك.");
    }

    if (d > i * 0.5) {
      tips.push("🚨 ديونك مرتفعة مقارنة بدخلك، خطر أزمة مالية قريبة.");
    }

    if ((i - e - d) < 0) {
      tips.push("🛑 لديك عجز شهري، حاول خفض المصروفات أو زيادة الدخل.");
    }

    if (tips.length === 0) {
      tips.push("✅ لا توجد مؤشرات خطر حاليًا، استمر في الإدارة المالية السليمة.");
    }

    setAlerts(tips);
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center px-4">
      <div className="text-center w-full max-w-md space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">🚨 مؤشرات الإنذار المبكر</h1>
          <p className="text-sm text-white/90">
            أدخل بياناتك المالية لاكتشاف أي مؤشرات خطر مبكرة في نمطك المالي.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl space-y-4">
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
            placeholder="💳 مجموع الديون والالتزامات"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
          />
          <button
            onClick={handleAnalyze}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded transition"
          >
            🔎 تحليل المؤشرات
          </button>
        </div>

        {alerts.length > 0 && (
          <div className="bg-white/20 p-4 rounded-lg shadow text-white text-right space-y-2 text-sm">
            <h2 className="text-xl font-bold mb-3">📢 النتائج:</h2>
            <ul className="space-y-2">
              {alerts.map((alert, index) => (
                <li key={index} className="bg-white/10 p-2 rounded">
                  {alert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarlyAlertsPage;
