import React from 'react';
import './NewsletterForm.css';

const NewsletterForm = () => (
  <form action="https://YOUR_MAILCHIMP_URL" method="post" target="_blank">
    <input type="email" name="EMAIL" placeholder="Your email" required />
    <button type="submit">Subscribe</button>
  </form>
);

export default NewsletterForm;
// This component renders a simple newsletter subscription form that submits to a Mailchimp URL.