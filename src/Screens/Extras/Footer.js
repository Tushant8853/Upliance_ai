import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section links">
        <h3>Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>

      <div className="footer-section contact-info">
        <h3>Contact Us</h3>
        <p>Email: tushantgupta8853@gmail.com</p>
        <p>Phone: +91 8853607034</p>
      </div>
    </footer>
  );
};

export default Footer;
