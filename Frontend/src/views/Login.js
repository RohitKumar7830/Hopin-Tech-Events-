import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './AuthForms.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/users/${formData.email}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Unexpected response format. Expected JSON.");
      }
      
      const userData = await response.json();
      
      if (!userData || !userData.password) {
        throw new Error("User not found or invalid response structure.");
      }
      
      if (userData.password !== formData.password) {
        throw new Error("Incorrect password");
      }
      
      alert("Login successful!");
      history.push('/dashboard'); // Redirect to dashboard after alert
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <Navbar />
      <main className="auth-content">
        <div className="auth-form-container">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit} className="auth-form">
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
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="auth-button">
              Login
            </button>
            <p className="auth-link">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
