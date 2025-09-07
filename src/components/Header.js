import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bus, Calendar, MapPin, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <Bus className="logo-icon" />
              <span className="logo-text">Shubh Yatra</span>
            </Link>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/bus-booking" className="nav-link">
              <Calendar className="nav-icon" />
              Bus Booking
            </Link>
            <Link to="/bus-rental" className="nav-link">
              <Bus className="nav-icon" />
              Bus Rental
            </Link>
            <Link to="/tirth-yatra" className="nav-link">
              <MapPin className="nav-icon" />
              Tirth Yatra
            </Link>
            <a 
              href="https://www.justdial.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link justdial-link"
            >
              <Phone className="nav-icon" />
              Just Dial
            </a>
          </nav>

          <div className="header-actions">
            <a 
              href="tel:+919928545048" 
              className="phone-link"
            >
              <Phone className="phone-icon" />
              +91 9928545048
            </a>
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
