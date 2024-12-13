// Page Created - Adeena Pavoor Veedu/Student No - 8912340

import React, { useState } from 'react';
import './Contact.css';
import Nav from '../NavBar/Nav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check if all fields are filled
    if (name && email && message) {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } else {
      setSuccessMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-page">
      <Nav/>
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
      </div>
      <div className="contact-form-container">
        <div className="form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div> <br/>

        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353155865!3d-37.81627944202121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773e9b105f4d62!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1614632553539!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <footer className="footer">
     <div className="container">
       <p>© 2024 Delicious Bites. All rights reserved.</p>
     </div>
   </footer>
    </div>
  );
};

export default Contact;
