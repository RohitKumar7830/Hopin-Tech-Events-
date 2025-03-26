import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/footer';
import './PostEvent.css';

const PostEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    dates: '',
    time: '',
    location: '',
    description: '',
    agenda1: '',
    agenda2: '',
    agenda3: '',
    agenda4: '',
    agenda5: '',
    organizer: '',
    cost: '',
    DisplayImg: '',
    MainImg: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
    setError(''); // Clear error when typing
  };

  const validateForm = () => {
    const { title, dates, time, location, description, organizer, cost, DisplayImg, MainImg } = eventData;

    // Check for empty fields
    for (let key in eventData) {
      if (!eventData[key]) {
        setError('All fields are required.');
        return false;
      }
    }

    // Validate date format (MM/DD/YY)
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/;
    if (!dateRegex.test(dates)) {
      setError('Date must be in the format MM/DD/YY.');
      return false;
    }

    // Validate time format (start - end, e.g., 12:00pm - 4:00pm)
    const timeRegex = /^([1-9]|1[0-2]):[0-5][0-9](am|pm) - ([1-9]|1[0-2]):[0-5][0-9](am|pm)$/i;
    if (!timeRegex.test(time)) {
      setError('Time must be in the format HH:MMam - HH:MMpm (e.g., 12:00pm - 4:00pm).');
      return false;
    }

    // Validate cost (must be a number or "free")
    if (cost.toLowerCase() !== 'free' && isNaN(cost)) {
      setError('Cost must be a number or "free".');
      return false;
    }

    // Validate DisplayImg and MainImg as valid URLs
    const urlRegex = /^(https?:\/\/)[\w\-.]+(\.[\w\-.]+)+(\/[\w\-.]*)*$/;
    if (!urlRegex.test(DisplayImg) || !urlRegex.test(MainImg)) {
      setError('Display Image and Main Image must be valid URLs.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert('Event posted successfully!');
        setEventData({
          title: '',
          dates: '',
          time: '',
          location: '',
          description: '',
          agenda1: '',
          agenda2: '',
          agenda3: '',
          agenda4: '',
          agenda5: '',
          organizer: '',
          cost: '',
          DisplayImg: '',
          MainImg: '',
        });
      } else {
        alert('Failed to post event');
      }
    } catch (error) {
      console.error('Error posting event:', error);
    }
  };

  return (
    <div className="post-event-container">
      <DashboardNavbar />
      <div className="post-event-content">
        <h2>Post an Event</h2>
        <form onSubmit={handleSubmit} className="post-event-form">
          <input type="text" name="title" placeholder="Event Title" value={eventData.title} onChange={handleChange} required />
          <input type="text" name="dates" placeholder="Date (MM/DD/YY)" value={eventData.dates} onChange={handleChange} required />
          <input type="text" name="time" placeholder="Time (e.g., 12:00pm - 4:00pm)" value={eventData.time} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={eventData.description} onChange={handleChange} required></textarea>
          {[1, 2, 3, 4, 5].map((num) => (
            <input
              key={num}
              type="text"
              name={`agenda${num}`}
              placeholder={`Agenda ${num}`}
              value={eventData[`agenda${num}`]}
              onChange={handleChange}
              required
            />
          ))}
          <input type="text" name="organizer" placeholder="Organizer Name" value={eventData.organizer} onChange={handleChange} required />
          <input type="text" name="cost" placeholder="Cost (Free or Number)" value={eventData.cost} onChange={handleChange} required />
          <input type="text" name="DisplayImg" placeholder="Display Image URL" value={eventData.DisplayImg} onChange={handleChange} required />
          <input type="text" name="MainImg" placeholder="Main Image URL" value={eventData.MainImg} onChange={handleChange} required />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="post-event-button">Post Event</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostEvent;
