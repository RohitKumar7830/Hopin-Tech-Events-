import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        
        {/* Desktop Menu */}
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <Link to="/" className="thq-body-small thq-link">{props.link1}</Link>
            <Link to="/events" className="thq-body-small thq-link">{props.link2}</Link>
            <Link to="/about-us" className="thq-body-small thq-link">{props.link3}</Link>
            <Link to="/contact" className="thq-body-small thq-link">{props.link4}</Link>
          </nav>
          <div className="navbar-buttons1">
        <Link to="/login" className="navbar-action11 thq-button-filled thq-button-animated">
          <span className="thq-body-small">Login</span>
        </Link>
      </div>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-mobile-menu">
          <button onClick={toggleMobileMenu} className="navbar-hamburger thq-button-clear">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
          
          {isMobileMenuOpen && (
            <div className="navbar-mobile-menu-overlay">
              <nav className="navbar-mobile-links">
                <Link to="/" className="thq-body-small thq-link" onClick={toggleMobileMenu}>{props.link1}</Link>
                <Link to="/events" className="thq-body-small thq-link" onClick={toggleMobileMenu}>{props.link2}</Link>
                <Link to="/about-us" className="thq-body-small thq-link" onClick={toggleMobileMenu}>{props.link3}</Link>
                <Link to="/contact" className="thq-body-small thq-link" onClick={toggleMobileMenu}>{props.link4}</Link>
              </nav>
              <div className="navbar-mobile-buttons">
                <button className="navbar-action11 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">Login</span>
                </button>
                <button className="navbar-action21 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">Signin</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  logoAlt: 'Tech Events Platform',
  link2: 'Events',
  action1: 'Post Event',
  link4: 'Contact',
  link3: 'About',
  link1: 'Home',
  link5: 'Link5',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: 'Search',
}

Navbar.propTypes = {
  logoAlt: PropTypes.string,
  link2: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  link5: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
}

export default Navbar;