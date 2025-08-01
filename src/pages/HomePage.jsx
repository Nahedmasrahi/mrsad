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
  className="bg-[#0c1b36] min-h-screen text-white font-sans"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/pexels-steve-29404574.jpg'})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* تغميق الخلفية */}
  <div className="relative min-h-[80vh] md:h-screen w-full bg-black/60 flex items-center justify-center px-4 md:px-10 text-center">
    <div className="z-10 max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        منصة مرصاد للتحليلات المالية
      </h1>
      <p className="text-md md:text-xl text-gray-200">
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
  className="relative z-10 py-24 px-4 md:px-6 text-black max-w-7xl mx-auto"
  style={{
    backgroundImage: "url('/pexels-googledeepmind-17485706.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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


      
<footer className="bg-[#4d2920] text-white pt-6 pb-4 px-4 mt-20 rounded-t-3xl shadow-inner">
  <div className="border-t border-white/20 mb-4" />

  {/* عبارة تعريفية */}
  <p className="text-center text-sm text-gray-200 mb-4 leading-relaxed">
    تم تصميم هذا الموقع خصيصًا برعاية أكاديمية طويق وبشراكة بنك الإنماء، دعمًا للتحول المالي الذكي.
  </p>

  {/* شعارات الجهات */}
  <div className="flex flex-wrap justify-center gap-6 items-center mb-6">
    <img
      src={process.env.PUBLIC_URL + "/tuwaiq.png"}
      alt="شعار طويق"
      className="h-10 object-contain max-w-[100px]"
    />
    <img
      src={process.env.PUBLIC_URL + "/alinma.png"}
      alt="شعار الإنماء"
      className="h-10 object-contain max-w-[100px]"
    />
  </div>

  {/* اسم الموقع وروابط */}
  <div className="text-center">
    <h2 className="font-semibold text-lg mb-2">مرصاد للتحليلات المالية</h2>
    <div className="flex flex-wrap justify-center gap-3 text-gray-300 text-sm">
      <Link to="/privacy" className="hover:underline hover:text-white transition">الخصوصية</Link>
      <span className="hidden sm:inline">|</span>
      <Link to="/support" className="hover:underline hover:text-white transition">الدعم</Link>
      <span className="hidden sm:inline">|</span>
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

