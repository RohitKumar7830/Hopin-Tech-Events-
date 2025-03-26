import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' })); // Clear errors when typing
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', email: '', phone: '', message: '' };

    // Name validation: No numbers allowed
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      errors.name = 'Name cannot contain numbers.';
      isValid = false;
    }

    // Email validation: Must be a valid email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email address.';
      isValid = false;
    }

    // Phone number validation: Must be a valid 10-digit number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }

    // Message validation: Must be at least 10 characters
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
      isValid = false;
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    }
  };

  return (
    <div className="contact-container">
      <Navbar />
      <main className="contact-content">
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          {submitted ? (
            <div className="success-message">
              <h3>Message Received!</h3>
              <p>We'll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                {formErrors.name && <p className="error-message">{formErrors.name}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                />
                {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                />
                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
