import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  MonitorSmartphone,
  Layers3,
  GitBranch,
  Globe,
} from "lucide-react";

const Experiance = () => {

  const skills = [
    {
      icon: <Code2 size={28} />,
      title: "HTML5",
      desc: "Semantic & SEO friendly structure",
    },

    {
      icon: <MonitorSmartphone size={28} />,
      title: "CSS3",
      desc: "Responsive modern UI design",
    },

    {
      icon: <Layers3 size={28} />,
      title: "JavaScript",
      desc: "Interactive frontend experiences",
    },

    {
      icon: <Globe size={28} />,
      title: "Shopify",
      desc: "Custom Shopify development",
    },

    {
      icon: <Code2 size={28} />,
      title: "React JS",
      desc: "Scalable frontend applications",
    },

    {
      icon: <GitBranch size={28} />,
      title: "GitHub",
      desc: "Version control & deployment",
    },
  ];

  return (
    <section className="luxury-experience-section" id="experience">

      {/* Blur Effects */}
      <div className="exp-blur blur-left"></div>
      <div className="exp-blur blur-right"></div>

      <div className="experience-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="experience-subtitle">
            PROFESSIONAL JOURNEY
          </span>

          <h2>
            3+ Years of
            <span> Frontend Experience.</span>
          </h2>

          <p>
            I specialize in building modern, responsive and
            high-performing websites with elegant UI and
            seamless user experiences.
          </p>

          <p>
            My expertise includes React JS, Shopify and
            advanced frontend development with focus on
            performance, scalability and clean architecture.
          </p>

          {/* Experience Badge */}
          <div className="experience-badge">

            <div className="badge-icon">
              <Briefcase size={28} />
            </div>

            <div>
              <h3>3+ Years Experience</h3>
              <span>Frontend Developer</span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SKILLS */}
        <motion.div
          className="experience-grid"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {skills.map((item, index) => (
            <motion.div
              key={index}
              className="experience-card"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
            >

              <div className="exp-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="card-glow"></div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Experiance;