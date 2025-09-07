import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusBooking from './pages/BusBooking';
import BusRental from './pages/BusRental';
import TirthYatra from './pages/TirthYatra';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bus-booking" element={<BusBooking />} />
            <Route path="/bus-rental" element={<BusRental />} />
            <Route path="/tirth-yatra" element={<TirthYatra />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
