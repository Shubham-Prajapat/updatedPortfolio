import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { SiShopify } from "react-icons/si";
import aboutImg from "../assets/portfolio-img.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import resume from '../assets/resumefrontend.pdf'
const About = () => {

  const navigate = useNavigate()

  const Contactbtn = () => {
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
            Hi, I’m Shubham Prajapat — a Frontend Developer with 3 years of professional experience in building modern, responsive, and user-friendly web experiences.

            I’m currently working as a Shopify Developer, specializing in responsive storefronts, theme customization, UI implementation, and user-focused experiences. Before Shopify, I gained hands-on professional experience with React JS, building frontend interfaces and strengthening my understanding of modern frontend development.

            My skills include HTML, CSS, JavaScript, React JS, Shopify, Liquid, Tailwind CSS, Bootstrap, Redux, and modern frontend tools. I’m passionate about solving UI challenges, learning new technologies, and continuously growing as a developer.
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
              <h4>Modern UI</h4>
              <p>
                Clean and engaging interfaces focused on usability and user experience.
              </p>
            </div>

            <div className="feature-card">
              <SiShopify size={28} />
              <h4>Shopify Development</h4>
              <p>
                Responsive Shopify storefronts, theme customization and UI implementation.
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