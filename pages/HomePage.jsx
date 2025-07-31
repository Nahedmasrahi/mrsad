// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import StockDashboard from "../components/StockDashboard";
import FinancialAnalysis from "../components/FinancialAnalysis";
import ServiceItem from '../components/ServiceItem'; // عدّلي المسار حسب مكانه
import FeaturesSection from "../components/FeaturesSection";



const HomePage = () => {
  return (
    <div
      className="bg-[#0c1b36] min-h-screen text-white font-sans overflow-hidden"
      style={{
  backgroundImage: `url(${process.env.PUBLIC_URL + '/pexels-steve-29404574.jpg'})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
}}

    >
      {/* تغميق الخلفية */}
      <div className="relative h-screen w-full bg-black/60">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            منصة مرصاد للتحليلات المالية
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
            اكتشف المخاطر المالية وقرارات ذكية تعتمد على البيانات والتحليل العميق
          </p>
        </div>
      </div>

      {/* سكشن التحليل فقط مرة وحدة */}
      <section className="relative z-10 p-6 bg-white/90 backdrop-blur-md text-black rounded-t-3xl shadow-xl">
        <StockDashboard />
        <FinancialAnalysis />
      </section>

      {/* ✅ سكشن البوكسات الذكية */}
      <section
        className="relative z-10 py-24 px-6 text-black max-w-6xl mx-auto"
        style={{
          backgroundImage: "url('/pexels-googledeepmind-17485706.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "تنبؤ الأزمات المالية",
              desc: "تحليل سلوكك للتنبؤ بأزمات مالية محتملة.",
              path: "/crisis",
            },
            {
              title: "تحليل المخاطر المالية",
              desc: "تقييم نفقاتك ودخلك والتزاماتك لمعرفة مدى الخطورة.",
              path: "/risk",
            },
            {
              title: "مؤشرات الإنذار المبكر",
              desc: "تنبيهك عند وجود تغيّرات غير طبيعية في سلوكك المالي.",
              path: "/alerts",
            },
            {
              title: "تأثير المؤشرات الاقتصادية",
              desc: "تحليل كيف تؤثر المؤشرات العامة كالتضخم على وضعك.",
              path: "/economy",
            },
            {
              title: "توصيات ذكية مخصصة",
              desc: "اقتراحات لتحسين وضعك المالي وتقليل المخاطر.",
              path: "/recommendations",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => window.location.href = item.path}
              className="cursor-pointer backdrop-blur-sm bg-white/60 hover:bg-white/80 p-6 rounded-2xl shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-3">{item.desc}</p>
              <span className="text-indigo-600 font-semibold">اضغط هنا &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      

     <footer className="bg-[#4d2920] text-white pt-6 pb-3 px-4 mt-20 rounded-t-3xl shadow-inner">
  <div className="border-t border-white/20 mb-4" />

  {/* عبارة تعريفية */}
  <p className="text-center text-sm text-gray-200 mb-4">
    تم تصميم هذا الموقع خصيصًا برعاية أكاديمية طويق وبشراكة بنك الإنماء، دعمًا للتحول المالي الذكي.
  </p>

  {/* شعارات الجهات */}
  <div className="flex justify-center gap-8 items-center mb-6">
    <img
      src={process.env.PUBLIC_URL + "/tuwaiq.png"}
      alt="شعار طويق"
      className="h-10 object-contain" // ✅ خفّضنا من h-16 إلى h-10
    />
    <img
      src={process.env.PUBLIC_URL + "/alinma.png"}
      alt="شعار الإنماء"
      className="h-10 object-contain"
    />
  </div>

  {/* اسم الموقع وروابط */}
  <div className="text-center">
    <h2 className="font-semibold text-lg mb-2">مرصاد للتحليلات المالية</h2>
    <div className="flex justify-center gap-4 text-gray-300 text-sm">
      <Link to="/privacy" className="hover:underline hover:text-white transition">الخصوصية</Link>
      <span>|</span>
      <Link to="/support" className="hover:underline hover:text-white transition">الدعم</Link>
      <span>|</span>
      <Link to="/contact" className="hover:underline hover:text-white transition">تواصل معنا</Link>
    </div>
  </div>

  <p className="text-center text-xs text-gray-400 mt-6">
    © 2025 مرصاد للتحليلات المالية - جميع الحقوق محفوظة
  </p>
</footer>






    </div>
  );
};

export default HomePage;

