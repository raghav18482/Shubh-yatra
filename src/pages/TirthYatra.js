import React, { useState } from 'react';
import { MapPin, Calendar, Users, Clock, Star, Phone, ArrowRight, CheckCircle, Heart } from 'lucide-react';
import './TirthYatra.css';

const TirthYatra = () => {
  const [yatraData, setYatraData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    groupSize: '',
    budget: '',
    specialRequirements: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const yatraDestinations = [
    {
      id: 'char-dham',
      name: 'Char Dham Yatra',
      duration: '10-12 days',
      price: '₹25,000 - ₹35,000',
      description: 'Sacred journey to four holy shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath',
      highlights: ['Yamunotri Temple', 'Gangotri Temple', 'Kedarnath Temple', 'Badrinath Temple'],
      image: '🏔️',
      difficulty: 'Moderate to High'
    },
    {
      id: 'vaishno-devi',
      name: 'Vaishno Devi Yatra',
      duration: '3-4 days',
      price: '₹8,000 - ₹12,000',
      description: 'Pilgrimage to the holy shrine of Mata Vaishno Devi in Jammu & Kashmir',
      highlights: ['Vaishno Devi Temple', 'Banganga', 'Ardh Kuwari', 'Sanjhi Chhat'],
      image: '🙏',
      difficulty: 'Moderate'
    },
    {
      id: 'tirupati',
      name: 'Tirupati Balaji',
      duration: '2-3 days',
      price: '₹5,000 - ₹8,000',
      description: 'Visit to the famous Venkateswara Temple in Tirupati, Andhra Pradesh',
      highlights: ['Tirupati Temple', 'Tirumala Hills', 'Padmavati Temple', 'Govindaraja Temple'],
      image: '🕉️',
      difficulty: 'Easy'
    },
    {
      id: 'sabarimala',
      name: 'Sabarimala Yatra',
      duration: '4-5 days',
      price: '₹6,000 - ₹10,000',
      description: 'Sacred pilgrimage to Lord Ayyappa temple in Kerala',
      highlights: ['Sabarimala Temple', 'Pampa', 'Erumeli', 'Aranmula'],
      image: '🕉️',
      difficulty: 'Moderate'
    },
    {
      id: 'kashi-yatra',
      name: 'Kashi Yatra',
      duration: '5-7 days',
      price: '₹10,000 - ₹15,000',
      description: 'Spiritual journey to Varanasi, the holiest city in Hinduism',
      highlights: ['Kashi Vishwanath Temple', 'Ganga Aarti', 'Sarnath', 'Bodh Gaya'],
      image: '🌅',
      difficulty: 'Easy'
    },
    {
      id: 'custom',
      name: 'Custom Yatra',
      duration: 'As per requirement',
      price: 'Custom pricing',
      description: 'Personalized pilgrimage planning for any destination of your choice',
      highlights: ['Flexible itinerary', 'Personalized service', 'Any destination', 'Custom duration'],
      image: '✈️',
      difficulty: 'Flexible'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: '₹5,000 - ₹8,000',
      features: [
        'Transportation (Non-AC)',
        'Basic accommodation',
        'Meals (Vegetarian)',
        'Temple darshan arrangements',
        'Basic guide service'
      ],
      suitable: 'Budget-conscious pilgrims'
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: '₹8,000 - ₹15,000',
      features: [
        'Transportation (AC)',
        'Comfortable accommodation',
        'Meals (Vegetarian)',
        'Temple darshan arrangements',
        'Experienced guide',
        'Medical assistance',
        'Travel insurance'
      ],
      suitable: 'Most pilgrims'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '₹15,000 - ₹25,000',
      features: [
        'Luxury transportation',
        'Premium accommodation',
        'Quality meals',
        'VIP darshan arrangements',
        'Expert guide service',
        'Medical assistance',
        'Travel insurance',
        'Photography service',
        '24/7 support'
      ],
      suitable: 'Comfort-seeking pilgrims'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setYatraData({
      ...yatraData,
      [name]: value
    });
  };

  const handleDestinationSelect = (destination) => {
    setYatraData({
      ...yatraData,
      destination: destination.id
    });
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const selectedDestination = yatraDestinations.find(dest => dest.id === yatraData.destination);
    
    // Create WhatsApp message
    const message = `Tirth Yatra Planning Request:

Destination: ${selectedDestination?.name || yatraData.destination}
Duration: ${selectedDestination?.duration || 'Custom'}
Package: ${selectedPackage?.name}
Price Range: ${selectedPackage?.price}

Travel Details:
Start Date: ${yatraData.startDate}
End Date: ${yatraData.endDate}
Group Size: ${yatraData.groupSize}
Budget: ${yatraData.budget}
Special Requirements: ${yatraData.specialRequirements}

Contact Details:
Name: ${yatraData.contactName}
Phone: ${yatraData.contactPhone}
Email: ${yatraData.contactEmail}

Please provide a detailed itinerary and quote for this Tirth Yatra planning request.`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919928545048?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="tirth-yatra">
      <div className="container">
        <div className="page-header">
          <h1>Tirth Yatra Planning</h1>
          <p>Plan your spiritual journey with our comprehensive pilgrimage services</p>
        </div>

        {/* Yatra Planning Form */}
        <div className="yatra-form-section">
          <div className="form-card">
            <h2>Plan Your Spiritual Journey</h2>
            <form className="yatra-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Destination</label>
                  <select
                    name="destination"
                    className="form-control"
                    value={yatraData.destination}
                    onChange={handleInputChange}
                  >
                    <option value="">Select destination</option>
                    {yatraDestinations.map(dest => (
                      <option key={dest.id} value={dest.id}>{dest.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Group Size</label>
                  <select
                    name="groupSize"
                    className="form-control"
                    value={yatraData.groupSize}
                    onChange={handleInputChange}
                  >
                    <option value="">Select group size</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="21-50">21-50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    className="form-control"
                    value={yatraData.startDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className="form-control"
                    value={yatraData.endDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Budget Range</label>
                  <select
                    name="budget"
                    className="form-control"
                    value={yatraData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget</option>
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                    <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
                    <option value="₹30,000+">₹30,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Special Requirements</label>
                <textarea
                  name="specialRequirements"
                  className="form-control"
                  rows="3"
                  placeholder="Mention any special requirements, dietary needs, accessibility needs, etc."
                  value={yatraData.specialRequirements}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="destinations-section">
          <h2>Popular Tirth Yatra Destinations</h2>
          <p>Choose from our curated list of sacred pilgrimage destinations</p>
          
          <div className="destinations-grid">
            {yatraDestinations.map(destination => (
              <div key={destination.id} className="destination-card">
                <div className="destination-header">
                  <div className="destination-icon">{destination.image}</div>
                  <h3>{destination.name}</h3>
                  <div className="destination-duration">{destination.duration}</div>
                </div>
                
                <p className="destination-description">{destination.description}</p>
                
                <div className="destination-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {destination.highlights.map((highlight, index) => (
                      <li key={index}>
                        <CheckCircle size={14} className="check-icon" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="destination-footer">
                  <div className="destination-price">{destination.price}</div>
                  <div className="difficulty">
                    <span className="difficulty-label">Difficulty:</span>
                    <span className={`difficulty-level ${destination.difficulty.toLowerCase().replace(' ', '-')}`}>
                      {destination.difficulty}
                    </span>
                  </div>
                  <button 
                    className="btn btn-primary select-destination-btn"
                    onClick={() => handleDestinationSelect(destination)}
                  >
                    Plan This Yatra
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Options */}
        <div className="packages-section">
          <h2>Yatra Package Options</h2>
          <p>Choose the package that best suits your needs and budget</p>
          
          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`package-card ${pkg.id === 'standard' ? 'featured' : ''}`}>
                {pkg.id === 'standard' && <div className="featured-badge">Most Popular</div>}
                
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                </div>
                
                <div className="package-features">
                  <h4>Includes:</h4>
                  <ul>
                    {pkg.features.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle size={16} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="package-suitable">
                  <strong>Suitable for:</strong> {pkg.suitable}
                </div>
                
                <button 
                  className={`btn ${pkg.id === 'standard' ? 'btn-primary' : 'btn-secondary'} select-package-btn`}
                  onClick={() => handlePackageSelect(pkg)}
                >
                  Choose Package
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && selectedPackage && (
          <div className="booking-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Complete Your Yatra Planning</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowBookingForm(false)}
                >
                  ×
                </button>
              </div>
              
              <div className="booking-summary">
                <h3>Selected Package: {selectedPackage.name}</h3>
                <p>Price Range: {selectedPackage.price}</p>
                <p>Destination: {yatraDestinations.find(dest => dest.id === yatraData.destination)?.name || 'Custom'}</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="booking-form">
                <h3>Contact Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      className="form-control"
                      value={yatraData.contactName}
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
                      value={yatraData.contactPhone}
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
                    value={yatraData.contactEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="booking-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowBookingForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success whatsapp-btn">
                    <Phone size={20} />
                    Send Planning Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Why Choose Our Yatra Services */}
        <div className="why-choose-section">
          <h2>Why Choose Our Tirth Yatra Services?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Heart size={40} />
              </div>
              <h3>Spiritual Guidance</h3>
              <p>Experienced guides who understand the spiritual significance of each destination and provide proper guidance.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <MapPin size={40} />
              </div>
              <h3>Complete Itinerary</h3>
              <p>Well-planned itineraries covering all important temples and spiritual sites with proper timing.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Group Coordination</h3>
              <p>Expert coordination for group yatras ensuring everyone's comfort and spiritual fulfillment.</p>
            </div>
            <div className="">
              
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Star size={40} />
              </div>
              <h3>Authentic Experience</h3>
              <p>Genuine pilgrimage experience with proper rituals, darshan arrangements, and spiritual activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TirthYatra;
