import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";
import HomePage from "./pages/HomePage";
import Familylaw from "./pages/Familylaw";
import Digitalassests from "./pages/Digitalassests";
import Environmentlaw from "./pages/Environmentlaw";
import Labourlaw from "./pages/Labourlaw";
import Realestatelaw from "./pages/Realestatelaw";
import Copratelaw from "./pages/Copratelaw";
import ChatBox from "./components/ChatBox";

export default function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onHeaderVisibilityChange={setIsHeaderVisible} />
        <Navbar isHeaderVisible={isHeaderVisible} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/familylaw" element={<Familylaw />} />
            <Route path="/digitalassests" element={<Digitalassests />} />
            <Route path="/copratelaw" element={<Copratelaw />} />
            <Route path="/environmentlaw" element={<Environmentlaw />} />
            <Route path="/labourlaw" element={<Labourlaw />} />
            <Route path="/realestatelaw" element={<Realestatelaw />} />
          </Routes>
        </div>
        <Footer />
        <ChatBox />
      </div>
    </Router>
  );
}
