// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const isTransparent =
    location.pathname === "/" || location.pathname === "/dashboard";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const baseColor = isTransparent ? "text-white" : "text-black";

  return (
    <header
      className={`w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        isTransparent
          ? "absolute top-0 left-0 text-white"
          : "bg-white shadow-md text-black fixed top-0"
      }`}
    >
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <h1
          className={`text-2xl md:text-3xl font-bold ${baseColor}`}
          style={{ fontFamily: "Tajawal, sans-serif", opacity: 0.85 }}
        >
          مرصاد
        </h1>
      </Link>

      {/* همبرغر للجوال */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* روابط كبيرة (للديسكتوب) */}
      <div className="hidden md:flex items-center gap-6 rtl:space-x-reverse">
        <nav className="flex items-center gap-4 rtl:space-x-reverse">
          <Link to="/" className={`hover:underline font-medium ${baseColor}`}>
            الرئيسية
          </Link>
          <Link
            to="/dashboard"
            className={`hover:underline font-medium ${baseColor}`}
          >
            لوحة التحكم
          </Link>
        </nav>
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

      {/* قائمة الجوال المنسدلة */}
      {menuOpen && (
     <div
  className={`absolute top-14 left-4 w-48 bg-white text-black rounded-xl shadow-lg py-3 px-4 space-y-3 md:hidden z-50`}
>

          <Link
            to="/"
            className="block font-medium hover:text-violet-600"
            onClick={closeMenu}
          >
            الرئيسية
          </Link>
          <Link
            to="/dashboard"
            className="block font-medium hover:text-violet-600"
            onClick={closeMenu}
          >
            لوحة التحكم
          </Link>
          <Link
            to="/login"
            className="block font-medium border-t pt-2 border-gray-200 hover:text-violet-600"
            onClick={closeMenu}
          >
            تسجيل الدخول
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

