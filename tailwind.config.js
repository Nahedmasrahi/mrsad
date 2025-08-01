/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // مهم جدًا في CRA
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c1a3c", // لون الخلفية الداكنة
      },
    },
  },
  plugins: [],
};
