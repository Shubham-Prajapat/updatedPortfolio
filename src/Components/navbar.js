import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Mail, // ✅ Added Contact Icon
} from "lucide-react";

import logo from "../assets/sp-logo-bg.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent Body Scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navigate = useNavigate()
  const Hire = () =>{
    navigate("/contact")
  }

  const Talk = () =>{
    navigate("/contact")
  }

  return (
    <>
      <header className={`luxury-navbar ${isSticky ? "sticky-nav" : ""}`}>
        <div className="navbar-container">

          {/* Logo */}
          <NavLink to="/" className="logo-wrapper">
            <img src={logo} alt="logo" className="logo-image" />

            <h2 className="logo-text">
              Shubham<span>.</span>
            </h2>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="nav-links">

            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/skill">
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects">
                Projects
              </NavLink>
            </li>

            {/* ✅ CONTACT MENU */}
            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          {/* CTA Button */}
          <div className="desktop-btn" onClick={Hire}>
            <button>Hire Me</button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </div>

        </div>
      </header>

      {/* Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "show-overlay" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open-drawer" : ""}`}>

        {/* Top */}
        <div className="drawer-top">

          <h2>
            Shubham<span>.</span>
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>

        </div>

        {/* Mobile Links */}
        <ul className="drawer-links">

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/">
              <Home size={20} />
              Home
            </NavLink>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/about">
              <User size={20} />
              About
            </NavLink>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/skill">
              <Code2 size={20} />
              Skills
            </NavLink>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/projects">
              <Briefcase size={20} />
              Projects
            </NavLink>
          </li>

          {/* ✅ CONTACT DRAWER MENU */}
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/contact">
              <Mail size={20} />
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Bottom */}
        <div className="drawer-bottom" onClick={Talk}>
          <button>Let’s Talk</button>
        </div>

      </div>
    </>
  );
};

export default Navbar;