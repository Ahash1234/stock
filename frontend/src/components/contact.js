import React from "react";
import "./contact.css"; // Ensure you have this CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Email: ahashahash2786@gmail.com</p>
      <p>Phone: +1-234-567-890</p>

      <div className="contact-form">
        <form action="submit_form.php" method="POST">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

