import React from "react";

const Privacy = () => {
  return (
    <div className="bg-[#0b1437] min-h-screen px-6 py-20 text-white">
      <div className="max-w-3xl mx-auto space-y-6 text-right">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">🔐 سياسة الخصوصية</h2>
        <p>
          نحن في "مرصاد" نهتم بخصوصيتك ونتعهد بالحفاظ على سرية بياناتك. لا نقوم بمشاركة معلوماتك مع أي طرف ثالث بدون إذنك.
        </p>
        <p>
          يتم جمع المعلومات فقط لتحسين تجربة المستخدم وتحليل البيانات المالية بدقة.
        </p>
        <p>
          في حال وجود أي استفسار، يرجى مراسلتنا على: privacy@mirsad.ai
        </p>
      </div>
    </div>
  );
};

export default Privacy;
