import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Notification from './components/Notification';
import Sidebar from './components/Sidebar';
import DefaultLayout from './pages/defaultLayout';
import TrackItemCard from './pages/TrackItemCard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OfferSection from './pages/OfferSection';
// import Footer from './pages/Footer';
import Filter from './pages/Filter';
import GeologicalData from "./components/GeologicalData"
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hello" element={<DefaultLayout />} />
        <Route path="/products" element={<DefaultLayout />} />   
        <Route path="/card" element={<TrackItemCard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* <Route path="/" element={<Filter />} /> */}
        <Route path="/geological" element={<GeologicalData />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
