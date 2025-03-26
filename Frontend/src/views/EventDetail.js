import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './eventDetail.css';

const EventDetail = () => {
  const { title } = useParams();
  const history = useHistory();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching event for title:", title);
    if (!title) {
      setError("Invalid event title");
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/events/${encodeURIComponent(title)}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format. Expected JSON.");
        }

        const data = await response.json();
        console.log("Fetched event data:", data);
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [title]);

  const handleRegister = () => {
    if (!event) {
      alert("Event details are not available. Please try again later.");
      return;
    }
    history.push(`/events/${encodeURIComponent(title)}/register`, { state: { event } });
  };

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="event-detail-container">
      <Navbar />
      <main className="event-detail-content">
        {event ? (
          <>
            <div className="event-hero">
              <img src={event.DisplayImg} alt={event.title} className="event-hero-image" />
              <div className="event-hero-content">
                <h1>{event.title}</h1>
                <div className="event-hero-meta">
                  <p>{event.dates} • {event.time}</p>
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
                    {[1, 2, 3, 4, 5].map((num) => (
                      event[`agenda${num}`] && (
                        <div className="agenda-item" key={num}>
                          <span className="agenda-time">{event[`agenda${num}`]}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                <div className="event-organizer">
                  <h2>Organizer</h2>
                  <div className="organizer-info">
                    <img src={event.organizerPic} alt={event.organizer} className="organizer-logo" />
                    <p>{event.organizer}</p>
                  </div>
                </div>
              </div>

              <div className="event-sidebar">
                <div className="event-actions">
                  <button 
                    className="register-button" 
                    onClick={handleRegister}
                  >
                    Register Now
                  </button>
                  <button className="share-button">Share Event</button>
                </div>
                <div className="event-price">
                  <span>{event.cost}</span>
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
