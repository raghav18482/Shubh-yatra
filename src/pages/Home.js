import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bus, Calendar, MapPin, Star, Clock, Shield, Users, Phone, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: ''
  });

  const handleSearchChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to bus booking with search parameters
    const params = new URLSearchParams(searchData);
    window.location.href = `/bus-booking?${params.toString()}`;
  };

  const features = [
    {
      icon: <Bus size={40} />,
      title: "Comfortable Bus Travel",
      description: "Modern, well-maintained buses with comfortable seating and amenities for your journey."
    },
    {
      icon: <Calendar size={40} />,
      title: "Easy Booking",
      description: "Simple and quick booking process with instant confirmation and real-time availability."
    },
    {
      icon: <MapPin size={40} />,
      title: "Tirth Yatra Planning",
      description: "Complete pilgrimage planning with itinerary, accommodation, and spiritual guidance."
    },
    {
      icon: <Shield size={40} />,
      title: "Safe & Secure",
      description: "Your safety is our priority with experienced drivers and well-maintained vehicles."
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with all your travel needs."
    },
    {
      icon: <Users size={40} />,
      title: "Group Bookings",
      description: "Special packages and discounts for group travel and corporate bookings."
    }
  ];

  const services = [
    {
      icon: <Bus size={60} />,
      title: "Bus Booking",
      description: "Book comfortable traveler buses for your long-distance journeys with competitive pricing.",
      price: "Starting from ₹500",
      link: "/bus-booking"
    },
    {
      icon: <Calendar size={60} />,
      title: "Bus Rental",
      description: "Rent buses for group travel, events, and special occasions with flexible packages.",
      price: "Market rates available",
      link: "/bus-rental"
    },
    {
      icon: <MapPin size={60} />,
      title: "Tirth Yatra",
      description: "Complete pilgrimage planning with itinerary, accommodation, and spiritual guidance.",
      price: "Custom packages",
      link: "/tirth-yatra"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Shubh Yatra</h1>
          <p>Your trusted partner for comfortable bus travel, rental services, and spiritual journey planning</p>
          
          <div className="search-box">
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <label className="form-label">From</label>
                <input
                  type="text"
                  name="from"
                  className="form-control"
                  placeholder="Enter origin city"
                  value={searchData.from}
                  onChange={handleSearchChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">To</label>
                <input
                  type="text"
                  name="to"
                  className="form-control"
                  placeholder="Enter destination city"
                  value={searchData.to}
                  onChange={handleSearchChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Departure</label>
                <input
                  type="date"
                  name="departureDate"
                  className="form-control"
                  value={searchData.departureDate}
                  onChange={handleSearchChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Search size={20} />
                Search Buses
              </button>
            </form>
          </div>

          <div className="cta-buttons">
            <Link to="/bus-booking" className="btn btn-primary">
              <Bus size={20} />
              Book Bus
            </Link>
            <Link to="/bus-rental" className="btn btn-secondary">
              <Calendar size={20} />
              Rent Bus
            </Link>
            <Link to="/tirth-yatra" className="btn btn-success">
              <MapPin size={20} />
              Plan Tirth Yatra
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Shubh Yatra?</h2>
            <p>We provide exceptional travel services with a focus on comfort, safety, and customer satisfaction</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive travel solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-price">{service.price}</div>
                  <Link to={service.link} className="btn btn-primary">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Just Dial Section */}
      <section className="justdial-section">
        <div className="container">
          <div className="justdial-content">
            <div className="justdial-info">
              <h2>Find Us on Just Dial</h2>
              <p>Check our ratings and reviews from satisfied customers</p>
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="star filled" />
                  ))}
                </div>
                <span className="rating-text">4.8/5 (150+ reviews)</span>
              </div>
              <a 
                href="https://www.justdial.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary justdial-btn"
              >
                <Star size={20} />
                View Just Dial Profile
              </a>
            </div>
            <div className="justdial-image">
              <div className="phone-mockup">
                <Phone size={100} />
                <p>Just Dial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact us now for bookings, inquiries, or custom travel plans</p>
            <div className="contact-buttons">
              <a 
                href="tel:+919928545048" 
                className="btn btn-primary"
              >
                <Phone size={20} />
                Call Now: +91 9928545048
              </a>
              <a 
                href="https://wa.me/919928545048" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success whatsapp-btn"
              >
                <Phone size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
