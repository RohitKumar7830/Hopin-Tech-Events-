import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './eventDetail.css';

const EventDetail = () => {
  const { id } = useParams();

  const events = {
    1: {
      title: "Tech Conference 2023",
      date: "November 15-16, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      description: "Join us for the annual Tech Conference where industry leaders share insights on the latest trends and technologies.",
      agenda: [
        { time: "9:00 AM", title: "Registration & Breakfast" },
        { time: "10:00 AM", title: "Keynote: Future of Technology" },
        { time: "12:00 PM", title: "Lunch Break" },
        { time: "1:00 PM", title: "Panel: AI in Business" },
        { time: "3:00 PM", title: "Workshop: Cloud Computing" }
      ],
      image: "https://images.stockcake.com/public/a/7/a/a7acb612-27c9-469a-bb4f-92695cc7d178_large/tech-conference-presentation-stockcake.jpg",
      organizer: "Tech Events Inc.",
      organizerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYv-qZFL7Svj6edQQ9FXORZnbsBb4080JFiQ&s",
      price: "$199"
    },
    2: {
      title: "Web Development Workshop",
      date: "December 5, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Online",
      description: "A hands-on workshop to learn modern web development techniques including React, Node.js, and GraphQL.",
      agenda: [
        { time: "10:00 AM", title: "Introduction to React" },
        { time: "12:00 PM", title: "Lunch Break" },
        { time: "1:00 PM", title: "Building APIs with Node.js" },
        { time: "3:00 PM", title: "GraphQL Fundamentals" }
      ],
      image: "https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg",
      organizer: "Web Dev Academy",
      organizerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYv-qZFL7Svj6edQQ9FXORZnbsBb4080JFiQ&s",
      price: "Free"
    },
    
  };

  const event = events[id];

  return (
    <div className="event-detail-container">
      <Navbar />
      <main className="event-detail-content">
        {event ? (
          <>
            <div className="event-hero">
              <img src={event.image} alt={event.title} className="event-hero-image" />
              <div className="event-hero-content">
                <h1>{event.title}</h1>
                <div className="event-hero-meta">
                  <p>{event.date} • {event.time}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>

            <div className="event-main-content">
              <div className="event-details">
                <div className="event-description">
                  <h2>About This Event</h2>
                  <p>{event.description}</p>
                </div>

                <div className="event-agenda">
                  <h2>Agenda</h2>
                  <div className="agenda-items">
                    {event.agenda.map((item, index) => (
                      <div className="agenda-item" key={index}>
                        <span className="agenda-time">{item.time}</span>
                        <span className="agenda-title">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="event-organizer">
                  <h2>Organizer</h2>
                  <div className="organizer-info">
                    <img src={event.organizerLogo} alt={event.organizer} className="organizer-logo" />
                    <p>{event.organizer}</p>
                  </div>
                </div>
              </div>

              <div className="event-sidebar">
                <div className="event-actions">
                  <button className="register-button">Register Now</button>
                  <button className="share-button">Share Event</button>
                </div>
                <div className="event-price">
                  <span>{event.price}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Event not found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;