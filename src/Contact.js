import React from 'react';

function Contact() {
  return (
    <section className="content-section contact-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Whether you have a question about our content, need assistance, or just want to give feedback, feel free to reach out to us.</p>

      <div className="contact-details">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> support@streamflix.com</p>
          <p><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p><strong>Address:</strong> 123 StreamFlix Blvd, Movie City, FL 12345</p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
