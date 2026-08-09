import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myimg from "../assets/shubhbg-remove.png";
import { useNavigate } from "react-router-dom";

const roles = [
  "Frontend Developer",
  "Shopify Developer",
  "React Developer",
  "Web Developer",
  "Software Engineer",
  "UI Designer",
  ]

const ImageBanner = () => {

  const navigate = useNavigate();
    const [roleIndex, setRoleIndex] = useState(0);


  const Viewproject = () =>{
    navigate("/projects")
  }
  const Hire = () =>{
    navigate("/contact")
  }

   // Dynamic role change
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  
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

          {/* <h2 className="role-text">Frontend & Shopify Developer</h2> */}
 {/* Dynamic Role */}
        <div className="role-wrapper">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              className="role-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

          <p className="description">
          I build modern, responsive, and high-performing web experiences using React JS, Shopify, JavaScript, and modern frontend technologies — turning ideas into clean, scalable, and user-focused digital experiences.

          </p>

          <div className="skill-tags">
            <span>React JS</span>
            <span>Shopify</span>
            <span>JavaScript</span>
            <span>UI Design</span>
            <span>Responsive Design</span>
            <span>Frontend Development</span>
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