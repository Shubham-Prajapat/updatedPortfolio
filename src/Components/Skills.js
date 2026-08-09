import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JS from "../assets/js.png";
import ReactLogo from "../assets/reactlogo.png";
import Shopify from "../assets/shopify.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {

  const skillsData = [
    {
      image: Html,
      title: "HTML5",
      desc: "Semantic & SEO friendly structure",
    },
    {
      image: Css,
      title: "CSS3",
      desc: "Modern responsive UI design",
    },
    {
      image: JS,
      title: "JavaScript",
      desc: "Interactive frontend functionality",
    },
    {
      image: ReactLogo,
      title: "React JS",
      desc: "Modern scalable frontend apps",
    },
    {
      image: Shopify,
      title: "Shopify",
      desc: "Custom Shopify store development",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="luxury-skills-section" id="skills">

      {/* Background Blur */}
      <div className="skill-blur blur-left"></div>
      <div className="skill-blur blur-right"></div>

      <div className="skills-container">

        {/* Heading */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="skill-subtitle">
            MY EXPERTISE
          </span>

          <h2>
            Technologies I <span>Work With.</span>
          </h2>

          <p>
            Crafting premium web experiences using modern frontend
            technologies and scalable solutions.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>

          {skillsData.map((skill, index) => (
            <div key={index} className="skill-slide">

              <motion.div
                className="skill-card"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >

                <div className="skill-image-box">
                  <img src={skill.image} alt={skill.title} />
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.desc}</p>

                <div className="skill-glow"></div>

              </motion.div>

            </div>
          ))}

        </Slider>

      </div>
    </section>
  );
};

export default Skills;