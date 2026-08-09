import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

import aboutImg from "../assets/Shubham.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import resume from  '../assets/resumefrontend.pdf'
const About = () => {

  const navigate = useNavigate()

  const Contactbtn = () =>{
    navigate("/contact")
  }


  return (
    <section className="luxury-about-section" id="about">
      
      {/* Background Glow */}
      <div className="about-blur blur-one"></div>
      <div className="about-blur blur-two"></div>

      <div className="about-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-card">
            <img src={aboutImg} alt="Shubham Prajapat" />

            {/* Floating Badge */}
            <div className="floating-badge">
              <BadgeCheck size={18} />
              <span>3+ Years Experience</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">
            ABOUT ME
          </span>

          <h2 className="about-title">
            Building Premium Digital
            <span> Experiences.</span>
          </h2>

          <p className="about-description">
            Hi, I’m <strong>Shubham Prajapat</strong> — a passionate
            Frontend Developer with 3 years of experience creating
            modern, responsive and high-performance websites.
          </p>

          <p className="about-description">
            I specialize in React JS, Shopify and modern frontend
            technologies to build elegant user interfaces with smooth
            experiences and clean code architecture.
          </p>

          {/* Feature Cards */}
          <div className="about-feature-grid">

            <div className="feature-card">
              <Code2 size={26} />
              <h4>Clean Code</h4>
              <p>
                Modern scalable frontend architecture with optimized performance.
              </p>
            </div>

            <div className="feature-card">
              <Globe size={26} />
              <h4>Responsive Design</h4>
              <p>
                Pixel perfect websites for desktop, tablet and mobile devices.
              </p>
            </div>

            <div className="feature-card">
              <Sparkles size={26} />
              <h4>Luxury UI</h4>
              <p>
                Premium interfaces with smooth animations and modern aesthetics.
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <NavLink to={resume} className="primary-about-btn" target="_balnk">
              Download CV
            </NavLink>

            <button className="secondary-about-btn" onClick={Contactbtn}>
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;