import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdSavings, MdSupportAgent, MdLock } from "react-icons/md";
import { FaMoneyBillAlt, FaUniversity, FaUserShield } from "react-icons/fa";

const services = [
  {
    title: "عدّل ميزانيتك",
    icon: <MdSavings className="text-2xl text-green-600" />,
    content: "هنا يتم تعديل وتحليل ميزانيتك تلقائيًا بناءً على مدخلاتك المالية.",
  },
  {
    title: "طلب مساعدة",
    icon: <MdSupportAgent className="text-2xl text-orange-500" />,
    content: "إرسال طلب فوري لأحد أفراد العائلة للمساعدة في حال الطوارئ.",
  },
  {
    title: "برامج الحماية والادخار",
    icon: <FaUserShield className="text-2xl text-blue-600" />,
    content: "اقتراح برامج ادخار وخطط حماية حسب دخلك.",
  },
];

export default function SmartServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 w-full max-w-3xl mx-auto my-12">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">الخدمات الذكية</h2>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-4 text-right hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="bg-gray-100 p-2 rounded-xl">{service.icon}</span>
                <span className="font-medium text-gray-700">{service.title}</span>
              </div>
              <FaChevronLeft
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-90 text-gray-800" : "text-gray-400"
                }`}
              />
            </button>

            {/* المحتوى المفتوح */}
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-gray-600">
                {service.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
