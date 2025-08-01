import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa'; // أيقونة السهم
import { MdEmergency, MdAccountBalance, MdHelp, MdPerson, MdShield } from 'react-icons/md'; // أيقونات الخدمات

const services = [
  { title: 'النقد الطارئ', icon: <MdEmergency size={24} /> },
  { title: 'المصرفية المفتوحة', icon: <MdAccountBalance size={24} /> },
  { title: 'طلب مساعدة', icon: <MdHelp size={24} /> },
  { title: 'المستشار الائتماني', icon: <MdPerson size={24} /> },
  { title: 'برامج الحماية والادخار', icon: <MdShield size={24} /> },
];

const ServiceItem = () => {
  const [openIndex, setOpenIndex] = useState(null); // لتتبع العنصر المفتوح

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index); // يفتح ويغلق حسب الضغط
  };

  return (
    <div className="space-y-4 bg-[#fef2f2] p-4 rounded-xl">
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-3 flex items-center justify-between shadow cursor-pointer"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
              {item.icon}
            </div>
            <span className="font-semibold text-gray-800">{item.title}</span>
          </div>
          <FaChevronLeft
            className={`transition-transform duration-300 ${
              openIndex === index ? 'rotate-180 text-orange-600' : 'text-gray-400'
            }`}
          />
        </div>
      ))}

      {/* هنا يمكنك عرض التفاصيل في حال كان العنصر مفتوح */}
      {openIndex !== null && (
        <div className="bg-white p-4 mt-2 rounded-xl shadow">
          <p>تفاصيل الخدمة: {services[openIndex].title}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
