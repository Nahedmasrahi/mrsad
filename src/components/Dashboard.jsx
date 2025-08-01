// src/components/Dashboard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [salaryType, setSalaryType] = useState("gross");
  const [salary, setSalary] = useState("");
  const [housing, setHousing] = useState("");
  const [transport, setTransport] = useState("");
  const [payDay, setPayDay] = useState("");
  const [connectedBank, setConnectedBank] = useState("");

  const netSalary =
    parseFloat(salary || 0) + parseFloat(housing || 0) + parseFloat(transport || 0);

  const baseSalary =
    salaryType === "basic"
      ? parseFloat(salary || 0)
      : parseFloat(salary || 0) - (parseFloat(housing || 0) + parseFloat(transport || 0));

  const yearlySalary = netSalary * 12;
  const suggestedSaving = (netSalary * 0.07).toFixed(2);

  const allocations = [
    { title: "نقد الطوارئ", percent: 10, color: "#ef4444" },
    { title: "الاستثمار", percent: 10, color: "#f97316" },
    { title: "التمويل العقاري", percent: 30, color: "#22c55e" },
  ];

  return (
    <div className="min-h-screen bg-primary text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        حاسبة الراتب الذكية
      </motion.h1>

      {step === 1 && (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow max-w-md mx-auto">
          <label className="block mb-2">تصنيف الوظيفة</label>
          <select
            className="w-full p-2 rounded text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">اختر...</option>
            <option>حكومي أو عسكري</option>
            <option>حكومي مع بدل السكن</option>
            <option>متقاعد أو غير سعودي</option>
            <option>شبه حكومي أو قطاع خاص</option>
          </select>
          <button
            disabled={!category}
            onClick={() => setStep(2)}
            className="mt-4 w-full py-2 bg-white text-black font-bold rounded disabled:opacity-40"
          >
            التالي
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow max-w-md mx-auto">
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setSalaryType("basic")}
              className={`px-4 py-2 rounded ${salaryType === "basic" ? "bg-white text-black" : "bg-black/20"}`}
            >
              الراتب الأساسي
            </button>
            <button
              onClick={() => setSalaryType("gross")}
              className={`px-4 py-2 rounded ${salaryType === "gross" ? "bg-white text-black" : "bg-black/20"}`}
            >
              إجمالي الراتب
            </button>
          </div>

          <input
            type="number"
            placeholder="إجمالي الراتب"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          />
          <input
            type="number"
            placeholder="بدل المواصلات"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          />
          <input
            type="number"
            placeholder="بدل السكن"
            value={housing}
            onChange={(e) => setHousing(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          />
          <input
            type="number"
            placeholder="يوم الراتب"
            value={payDay}
            onChange={(e) => setPayDay(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          />

          <button
            onClick={() => setStep(3)}
            className="w-full py-2 bg-white text-black font-bold rounded"
          >
            احسب
          </button>
        </div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            نتيجة احتساب الراتب
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-4 text-center">
            <div>
              <p className="text-gray-300">الراتب الأساسي</p>
              <p className="text-xl font-bold">{baseSalary.toFixed(2)} ﷼</p>
            </div>
            <div>
              <p className="text-gray-300">الراتب الصافي</p>
              <p className="text-xl font-bold">{netSalary.toFixed(2)} ﷼</p>
            </div>
            <div>
              <p className="text-gray-300">الراتب السنوي</p>
              <p className="text-xl font-bold">{yearlySalary.toFixed(2)} ﷼</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-center text-white mb-4">اقتراح تقسيم الراتب</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allocations.map((item, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-xl flex flex-col items-center shadow">
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <ResponsiveContainer width={150} height={150}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: item.title, value: item.percent },
                          { name: "باقي الراتب", value: 100 - item.percent },
                        ]}
                        dataKey="value"
                        innerRadius={45}
                        outerRadius={70}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <Cell fill={item.color} />
                        <Cell fill="#374151" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-300 mt-2">
                    {(netSalary * item.percent / 100).toFixed(2)} ﷼ ({item.percent}%)
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ سكشن ربط البنوك */}
<h2 className="text-2xl font-bold text-white text-center mt-10 mb-4">ربط مع البنوك</h2>
<div
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/homepage2.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  className="py-10"
>
  <div className="flex justify-center items-center gap-6 backdrop-blur-sm bg-white/60 p-4 rounded-lg shadow-md max-w-fit mx-auto">
    <img
  src={`${process.env.PUBLIC_URL}/stcpay.png`}
  alt="STC Pay"
  className="h-14 w-auto object-contain rounded-md bg-white p-1 shadow hover:scale-110 transition cursor-pointer"
  onClick={() => setConnectedBank("STC Pay")}
/>
   <img
    src={`${process.env.PUBLIC_URL}/alrajhi.png`}
    alt="مصرف الراجحي"
    className="h-14 w-auto object-contain rounded-md bg-white p-1 shadow hover:scale-110 transition cursor-pointer"
    onClick={() => setConnectedBank("الراجحي")}
  />

<img
    src={`${process.env.PUBLIC_URL}/Alinmaa.png`}
    alt="مصرف الإنماء"
    className="h-14 w-auto object-contain rounded-md bg-white p-1 shadow hover:scale-110 transition cursor-pointer"
    onClick={() => setConnectedBank("الإنماء")}
  />



  </div>
</div>



          {connectedBank && (
            <div className="text-center text-green-400 mt-4">
              ✅ تم الربط بنجاح مع <strong>{connectedBank}</strong> - رصيدك الحالي: {netSalary.toFixed(2)} ﷼
            </div>
          )}

          {/* 💡 ميزة المدخر الذكي */}
          <div className="mt-10 bg-white/10 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold text-white mb-2 text-center">ميزة المدخر الذكي 💡</h3>
            <p className="text-center text-gray-300 mb-2">تم اكتشاف إنفاق غير ضروري بنسبة 7٪ من الراتب</p>
            <p className="text-center text-white mb-4">
              نقترح نقل مبلغ <strong>{suggestedSaving} ﷼</strong> إلى المحفظة الادخارية
            </p>
            <div className="text-center">
              <button
                className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-xl font-bold"
                onClick={() => toast.success(`🎉 تم نقل ${suggestedSaving} ﷼ إلى المحفظة الادخارية!`)}
              >
                تنفيذ النقل الآن
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
