import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ ضروري

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); // ✅ التوجيه

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ تخزين اسم المستخدم في localStorage (اختياري لو بتظهرينه لاحقًا في النافبار)
    localStorage.setItem('userEmail', email);

    // ✅ التوجيه للرئيسية مباشرة
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1437] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md w-full text-white shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">تسجيل الدخول</h2>

        <div>
          <label className="block mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">كلمة المرور</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none"
            placeholder="********"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-600 transition text-white font-bold py-2 rounded"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};

export default Login;
