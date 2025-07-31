// src/pages/AllFeaturesPage.jsx
import React, { useState } from "react";
import CrisisPredictionPage from "./CrisisPredictionPage";
import RiskAnalysisPage from "./RiskAnalysisPage";
import SmartRecommendations from './SmartRecommendationsPage';

import EarlyAlertsPage from "./EarlyAlertsPage";
import EconomicImpactPage from "./EconomicImpactPage";

const features = [
  {
    title: "تنبؤ الأزمات المالية",
    desc: "تحليل سلوكك للتنبؤ بأزمات مالية محتملة.",
    component: <CrisisPredictionPage />,
  },
  {
    title: "تحليل المخاطر المالية",
    desc: "تقييم نفقاتك ودخلك والتزاماتك لمعرفة مدى الخطورة.",
    component: <RiskAnalysisPage />,
  },
  {
    title: "توصيات ذكية مخصصة",
    desc: "اقتراحات لتحسين وضعك المالي وتقليل المخاطر.",
    component: <SmartRecommendations />,
  },
  {
    title: "مؤشرات الإنذار المبكر",
    desc: "تنبيهك عند وجود تغيرات غير طبيعية في سلوكك المالي.",
    component: <EarlyAlertsPage />,
  },
  {
    title: "تأثير المؤشرات الاقتصادية",
    desc: "تحليل كيف تؤثر المؤشرات العامة كالتضخم على وضعك.",
    component: <EconomicImpactPage />,
  },
];

export default function AllFeaturesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 p-6 space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-white/80 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="text-indigo-600 font-semibold hover:underline"
            >
              {openIndex === index ? "إغلاق" : "اضغط هنا →"}
            </button>
          </div>

          {/* عرض المكون عند الضغط */}
          {openIndex === index && (
            <div className="mt-4 bg-white p-4 rounded shadow-inner">
              {feature.component}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
