import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/footer';
import './Dashboard.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('registered');

  const renderEvents = () => {
    switch (activeSection) {
      case 'registered':
        return <div className="events-list">Registered Events Content</div>;
      case 'upcoming':
        return <div className="events-list">Upcoming Events Content</div>;
      case 'past':
        return <div className="events-list">Past Events Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <DashboardNavbar />
      <div className="dashboard-content">
        <div className="events-navigation">
          <button
            className={`nav-button ${activeSection === 'registered' ? 'active' : ''}`}
            onClick={() => setActiveSection('registered')}
          >
            Registered Events
          </button>
          <button
            className={`nav-button ${activeSection === 'past' ? 'active' : ''}`}
            onClick={() => setActiveSection('past')}
          >
            Past Events
          </button>
        </div>

        <div className="events-container">
          {renderEvents()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;