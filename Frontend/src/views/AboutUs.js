import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './aboutUs.css';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <div className="hero-banner">
        <h1>About Our Team</h1>
        <p>Innovating the future of tech events</p>
      </div>
      
      <main className="about-us-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, Tech Events Platform was born out of a passion for connecting technology enthusiasts and professionals. 
            Our mission is to create meaningful experiences through high-quality tech events and workshops.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly push boundaries to deliver cutting-edge experiences</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>Building strong connections within the tech ecosystem</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://placehold.co/150" alt="John Doe" />
              <h3>Madhu kiran Manikonda</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://placehold.co/150" alt="Jane Smith" />
              <h3>Venkatesh Ruppa</h3>
              <p>Events Coordinator</p>
            </div>
            <div className="team-member">
              <img src="https://placehold.co/150" alt="Mike Johnson" />
              <h3>Sai krishna Kanigiri</h3>
              <p>Technical Lead</p>
            </div>
            <div className="team-member">
              <img src="https://placehold.co/150" alt="Sarah Lee" />
              <h3>Hemant Kumar Padamata</h3>
              <p>Marketing Specialist</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Have questions or want to collaborate? We'd love to hear from you!</p>
          <div className="contact-info">
            <p>Email: info@techevents.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;