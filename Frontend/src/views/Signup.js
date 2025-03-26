import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './AuthForms.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear errors when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name (should not contain numbers)
    if (/\d/.test(formData.full_name)) {
      setError('Full Name cannot contain numbers.');
      return;
    }

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      alert('Signup successful!');
      history.push('/dashboard'); // Redirect after alert
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <Navbar />
      <main className="auth-content">
        <div className="auth-form-container">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="auth-button">
              Sign Up
            </button>
            <p className="auth-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
