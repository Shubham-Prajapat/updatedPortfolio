import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  // Scroll To Top
  const scrollTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="luxury-footer">

      {/* Blur Effects */}
      <div className="footer-blur footer-blur-left"></div>
      <div className="footer-blur footer-blur-right"></div>

      <div className="footer-wrapper">

        {/* LEFT SIDE */}
        <div className="footer-left">

          <span className="footer-tag">
            LET'S CONNECT
          </span>

          <h2>
            Build Premium
            <span> Digital Experience.</span>
          </h2>

          <p>
            Frontend Developer specialized in
            React JS, Shopify and modern responsive
            website development with luxury UI design.
          </p>

          {/* EMAIL */}
          <div className="footer-email-box">

            <div className="footer-email-icon">
              <FaEnvelope />
            </div>

            <a href="mailto:Shubhprajaati17@gmail.com">
              shubhprajapati17@gmail.com
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">

          <h3>Follow Me</h3>

          <div className="footer-social-grid">

            {/* FACEBOOK */}
            <a
              href="https://wwww.facebook.com/shubham.prajapati.58367"
              target="_blank"
              rel="noreferrer"
              className="footer-social-card"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/shubhamprajapat_786"
              target="_blank"
              rel="noreferrer"
              className="footer-social-card"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://in.linkedin.com/in/shubham-prajapat-0799601bb"
              target="_blank"
              rel="noreferrer"
              className="footer-social-card"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Shubham Prajapat
        </p>

        {/* SCROLL BUTTON */}
        <button
          className="scroll-btn"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;