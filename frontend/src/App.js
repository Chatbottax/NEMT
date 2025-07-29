import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StudentTransportationPage from './pages/StudentTransportationPage';
import NEMTServicesPage from './pages/NEMTServicesPage';
import SafetyCompliancePage from './pages/SafetyCompliancePage';
import DriveWithUsPage from './pages/DriveWithUsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-midnight min-h-screen text-off-white font-inter">
      <BrowserRouter>
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student-transportation" element={<StudentTransportationPage />} />
            <Route path="/nemt-services" element={<NEMTServicesPage />} />
            <Route path="/safety-compliance" element={<SafetyCompliancePage />} />
            <Route path="/drive-with-us" element={<DriveWithUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </motion.main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;