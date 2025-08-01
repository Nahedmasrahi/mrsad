import React from "react";
import { useNavigate } from "react-router-dom";

const features = [
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
];

export default function FeaturesSection() {
  const navigate = useNavigate();

  return (
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
        {features.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(item.path)}
            className="cursor-pointer backdrop-blur-sm bg-white/60 hover:bg-white/80 p-6 rounded-2xl shadow-md transition"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm mb-3">{item.desc}</p>
            <span className="text-indigo-600 font-semibold">اضغط هنا &rarr;</span>
          </div>
        ))}
      </div>
    </section>
  );
}
