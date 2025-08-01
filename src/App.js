import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";

import AIChat from "./components/AIChat.jsx";
import SmartServicesSection from './components/SmartServicesSection.jsx';
import Login from "./pages/Login.jsx"; // ✅ واحد فقط

import CrisisPredictionPage from "./pages/CrisisPredictionPage.jsx";
import RiskAnalysisPage from "./pages/RiskAnalysisPage.jsx";
import EarlyAlertsPage from "./pages/EarlyAlertsPage.jsx";
import EconomicImpactPage from "./pages/EconomicImpactPage.jsx";
import SmartRecommendationsPage from "./pages/SmartRecommendationsPage.jsx";
import AllFeaturesPage from './pages/AllFeaturesPage.jsx';


import Privacy from './pages/Privacy.jsx';
import Contact from './pages/Contact.jsx';
import Support from './pages/Support.jsx';





import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white font-sans">
        <Header />
        <main>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<SmartServicesSection />} />
            <Route path="/login" element={<Login />} /> {/* ✅ تسجيل الدخول */}

            <Route path="/crisis" element={<CrisisPredictionPage />} />
            <Route path="/risk" element={<RiskAnalysisPage />} />
            <Route path="/alerts" element={<EarlyAlertsPage />} />
            <Route path="/economy" element={<EconomicImpactPage />} />
            <Route path="/recommendations" element={<SmartRecommendationsPage />} />
            <Route path="/all" element={<AllFeaturesPage />} />

             <Route path="/privacy" element={<Privacy />} />
              <Route path="/support" element={<Support />} />
               <Route path="/contact" element={<Contact />} />


          </Routes>

          <ToastContainer position="top-center" />
        </main>

        {/* ✅ زر الدعم الذكي العائم */}
        <AIChat />
      </div>
    </Router>
  );
}

export default App;

