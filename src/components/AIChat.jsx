import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

const AIChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* زر الروبوت */}
      <div className="fixed bottom-4 right-4 z-50" onClick={() => setOpen(!open)}>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg">
          <FaRobot size={24} />
        </button>
      </div>

      {/* نافذة الشات */}
      {open && (
        <div className="fixed bottom-24 right-4 w-[400px] h-[600px] bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-300">
          <div className="bg-indigo-600 text-white px-4 py-2 font-bold text-center">
            مساعد مرصاد الذكي 🤖
          </div>

          <iframe
            src="https://www.chatbase.co/chatbot-iframe/AtLmR66hnxqrTOEf2ZZL1"
            width="100%"
            height="100%"
            style={{ border: "none", minHeight: "540px" }}
            title="مرصاد AI"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default AIChat;

