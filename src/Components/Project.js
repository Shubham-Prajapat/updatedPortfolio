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
import Ecommerce from "../assets/ecommerce.png";
import typingtext from "../assets/typing-speed-text.png";
import SPBricks from "../assets/spbricks.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
                    {project.description}
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
    category: "Web Development",
    description:
      "A modern trading platform website with a clean interface and responsive user experience.",
    url: "https://bulleyetrade.com",
    img: BullEye,
  },

  {
    id: 2,
    name: "The Chay Wala",
    category: "Business Website",
    description:
      "A modern tea brand website designed with an engaging UI and responsive layout.",
    url: "https://thechaywala.com/",
    img: Chaywala,
  },

  {
    id: 3,
    name: "CRUD App",
    category: "React Application",
    description:
      "A React-based CRUD application for creating, updating, viewing and managing data.",
    url: "https://webshubh-crud.netlify.app/",
    img: CrudApp,
  },

  {
    id: 4,
    name: "Employee Management",
    category: "Full Stack Application",
    description:
      "An employee management system for efficiently managing employee records and data.",
    url: "https://fullstack-employee-management.netlify.app/",
    img: Employee,
  },

  {
    id: 5,
    name: "Restaurant Management",
    category: "Web Application",
    description:
      "A responsive restaurant management application with a clean and user-friendly interface.",
    url: "https://webshubh-restrourant.netlify.app",
    img: Restaurant,
  },

  {
    id: 6,
    name: "Ecommerce Website",
    category: "E-Commerce",
    description:
      "A responsive e-commerce website with product browsing and a modern shopping experience.",
    url: "https://ecommerceshubhweb.netlify.app/",
    img: Ecommerce,
  },

  {
    id: 7,
    name: "Typing Speed Test",
    category: "React Application",
    description:
      "An interactive typing test that calculates WPM, CPM and typing accuracy in real time.",
    url: "https://shubh-typing-speed-text-teal.vercel.app/",
    img: typingtext,
  },
  {
    id: 8,
    name: "SP Bricks",
    category: "Business Website",
    description:
      "A modern and responsive business website for a brick manufacturing company, showcasing products, services and company information.",
    url: "https://sp-bricks.vercel.app/",
    img: SPBricks,
  },
];

export default Project;