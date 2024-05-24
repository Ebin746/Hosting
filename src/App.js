import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import PreOrder from './components/PreOrder';  // Make sure to import the PreOrder component
import Help from './components/Help';
import InformationSection from './components/InformationSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NewsSection from './components/NewsSection';
import NewsDetail from './components/NewsDetail';
import History from './components/History';

function App() {
  return (
    <Router>
      <div id="root" className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <PreOrder />  {/* Place PreOrder component here */}
                <Help />
                <InformationSection />
              </>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/newssection" element={<NewsSection />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/history" element={<><History /><Footer /></>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
