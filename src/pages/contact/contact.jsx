import './Contact.css';
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');

    if (!name || !email || !message) {
      alert('Please fill in all the sections.');
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted:', { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
