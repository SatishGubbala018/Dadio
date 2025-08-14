import React from "react";
import "./ContactPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="contact-page-container">
      <Navbar />
      <main className="contact-main">
        <div className="contact-form-container">
          <h2 className="form-title">Dadio</h2>
          <p className="form-address">
            <strong>Address:</strong>
            <br />
            RZF-757/4B, Palam Colony, New Delhi - 110077
          </p>

          <form className="contact-form" onSubmit={handleSendMessage}>
            <div className="form-group">
              <label htmlFor="your-name">Your Name*</label>
              <input
                type="text"
                id="your-name"
                name="your-name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Phone Number*</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="Phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="your-email">Your Email*</label>
              <input
                type="email"
                id="your-email"
                name="your-email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your Message here"
                required
              ></textarea>
            </div>

            <div className="form-group captcha-group">
              <label htmlFor="captcha">Captcha*</label>
              <div className="captcha-container">
                <span className="captcha-code">fat19MB</span>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  placeholder="Enter Code"
                  required
                />
              </div>
            </div>

            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer/>
      
    </div>
  );
};

export default ContactPage;
