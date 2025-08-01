import React, { useState } from "react";

const EconomicImpactPage = () => {
  const [income, setIncome] = useState("");
  const [inflation, setInflation] = useState("");
  const [interest, setInterest] = useState("");
  const [impact, setImpact] = useState("");

  const handleAnalyze = () => {
    const i = parseFloat(income);
    const inf = parseFloat(inflation);
    const int = parseFloat(interest);

    if (isNaN(i) || isNaN(inf) || isNaN(int)) {
      setImpact("❌ الرجاء إدخال قيم صحيحة.");
      return;
    }

    const inflationLoss = i * (inf / 100);
    const interestLoss = i * (int / 100);
    const net = i - (inflationLoss + interestLoss);

    if (net < i * 0.7) {
      setImpact("📉 التأثير الاقتصادي سلبي. حاول تقليل الالتزامات أو رفع دخلك.");
    } else if (net < i * 0.9) {
      setImpact("⚠️ هناك تأثير اقتصادي متوسط. راقب مصاريفك بعناية.");
    } else {
      setImpact("✅ وضعك الاقتصادي مستقر حاليًا.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center px-4">
      <div className="text-center w-full max-w-md space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">🌍 تحليل الأثر الاقتصادي</h1>
          <p className="text-sm text-white/90">
            أدخل دخلك ونسبة التضخم والفائدة لتقدير الأثر الاقتصادي على وضعك.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl space-y-4">
          <input
            type="number"
            placeholder="💵 الدخل الشهري"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
          />
          <input
            type="number"
            placeholder="📈 نسبة التضخم (%)"
            value={inflation}
            onChange={(e) => setInflation(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
          />
          <input
            type="number"
            placeholder="🏦 نسبة الفائدة (%)"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500"
          />
          <button
            onClick={handleAnalyze}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded transition"
          >
            🧮 تحليل الأثر
          </button>
        </div>

        {impact && (
          <div className="bg-white/20 p-4 rounded-lg shadow text-white text-center font-semibold">
            {impact}
          </div>
        )}
      </div>
    </div>
  );
};

export default EconomicImpactPage;
