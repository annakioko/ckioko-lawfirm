import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
 import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Booking from './pages/Booking'
import Downloadables from './pages/Downlaodables'
import Disclaimer from './pages/Disclaimer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/Terms&Conditions'
import Termscard from './components/TermsCard'
import HomePage from './pages/HomePage'


export default function App() { 
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/downloadables" element={<Downloadables />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsConditions />} />
            <Route path="/termscard" element={<Termscard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
