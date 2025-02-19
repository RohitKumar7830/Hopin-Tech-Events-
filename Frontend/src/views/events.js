import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "November 15-16, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      description: "Join us for the annual Tech Conference where industry leaders share insights on the latest trends and technologies.",
      image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$199",
      category: "tech"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "December 5, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Online",
      description: "A hands-on workshop to learn modern web development techniques including React, Node.js, and GraphQL.",
      image: "https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Free",
      category: "workshop"
    }
  ];

  return (
    <div className="events-container">
      <Helmet>
        <title>Events - Tech Events Platform</title>
      </Helmet>
      <Navbar />
      
      <main className="events-content">
        <div className="events-header">
          <h1>Upcoming Events</h1>
          <div className="search-filter">
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
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <div className="event-meta">
                  <span className="event-date">{event.date}</span>
                  <span className="event-location">{event.location}</span>
                </div>
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>
                <div className="event-footer">
                  <span className="event-price">{event.price}</span>
                  <Link to={`/events/${event.id}`} className="view-details-btn">
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