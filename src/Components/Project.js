import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import BullEye from "../assets/Bull_Eye_logo.png";
import Chaywala from "../assets/Chaylogoo.png";
import CrudApp from "../assets/pc4.jpg";
import Employee from "../assets/pc3.jpg";
import Restaurant from "../assets/1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
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
    <section className="luxury-project-section" id="projects">

      {/* Blur Effects */}
      <div className="project-blur blur-left"></div>
      <div className="project-blur blur-right"></div>

      <div className="project-container">

        {/* HEADING */}
        <motion.div
          className="project-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="project-subtitle">
            MY WORK
          </span>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p>
            A collection of premium web applications and
            modern frontend experiences crafted with passion.
          </p>

        </motion.div>

        {/* SLIDER */}
        <Slider {...settings}>

          {data.map((project) => (
            <div key={project.id} className="project-slide">

              <motion.div
                className="project-card"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >

                {/* IMAGE */}
                <div className="project-image">

                  <img
                    src={project.img}
                    alt={project.name}
                  />

                  {/* OVERLAY */}
                  <div className="project-overlay">

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={24} />
                    </a>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="project-content">

                  <span className="project-category">
                    Web Development
                  </span>

                  <h3>{project.name}</h3>

                  <p>
                    Modern responsive website with premium UI,
                    smooth experience and optimized performance.
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    Visit Project
                    <ArrowUpRight size={18} />
                  </a>

                </div>

                {/* Glow */}
                <div className="project-glow"></div>

              </motion.div>

            </div>
          ))}

        </Slider>
      </div>
    </section>
  );
};

const data = [
  {
    id: 1,
    name: "Bull EyeTrade",
    url: "https://bulleyetrade.com",
    img: BullEye,
  },

  {
    id: 2,
    name: "The Chay Wala",
    url: "https://thechaywala.com/",
    img: Chaywala,
  },

  {
    id: 3,
    name: "CRUD App",
    url: "https://webshubh-crud.netlify.app/",
    img: CrudApp,
  },

  {
    id: 4,
    name: "Employee Management",
    url: "https://fullstack-employee-management.netlify.app/",
    img: Employee,
  },

  {
    id: 5,
    name: "Restaurant Management",
    url: "https://webshubh-restrourant.netlify.app",
    img: Restaurant,
  },
];

export default Project;