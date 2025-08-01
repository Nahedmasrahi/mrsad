import React, { useState } from "react";

const SmartRecommendations = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleAnalyze = () => {
    const i = parseFloat(income);
    const e = parseFloat(expenses);
    const s = parseFloat(savings);

    if (isNaN(i) || isNaN(e) || isNaN(s)) {
      setRecommendations(["❌ يرجى إدخال أرقام صحيحة في كل الحقول."]);
      return;
    }

    const tips = [];

    if (s / i < 0.1) {
      tips.push("💡 حاول أن توفر 10٪ على الأقل من دخلك كل شهر.");
    } else {
      tips.push("✅ معدل الادخار ممتاز!");
    }

    if (e / i > 0.6) {
      tips.push("📉 المصاريف مرتفعة، حاول تقليلها لأقل من 60٪ من دخلك.");
    } else {
      tips.push("✅ المصاريف في حدود جيدة.");
    }

    if (i - e - s < 500) {
      tips.push("⚠️ صافي الدخل المتبقي قليل، حاول موازنة المصاريف والادخار.");
    }

    tips.push("📊 تابع مؤشرات الإنذار المبكر لتجنب الأزمات.");
    tips.push("🏦 ضع خطة واضحة لسداد الديون بشكل تدريجي.");

    setRecommendations(tips);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-blue-900 text-white flex flex-col justify-center items-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">📈 التوصيات المالية الذكية</h1>
      <p className="text-center mb-6">
        أدخل بياناتك المالية لتحصل على توصيات مخصصة بناءً على سلوكك.
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
          placeholder="🏦 الادخار الشهري"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
        />
        <button
          onClick={handleAnalyze}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded transition"
        >
          🔍 تحليل سلوكي
        </button>
      </div>

      {recommendations.length > 0 && (
        <div className="mt-8 w-full max-w-xl mb-40">
          <h2 className="text-xl font-bold mb-3">💡 التوصيات:</h2>
          <ul className="space-y-3">
            {recommendations.map((tip, index) => (
              <li key={index} className="bg-white/20 p-3 rounded-lg text-white">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SmartRecommendations;
