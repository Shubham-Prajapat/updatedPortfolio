import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ryfy3t",
        "template_jgtno3u",
        form.current,
        "dUZ_oQaiXV1CKn_Gc"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed To Send Message");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Left Content */}
        <div className="contact-content">

          <span className="section-subtitle">
            Get In Touch
          </span>

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="contact-text">
            I’m available for freelance work,
            internships, and full-time opportunities.
            Feel free to contact me anytime.
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

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="input-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;