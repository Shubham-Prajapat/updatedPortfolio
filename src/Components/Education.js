import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BadgeCheck,
  Award,
  Calendar,
} from "lucide-react";

import reimg from "../assets/reactlogo.png";
import shopi from "../assets/shopify.png";

const Education = () => {
  return (
    <section className="luxury-education-section" id="education">

      {/* Background Blur */}
      <div className="edu-blur blur-left"></div>
      <div className="edu-blur blur-right"></div>

      <div className="education-wrapper">

        {/* LEFT CONTENT */}
        <motion.div
          className="education-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="education-subtitle">
            EDUCATION & CERTIFICATION
          </span>

          <h2>
            Learning &
            <span> Professional Growth.</span>
          </h2>

          <p>
            My educational background and certifications
            helped me strengthen my frontend development,
            React JS and Shopify expertise.
          </p>

          {/* Education Card */}
          <div className="education-card">

            <div className="edu-icon">
              <GraduationCap size={30} />
            </div>

            <div className="edu-details">
              <h3>
                Sanghavi Institute Of Management
                & Science, Indore
              </h3>

              <span>MCA - Master of Computer Applications</span>

              <div className="edu-year">
                <Calendar size={16} />
                <p>Completed Education</p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* RIGHT CERTIFICATES */}
        <motion.div
          className="certificate-grid"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* Shopify */}
          <motion.div
            className="certificate-card"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.4 }}
          >

            <div className="certificate-top">

              <div className="certificate-icon">
                <BadgeCheck size={26} />
              </div>

              <span className="status-badge">
                Still Working
              </span>

            </div>

            <img
              src={shopi}
              alt="Shopify Certificate"
            />

            <h3>
              Shopify Experience Certificate
            </h3>

            <p>
              Professional experience working on
              Shopify store development and customization.
            </p>

            <div className="card-glow"></div>

          </motion.div>

          {/* React */}
          <motion.div
            className="certificate-card"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.4 }}
          >

            <div className="certificate-top">

              <div className="certificate-icon">
                <Award size={26} />
              </div>

              <span className="status-badge">
                Internship
              </span>

            </div>

            <img
              src={reimg}
              alt="React Certificate"
            />

            <h3>
              React Internship Certificate
            </h3>

            <p>
              Hands-on React JS internship experience
              with modern frontend development practices.
            </p>

            <div className="card-glow"></div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Education;