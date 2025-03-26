import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="events-container">
      <Helmet>
        <title>Events - Tech Events Platform</title>
      </Helmet>
      <Navbar />
      
      <main className="events-content">
        <div className="events-header">
          <h1>Upcoming Events</h1>
          <div className="events-search-filter">
            <input type="text" placeholder="Search events..." />
            <select>
              <option value="">All Categories</option>
              <option value="tech">Technology</option>
              <option value="workshop">Workshops</option>
            </select>
          </div>
        </div>
        
        <div className="events-grid">
          {events.map(event => (
            <div className="events-card" key={event.title}>
              <img src={event.DisplayImg} alt={event.title} className="events-card-image" />
              <div className="events-card-content">
                <div className="events-card-meta">
                  <span className="events-card-date">{event.dates}</span>
                  <span className="events-card-location">{event.location}</span>
                </div>
                <h2 className="events-card-title">{event.title}</h2>
                <p className="events-card-description">{event.description}</p>
                <div className="events-card-footer">
                  <span className="events-card-price">{event.cost}</span>
                  <Link to={`/events/${encodeURIComponent(event.title)}`} className="events-view-details-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
