import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/LoginPage';
import PrivacyPolicy from './pages/Legal/privacy-policy/PrivacyPolicy';
import TermsOfService from './pages/Legal/terms-and-conditions/TermsOfService';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<LoginPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
