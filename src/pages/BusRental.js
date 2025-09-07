import React, { useState } from 'react';
import { Calendar, Bus, MapPin, Clock, Users, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import './BusRental.css';

const BusRental = () => {
  const [rentalData, setRentalData] = useState({
    busType: '',
    pickupLocation: '',
    dropoffLocation: '',
    startDate: '',
    endDate: '',
    duration: '',
    passengers: '',
    purpose: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });

  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const busTypes = [
    {
      id: 'seater',
      name: 'Seater Bus',
      capacity: '45-50 passengers',
      features: ['Basic seating', 'AC', 'Water bottle', 'Charging points'],
      priceRange: '₹8,000 - ₹12,000 per day',
      image: '🚌'
    },
    {
      id: 'semi-sleeper',
      name: 'Semi-Sleeper',
      capacity: '35-40 passengers',
      features: ['Reclining seats', 'AC', 'Blanket', 'Water bottle', 'Charging points'],
      priceRange: '₹12,000 - ₹18,000 per day',
      image: '🚍'
    },
    {
      id: 'sleeper',
      name: 'Sleeper Bus',
      capacity: '30-35 passengers',
      features: ['Berth beds', 'AC', 'Blanket & pillow', 'Water bottle', 'Charging points', 'WiFi'],
      priceRange: '₹18,000 - ₹25,000 per day',
      image: '🚎'
    },
    {
      id: 'luxury',
      name: 'Luxury Bus',
      capacity: '25-30 passengers',
      features: ['Premium seating', 'AC', 'Entertainment', 'Refreshments', 'WiFi', 'Personal service'],
      priceRange: '₹25,000 - ₹35,000 per day',
      image: '🚐'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalData({
      ...rentalData,
      [name]: value
    });
  };

  const handleBusTypeSelect = (busType) => {
    setRentalData({
      ...rentalData,
      busType: busType.id
    });
    setShowQuoteForm(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    
    const selectedBus = busTypes.find(bus => bus.id === rentalData.busType);
    
    // Create WhatsApp message
    const message = `Bus Rental Inquiry:

Bus Type: ${selectedBus.name}
Capacity: ${selectedBus.capacity}
Price Range: ${selectedBus.priceRange}

Rental Details:
Pickup Location: ${rentalData.pickupLocation}
Dropoff Location: ${rentalData.dropoffLocation}
Start Date: ${rentalData.startDate}
End Date: ${rentalData.endDate}
Duration: ${rentalData.duration}
Number of Passengers: ${rentalData.passengers}
Purpose: ${rentalData.purpose}

Contact Details:
Name: ${rentalData.contactName}
Phone: ${rentalData.contactPhone}
Email: ${rentalData.contactEmail}

Please provide a detailed quote for this rental request.`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919928545048?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bus-rental">
      <div className="container">
        <div className="page-header">
          <h1>Bus Rental Services</h1>
          <p>Rent comfortable buses for your group travel, events, and special occasions</p>
        </div>

        {/* Rental Form */}
        <div className="rental-form-section">
          <div className="form-card">
            <h2>Quick Rental Inquiry</h2>
            <form className="rental-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Pickup Location</label>
                  <input
                    type="text"
                    name="pickupLocation"
                    className="form-control"
                    placeholder="Enter pickup city/location"
                    value={rentalData.pickupLocation}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Dropoff Location</label>
                  <input
                    type="text"
                    name="dropoffLocation"
                    className="form-control"
                    placeholder="Enter dropoff city/location"
                    value={rentalData.dropoffLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    className="form-control"
                    value={rentalData.startDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className="form-control"
                    value={rentalData.endDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Duration</label>
                  <select
                    name="duration"
                    className="form-control"
                    value={rentalData.duration}
                    onChange={handleInputChange}
                  >
                    <option value="">Select duration</option>
                    <option value="1 day">1 Day</option>
                    <option value="2-3 days">2-3 Days</option>
                    <option value="1 week">1 Week</option>
                    <option value="2 weeks">2 Weeks</option>
                    <option value="1 month">1 Month</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Number of Passengers</label>
                  <select
                    name="passengers"
                    className="form-control"
                    value={rentalData.passengers}
                    onChange={handleInputChange}
                  >
                    <option value="">Select passengers</option>
                    <option value="1-20">1-20</option>
                    <option value="21-30">21-30</option>
                    <option value="31-40">31-40</option>
                    <option value="41-50">41-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Purpose</label>
                  <select
                    name="purpose"
                    className="form-control"
                    value={rentalData.purpose}
                    onChange={handleInputChange}
                  >
                    <option value="">Select purpose</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="School Trip">School Trip</option>
                    <option value="Religious Tour">Religious Tour</option>
                    <option value="Family Function">Family Function</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bus Types */}
        <div className="bus-types-section">
          <h2>Choose Your Bus Type</h2>
          <p>Select the perfect bus for your group size and requirements</p>
          
          <div className="bus-types-grid">
            {busTypes.map(bus => (
              <div key={bus.id} className="bus-type-card">
                <div className="bus-type-header">
                  <div className="bus-icon">{bus.image}</div>
                  <h3>{bus.name}</h3>
                  <div className="capacity">{bus.capacity}</div>
                </div>
                
                <div className="bus-features">
                  <h4>Features:</h4>
                  <ul>
                    {bus.features.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle size={16} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bus-price">
                  <span className="price-range">{bus.priceRange}</span>
                </div>
                
                <button 
                  className="btn btn-primary select-bus-btn"
                  onClick={() => handleBusTypeSelect(bus)}
                >
                  Get Quote
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Form Modal */}
        {showQuoteForm && (
          <div className="quote-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Get Detailed Quote</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowQuoteForm(false)}
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleQuoteSubmit} className="quote-form">
                <div className="selected-bus-info">
                  <h3>Selected Bus: {busTypes.find(bus => bus.id === rentalData.busType)?.name}</h3>
                  <p>Capacity: {busTypes.find(bus => bus.id === rentalData.busType)?.capacity}</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      className="form-control"
                      value={rentalData.contactName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="contactPhone"
                      className="form-control"
                      value={rentalData.contactPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="contactEmail"
                    className="form-control"
                    value={rentalData.contactEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Requirements</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Please mention any special requirements, driver preferences, or additional services needed..."
                  ></textarea>
                </div>

                <div className="quote-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowQuoteForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success whatsapp-btn">
                    <Phone size={20} />
                    Send Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Why Choose Us */}
        <div className="why-choose-section">
          <h2>Why Choose Our Bus Rental Services?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Bus size={40} />
              </div>
              <h3>Well-Maintained Fleet</h3>
              <p>Our buses are regularly serviced and maintained to ensure safety and comfort for your journey.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Experienced Drivers</h3>
              <p>Professional and experienced drivers with excellent knowledge of routes and safety protocols.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Clock size={40} />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to assist you with any queries or emergencies during your trip.</p>
            </div>
            <div className="">
                
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <MapPin size={40} />
              </div>
              <h3>Pan India Service</h3>
              <p>We provide bus rental services across India with flexible pickup and drop-off locations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRental;
