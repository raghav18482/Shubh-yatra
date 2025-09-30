import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Bus className="logo-icon" />
              <span className="logo-text">Shubh Yatra</span>
            </div>
            <p className="footer-description">
              Your trusted partner for comfortable bus travel, rental services, and spiritual journey planning. 
              We make your travel dreams come true with reliable and affordable services.
            </p>
            <div className="social-links">
              <a 
                href="https://www.justdial.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link justdial"
              >
                <Star className="social-icon" />
                Just Dial
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/bus-booking" className="footer-link">Bus Booking</Link></li>
              <li><Link to="/bus-rental" className="footer-link">Bus Rental</Link></li>
              <li><Link to="/tirth-yatra" className="footer-link">Tirth Yatra</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><span className="footer-link">Long Distance Travel</span></li>
              <li><span className="footer-link">Bus Rental</span></li>
              <li><span className="footer-link">Tirth Yatra Planning</span></li>
              <li><span className="footer-link">Group Bookings</span></li>
              <li><span className="footer-link">Corporate Travel</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <p>+91 9928545048</p>
                  <p>24/7 Customer Support</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <p>info@shubhyatra.com</p>
                  <p>Email Support</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <p>All India Service</p>
                  <p>Pan India Coverage</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock className="contact-icon" />
                <div>
                  <p>Mon - Sun: 6:00 AM - 11:00 PM</p>
                  <p>Always Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Shubh Yatra. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <a href="/cancellation" className="footer-bottom-link">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
