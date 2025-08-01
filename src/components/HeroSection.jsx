import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* خلفية الفيديو */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        المتصفح لا يدعم الفيديو.
      </video>

      {/* تغميق الفيديو */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* المحتوى */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          مرصاد للتحليلات المالية الذكية
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          منصة سعودية تساعدك على اتخاذ قرارات مالية ذكية من خلال مؤشرات دقيقة وتنبيهات مبكرة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
        >
          <Link
            to="/dashboard"
            className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            ابدأ الآن
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
