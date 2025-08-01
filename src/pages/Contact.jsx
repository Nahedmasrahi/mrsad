import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#0b1437] min-h-screen px-6 py-20 text-white">
      <div className="max-w-2xl mx-auto space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">📬 تواصل معنا</h2>
        <p>
          نرحب بجميع استفساراتك، اقتراحاتك، أو ملاحظاتك! يهمنا رأيك لتحسين تجربة "مرصاد" وجعلها أكثر فاعلية لكل مستخدم.
        </p>
        <p>
          <span className="font-semibold">البريد الرسمي:</span> info@mirsad.ai
        </p>
        <p>
          <span className="font-semibold">موقعنا:</span> السعودية - الرياض - الأكاديمية التقنية
        </p>
      </div>
    </div>
  );
};

export default Contact;
