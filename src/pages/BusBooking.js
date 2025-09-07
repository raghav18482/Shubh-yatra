import React, { useState, useEffect } from 'react';
import { Search, Bus, Clock, MapPin, Users, Star, Phone, ArrowRight } from 'lucide-react';
import './BusBooking.css';

const BusBooking = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: '',
    passengers: 1
  });

  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: 'male'
  });
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Sample bus data - in real app, this would come from API
  const sampleBuses = [
    {
      id: 1,
      name: "Shubh Yatra Express",
      type: "Semi-Sleeper",
      departure: "22:30",
      arrival: "06:00",
      duration: "7h 30m",
      price: 850,
      seats: 45,
      available: 12,
      amenities: ["AC", "Water Bottle", "Blanket", "Charging Point"],
      rating: 4.5,
      reviews: 120
    },
    {
      id: 2,
      name: "Comfort Plus",
      type: "Sleeper",
      departure: "23:00",
      arrival: "07:00",
      duration: "8h 00m",
      price: 1200,
      seats: 30,
      available: 8,
      amenities: ["AC", "Blanket", "Pillow", "Charging Point", "WiFi"],
      rating: 4.7,
      reviews: 95
    },
    {
      id: 3,
      name: "Budget Travel",
      type: "Seater",
      departure: "21:00",
      arrival: "05:30",
      duration: "8h 30m",
      price: 650,
      seats: 50,
      available: 25,
      amenities: ["Water Bottle", "Charging Point"],
      rating: 4.2,
      reviews: 200
    }
  ];

  useEffect(() => {
    // Set buses when component mounts
    setBuses(sampleBuses);
  }, []);

  const handleSearchChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // In real app, this would trigger API call
    console.log('Searching buses:', searchData);
  };

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setShowBookingForm(true);
  };

  const handlePassengerChange = (e) => {
    setPassengerDetails({
      ...passengerDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Bus Booking Request:
    
Route: ${searchData.from} to ${searchData.to}
Date: ${searchData.departureDate}
Passengers: ${searchData.passengers}

Bus Details:
Name: ${selectedBus.name}
Type: ${selectedBus.type}
Departure: ${selectedBus.departure}
Price: ₹${selectedBus.price} per person

Passenger Details:
Name: ${passengerDetails.name}
Phone: ${passengerDetails.phone}
Email: ${passengerDetails.email}
Age: ${passengerDetails.age}
Gender: ${passengerDetails.gender}

Total Amount: ₹${selectedBus.price * searchData.passengers}

Please confirm this booking.`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919928545048?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bus-booking">
      <div className="container">
        <div className="page-header">
          <h1>Bus Booking</h1>
          <p>Find and book comfortable buses for your journey</p>
        </div>

        {/* Search Form */}
        <div className="search-section">
          <div className="search-box">
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <div className="form-row">
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
                  <label className="form-label">Departure Date</label>
                  <input
                    type="date"
                    name="departureDate"
                    className="form-control"
                    value={searchData.departureDate}
                    onChange={handleSearchChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Passengers</label>
                  <select
                    name="passengers"
                    className="form-control"
                    value={searchData.passengers}
                    onChange={handleSearchChange}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                  <Search size={20} />
                  Search Buses
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bus Results */}
        <div className="buses-section">
          <h2>Available Buses</h2>
          <div className="buses-grid">
            {buses.map(bus => (
              <div key={bus.id} className="bus-card">
                <div className="bus-header">
                  <div className="bus-info">
                    <h3>{bus.name}</h3>
                    <span className="bus-type">{bus.type}</span>
                  </div>
                  <div className="bus-rating">
                    <Star size={16} className="star" />
                    <span>{bus.rating}</span>
                    <span className="reviews">({bus.reviews} reviews)</span>
                  </div>
                </div>

                <div className="bus-timing">
                  <div className="timing-item">
                    <Clock size={16} />
                    <div>
                      <div className="time">{bus.departure}</div>
                      <div className="location">{searchData.from || 'Origin'}</div>
                    </div>
                  </div>
                  <div className="timing-separator">
                    <div className="duration">{bus.duration}</div>
                    <ArrowRight size={20} />
                  </div>
                  <div className="timing-item">
                    <Clock size={16} />
                    <div>
                      <div className="time">{bus.arrival}</div>
                      <div className="location">{searchData.to || 'Destination'}</div>
                    </div>
                  </div>
                </div>

                <div className="bus-amenities">
                  <h4>Amenities:</h4>
                  <div className="amenities-list">
                    {bus.amenities.map((amenity, index) => (
                      <span key={index} className="amenity">{amenity}</span>
                    ))}
                  </div>
                </div>

                <div className="bus-footer">
                  <div className="bus-price">
                    <span className="price">₹{bus.price}</span>
                    <span className="per-person">per person</span>
                  </div>
                  <div className="bus-availability">
                    <Users size={16} />
                    <span>{bus.available} seats available</span>
                  </div>
                  <button 
                    className="btn btn-primary book-btn"
                    onClick={() => handleBusSelect(bus)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && selectedBus && (
          <div className="booking-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Complete Your Booking</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowBookingForm(false)}
                >
                  ×
                </button>
              </div>
              
              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <div className="summary-item">
                  <span>Route:</span>
                  <span>{searchData.from} to {searchData.to}</span>
                </div>
                <div className="summary-item">
                  <span>Date:</span>
                  <span>{searchData.departureDate}</span>
                </div>
                <div className="summary-item">
                  <span>Bus:</span>
                  <span>{selectedBus.name} ({selectedBus.type})</span>
                </div>
                <div className="summary-item">
                  <span>Passengers:</span>
                  <span>{searchData.passengers}</span>
                </div>
                <div className="summary-item total">
                  <span>Total Amount:</span>
                  <span>₹{selectedBus.price * searchData.passengers}</span>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="booking-form">
                <h3>Passenger Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={passengerDetails.name}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={passengerDetails.phone}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={passengerDetails.email}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      value={passengerDetails.age}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select
                    name="gender"
                    className="form-control"
                    value={passengerDetails.gender}
                    onChange={handlePassengerChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="booking-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowBookingForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success whatsapp-btn">
                    <Phone size={20} />
                    Send to WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusBooking;
