// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Help from './components/Help';
import InformationSection from './components/InformationSection';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NewsSection from './components/News/NewsSections/NewsSection';
import NewsDetail from './components/News/NewsDeatils/NewsDetail';
import History from './components/History/History';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<>
              <Carousel />
              <Help />
              <InformationSection />
            </>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/newssection" element={<NewsSection />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/history" element={<History></History>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
