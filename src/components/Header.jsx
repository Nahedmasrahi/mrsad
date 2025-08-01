// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isTransparent =
    location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <header
      className={`w-full z-20 px-6 py-4 flex justify-between items-center transition-all duration-500
      ${isTransparent ? "absolute top-0 left-0 text-white" : "bg-white shadow-md text-black fixed top-0"}`}
    >
      <Link to="/">
        <h1
          className={`text-2xl md:text-3xl font-bold ${
            isTransparent ? "text-white" : "text-black"
          }`}
          style={{ fontFamily: "Tajawal, sans-serif", opacity: 0.85 }}
        >
          مرصاد
        </h1>
      </Link>

      {/* روابط التنقل + زر تسجيل الدخول */}
      <div className="flex items-center gap-6 rtl:space-x-reverse">
        {/* روابط التنقل */}
        <nav className="flex items-center gap-4 rtl:space-x-reverse">
          <Link
            to="/"
            className={`hover:underline font-medium ${
              isTransparent ? "text-white" : "text-black"
            }`}
          >
            الرئيسية
          </Link>
          <Link
            to="/dashboard"
            className={`hover:underline font-medium ${
              isTransparent ? "text-white" : "text-black"
            }`}
          >
            لوحة التحكم
          </Link>
        </nav>

        {/* زر تسجيل الدخول */}
        <Link
          to="/login"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-violet-400 text-violet-300 hover:bg-violet-400 hover:text-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0H8.25"
            />
          </svg>
          تسجيل الدخول
        </Link>
      </div>
    </header>
  );
};

export default Header;

