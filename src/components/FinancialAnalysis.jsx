import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const COLORS = ["#22d3ee", "#f472b6", "#facc15"]; // ادخار، مصروفات، التزامات

const FinancialAnalysis = () => {
  const [income, setIncome] = useState(9500);
  const [expenses, setExpenses] = useState(4200);
  const [commitments, setCommitments] = useState(2500);
  const [score, setScore] = useState(null);
  const [riskLevel, setRiskLevel] = useState("low");
  const [predictedCrisis, setPredictedCrisis] = useState(false);

  const handleAnalyze = () => {
    const totalUsed = expenses + commitments;
    const savings = income - totalUsed;
    const percent = (totalUsed / income) * 100;
    const calculatedScore = 100 - percent;

    setScore({
      value: Math.round(calculatedScore),
      status:
        calculatedScore >= 80
          ? "ممتاز"
          : calculatedScore >= 60
          ? "جيد"
          : calculatedScore >= 40
          ? "متوسط"
          : "يحتاج لتحسين",
      percent: Math.round(percent),
      pieData: [
        { name: "الادخار", value: savings },
        { name: "المصروفات", value: expenses },
        { name: "الالتزامات", value: commitments },
      ],
    });

    if (percent <= 50) setRiskLevel("low");
    else if (percent <= 80) setRiskLevel("medium");
    else setRiskLevel("high");

    setPredictedCrisis(percent > 100);
  };

  const barData = {
    labels: ["ميزانيتك الشهرية"],
    datasets: [
      {
        label: "المصروفات",
        data: [expenses],
        backgroundColor: "#f472b6",
      },
      {
        label: "الالتزامات",
        data: [commitments],
        backgroundColor: "#fbbf24",
      },
      {
        label: "الفائض (الادخار)",
        data: [income - expenses - commitments],
        backgroundColor: "#2dd4bf",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        rtl: true,
      },
    },
  };

  return (
    <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* النموذج */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-right">بياناتك المالية الشهرية</h2>
          <p className="text-sm text-gray-600 text-right">
            أدخل بياناتك. يتم التحليل محلياً لضمان الخصوصية.
          </p>

          <div className="text-right">
            <label>الدخل</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(+e.target.value)}
              className="w-full rounded px-3 py-2 bg-gray-100"
            />
          </div>

          <div className="text-right">
            <label>المصروفات</label>
            <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(+e.target.value)}
              className="w-full rounded px-3 py-2 bg-gray-100"
            />
          </div>

          <div className="text-right">
            <label>الالتزامات</label>
            <input
              type="number"
              value={commitments}
              onChange={(e) => setCommitments(+e.target.value)}
              className="w-full rounded px-3 py-2 bg-gray-100"
            />
          </div>

          <button
            onClick={handleAnalyze}
            className="w-full bg-teal-500 text-white rounded py-2 font-bold"
          >
            تحليل الوضع المالي
          </button>
        </div>

        {/* التحليل + الرسم الدائري */}
        {score && (
          <div className="text-center">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={score.pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  label={({ name, value, cx, cy, midAngle, outerRadius }) => {
                    const RADIAN = Math.PI / 180;
                    const x1 = cx + outerRadius * Math.cos(-midAngle * RADIAN);
                    const y1 = cy + outerRadius * Math.sin(-midAngle * RADIAN);
                    const x2 = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
                    const y2 = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
                    let xText = cx + (outerRadius + 50) * Math.cos(-midAngle * RADIAN);
                    const yText = cy + (outerRadius + 50) * Math.sin(-midAngle * RADIAN);

                    // ✅ سحب المصروفات لليسار قليلاً
                    if (name === "المصروفات") {
                      xText -= 68;
                    }

                    return (
                      <>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#999" strokeWidth={1} />
                        <text
  x={xText}
  y={yText}
  fill="#111"
  fontSize={13}
  fontWeight="bold"
  textAnchor={xText > cx ? "start" : "end"}
  dominantBaseline="central"
>
  {window.innerWidth < 500 ? (
    <>
      <tspan x={xText} dy="-0.6em">{name}:</tspan>
      <tspan x={xText} dy="1.2em">{value}</tspan>
    </>
  ) : (
    `${name}: ${value}`
  )}
</text>

                      </>
                    );
                  }}
                >
                  {score.pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4">
              <h3 className="text-3xl font-bold">{score.value}</h3>
              <p className="text-lg font-semibold text-gray-700">{score.status}</p>
              <p className="text-sm text-gray-600">
                التزاماتك ومصاريفك تستهلك {score.percent}% من دخلك.
              </p>
            </div>

            {/* مؤشر الخطر المالي */}
            <div className="mt-6 text-right">
              <h3 className="text-lg font-bold mb-2">📊 مؤشر الخطر المالي</h3>
              <div className="w-full bg-gray-200 rounded-full h-5">
                <div
                  className={`h-5 rounded-full text-center text-sm font-semibold ${
                    riskLevel === "low"
                      ? "bg-green-500 w-1/4"
                      : riskLevel === "medium"
                      ? "bg-yellow-400 w-2/4"
                      : "bg-red-500 w-4/5"
                  }`}
                >
                  {riskLevel === "low"
                    ? "منخفض"
                    : riskLevel === "medium"
                    ? "متوسط"
                    : "مرتفع"}
                </div>
              </div>
            </div>

            {predictedCrisis && (
              <div className="mt-4 bg-red-100 text-red-800 p-4 rounded-lg shadow text-right">
                ⚠️ تنبيه: تشير بياناتك إلى احتمال حدوث أزمة مالية خلال الشهر القادم بسبب تجاوز المصروفات والالتزامات دخلك الشهري.
              </div>
            )}
          </div>
        )}
      </div>

      {/* الرسم البياني */}
      {score && (
        <div className="mt-10">
          <h3 className="text-lg font-bold mb-2 text-right">توزيع الميزانية</h3>
          <Bar data={barData} options={options} />
        </div>
      )}
    </section>
  );
};

export default FinancialAnalysis;


