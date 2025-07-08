import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(
      () => alert('Message sent successfully!'),
      () => alert('Failed to send message. Please try again.')
    );

    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <input type="subject" name="user_subject" placeholder="Your Subject here" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
// This component renders a contact form that allows users to send messages. It uses EmailJS to handle the email sending process.