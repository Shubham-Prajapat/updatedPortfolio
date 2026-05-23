import React from "react";
import { motion } from "framer-motion";
import myimg from "../assets/shubhbg-remove.png";
import { useNavigate } from "react-router-dom";

const ImageBanner = () => {

  const navigate = useNavigate();

  const Viewproject = () =>{
    navigate("/projects")
  }
  const Hire = () =>{
    navigate("/contact")
  }
  return (
    <section className="luxury-banner">
      <div className="overlay"></div>

      <div className="banner-container">
        {/* Left Content */}
        <motion.div
          className="content-section"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="intro-text">WELCOME TO MY PORTFOLIO</span>

          <h1 className="main-heading">
            Shubham <span>Prajapat</span>
          </h1>

          <h2 className="role-text">Frontend & Shopify Developer</h2>

          <p className="description">
            I create modern, premium and high-performing web experiences using
            React JS, Shopify and advanced frontend technologies.
          </p>

          <div className="skill-tags">
            <span>React JS</span>
            <span>Shopify</span>
            <span>JavaScript</span>
            <span>UI / UX</span>
          </div>

          <div className="banner-buttons">
            <button className="primary-btn" onClick={ Hire}>Hire Me</button>
            <button className="secondary-btn" onClick={Viewproject}>View Projects</button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="image-box">
            <img src={myimg} alt="Shubham Prajapat" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageBanner;