import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // تأكدي أن هذا الملف يحتوي @tailwind
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
