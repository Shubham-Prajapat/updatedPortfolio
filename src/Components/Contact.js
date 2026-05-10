import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Left Content */}
        <div className="contact-content">
          <span className="section-subtitle">Get In Touch</span>

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="contact-text">
            I’m available for freelance work, internships, and full-time
            opportunities. Feel free to contact me anytime.
          </p>

          <div className="contact-info">

            <div className="info-box">
              <h4>Email</h4>
              <p>shubhprajapati17@gmail.com</p>
              <p>shubhprajapati1997@gmail.com</p>
            </div>

            <div className="info-box">
              <h4>Phone</h4>
              <p>+91 7566860580</p>
            </div>

            <div className="info-box">
              <h4>Location</h4>
              <p>Indore, Madhya Pradesh, India</p>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">

          <form className="contact-form">

            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Subject"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;