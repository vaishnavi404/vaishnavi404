import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log(formData);
  };

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Enter your message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
